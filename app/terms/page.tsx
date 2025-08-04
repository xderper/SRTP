export default function Terms() {
  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="bg-gray-900 rounded-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-light text-white mb-8">
            Пользовательское соглашение
          </h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-xl font-medium text-white mb-4">1. Общие положения</h2>
              <p className="mb-4">
                Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения между 
                ИП Иванов Иван Иванович (далее — «Продавец») и физическими или юридическими лицами 
                (далее — «Покупатель») при использовании интернет-магазина greentools.ru.
              </p>
              <p>
                Начиная пользоваться сайтом, вы соглашаетесь с условиями данного соглашения.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">2. Предмет соглашения</h2>
              <p className="mb-4">
                Продавец обязуется продать, а Покупатель принять и оплатить товары, представленные 
                в каталоге интернет-магазина, на условиях настоящего соглашения.
              </p>
              <p>
                Все товары, представленные на сайте, сертифицированы и соответствуют требованиям ГОСТ.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">3. Оформление заказа</h2>
              <p className="mb-4">
                Заказ товара осуществляется Покупателем через интернет-магазин. При оформлении заказа 
                Покупатель предоставляет следующую информацию:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Фамилия, имя, отчество получателя</li>
                <li>Адрес для доставки товара</li>
                <li>Контактный телефон</li>
                <li>Адрес электронной почты</li>
                <li>Способ доставки и оплаты</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">4. Оплата товара</h2>
              <p className="mb-4">
                Покупатель может оплатить заказ следующими способами:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Банковскими картами Visa, MasterCard, МИР</li>
                <li>Наличными при получении</li>
                <li>Безналичным переводом для юридических лиц</li>
                <li>Электронными деньгами</li>
              </ul>
              <p className="mt-4">
                Оплата банковскими картами происходит через защищенное соединение с использованием технологии SSL.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">5. Доставка</h2>
              <p className="mb-4">
                Доставка товаров осуществляется:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>По Москве и МО — курьерской службой (1-2 дня)</li>
                <li>По России — транспортными компаниями (3-7 дней)</li>
                <li>Самовывоз из пункта выдачи</li>
              </ul>
              <p className="mt-4">
                Бесплатная доставка предоставляется при заказе от 3000 рублей.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">6. Возврат и обмен</h2>
              <p className="mb-4">
                Покупатель имеет право в течение 14 дней с момента получения товара:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Вернуть товар надлежащего качества при сохранении товарного вида и потребительских свойств</li>
                <li>Обменять товар на аналогичный другого размера, формы, габарита, фасона, расцветки или комплектации</li>
                <li>Вернуть товар ненадлежащего качества и получить полный возврат денежных средств</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">7. Гарантии</h2>
              <p className="mb-4">
                Продавец гарантирует:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Соответствие товара заявленным характеристикам</li>
                <li>Надлежащее качество товара</li>
                <li>Гарантийное обслуживание согласно гарантийным обязательствам производителя</li>
                <li>Конфиденциальность персональных данных Покупателя</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">8. Ответственность сторон</h2>
              <p className="mb-4">
                Продавец не несет ответственности за:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Задержки в доставке по вине транспортных компаний</li>
                <li>Ущерб, причиненный неправильным использованием товара</li>
                <li>Незначительные отклонения цвета товара от изображения на мониторе</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">9. Реквизиты продавца</h2>
              <ul className="list-none space-y-2">
                <li>ИП Иванов Иван Иванович</li>
                <li>ОГРНИП: 123456789012345</li>
                <li>ИНН: 123456789012</li>
                <li>Адрес: 123456, г. Москва, ул. Примерная, д. 1</li>
                <li>Телефон: +7 (495) 123-45-67</li>
                <li>Email: info@greentools.ru</li>
              </ul>
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