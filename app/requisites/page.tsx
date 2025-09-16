export default function Requisites() {
  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="bg-gray-900 rounded-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-light text-white mb-8">
            Реквизиты компании
          </h1>
          
          <div className="space-y-8">
            {/* Основные реквизиты */}
            <section className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-medium text-white mb-6">Основные реквизиты</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-green-400 mb-3">Юридическая информация</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li><strong>Полное наименование:</strong><br />Индивидуальный предприниматель Осипов Михаил Александрович</li>
                    <li><strong>Сокращенное наименование:</strong><br />ИП Осипов М.А.</li>
                    <li><strong>ОГРНИП:</strong> 319774600060600</li>
                    <li><strong>ИНН:</strong> 771823734281</li>
                    <li><strong>Дата регистрации:</strong> 15.03.2013</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-green-400 mb-3">Контактная информация</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li><strong>Юридический адрес:</strong><br />123456, г. Москва, ул. Примерная, д. 1</li>
                    <li><strong>Фактический адрес:</strong><br />123456, г. Москва, ул. Примерная, д. 1</li>
                    <li><strong>Телефон:</strong> +7 (495) 123-45-67</li>
                    <li><strong>Email:</strong> info@greentools.ru</li>
                    <li><strong>Сайт:</strong> greentools.ru</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Банковские реквизиты */}
            <section className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-medium text-white mb-6">Банковские реквизиты</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-green-400 mb-3">Основной счет (ИП)</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li><strong>Расчетный счет:</strong><br />40802810012345678901</li>
                    <li><strong>Банк:</strong><br />ПАО «Сбербанк России»</li>
                    <li><strong>БИК:</strong> 044525225</li>
                    <li><strong>Корр. счет:</strong><br />30101810400000000225</li>
                    <li><strong>КПП банка:</strong> 997950001</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-green-400 mb-3">Дополнительная информация</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li><strong>Назначение платежа:</strong><br />Оплата товара по договору/счету №___</li>
                    <li><strong>НДС:</strong> Не применяется (УСН)</li>
                    <li><strong>Режим налогообложения:</strong><br />Упрощенная система налогообложения</li>
                    <li><strong>Основной вид деятельности:</strong><br />Розничная торговля садовыми инструментами</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Документооборот */}
            <section className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-medium text-white mb-6">Документооборот</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-green-400 mb-3">Для физических лиц</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Кассовый чек (при наличной оплате)</li>
                    <li>• Электронный чек (при безналичной оплате)</li>
                    <li>• Товарная накладная (при необходимости)</li>
                    <li>• Гарантийный талон</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-green-400 mb-3">Для юридических лиц</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Счет на оплату</li>
                    <li>• Товарная накладная (ТОРГ-12)</li>
                    <li>• Счет-фактура (при необходимости)</li>
                    <li>• Акт выполненных работ (при услугах)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Лицензии и сертификаты */}
            <section className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-medium text-white mb-6">Лицензии и сертификаты</h2>
              <div className="grid md:grid-cols-1 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-green-400 mb-3">Документы и разрешения</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Свидетельство о регистрации ИП от 15.03.2013</li>
                    <li>• Уведомление о применении УСН</li>
                    <li>• Сертификаты соответствия на реализуемую продукцию</li>
                    <li>• Договоры с поставщиками и производителями</li>
                    <li>• Разрешение на осуществление торговой деятельности</li>
                  </ul>
                  
                  <p className="mt-4 text-sm text-gray-400">
                    Все документы и сертификаты доступны для ознакомления по запросу.
                    Для получения копий документов обращайтесь по телефону или email.
                  </p>
                </div>
              </div>
            </section>

            {/* Режим работы */}
            <section className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-medium text-white mb-6">Режим работы</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-green-400 mb-3">Офис и склад</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li><strong>Понедельник - Пятница:</strong> 9:00 - 18:00</li>
                    <li><strong>Суббота:</strong> 10:00 - 16:00</li>
                    <li><strong>Воскресенье:</strong> Выходной</li>
                    <li><strong>Обеденный перерыв:</strong> 13:00 - 14:00</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-green-400 mb-3">Служба поддержки</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li><strong>Телефон:</strong> +7 (495) 123-45-67</li>
                    <li><strong>Email:</strong> support@greentools.ru</li>
                    <li><strong>Время работы:</strong> 9:00 - 20:00 (Пн-Сб)</li>
                    <li><strong>Онлайн-чат:</strong> 24/7 на сайте</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Дополнительная информация */}
            <section className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-medium text-white mb-6">Дополнительная информация</h2>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-lg font-medium text-green-400 mb-2">О компании</h3>
                  <p>
                    ИП Осипов М.А. осуществляет деятельность по продаже садовых инструментов и оборудования 
                    с 2013 года. Мы являемся официальными дилерами ведущих производителей плоскорезов 
                    и садового инвентаря. Наша компания зарегистрирована в Едином государственном реестре 
                    индивидуальных предпринимателей и ведет деятельность в соответствии с требованиями 
                    российского законодательства.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-green-400 mb-2">Наши преимущества</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Более 10 лет на рынке садовых инструментов</li>
                    <li>Прямые поставки от производителей</li>
                    <li>Гарантия качества на всю продукцию</li>
                    <li>Быстрая доставка по всей России</li>
                    <li>Профессиональная консультация специалистов</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="text-center">
              <p className="text-sm text-gray-400">
                Данная информация актуальна на {new Date().toLocaleDateString('ru-RU')}<br />
                При изменении реквизитов информация будет обновлена на сайте
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 