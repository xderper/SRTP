import Link from "next/link";

export default function Legal() {
  return (
    <div className="min-h-screen bg-black data-grid">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="fintech-headline text-4xl md:text-5xl font-light mb-4">
            Правовая <span className="text-green-400">информация</span>
          </h1>
          <p className="fintech-subtext text-lg">
            Документы, сертификаты и дополнительная информация о компании
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Правовая информация */}
          <div className="dark-card rounded-lg p-6">
            <h3 className="text-white text-lg font-medium mb-6">Правовая информация</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/offer" className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors">
                  <span className="text-green-400">📄</span>
                  <span>Публичная оферта</span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors">
                  <span className="text-green-400">📋</span>
                  <span>Пользовательское соглашение</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors">
                  <span className="text-green-400">🔒</span>
                  <span>Политика конфиденциальности</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Покупателям */}
          <div className="dark-card rounded-lg p-6">
            <h3 className="text-white text-lg font-medium mb-6">Покупателям</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/return" className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors">
                  <span className="text-green-400">↩️</span>
                  <span>Возврат и обмен</span>
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors">
                  <span className="text-green-400">🚚</span>
                  <span>Способы доставки</span>
                </Link>
              </li>
              <li>
                <Link href="/payment" className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors">
                  <span className="text-green-400">💳</span>
                  <span>Способы оплаты</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Компания */}
          <div className="dark-card rounded-lg p-6">
            <h3 className="text-white text-lg font-medium mb-6">Компания</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/requisites" className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors">
                  <span className="text-green-400">🏢</span>
                  <span>Реквизиты</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors">
                  <span className="text-green-400">🏆</span>
                  <span>Сертификаты</span>
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors">
                  <span className="text-green-400">📍</span>
                  <span>Адрес офиса</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Безопасность */}
          <div className="dark-card rounded-lg p-6">
            <h3 className="text-white text-lg font-medium mb-6">Безопасность</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div>
                  <div className="text-white text-sm font-medium">SSL-сертификат</div>
                  <div className="text-gray-400 text-xs">Защищенное соединение</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div>
                  <div className="text-white text-sm font-medium">PCI DSS</div>
                  <div className="text-gray-400 text-xs">Стандарт безопасности платежей</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div>
                  <div className="text-white text-sm font-medium">Защита данных</div>
                  <div className="text-gray-400 text-xs">Конфиденциальность информации</div>
                </div>
              </div>
            </div>
          </div>

          {/* Реквизиты компании */}
          <div className="dark-card rounded-lg p-6 md:col-span-2">
            <h3 className="text-white text-lg font-medium mb-6">Реквизиты</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-gray-400 text-sm">Наименование</div>
                <div className="text-white font-medium">ИП Осипов Михаил Александрович</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm">ОГРНИП</div>
                <div className="text-white font-medium">319774600060600</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm">ИНН</div>
                <div className="text-white font-medium">771823734281</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm">Год начала деятельности</div>
                <div className="text-white font-medium">2013</div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <h3 className="text-white text-lg font-medium mb-6">Способы оплаты</h3>
            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">💳</span>
                <span>Visa</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">💳</span>
                <span>MasterCard</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">💳</span>
                <span>МИР</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back to home */}
        <div className="text-center mt-12">
          <Link 
            href="/" 
            className="fintech-button px-8 py-3 rounded text-lg font-medium tracking-wide"
          >
            ← Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
} 