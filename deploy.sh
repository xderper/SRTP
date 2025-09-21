#!/bin/bash

# Простой скрипт деплоя
# Использование: ./deploy.sh your-domain.com your-email@example.com

# Проверяем параметры
if [ $# -ne 2 ]; then
    echo "Использование: ./deploy.sh your-domain.com your-email@example.com"
    echo "Пример: ./deploy.sh mysite.com admin@mysite.com"
    exit 1
fi

DOMAIN=$1
EMAIL=$2

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}🚀 Начинаем деплой сайта $DOMAIN${NC}"

# Обновляем домен в nginx.conf
echo -e "${YELLOW}📝 Настраиваем домен в nginx.conf...${NC}"
sed -i "s/your-domain.com/$DOMAIN/g" nginx.conf

# Останавливаем старые контейнеры
echo -e "${YELLOW}🛑 Останавливаем старые контейнеры...${NC}"
docker-compose down || true

# Создаём директорию для SSL
echo -e "${YELLOW}📁 Создаём директорию для SSL...${NC}"
mkdir -p ssl

# Устанавливаем certbot если не установлен
if ! command -v certbot &> /dev/null; then
    echo -e "${YELLOW}📦 Устанавливаем certbot...${NC}"
    apt update
    apt install -y certbot
fi

# Получаем SSL сертификат
echo -e "${YELLOW}🔐 Получаем SSL сертификат...${NC}"
certbot certonly --standalone -d $DOMAIN -d www.$DOMAIN --email $EMAIL --agree-tos --non-interactive

# Копируем сертификаты
echo -e "${YELLOW}📋 Копируем сертификаты...${NC}"
cp /etc/letsencrypt/live/$DOMAIN/fullchain.pem ssl/cert.pem
cp /etc/letsencrypt/live/$DOMAIN/privkey.pem ssl/key.pem

# Устанавливаем права доступа
chmod 600 ssl/key.pem
chmod 644 ssl/cert.pem

# Собираем и запускаем контейнеры
echo -e "${YELLOW}🔨 Собираем и запускаем контейнеры...${NC}"
docker-compose build --no-cache
docker-compose up -d

# Ждём запуска
echo -e "${YELLOW}⏳ Ждём запуска сервисов...${NC}"
sleep 15

# Проверяем статус
echo -e "${YELLOW}🔍 Проверяем статус...${NC}"
if curl -f https://$DOMAIN > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Сайт успешно развёрнут!${NC}"
    echo -e "${GREEN}🌐 Доступен по адресу: https://$DOMAIN${NC}"
    echo -e "${GREEN}🔒 SSL сертификат настроен${NC}"
else
    echo -e "${RED}❌ Сайт не запустился. Проверьте логи:${NC}"
    docker-compose logs
fi

echo -e "${GREEN}🎉 Деплой завершён!${NC}"
