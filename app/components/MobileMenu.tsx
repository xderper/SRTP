'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

interface MobileMenuProps {
  currentPath?: string;
}

export default function MobileMenu({ currentPath = "/" }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 400);
    } else {
      setIsOpen(true);
    }
  };

  const closeMenu = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsAnimating(false);
    }, 400);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { href: "/", label: "Главная", icon: "🏠", color: "text-white" },
    { href: "/catalog", label: "Каталог", icon: "🛒", color: "text-green-400" },
    { href: "/about", label: "О нас", icon: "🌿", color: "text-blue-400" },
    { href: "/delivery", label: "Доставка", icon: "🚚", color: "text-yellow-400" },
    { href: "/contacts", label: "Контакты", icon: "📞", color: "text-purple-400" }
  ];

  return (
    <>
      {/* Enhanced Hamburger Button */}
      <button
        className={`hamburger md:hidden ${isOpen || isAnimating ? 'open' : ''} relative z-50`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Enhanced Mobile Menu Overlay */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''} ${isAnimating ? 'animating' : ''}`}>
        {/* Enhanced floating particles */}
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="mobile-menu-content">
          {/* Enhanced Logo in menu */}
          <Link 
            href="/" 
            onClick={closeMenu} 
            className="mb-12 group"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded flex items-center justify-center mr-4 pulse-glow group-hover:scale-110 transition-all duration-500">
                <span className="text-black font-bold text-2xl">🌱</span>
                {/* Dynamic beam effect */}
                <div className="absolute inset-0 lighthouse-beam opacity-60">
                  <div className="w-1 h-20 bg-gradient-to-b from-green-400/60 to-transparent absolute left-1/2 transform -translate-x-1/2 -top-10"></div>
                </div>
              </div>
              <span className="text-3xl font-light text-white tracking-tight group-hover:text-gradient transition-all duration-300">
                GreenTools
              </span>
            </div>
          </Link>

          {/* Enhanced Menu Items */}
          <nav className="flex flex-col space-y-8">
            {menuItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`mobile-menu-item group relative ${
                  currentPath === item.href ? 'text-green-400' : 'text-white'
                }`}
                style={{
                  animationDelay: `${0.1 * index}s`
                }}
              >
                {/* Icon that appears before text */}
                <span className={`absolute -left-12 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ${item.color} text-2xl group-hover:animate-bounce`}>
                  {item.icon}
                </span>
                
                {/* Background glow effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-sm"></span>
                
                {/* Text with enhanced effects */}
                <span className="relative z-10 group-hover:text-gradient transition-all duration-300">
                  {item.label}
                </span>

                {/* Current page indicator */}
                {currentPath === item.href && (
                  <span className="absolute -right-12 top-1/2 transform -translate-y-1/2 text-green-400 text-xl animate-pulse">
                    ●
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Enhanced Contact Info */}
          <div className="mt-16 text-center relative">
            <div className="absolute inset-0 bg-green-400/5 rounded-xl blur-xl"></div>
            <div className="relative z-10 p-6">
              <div className="text-white text-lg mb-3 font-light">Заказать консультацию</div>
              <a 
                href="tel:+74951234567" 
                className="text-green-400 text-2xl font-medium hover:text-gradient transition-all duration-300 hover:scale-105 inline-block"
                onClick={closeMenu}
              >
                📞 +7 (495) 123-45-67
              </a>
              <div className="mt-3 text-sm text-gray-400">
                Работаем с 9:00 до 18:00
              </div>
            </div>
          </div>

          {/* Enhanced Quick Actions */}
          <div className="mt-12 flex flex-col space-y-6 w-full max-w-xs">
            <button className="fintech-button-primary py-4 rounded font-medium group relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span className="group-hover:animate-pulse">🛒</span>
                <span>Корзина (0)</span>
              </span>
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 morphing-bg"></div>
            </button>
            
            <Link
              href="/catalog"
              onClick={closeMenu}
              className="fintech-button py-4 rounded font-medium text-center group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span className="group-hover:animate-bounce">📱</span>
                <span>Смотреть каталог</span>
              </span>
            </Link>

            {/* Social links or additional actions */}
            <div className="flex justify-center space-x-6 mt-8">
              <div className="w-12 h-12 bg-green-400/10 rounded-full flex items-center justify-center border border-green-400/20 hover:bg-green-400/20 transition-all duration-300 cursor-pointer group">
                <span className="text-green-400 group-hover:animate-bounce">💬</span>
              </div>
              <div className="w-12 h-12 bg-blue-400/10 rounded-full flex items-center justify-center border border-blue-400/20 hover:bg-blue-400/20 transition-all duration-300 cursor-pointer group">
                <span className="text-blue-400 group-hover:animate-pulse">📧</span>
              </div>
              <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center border border-yellow-400/20 hover:bg-yellow-400/20 transition-all duration-300 cursor-pointer group">
                <span className="text-yellow-400 group-hover:animate-spin">⭐</span>
              </div>
            </div>
          </div>

          {/* Footer info */}
          <div className="mt-12 text-center text-xs text-gray-500">
            <div className="mb-2">© 2024 GreenTools</div>
            <div>Качественные садовые инструменты</div>
          </div>
        </div>

        {/* Enhanced close overlay on background click */}
        <div 
          className="absolute inset-0 -z-10 cursor-pointer"
          onClick={closeMenu}
        ></div>
      </div>
    </>
  );
} 