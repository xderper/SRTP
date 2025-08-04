export default function PaymentInfo() {
  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="bg-gray-900 rounded-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-light text-white mb-8">
            Способы оплаты и безопасность
          </h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-xl font-medium text-white mb-4">Доступные способы оплаты</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-green-400 mb-3">💳 Банковские карты</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Visa (все типы карт)</li>
                    <li>• MasterCard (все типы карт)</li>
                    <li>• МИР (российская платежная система)</li>
                    <li>• Дебетовые и кредитные карты</li>
                    <li>• Карты российских и зарубежных банков</li>
                  </ul>
                  <p className="text-xs text-gray-400 mt-3">
                    Оплата происходит через защищенный платежный шлюз
                  </p>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-green-400 mb-3">💰 Наличная оплата</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• При получении товара курьером</li>
                    <li>• При самовывозе из пункта выдачи</li>
                    <li>• Комиссия не взимается</li>
                    <li>• Доступна сдача с любой суммы</li>
                  </ul>
                  <p className="text-xs text-gray-400 mt-3">
                    Наличные принимает курьер или кассир
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">Для юридических лиц</h2>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-medium text-green-400 mb-3">🏢 Безналичный расчет</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-white mb-2">Порядок оплаты:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>1. Оформляете заказ на сайте</li>
                      <li>2. Получаете счет на email</li>
                      <li>3. Оплачиваете через банк</li>
                      <li>4. Отправляете копию платежки</li>
                      <li>5. Получаете товар и документы</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-white mb-2">Документооборот:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Счет на оплату</li>
                      <li>• Товарная накладная ТОРГ-12</li>
                      <li>• Счет-фактура (при необходимости)</li>
                      <li>• Акт выполненных работ</li>
                      <li>• Сертификаты соответствия</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">Безопасность платежей</h2>
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-green-400 mb-3">🔒 SSL-шифрование</h3>
                  <p className="mb-4">
                    Все платежные операции на нашем сайте защищены SSL-сертификатом с 256-битным шифрованием. 
                    Это означает, что все ваши данные передаются в зашифрованном виде и не могут быть перехвачены третьими лицами.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full pulse-glow"></div>
                      <span className="text-sm">Сертификат активен</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full pulse-glow"></div>
                      <span className="text-sm">SHA-256 шифрование</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-green-400 mb-3">🛡️ PCI DSS соответствие</h3>
                  <p className="mb-4">
                    Наш платежный процессинг соответствует стандарту PCI DSS (Payment Card Industry Data Security Standard) — 
                    международному стандарту безопасности для обработки платежных карт.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Данные карт не сохраняются на наших серверах</li>
                    <li>• Обработка происходит на защищенных серверах банка</li>
                    <li>• Токенизация чувствительных данных</li>
                    <li>• Регулярный аудит безопасности</li>
                  </ul>
                </div>

                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-green-400 mb-3">🔐 3D Secure</h3>
                  <p className="mb-4">
                    Технология 3D Secure обеспечивает дополнительную защиту при оплате картой. 
                    При необходимости вас перенаправят на страницу банка для подтверждения операции.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Поддерживаемые протоколы:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Verified by Visa</li>
                        <li>• MasterCard SecureCode</li>
                        <li>• МИР Accept</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Способы подтверждения:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• SMS с кодом</li>
                        <li>• Push-уведомления</li>
                        <li>• Мобильное приложение банка</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">Возврат денежных средств</h2>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-green-400 mb-3">💳 При оплате картой</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Возврат только на карту, с которой была оплата</li>
                      <li>• Срок возврата: 5-30 рабочих дней</li>
                      <li>• Зависит от банка-эмитента карты</li>
                      <li>• Без комиссий с нашей стороны</li>
                      <li>• Автоматическое уведомление о возврате</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-green-400 mb-3">💰 При наличной оплате</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Возврат наличными в офисе</li>
                      <li>• Перевод на банковскую карту</li>
                      <li>• Перевод на банковский счет</li>
                      <li>• Срок возврата: до 10 рабочих дней</li>
                      <li>• При себе иметь паспорт и документ о покупке</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">Часто задаваемые вопросы</h2>
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Безопасно ли вводить данные карты на сайте?</h4>
                  <p className="text-sm text-gray-300">
                    Да, абсолютно безопасно. Мы используем SSL-шифрование и соответствуем стандарту PCI DSS. 
                    Данные вашей карты не сохраняются на наших серверах и обрабатываются только банком.
                  </p>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Что делать, если платеж не прошел?</h4>
                  <p className="text-sm text-gray-300">
                    Попробуйте еще раз через несколько минут. Если проблема повторяется, обратитесь в банк 
                    или свяжитесь с нашей службой поддержки по телефону +7 (495) 123-45-67.
                  </p>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Можно ли оплатить заказ частями?</h4>
                  <p className="text-sm text-gray-300">
                    Да, доступна рассрочка через банки-партнеры. При оформлении заказа выберите способ оплаты 
                    "Рассрочка" и следуйте инструкциям банка.
                  </p>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Взимается ли комиссия за оплату картой?</h4>
                  <p className="text-sm text-gray-300">
                    Нет, мы не взимаем комиссию за оплату банковскими картами. Однако ваш банк может взимать 
                    комиссию согласно тарифам по вашей карте.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="bg-green-900/20 border border-green-400/30 rounded-lg p-6">
                <h3 className="text-lg font-medium text-green-400 mb-3">📞 Нужна помощь?</h3>
                <p className="mb-4">
                  Если у вас возникли вопросы по оплате или нужна помощь, обращайтесь к нам:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Телефон:</strong> +7 (495) 123-45-67</li>
                      <li><strong>Email:</strong> payment@greentools.ru</li>
                      <li><strong>Время работы:</strong> Пн-Пт 9:00-20:00</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Онлайн-чат:</strong> 24/7 на сайте</li>
                      <li><strong>Telegram:</strong> @greentools_support</li>
                      <li><strong>WhatsApp:</strong> +7 (495) 123-45-67</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <p className="text-sm text-gray-400">
                Информация актуальна на {new Date().toLocaleDateString('ru-RU')}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 