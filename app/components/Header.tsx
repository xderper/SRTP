'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import LeafIcon from "./LeafIcon";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`glass-effect border-b border-gray-800 sticky top-0 z-40 transition-all duration-500 ${
      scrolled ? 'backdrop-blur-3xl bg-black/90 shadow-2xl' : ''
    }`}>
      {/* Floating particles background */}
      <div className="floating-particles">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center group"
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
            >
              <div className={`w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded flex items-center justify-center mr-3 transition-all duration-500 ${
                logoHovered ? 'pulse-glow scale-110 rotate-12' : 'glow-green'
              }`}>
                {logoHovered ? (
                  <span className="text-yellow-300 font-bold text-lg transition-transform duration-300 animate-pulse">
                    🌟
                  </span>
                ) : (
                  <LeafIcon 
                    size={20} 
                    className="transition-transform duration-300"
                  />
                )}
                {/* Dynamic beam effect */}
                {logoHovered && (
                  <div className="absolute inset-0 lighthouse-beam">
                    <div className="w-1 h-16 bg-gradient-to-b from-green-400/80 to-transparent absolute left-1/2 transform -translate-x-1/2 -top-8"></div>
                  </div>
                )}
              </div>
              <span className={`text-xl font-light text-white tracking-tight transition-all duration-300 ${
                logoHovered ? 'text-gradient' : ''
              }`}>
                GreenTools
              </span>
            </Link>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { href: '/catalog', label: 'Каталог', icon: '🛍️' },
                { href: '/about', label: 'О нас', icon: '🌿' },
                { href: '/delivery', label: 'Доставка', icon: '🚚' },
                { href: '/contacts', label: 'Контакты', icon: '📞' }
              ].map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={`group relative transition-all duration-300 px-4 py-2 text-sm font-light tracking-wide ${
                    pathname === item.href 
                      ? 'text-green-400' 
                      : 'text-gray-400 hover:text-green-400'
                  }`}
                >
                  {/* Underline effect */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  
                  {/* Glow effect on current page */}
                  {pathname === item.href && (
                    <span className="absolute inset-0 bg-green-400/10 rounded blur-sm -z-10"></span>
                  )}
                  
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Enhanced Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Enhanced Cart button for desktop */}
            <button className="hidden md:block fintech-button-primary px-6 py-2.5 rounded text-sm font-medium tracking-wide relative group overflow-hidden">
              <span className="relative z-10 flex items-center space-x-2">
                <svg className="w-4 h-4 text-black group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                </svg>
                <span>Корзина (0)</span>
              </span>
              
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 morphing-bg"></div>
              
              {/* Cart badge example with enhanced styling */}
              {/* <span className="cart-badge">3</span> */}
            </button>

            {/* Enhanced Mobile menu */}
            <div className="md:hidden relative">
              <MobileMenu currentPath={pathname} />
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic bottom border effect */}
      <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent transition-all duration-1000 ${
        scrolled ? 'w-full' : 'w-0'
      }`}></div>
    </header>
  );
} 


// fghfgfgfg