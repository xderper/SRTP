#!/bin/bash

# Цвета для вывода
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🐳 Запускаем приложение в Docker для разработки...${NC}"

# Останавливаем существующие контейнеры
echo -e "${YELLOW}🛑 Останавливаем существующие контейнеры...${NC}"
docker-compose -f docker-compose.dev.yml down

# Собираем и запускаем
echo -e "${YELLOW}🔨 Собираем и запускаем приложение...${NC}"
docker-compose -f docker-compose.dev.yml up --build

echo -e "${GREEN}🎉 Приложение запущено!${NC}"
echo -e "${GREEN}🌐 Доступно по адресу: http://localhost${NC}"
echo -e "${GREEN}�� Прямой доступ к приложению: http://localhost:3000${NC}"
