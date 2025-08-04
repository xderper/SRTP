import Link from "next/link";

export default function About() {
  const advantages = [
    {
      icon: '🏆',
      title: 'Более 10 лет опыта',
      description: 'Работаем на рынке садового оборудования с 2013 года'
    },
    {
      icon: '🌱',
      title: 'Качественные товары',
      description: 'Поставляем только проверенные плоскорезы Фокина, Стриж, Краб и садовые инструменты от надежных производителей'
    },
    {
      icon: '🚚',
      title: 'Быстрая доставка',
      description: 'Отправляем плоскорезы, рыхлители, парники и садовые аксессуары в день оплаты по всей России'
    },
    {
      icon: '🛡️',
      title: 'Гарантия качества',
      description: 'Официальная гарантия на все плоскорезы Фокина, Стриж и садовые инструменты от 12 месяцев'
    },
    {
      icon: '📞',
      title: 'Поддержка клиентов',
      description: 'Консультируем по выбору плоскорезов, корнеудалителей, парников и использованию садовых инструментов'
    },
    {
      icon: '💳',
      title: 'Удобная оплата',
      description: 'Принимаем все виды платежей за садовые инструменты и аксессуары, есть рассрочка'
    }
  ];

  const team = [
    {
      name: 'Александр Петров',
      position: 'Основатель и генеральный директор',
      experience: '15 лет в садоводстве',
      image: '👨‍💼'
    },
    {
      name: 'Елена Сидорова',
      position: 'Менеджер по продажам',
      experience: '8 лет в продажах садового инвентаря',
      image: '👩‍💼'
    },
    {
      name: 'Сергей Иванов',
      position: 'Специалист по подбору инструментов',
      experience: '12 лет работы агрономом',
      image: '👨‍🔬'
    }
  ];

  return (
    <div className="min-h-screen bg-black data-grid">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="fintech-headline text-4xl md:text-5xl font-light mb-8">
            О компании <span className="text-green-400">GreenTools</span>
          </h1>
          <p className="fintech-subtext text-xl max-w-3xl mx-auto leading-relaxed">
            Мы специализируемся на продаже качественных плоскорезов Фокина, Стриж, Краб, Аист, Гидра, Дракон, садовых инструментов и аксессуаров. 
            Наша миссия — сделать садоводство удобным, эффективным и приносящим радость с помощью лучших инструментов.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="dark-card rounded-lg p-8">
            <h2 className="fintech-headline text-2xl font-light mb-6">Наша история</h2>
            <div className="fintech-subtext text-lg leading-relaxed space-y-4">
              <p>
                Компания GreenTools была основана в 2013 году группой энтузиастов, влюбленных в садоводство 
                и стремящихся сделать работу на земле более эффективной и менее трудозатратной.
              </p>
              <p>
                Все началось с открытия уникальных свойств плоскореза Фокина — инструмента, который 
                революционизировал подход к обработке почвы. Мы первыми в нашем регионе начали продавать 
                плоскорезы Фокина большой и малый, а также плоскорезы Стриж всех размеров и помогать садоводам осваивать новые методы земледелия.
              </p>
              <p>
                За годы работы мы расширили ассортимент, добавив плоскорезы Краб, Аист, Гидра, Дракон, Лепесток, 
                корнеудалители, рыхлители Z3 и Z4, парники Комби и туннельные укрытия, садовые бордюры, наколенники, 
                кустодержатели и другие качественные садовые инструменты. Но плоскорезы Фокина и Стриж остаются 
                нашей главной специализацией.
              </p>
            </div>
          </div>

          <div className="dark-card rounded-lg p-8">
            <h2 className="fintech-headline text-2xl font-light mb-6">Наши принципы</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400">✓</span>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Качество превыше всего</h3>
                  <p className="fintech-subtext text-sm">
                    Мы тщательно отбираем поставщиков и проверяем каждый плоскорез Фокина, Стриж, садовый инструмент и аксессуар перед отправкой покупателю.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400">✓</span>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Честность в отношениях</h3>
                  <p className="fintech-subtext text-sm">
                    Мы предоставляем полную и достоверную информацию о плоскорезах, корнеудалителях, парниках и садовых инструментах, их характеристиках и применении.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400">✓</span>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Поддержка клиентов</h3>
                  <p className="fintech-subtext text-sm">
                    Мы не только продаем плоскорезы Фокина, Стриж, садовые инструменты и аксессуары, но и обучаем правильному их использованию.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div className="mb-16">
          <h2 className="fintech-headline text-3xl font-light text-center mb-12">
            Почему выбирают <span className="text-green-400">нас</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="dark-card rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-white text-lg font-medium mb-3">{advantage.title}</h3>
                <p className="fintech-subtext text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="fintech-headline text-3xl font-light text-center mb-12">
            Наша <span className="text-green-400">команда</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="dark-card rounded-lg p-6 text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-white text-lg font-medium mb-2">{member.name}</h3>
                <p className="text-green-400 text-sm mb-2">{member.position}</p>
                <p className="fintech-subtext text-sm">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="dark-card rounded-lg p-8 mb-16">
          <h2 className="fintech-headline text-3xl font-light text-center mb-12">
            GreenTools в <span className="text-green-400">цифрах</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-light text-green-400 mb-2">10+</div>
              <div className="fintech-subtext">лет на рынке</div>
            </div>
            <div>
              <div className="text-3xl font-light text-green-400 mb-2">15,000+</div>
              <div className="fintech-subtext">довольных клиентов</div>
            </div>
            <div>
              <div className="text-3xl font-light text-green-400 mb-2">50+</div>
              <div className="fintech-subtext">видов плоскорезов и садовых инструментов</div>
            </div>
            <div>
              <div className="text-3xl font-light text-green-400 mb-2">99%</div>
              <div className="fintech-subtext">положительных отзывов</div>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="dark-card rounded-lg p-8">
          <h2 className="fintech-headline text-2xl font-light mb-6">Сертификаты и документы</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4 p-4 border border-gray-800 rounded">
              <div className="text-2xl">📜</div>
              <div>
                <div className="text-white font-medium">Сертификат соответствия ГОСТ</div>
                <div className="fintech-subtext text-sm">Все плоскорезы Фокина, Стриж и садовые инструменты сертифицированы по российским стандартам</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 border border-gray-800 rounded">
              <div className="text-2xl">🏢</div>
              <div>
                <div className="text-white font-medium">ИП Петров А.В.</div>
                <div className="fintech-subtext text-sm">ОГРНИП: 123456789012345</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 border border-gray-800 rounded">
              <div className="text-2xl">🛡️</div>
              <div>
                <div className="text-white font-medium">Страхование ответственности</div>
                <div className="fintech-subtext text-sm">Застрахована ответственность перед потребителями садовых инструментов</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 border border-gray-800 rounded">
              <div className="text-2xl">🎯</div>
              <div>
                <div className="text-white font-medium">Член торговой ассоциации</div>
                <div className="fintech-subtext text-sm">Состоим в Ассоциации продавцов плоскорезов и садового инвентаря</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 