#!/bin/bash

# Конфигурация
VPS_HOST="your-vps-ip"
VPS_USER="root"
APP_NAME="garden-tools"
APP_PORT="3000"
DOMAIN="your-domain.com"

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Начинаем деплой приложения $APP_NAME на VPS...${NC}"

# Проверяем подключение к VPS
echo -e "${YELLOW}📡 Проверяем подключение к VPS...${NC}"
if ! ssh -o ConnectTimeout=10 $VPS_USER@$VPS_HOST "echo 'Подключение успешно'" 2>/dev/null; then
    echo -e "${RED}❌ Не удается подключиться к VPS. Проверьте настройки SSH.${NC}"
    exit 1
fi

# Создаем временный скрипт для выполнения на VPS
cat > /tmp/deploy_script.sh << 'SCRIPT'
#!/bin/bash

APP_NAME="$1"
DOMAIN="$2"

echo "📁 Создаем директорию приложения..."
mkdir -p /opt/$APP_NAME

echo "🐳 Проверяем Docker..."
if ! command -v docker &> /dev/null; then
    echo "Устанавливаем Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    systemctl start docker
    systemctl enable docker
fi

if ! command -v docker-compose &> /dev/null; then
    echo "Устанавливаем Docker Compose..."
    curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
fi

echo "⚙️ Настраиваем Nginx..."
cd /opt/$APP_NAME
if [ -f nginx.conf ]; then
    sed -i "s/your-domain.com/$DOMAIN/g" nginx.conf
fi

echo "🛑 Останавливаем старые контейнеры..."
docker-compose down || true

echo "🔨 Собираем и запускаем приложение..."
docker-compose build --no-cache
docker-compose up -d

echo "🔍 Проверяем статус приложения..."
sleep 10
if curl -f http://localhost > /dev/null 2>&1; then
    echo "✅ Приложение успешно развернуто!"
    echo "🌐 Доступно по адресу: http://$(curl -s ifconfig.me)"
    echo "📝 Для настройки SSL выполните: ./setup-ssl.sh"
else
    echo "❌ Приложение не запустилось. Проверьте логи:"
    docker-compose logs
fi
SCRIPT

# Копируем файлы на VPS
echo -e "${YELLOW}📤 Копируем файлы на VPS...${NC}"
rsync -avz --exclude 'node_modules' --exclude '.next' --exclude '.git' --exclude 'ssl' ./ $VPS_USER@$VPS_HOST:/opt/$APP_NAME/

# Копируем и выполняем скрипт на VPS одним SSH соединением
echo -e "${YELLOW}🔨 Выполняем деплой на VPS...${NC}"
scp /tmp/deploy_script.sh $VPS_USER@$VPS_HOST:/tmp/
ssh $VPS_USER@$VPS_HOST "chmod +x /tmp/deploy_script.sh && /tmp/deploy_script.sh $APP_NAME $DOMAIN"

# Удаляем временный файл
rm /tmp/deploy_script.sh

echo -e "${GREEN}🎉 Деплой завершен!${NC}"
