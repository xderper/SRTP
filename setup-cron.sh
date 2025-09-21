#!/bin/bash

# Цвета для вывода
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}⏰ Настраиваем автоматическое обновление SSL сертификатов...${NC}"

# Создаем скрипт для обновления сертификатов
cat > /opt/garden-tools/renew-ssl.sh << 'SCRIPT'
#!/bin/bash
cd /opt/garden-tools
certbot renew --quiet
if [ $? -eq 0 ]; then
    cp /etc/letsencrypt/live/your-domain.com/fullchain.pem ssl/cert.pem
    cp /etc/letsencrypt/live/your-domain.com/privkey.pem ssl/key.pem
    docker-compose restart nginx
    echo "$(date): SSL сертификаты обновлены" >> /var/log/ssl-renewal.log
fi
SCRIPT

chmod +x /opt/garden-tools/renew-ssl.sh

# Добавляем задачу в crontab
(crontab -l 2>/dev/null; echo "0 12 * * * /opt/garden-tools/renew-ssl.sh") | crontab -

echo -e "${GREEN}✅ Автоматическое обновление SSL настроено!${NC}"
echo -e "${YELLOW}📅 Сертификаты будут проверяться каждый день в 12:00${NC}"
