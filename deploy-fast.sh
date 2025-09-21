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

echo -e "${GREEN}🚀 Начинаем быстрый деплой приложения $APP_NAME на VPS...${NC}"

# Функция для выполнения команд через SSH с переиспользованием соединения
ssh_exec() {
    ssh -o ControlMaster=auto -o ControlPath=/tmp/ssh-%r@%h:%p -o ControlPersist=60s $VPS_USER@$VPS_HOST "$@"
}

# Функция для копирования файлов через SSH с переиспользованием соединения
scp_exec() {
    scp -o ControlMaster=auto -o ControlPath=/tmp/ssh-%r@%h:%p -o ControlPersist=60s "$@"
}

# Проверяем подключение к VPS
echo -e "${YELLOW}📡 Проверяем подключение к VPS...${NC}"
if ! ssh_exec "echo 'Подключение успешно'" 2>/dev/null; then
    echo -e "${RED}❌ Не удается подключиться к VPS. Проверьте настройки SSH.${NC}"
    exit 1
fi

# Создаем директорию приложения на VPS
echo -e "${YELLOW}📁 Создаем директорию приложения на VPS...${NC}"
ssh_exec "mkdir -p /opt/$APP_NAME"

# Копируем файлы на VPS
echo -e "${YELLOW}📤 Копируем файлы на VPS...${NC}"
rsync -avz --exclude 'node_modules' --exclude '.next' --exclude '.git' --exclude 'ssl' ./ $VPS_USER@$VPS_HOST:/opt/$APP_NAME/

# Устанавливаем Docker на VPS (если не установлен)
echo -e "${YELLOW}🐳 Проверяем Docker на VPS...${NC}"
ssh_exec "
if ! command -v docker &> /dev/null; then
    echo 'Устанавливаем Docker...'
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    systemctl start docker
    systemctl enable docker
fi

if ! command -v docker-compose &> /dev/null; then
    echo 'Устанавливаем Docker Compose...'
    curl -L \"https://github.com/docker/compose/releases/latest/download/docker-compose-\$(uname -s)-\$(uname -m)\" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
fi
"

# Обновляем конфигурацию Nginx с доменом
echo -e "${YELLOW}⚙️ Настраиваем Nginx...${NC}"
ssh_exec "
cd /opt/$APP_NAME
sed -i 's/your-domain.com/$DOMAIN/g' nginx.conf
"

# Останавливаем старые контейнеры
echo -e "${YELLOW}🛑 Останавливаем старые контейнеры...${NC}"
ssh_exec "cd /opt/$APP_NAME && docker-compose down || true"

# Собираем и запускаем новые контейнеры
echo -e "${YELLOW}🔨 Собираем и запускаем приложение...${NC}"
ssh_exec "
cd /opt/$APP_NAME
docker-compose build --no-cache
docker-compose up -d
"

# Проверяем статус
echo -e "${YELLOW}🔍 Проверяем статус приложения...${NC}"
sleep 10
if ssh_exec "curl -f http://localhost > /dev/null 2>&1"; then
    echo -e "${GREEN}✅ Приложение успешно развернуто!${NC}"
    echo -e "${GREEN}🌐 Доступно по адресу: http://$VPS_HOST${NC}"
    echo -e "${YELLOW}📝 Для настройки SSL выполните на VPS: ./setup-ssl.sh${NC}"
else
    echo -e "${RED}❌ Приложение не запустилось. Проверьте логи:${NC}"
    ssh_exec "cd /opt/$APP_NAME && docker-compose logs"
fi

# Закрываем SSH соединение
ssh_exec "exit"

echo -e "${GREEN}🎉 Деплой завершен!${NC}"
