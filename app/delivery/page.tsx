import Link from "next/link";

export default function Delivery() {
  const deliveryMethods = [
    {
      icon: '🚚',
      title: 'Курьерская доставка',
      description: 'По Москве и МО',
      time: '1-2 дня',
      price: 'от 300 ₽',
      details: [
        'Доставка в пределах МКАД — 300 ₽',
        'За МКАД до 30 км — 500 ₽',
        'За МКАД свыше 30 км — 20 ₽/км',
        'Бесплатно при заказе от 3000 ₽',
        'Время доставки: 10:00-22:00'
      ]
    },
    {
      icon: '📦',
      title: 'Почта России',
      description: 'По всей России',
      time: '5-14 дней',
      price: 'от 250 ₽',
      details: [
        'Стоимость зависит от веса и региона',
        'Доставка плоскорезов и садовых инструментов до отделения связи',
        'Отслеживание заказов с плоскорезами по трек-номеру',
        'Оплата плоскорезов и садовых аксессуаров при получении доступна',
        'Бесплатная упаковка садовых инструментов'
      ]
    },
    {
      icon: '🚛',
      title: 'Транспортные компании',
      description: 'СДЭК, Боксберри, ПЭК',
      time: '2-7 дней',
      price: 'от 200 ₽',
      details: [
        'Доставка плоскорезов Фокина, Стриж и садовых инструментов до пункта выдачи или терминала',
        'Возможность доставки садовых аксессуаров до двери',
        'Быстрая доставка плоскорезов и парников в крупные города',
        'Страхование садовых инструментов при доставке',
        'Удобное отслеживание заказов с плоскорезами'
      ]
    },
    {
      icon: '🏪',
      title: 'Самовывоз',
      description: 'Из офиса в Москве',
      time: 'В день заказа',
      price: 'Бесплатно',
      details: [
        'ул. Садовая, д. 123, офис 456',
        'м. Парк Культуры',
        'Пн-Пт: 9:00-18:00, Сб: 10:00-16:00',
        'Предварительный звонок обязателен',
        'Возможность осмотра плоскорезов Фокина, Стриж и садовых инструментов перед покупкой'
      ]
    }
  ];

  const paymentMethods = [
    {
      icon: '💳',
      title: 'Банковские карты',
      description: 'Visa, MasterCard, МИР',
      features: ['Мгновенное зачисление за плоскорезы и садовые инструменты', 'Безопасные платежи', 'Возврат на карту']
    },
    {
      icon: '💰',
      title: 'Наличными',
      description: 'При получении курьеру',
      features: ['Только для Москвы и МО', 'Точная сумма за плоскорезы приветствуется', 'Проверка садовых инструментов перед оплатой']
    },
    {
      icon: '🏦',
      title: 'Банковский перевод',
      description: 'Для юридических лиц',
      features: ['Оплата плоскорезов и садовых инструментов по счету', 'Работаем с НДС', 'Документооборот']
    },
    {
      icon: '📱',
      title: 'Быстрые платежи',
      description: 'СБП, QR-код',
      features: ['Без комиссии за плоскорезы и садовые аксессуары', 'Мгновенное зачисление', 'Безопасно и удобно']
    }
  ];

  const returnConditions = [
    {
      icon: '📅',
      title: '14 дней на возврат',
      description: 'С момента получения товара'
    },
    {
      icon: '📦',
      title: 'Оригинальная упаковка',
      description: 'Товар должен быть в заводской упаковке'
    },
    {
      icon: '🚫',
      title: 'Не использовался',
      description: 'Без следов эксплуатации'
    },
    {
      icon: '💸',
      title: 'Полный возврат средств',
      description: 'В течение 10 рабочих дней'
    }
  ];

  return (
    <div className="min-h-screen bg-black data-grid">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="fintech-headline text-4xl md:text-5xl font-light mb-8">
            Доставка и <span className="text-green-400">оплата</span>
          </h1>
          <p className="fintech-subtext text-xl max-w-3xl mx-auto">
            Удобные способы доставки плоскорезов Фокина, Стриж, садовых инструментов, парников и аксессуаров для вашего комфорта
          </p>
        </div>

        {/* Delivery Methods */}
        <div className="mb-16">
          <h2 className="fintech-headline text-3xl font-light text-center mb-12">
            Способы <span className="text-green-400">доставки</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {deliveryMethods.map((method, index) => (
              <div key={index} className="dark-card rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{method.icon}</div>
                  <div>
                    <h3 className="text-white text-xl font-medium">{method.title}</h3>
                    <p className="fintech-subtext">{method.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-800/50 rounded">
                    <div className="text-green-400 font-medium">{method.time}</div>
                    <div className="fintech-subtext text-sm">Время доставки</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded">
                    <div className="text-green-400 font-medium">{method.price}</div>
                    <div className="fintech-subtext text-sm">Стоимость</div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {method.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="fintech-subtext text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-16">
          <h2 className="fintech-headline text-3xl font-light text-center mb-12">
            Способы <span className="text-green-400">оплаты</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <div key={index} className="dark-card rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-white text-lg font-medium mb-2">{method.title}</h3>
                <p className="fintech-subtext text-sm mb-4">{method.description}</p>
                <ul className="space-y-2">
                  {method.features.map((feature, idx) => (
                    <li key={idx} className="fintech-subtext text-xs flex items-center">
                      <div className="w-1 h-1 bg-green-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Calculator */}
        <div className="mb-16">
          <div className="dark-card rounded-lg p-8">
            <h2 className="fintech-headline text-2xl font-light mb-6 text-center">
              Калькулятор <span className="text-green-400">доставки</span>
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Город доставки</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white focus:border-green-400 focus:outline-none"
                    placeholder="Начните вводить город..."
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Вес товара (кг)</label>
                  <input 
                    type="number" 
                    className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white focus:border-green-400 focus:outline-none"
                    placeholder="1.5"
                  />
                </div>
              </div>
              <div className="text-center">
                <button className="fintech-button-primary px-8 py-3 rounded font-medium">
                  Рассчитать стоимость
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Return Policy */}
        <div className="mb-16">
          <h2 className="fintech-headline text-3xl font-light text-center mb-12">
            Условия <span className="text-green-400">возврата</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {returnConditions.map((condition, index) => (
              <div key={index} className="dark-card rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{condition.icon}</div>
                <h3 className="text-white text-lg font-medium mb-2">{condition.title}</h3>
                <p className="fintech-subtext text-sm">{condition.description}</p>
              </div>
            ))}
          </div>
          
          <div className="dark-card rounded-lg p-8">
            <h3 className="text-white text-xl font-medium mb-6">Процедура возврата</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-400 text-xl">1</span>
                </div>
                <h4 className="text-white font-medium mb-2">Свяжитесь с нами</h4>
                <p className="fintech-subtext text-sm">
                  Сообщите о желании вернуть товар по телефону или email
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-400 text-xl">2</span>
                </div>
                <h4 className="text-white font-medium mb-2">Передайте товар</h4>
                <p className="fintech-subtext text-sm">
                  Курьер заберет товар или принесите его в офис самостоятельно
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-400 text-xl">3</span>
                </div>
                <h4 className="text-white font-medium mb-2">Получите деньги</h4>
                <p className="fintech-subtext text-sm">
                  Средства поступят на вашу карту в течение 10 рабочих дней
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="fintech-headline text-3xl font-light text-center mb-12">
            Часто задаваемые <span className="text-green-400">вопросы</span>
          </h2>
          <div className="dark-card rounded-lg p-8">
            <div className="space-y-6">
              <div className="border-b border-gray-800 pb-6">
                <h3 className="text-white font-medium mb-2">Как отследить мой заказ с плоскорезами?</h3>
                <p className="fintech-subtext">
                  После отправки заказа с плоскорезами Фокина, Стриж или садовыми инструментами вы получите трек-номер на email или SMS. По нему можно отследить 
                  местонахождение посылки на сайте транспортной компании.
                </p>
              </div>
              
              <div className="border-b border-gray-800 pb-6">
                <h3 className="text-white font-medium mb-2">Можно ли изменить адрес доставки плоскорезов?</h3>
                <p className="fintech-subtext">
                  Да, но только до отправки заказа с садовыми инструментами. Если плоскорезы или аксессуары уже в пути, изменить адрес можно 
                  через службу доставки по их правилам.
                </p>
              </div>
              
              <div className="border-b border-gray-800 pb-6">
                <h3 className="text-white font-medium mb-2">Что делать, если плоскорез или садовый инструмент пришел поврежденным?</h3>
                <p className="fintech-subtext">
                  Обязательно зафиксируйте повреждения плоскореза или садового аксессуара при получении и сразу свяжитесь с нами. 
                  Мы организуем замену или возврат средств за наш счет.
                </p>
              </div>
              
              <div className="border-b border-gray-800 pb-6">
                <h3 className="text-white font-medium mb-2">Работаете ли вы в выходные?</h3>
                <p className="fintech-subtext">
                  Заказы плоскорезов Фокина, Стриж и садовых инструментов принимаем круглосуточно через сайт. Консультации по телефону — в рабочие часы. 
                  Доставка плоскорезов курьером возможна в субботу за дополнительную плату.
                </p>
              </div>
              
              <div>
                <h3 className="text-white font-medium mb-2">Есть ли скидки на доставку плоскорезов?</h3>
                <p className="fintech-subtext">
                  Да! При заказе плоскорезов и садовых инструментов от 3000 рублей доставка по Москве бесплатная. Также действуют 
                  сезонные акции на садовые аксессуары — следите за новостями на сайте.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="dark-card rounded-lg p-8">
            <h3 className="fintech-headline text-2xl font-light mb-4">
              Остались <span className="text-green-400">вопросы?</span>
            </h3>
            <p className="fintech-subtext text-lg mb-6">
              Наши специалисты помогут выбрать оптимальный способ доставки плоскорезов Фокина, Стриж, садовых инструментов и способ оплаты
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacts" className="fintech-button-primary px-8 py-3 rounded font-medium">
                Связаться с нами
              </Link>
              <a href="tel:+74951234567" className="fintech-button px-8 py-3 rounded font-medium">
                📞 +7 (495) 123-45-67
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 