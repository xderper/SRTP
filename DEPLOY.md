# 🚀 Простой деплой на VPS

## Быстрый старт

### Требования
- VPS с Ubuntu/Debian
- Docker и Docker Compose установлены
- Домен настроен на IP вашего VPS
- Порты 80 и 443 открыты

### Деплой одной командой

```bash
./deploy.sh your-domain.com your-email@example.com
```

**Пример:**
```bash
./deploy.sh mysite.com admin@mysite.com
```

### Что делает скрипт

1. **Настраивает домен** в nginx.conf
2. **Останавливает старые контейнеры**
3. **Устанавливает certbot** (если не установлен)
4. **Получает SSL сертификат** от Let's Encrypt
5. **Собирает и запускает Docker контейнеры**
6. **Проверяет работу сайта**

### Результат

После выполнения скрипта:
- ✅ Сайт доступен по HTTPS: `https://your-domain.com`
- ✅ SSL сертификат настроен автоматически
- ✅ Nginx проксирует запросы к приложению
- ✅ Автоматический редирект с HTTP на HTTPS

## Полезные команды

### Управление контейнерами
```bash
# Просмотр логов
docker-compose logs -f

# Перезапуск
docker-compose restart

# Остановка
docker-compose down

# Обновление
docker-compose pull
docker-compose up -d
```

### Проверка статуса
```bash
# Статус контейнеров
docker-compose ps

# Проверка сайта
curl -I https://your-domain.com

# Логи Nginx
docker-compose logs nginx
```

## Troubleshooting

### Проблемы с SSL
```bash
# Проверка сертификатов
certbot certificates

# Обновление сертификатов
certbot renew
```

### Проблемы с приложением
```bash
# Логи приложения
docker-compose logs app

# Прямой доступ к приложению
curl http://localhost:3000
```

### Проблемы с Nginx
```bash
# Проверка конфигурации
docker-compose exec nginx nginx -t

# Перезагрузка конфигурации
docker-compose exec nginx nginx -s reload
```

## Структура проекта

```
├── deploy.sh              # Единственный скрипт деплоя
├── docker-compose.yml     # Конфигурация Docker
├── nginx.conf            # Конфигурация Nginx
├── Dockerfile            # Образ приложения
└── ssl/                  # SSL сертификаты (создаётся автоматически)
```

## Автоматическое обновление SSL

Для автоматического обновления SSL сертификатов добавьте в crontab:

```bash
# Редактировать crontab
crontab -e

# Добавить строку (обновление каждый день в 12:00)
0 12 * * * /usr/bin/certbot renew --quiet && cd /opt/garden-tools && docker-compose restart nginx
```

## Безопасность

После деплоя рекомендуется:

1. **Отключить аутентификацию по паролю SSH:**
```bash
sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config
systemctl restart sshd
```

2. **Установить fail2ban:**
```bash
apt update
apt install fail2ban
systemctl enable fail2ban
systemctl start fail2ban
```

3. **Настроить файрвол:**
```bash
ufw allow 22
ufw allow 80
ufw allow 443
ufw enable
```
