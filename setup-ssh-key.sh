#!/bin/bash

# Конфигурация
VPS_HOST="your-vps-ip"
VPS_USER="root"

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🔑 Настройка SSH ключей для автоматического доступа к VPS...${NC}"

# Проверяем наличие SSH ключа
if [ ! -f ~/.ssh/id_rsa.pub ]; then
    echo -e "${YELLOW}📝 Создаем SSH ключ...${NC}"
    ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa -N ""
fi

echo -e "${YELLOW}📤 Копируем публичный ключ на VPS...${NC}"
echo -e "${YELLOW}💡 Введите пароль для VPS (это последний раз):${NC}"

# Копируем ключ на VPS
ssh-copy-id $VPS_USER@$VPS_HOST

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ SSH ключ успешно настроен!${NC}"
    echo -e "${GREEN}🎉 Теперь деплой будет выполняться без запроса пароля!${NC}"
    
    # Тестируем подключение
    echo -e "${YELLOW}🧪 Тестируем подключение без пароля...${NC}"
    if ssh -o ConnectTimeout=10 $VPS_USER@$VPS_HOST "echo 'Подключение без пароля работает!'" 2>/dev/null; then
        echo -e "${GREEN}✅ Подключение без пароля работает!${NC}"
    else
        echo -e "${RED}❌ Что-то пошло не так. Проверьте настройки SSH.${NC}"
    fi
else
    echo -e "${RED}❌ Не удалось настроить SSH ключ.${NC}"
    exit 1
fi

echo -e "${YELLOW}📝 Для дополнительной безопасности рекомендуется:${NC}"
echo -e "${YELLOW}   1. Отключить аутентификацию по паролю на VPS${NC}"
echo -e "${YELLOW}   2. Изменить стандартный SSH порт${NC}"
echo -e "${YELLOW}   3. Настроить fail2ban${NC}"
