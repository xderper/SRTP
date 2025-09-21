#!/bin/bash

# Конфигурация
DOMAIN="your-domain.com"
EMAIL="your-email@example.com"

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🔐 Настройка SSL сертификатов для домена: $DOMAIN${NC}"

# Проверяем наличие certbot
if ! command -v certbot &> /dev/null; then
    echo -e "${YELLOW}📦 Устанавливаем certbot...${NC}"
    apt update
    apt install -y certbot
fi

# Создаем директорию для SSL
mkdir -p ssl

# Получаем сертификат
echo -e "${YELLOW}🔑 Получаем SSL сертификат...${NC}"
certbot certonly --standalone -d $DOMAIN -d www.$DOMAIN --email $EMAIL --agree-tos --non-interactive

# Копируем сертификаты
echo -e "${YELLOW}📋 Копируем сертификаты...${NC}"
cp /etc/letsencrypt/live/$DOMAIN/fullchain.pem ssl/cert.pem
cp /etc/letsencrypt/live/$DOMAIN/privkey.pem ssl/key.pem

# Устанавливаем права доступа
chmod 600 ssl/key.pem
chmod 644 ssl/cert.pem

echo -e "${GREEN}✅ SSL сертификаты настроены!${NC}"
echo -e "${YELLOW}📝 Не забудьте обновить домен в nginx.conf${NC}"
echo -e "${YELLOW}🔄 Для автоматического обновления сертификатов добавьте в crontab:${NC}"
echo -e "${YELLOW}   0 12 * * * /usr/bin/certbot renew --quiet && docker-compose restart nginx${NC}"
