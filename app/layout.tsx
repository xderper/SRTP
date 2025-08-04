import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GreenTools - Плоскорезы и садовое оборудование",
  description: "Качественные плоскорезы Фокина, садовое и дачное оборудование. Инструменты для эффективного земледелия и ухода за участком.",
  keywords: "плоскорез, садовое оборудование, инструменты для дачи, плоскорез Фокина, садовый инвентарь",
  other: {
    'X-SSL-Secured': 'true',
    'Content-Security-Policy': "upgrade-insecure-requests"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        
        {/* Footer */}
        <footer className="bg-black py-16 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12">
              <div className="md:col-span-2">
                <Link href="/" className="flex items-center mb-6 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded flex items-center justify-center mr-4 glow-green group-hover:pulse-glow transition-all duration-300">
                    <span className="text-black font-bold text-xl">🌱</span>
                  </div>
                  <span className="text-2xl font-light text-white tracking-tight group-hover:text-gradient transition-all duration-300">GreenTools</span>
                </Link>
                <p className="fintech-subtext text-lg leading-relaxed mb-8 max-w-md">
                  Качественные плоскорезы Фокина, Стриж, Краб, Аист, садовые инструменты, парники и аксессуары для эффективного земледелия и богатого урожая.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="market-data">Работаем с 2013 года</span>
                  <span className="text-gray-600">•</span>
                  <span className="market-data">15,000+ довольных клиентов</span>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full pulse-glow"></div>
                  <span className="text-xs text-gray-400">SSL защищенное соединение</span>
                </div>
              </div>

              <div>
                <h3 className="text-white text-lg font-medium mb-6 tracking-tight">Каталог</h3>
                <ul className="space-y-4 fintech-subtext">
                  <li><Link href="/catalog" className="hover:text-green-400 transition-colors">Все садовые инструменты</Link></li>
                  <li><Link href="/catalog" className="hover:text-green-400 transition-colors">Плоскорезы Фокина и Стриж</Link></li>
                  <li><Link href="/catalog" className="hover:text-green-400 transition-colors">Корнеудалители и рыхлители</Link></li>
                  <li><Link href="/catalog" className="hover:text-green-400 transition-colors">Парники и укрытия</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white text-lg font-medium mb-6 tracking-tight">Информация</h3>
                <ul className="space-y-4 fintech-subtext">
                  <li><Link href="/about" className="hover:text-green-400 transition-colors">О компании</Link></li>
                  <li><Link href="/delivery" className="hover:text-green-400 transition-colors">Доставка и оплата</Link></li>
                  <li><Link href="/contacts" className="hover:text-green-400 transition-colors">Контакты</Link></li>
                  <li><Link href="/legal" className="hover:text-green-400 transition-colors">Документы</Link></li>
                  <li><a href="tel:+74951234567" className="hover:text-green-400 transition-colors">+7 (495) 123-45-67</a></li>
                </ul>
              </div>
            </div>

            {/* Дополнительная информация */}
            <div className="mt-8 pt-6 border-t border-gray-800 text-center">
              <Link 
                href="/legal" 
                className="inline-flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors text-sm"
              >
                <span>📋</span>
                <span>Правовая информация и документы</span>
                <span>→</span>
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <p className="fintech-subtext text-sm">
                    &copy; 2024 ИП Иванов И.И. Все права защищены.
                  </p>
                  <p className="fintech-subtext text-xs mt-1">
                    ОГРНИП: 123456789012345 • ИНН: 123456789012
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400">Принимаем к оплате:</span>
                    <span className="text-white text-sm">Visa • MasterCard • МИР</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  Информация на сайте не является публичной офертой. 
                  Цены и наличие товаров уточняйте по телефону.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
