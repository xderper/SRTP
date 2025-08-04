export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="bg-gray-900 rounded-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-light text-white mb-8">
            Политика возврата и обмена
          </h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-xl font-medium text-white mb-4">1. Общие положения</h2>
              <p className="mb-4">
                Настоящая политика возврата и обмена товаров действует в интернет-магазине 
                GreenTools и регулируется Законом РФ «О защите прав потребителей», 
                Гражданским кодексом РФ и другими нормативными актами.
              </p>
              <p>
                Мы заботимся о наших клиентах и стремимся обеспечить максимальное 
                удовлетворение от покупки наших товаров.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">2. Возврат товара надлежащего качества</h2>
              <p className="mb-4">
                Покупатель имеет право в течение 14 дней с момента получения товара 
                обменять его на аналогичный товар других размера, формы, габарита, 
                фасона, расцветки или комплектации.
              </p>
              
              <h3 className="text-lg font-medium text-white mb-2">Условия возврата:</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Товар не был в употреблении</li>
                <li>Сохранен товарный вид и потребительские свойства</li>
                <li>Сохранены пломбы, фабричные ярлыки</li>
                <li>Есть документ, подтверждающий факт покупки</li>
                <li>Отсутствуют следы монтажа или попыток ремонта</li>
              </ul>

              <h3 className="text-lg font-medium text-white mb-2">Товары, не подлежащие возврату:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Товары, изготовленные по индивидуальному заказу</li>
                <li>Товары, имеющие индивидуально-определенные свойства</li>
                <li>Скоропортящиеся товары</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">3. Возврат товара ненадлежащего качества</h2>
              <p className="mb-4">
                При обнаружении недостатков в товаре Покупатель вправе по своему выбору потребовать:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Безвозмездного устранения недостатков</li>
                <li>Соразмерного уменьшения покупной цены</li>
                <li>Замены на товар аналогичной марки</li>
                <li>Замены на такой же товар другой марки с перерасчетом цены</li>
                <li>Расторжения договора и возврата уплаченных денег</li>
              </ul>

              <p className="bg-gray-800 p-4 rounded-lg">
                <strong className="text-yellow-400">Важно:</strong> При возврате товара ненадлежащего качества 
                расходы на доставку товара к продавцу несет продавец.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">4. Процедура возврата</h2>
              
              <h3 className="text-lg font-medium text-white mb-2">Шаг 1: Уведомление</h3>
              <p className="mb-4">
                Свяжитесь с нами любым удобным способом:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Телефон: +7 (495) 123-45-67</li>
                <li>Email: returns@greentools.ru</li>
                <li>Форма обратной связи на сайте</li>
              </ul>

              <h3 className="text-lg font-medium text-white mb-2">Шаг 2: Подготовка документов</h3>
              <p className="mb-4">
                Подготовьте следующие документы:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Заявление на возврат (можем выслать форму)</li>
                <li>Копия документа о покупке</li>
                <li>Копия паспорта</li>
                <li>Фото товара (при возврате по качеству)</li>
              </ul>

              <h3 className="text-lg font-medium text-white mb-2">Шаг 3: Отправка товара</h3>
              <p className="mb-4">
                Отправьте товар одним из способов:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Курьерской службой (за наш счет при возврате по качеству)</li>
                <li>Почтой России с объявленной ценностью</li>
                <li>Привезите лично в наш офис</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">5. Сроки возврата денежных средств</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-3">Наличная оплата</h3>
                  <p>Возврат в течение 10 рабочих дней после получения товара</p>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-3">Безналичная оплата</h3>
                  <p>Возврат на карту в течение 5-30 рабочих дней в зависимости от банка</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">6. Обмен товара</h2>
              <p className="mb-4">
                При обмене товара на аналогичный другого размера или комплектации:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Если новый товар дороже — доплачиваете разницу</li>
                <li>Если новый товар дешевле — возвращаем разницу</li>
                <li>Обмен на товар той же стоимости — бесплатно</li>
              </ul>
              
              <p className="bg-green-900/30 p-4 rounded-lg border border-green-400/30">
                <strong className="text-green-400">Удобно:</strong> Мы можем провести обмен 
                при повторной доставке — курьер заберет старый товар и привезет новый.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">7. Гарантийное обслуживание</h2>
              <p className="mb-4">
                На все товары предоставляется гарантия производителя:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Плоскорезы и садовые инструменты — 12 месяцев</li>
                <li>Электрические товары — 24 месяца</li>
                <li>Садовые аксессуары — 6-12 месяцев</li>
              </ul>

              <p className="mb-4">
                Гарантийное обслуживание включает:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Бесплатный ремонт при обнаружении заводских дефектов</li>
                <li>Замену товара при невозможности ремонта</li>
                <li>Возврат денежных средств при существенных недостатках</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">8. Исключения</h2>
              <p className="mb-4">
                Возврат и обмен не производится в следующих случаях:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Повреждения, возникшие по вине покупателя</li>
                <li>Естественный износ при нормальной эксплуатации</li>
                <li>Повреждения от неправильного использования</li>
                <li>Самостоятельные попытки ремонта</li>
                <li>Истечение гарантийного срока</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">9. Контактная информация</h2>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-white mb-4">Отдел возвратов GreenTools</h3>
                <ul className="list-none space-y-2">
                  <li><strong>Телефон:</strong> +7 (495) 123-45-67 (доб. 2)</li>
                  <li><strong>Email:</strong> returns@greentools.ru</li>
                  <li><strong>Адрес:</strong> 123456, г. Москва, ул. Примерная, д. 1</li>
                  <li><strong>Время работы:</strong> Пн-Пт 9:00-18:00, Сб 10:00-16:00</li>
                </ul>
                
                <p className="mt-4 text-sm text-gray-400">
                  Мы работаем для вашего удобства и готовы решить любые вопросы, 
                  связанные с возвратом или обменом товаров.
                </p>
              </div>
            </section>

            <section>
              <p className="text-sm text-gray-400">
                Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 