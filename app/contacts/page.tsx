import Link from "next/link";

export default function Contacts() {
  const contactMethods = [
    {
      icon: '📞',
      title: 'Телефон',
      primary: '+7 (495) 123-45-67',
      secondary: 'Звонки принимаем с 9:00 до 18:00 (МСК)',
      action: 'tel:+74951234567'
    },
    {
      icon: '📧',
      title: 'Электронная почта',
      primary: 'info@greentools.ru',
      secondary: 'Отвечаем в течение 2 часов',
      action: 'mailto:info@greentools.ru'
    },
    {
      icon: '💬',
      title: 'Telegram',
      primary: '@greentools_support',
      secondary: 'Быстрые ответы в мессенджере',
      action: 'https://t.me/greentools_support'
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      primary: '+7 (495) 123-45-67',
      secondary: 'Удобно для быстрых вопросов',
      action: 'https://wa.me/74951234567'
    }
  ];

  const workingHours = [
    { day: 'Понедельник - Пятница', hours: '9:00 - 18:00' },
    { day: 'Суббота', hours: '10:00 - 16:00' },
    { day: 'Воскресенье', hours: 'Выходной' }
  ];

  const offices = [
    {
      city: 'Москва',
      address: 'ул. Садовая, д. 123, офис 456',
      metro: 'м. Парк Культуры',
      phone: '+7 (495) 123-45-67',
      email: 'moscow@greentools.ru',
      isMain: true
    },
    {
      city: 'Санкт-Петербург',
      address: 'пр. Невский, д. 789, офис 101',
      metro: 'м. Невский проспект',
      phone: '+7 (812) 987-65-43',
      email: 'spb@greentools.ru',
      isMain: false
    }
  ];

  return (
    <div className="min-h-screen bg-black data-grid">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="fintech-headline text-4xl md:text-5xl font-light mb-8">
            Свяжитесь с <span className="text-green-400">нами</span>
          </h1>
          <p className="fintech-subtext text-xl max-w-3xl mx-auto">
            Мы всегда готовы помочь вам с выбором плоскорезов Фокина, Стриж, Краб, садовых инструментов, парников и аксессуаров и ответить на все вопросы
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="dark-card rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">{method.icon}</div>
              <h3 className="text-white text-lg font-medium mb-2">{method.title}</h3>
              <a 
                href={method.action}
                className="text-green-400 hover:text-green-300 transition-colors block mb-2"
              >
                {method.primary}
              </a>
              <p className="fintech-subtext text-sm">{method.secondary}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="dark-card rounded-lg p-8">
            <h2 className="fintech-headline text-2xl font-light mb-6">Отправить сообщение</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Имя *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white focus:border-green-400 focus:outline-none"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Телефон *</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white focus:border-green-400 focus:outline-none"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Email</label>
                <input 
                  type="email"
                  className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white focus:border-green-400 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Тема обращения</label>
                <select className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white focus:border-green-400 focus:outline-none">
                  <option>Выберите тему</option>
                  <option>Консультация по плоскорезам и садовым инструментам</option>
                  <option>Вопрос по заказу плоскорезов</option>
                  <option>Гарантийный случай садового инструмента</option>
                  <option>Предложение о сотрудничестве</option>
                  <option>Другое</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Сообщение *</label>
                <textarea 
                  required
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white focus:border-green-400 focus:outline-none resize-none"
                  placeholder="Расскажите подробно о вашем вопросе по плоскорезам, садовым инструментам или пожелании..."
                ></textarea>
              </div>
              
              <div className="flex items-start space-x-3">
                <input type="checkbox" required className="w-4 h-4 text-green-400 bg-gray-800 border-gray-600 rounded mt-1" />
                <span className="fintech-subtext text-sm">
                  Я согласен на обработку персональных данных в соответствии с 
                  <a href="#" className="text-green-400 hover:text-green-300"> политикой конфиденциальности</a>
                </span>
              </div>
              
              <button className="fintech-button-primary w-full py-3 rounded font-medium">
                Отправить сообщение
              </button>
            </form>
          </div>

          {/* Office Info */}
          <div className="space-y-8">
            {/* Working Hours */}
            <div className="dark-card rounded-lg p-6">
              <h3 className="text-white text-lg font-medium mb-4 flex items-center">
                <span className="mr-3">🕒</span>
                Режим работы
              </h3>
              <div className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="fintech-subtext">{schedule.day}</span>
                    <span className="text-white">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <p className="fintech-subtext text-sm">
                  * Заказы принимаем круглосуточно через сайт
                </p>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="dark-card rounded-lg p-6">
              <h3 className="text-white text-lg font-medium mb-4 flex items-center">
                <span className="mr-3">💳</span>
                Способы оплаты
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <span>💳</span>
                  <span className="fintech-subtext">Банковские карты за плоскорезы</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>💰</span>
                  <span className="fintech-subtext">Наличными курьеру за садовые инструменты</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🏦</span>
                  <span className="fintech-subtext">Банковский перевод за плоскорезы</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📱</span>
                  <span className="fintech-subtext">СБП (по QR-коду) за садовые аксессуары</span>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="dark-card rounded-lg p-6">
              <h3 className="text-white text-lg font-medium mb-4">Быстрая связь</h3>
              <div className="space-y-3">
                <a 
                  href="tel:+74951234567"
                  className="fintech-button-primary w-full py-3 rounded font-medium text-center block"
                >
                  📞 Позвонить сейчас
                </a>
                <a 
                  href="https://t.me/greentools_support"
                  className="fintech-button w-full py-3 rounded font-medium text-center block"
                >
                  💬 Написать в Telegram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Offices */}
        <div>
          <h2 className="fintech-headline text-3xl font-light text-center mb-12">
            Наши <span className="text-green-400">офисы</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="dark-card rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <h3 className="text-white text-xl font-medium">{office.city}</h3>
                  {office.isMain && (
                    <span className="ml-3 bg-green-400 text-black px-2 py-1 rounded text-xs font-medium">
                      ГЛАВНЫЙ ОФИС
                    </span>
                  )}
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-gray-400 mt-1">📍</span>
                    <div>
                      <div className="text-white">{office.address}</div>
                      <div className="fintech-subtext text-sm">{office.metro}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-400">📞</span>
                    <a href={`tel:${office.phone.replace(/\D/g, '')}`} className="text-green-400 hover:text-green-300">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-400">📧</span>
                    <a href={`mailto:${office.email}`} className="text-green-400 hover:text-green-300">
                      {office.email}
                    </a>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <button className="fintech-button w-full py-2 rounded text-sm font-medium">
                    📍 Показать на карте
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="fintech-headline text-3xl font-light text-center mb-12">
            Часто задаваемые <span className="text-green-400">вопросы</span>
          </h2>
          <div className="dark-card rounded-lg p-8">
            <div className="space-y-6">
              <div className="border-b border-gray-800 pb-6">
                <h3 className="text-white font-medium mb-2">Как выбрать подходящий плоскорез?</h3>
                <p className="fintech-subtext">
                  Выбор зависит от размера участка и типа работ. Плоскорез Фокина большой подходит для основных работ на больших участках, 
                  плоскорез Фокина малый — для точных работ в теплицах. Плоскорезы Стриж большой, средний, маленький и укороченный различаются по размеру рабочей части. 
                  Плоскорезы Краб, Аист, Гидра имеют свои особенности. Наши консультанты помогут подобрать оптимальный вариант.
                </p>
              </div>
              
              <div className="border-b border-gray-800 pb-6">
                <h3 className="text-white font-medium mb-2">Какая гарантия на плоскорезы и садовые инструменты?</h3>
                <p className="fintech-subtext">
                  На все плоскорезы Фокина, Стриж, Краб предоставляется гарантия 12 месяцев. На корнеудалители, рыхлители Z3 и Z4, 
                  парники Комби и другие садовые инструменты — от 6 до 24 месяцев в зависимости от производителя.
                </p>
              </div>
              
              <div className="border-b border-gray-800 pb-6">
                <h3 className="text-white font-medium mb-2">Доставляете ли вы плоскорезы в регионы?</h3>
                <p className="fintech-subtext">
                  Да, мы доставляем плоскорезы Фокина, Стриж, садовые инструменты, парники и аксессуары по всей России. Стоимость доставки рассчитывается автоматически при оформлении заказа. 
                  При заказе плоскорезов от 3000 рублей доставка по Москве бесплатная.
                </p>
              </div>
              
              <div>
                <h3 className="text-white font-medium mb-2">Можно ли вернуть плоскорез или садовый инструмент?</h3>
                <p className="fintech-subtext">
                  Да, вы можете вернуть плоскорез Фокина, Стриж, садовый инструмент или аксессуар в течение 14 дней с момента получения, если он не использовался 
                  и сохранена оригинальная упаковка. Подробности в разделе "Доставка и возврат".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 