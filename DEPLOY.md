# 🚀 Деплой на VPS с Nginx

## Быстрый старт

### 1. Подготовка VPS

Убедитесь, что на вашем VPS:
- Установлен Docker и Docker Compose
- Настроен SSH доступ
- Открыты порты 80 и 443
- Настроен DNS для вашего домена (если используете)

### 2. Настройка деплоя

Отредактируйте файл `deploy.sh` и укажите данные вашего VPS:

```bash
VPS_HOST="your-vps-ip"        # IP адрес вашего VPS
VPS_USER="root"               # Пользователь для SSH
APP_NAME="garden-tools"       # Название приложения
APP_PORT="3000"               # Порт приложения
DOMAIN="your-domain.com"      # Ваш домен
```

### 3. Запуск деплоя

```bash
./deploy.sh
```

Скрипт автоматически:
- Проверит подключение к VPS
- Скопирует файлы проекта
- Установит Docker (если не установлен)
- Настроит Nginx
- Соберет и запустит приложение
- Проверит статус

### 4. Настройка SSL (опционально)

После деплоя настройте SSL сертификаты:

```bash
# На VPS
cd /opt/garden-tools
./setup-ssl.sh
```

## Конфигурации

### Продакшн (с SSL)
- `docker-compose.yml` - основная конфигурация с Nginx и SSL
- `nginx.conf` - конфигурация Nginx для продакшна

### Разработка (без SSL)
- `docker-compose.dev.yml` - конфигурация для разработки
- `nginx-dev.conf` - упрощенная конфигурация Nginx

## Локальная разработка

### С Nginx (рекомендуется)
```bash
./docker-dev.sh
```

### Без Nginx (только приложение)
```bash
docker-compose up --build
```

## Особенности Nginx конфигурации

### Безопасность
- Автоматический редирект с HTTP на HTTPS
- Современные SSL настройки (TLS 1.2/1.3)
- HSTS заголовки
- Защита от XSS и CSRF
- Блокировка доступа к служебным файлам

### Производительность
- Gzip сжатие для текстовых файлов
- Кэширование статических ресурсов (1 год)
- Оптимизированная буферизация
- HTTP/2 поддержка

### Мониторинг
- Health check endpoint
- Подробные логи доступа и ошибок
- Мониторинг производительности

## Полезные команды

### Управление приложением
```bash
# Просмотр логов
docker-compose logs -f

# Просмотр логов Nginx
docker-compose logs nginx

# Перезапуск только Nginx
docker-compose restart nginx

# Остановка приложения
docker-compose down

# Обновление приложения
docker-compose pull
docker-compose up -d
```

### SSL сертификаты
```bash
# Проверка статуса сертификатов
certbot certificates

# Ручное обновление сертификатов
certbot renew

# Настройка автоматического обновления
./setup-cron.sh
```

### Мониторинг
```bash
# Статус контейнеров
docker-compose ps

# Использование ресурсов
docker stats

# Логи приложения
docker-compose logs app

# Логи Nginx
docker-compose logs nginx
```

## Настройка домена

### 1. DNS настройки
Укажите A-запись для вашего домена:
```
your-domain.com    A    YOUR_VPS_IP
www.your-domain.com A   YOUR_VPS_IP
```

### 2. Обновление конфигурации
После настройки DNS обновите конфигурацию:
```bash
# На VPS
cd /opt/garden-tools
sed -i 's/your-domain.com/your-actual-domain.com/g' nginx.conf
docker-compose restart nginx
```

## Troubleshooting

### Проблемы с SSL
```bash
# Проверка сертификатов
openssl x509 -in ssl/cert.pem -text -noout

# Проверка подключения
openssl s_client -connect your-domain.com:443
```

### Проблемы с Nginx
```bash
# Проверка конфигурации
docker-compose exec nginx nginx -t

# Перезагрузка конфигурации
docker-compose exec nginx nginx -s reload
```

### Проблемы с приложением
```bash
# Проверка health check
curl http://localhost/health

# Прямой доступ к приложению
curl http://localhost:3000
```

## Мониторинг и логи

### Логи Nginx
- Доступ: `/var/log/nginx/garden-tools.access.log`
- Ошибки: `/var/log/nginx/garden-tools.error.log`

### Логи приложения
```bash
docker-compose logs app
```

### Метрики производительности
```bash
# Использование ресурсов
docker stats

# Статус контейнеров
docker-compose ps
```
