'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Mouse tracking for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Smooth scroll observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach((el) => observer.observe(el));

    // Enhanced parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0.5');
        (element as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });

      // Floating elements with different speeds
      const floatingElements = document.querySelectorAll('.float-scroll');
      floatingElements.forEach((element, index) => {
        const speed = 0.1 + (index * 0.05);
        (element as HTMLElement).style.transform = `translateY(${-scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black data-grid relative">
      {/* Enhanced Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-screen flex items-start justify-center">
        {/* Interactive cursor follower */}
        <div 
          className="fixed w-6 h-6 bg-green-400/30 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out blur-sm"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
          }}
        />

        {/* Enhanced floating particles */}
        <div className="floating-particles">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="particle float-scroll"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 8}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-32 pb-16 text-center relative z-10">
          <div className="mb-8 relative">
            <span className="market-data text-green-400 tracking-wider relative">
              ПРОФЕССИОНАЛЬНЫЕ ПЛОСКОРЕЗЫ И САДОВЫЕ ИНСТРУМЕНТЫ
              <div className="absolute -inset-2 bg-green-400/5 rounded-full blur-xl"></div>
            </span>
          </div>
          
          <h1 className="fintech-headline text-5xl md:text-7xl lg:text-8xl font-light mb-8 relative">
            <span className="inline-block opacity-0 animate-[textReveal_1s_0.2s_cubic-bezier(0.25,0.46,0.45,0.94)_forwards] hover:text-gradient cursor-default">Плоскорезы</span>{" "}
            <span className="text-green-400 inline-block opacity-0 animate-[textReveal_1s_0.6s_cubic-bezier(0.25,0.46,0.45,0.94)_forwards] hover:scale-105 transition-transform duration-300 cursor-default">Фокина</span>{" "}
            <span className="inline-block opacity-0 animate-[textReveal_1s_1s_cubic-bezier(0.25,0.46,0.45,0.94)_forwards] cursor-default">Стриж</span><br />
            <span className="inline-block opacity-0 animate-[textReveal_1s_1.4s_cubic-bezier(0.25,0.46,0.45,0.94)_forwards] cursor-default">садовые</span>{" "}
            <span className="inline-block opacity-0 animate-[textReveal_1s_1.8s_cubic-bezier(0.25,0.46,0.45,0.94)_forwards] hover:text-gradient cursor-default">инструменты</span>
          </h1>
          
          <p className="fintech-subtext text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-0 animate-[textReveal_1s_2.2s_cubic-bezier(0.25,0.46,0.45,0.94)_forwards]">
            Оригинальные плоскорезы Фокина большой и малый, плоскорезы Стриж, Краб, Аист и качественный садовый инвентарь для эффективного земледелия. 
            Корнеудалители, рыхлители, парники и аксессуары для <span className="text-green-400 hover:glow-green transition-all duration-300 cursor-default">успешного садоводства</span> и <span className="text-green-400 hover:glow-green transition-all duration-300 cursor-default">богатого урожая</span>.
          </p>
          
          <div className="opacity-0 animate-[textReveal_1s_2.6s_cubic-bezier(0.25,0.46,0.45,0.94)_forwards] flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/catalog" className="fintech-button-primary px-8 py-4 rounded text-lg font-medium tracking-wide group relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 text-black group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                </svg>
                <span>В каталог</span>
              </span>
            </Link>
            <Link href="/contacts" className="fintech-button px-8 py-4 rounded text-lg font-medium tracking-wide group relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span className="group-hover:animate-pulse">📞</span>
                <span>Консультация</span>
              </span>
            </Link>
          </div>

        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <span className="market-data text-green-400 tracking-wider mb-4 block">ПРЕИМУЩЕСТВА НАШИХ САДОВЫХ ИНСТРУМЕНТОВ</span>
            <h2 className="fintech-headline text-4xl md:text-5xl font-light mb-6">
              Качество и<br />
              <span className="text-green-400 text-gradient">надёжность</span>
            </h2>
            <p className="fintech-subtext text-lg max-w-2xl mx-auto">
              Выбирайте проверенные плоскорезы Фокина, Стриж, Краб, садовые инструменты и аксессуары от ведущих производителей 
              для эффективной работы на вашем участке.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Enhanced Feature Card 1 */}
            <div className="dark-card rounded-lg p-8 fade-in-up group relative overflow-hidden" style={{animationDelay: '0.2s'}}>
              {/* Morphing background */}
              <div className="absolute top-4 right-4 w-32 h-32 morphing-bg opacity-30 -z-10"></div>
              
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-400/10 rounded flex items-center justify-center border border-green-400/20 group-hover:pulse-glow transition-all duration-300">
                  <span className="text-green-400 text-xl group-hover:animate-spin">🔧</span>
                </div>
                <div>
                  <h3 className="text-white text-lg font-medium mb-2 group-hover:text-gradient transition-all duration-300">Плоскорезы Фокина и Стриж</h3>
                  <p className="fintech-subtext text-sm">
                    Оригинальные плоскорезы Фокина большой и малый, плоскорез Стриж большой, средний, маленький и укороченный. 
                    Один инструмент заменяет 7 традиционных садовых инструментов.
                  </p>
                </div>
              </div>
              
              {/* Enhanced Product Showcase */}
              <div className="bg-black/50 rounded border border-gray-800 p-4 group-hover:border-green-400/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="market-data text-green-400">Бестселлер</span>
                  <span className="market-data pulse-glow">В наличии</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center pulse-glow">
                    <span className="text-black text-sm">🔧</span>
                  </div>
                  <div>
                    <div className="text-white text-sm">Плоскорез Фокина большой</div>
                    <div className="market-data">2,490 ₽ <span className="line-through text-gray-500">2,990 ₽</span></div>
                  </div>
                  <div className="flex space-x-2 ml-auto">
                    <Link href="/catalog" className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center hover:pulse-glow transition-all duration-300">
                      <span className="text-xs text-black">📄</span>
                    </Link>
                    <button className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center hover:pulse-glow transition-all duration-300">
                      <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Feature Card 2 */}
            <div className="dark-card rounded-lg p-8 fade-in-up group relative overflow-hidden" style={{animationDelay: '0.4s'}}>
              {/* Morphing background */}
              <div className="absolute top-4 right-4 w-32 h-32 morphing-bg opacity-30 -z-10" style={{animationDelay: '4s'}}></div>
              
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-400/10 rounded flex items-center justify-center border border-blue-400/20 group-hover:glow-blue transition-all duration-300">
                  <span className="text-blue-400 text-xl group-hover:animate-bounce">🌱</span>
                </div>
                <div>
                  <h3 className="text-white text-lg font-medium mb-2 group-hover:text-gradient transition-all duration-300">Садовые инструменты и аксессуары</h3>
                  <p className="fintech-subtext text-sm">
                    Полный ассортимент: плоскорез Краб, Аист, Гидра, Дракон, корнеудалители, рыхлители Z3 и Z4, 
                    парники Комби, садовые бордюры, наколенники и многое другое для эффективной работы в саду.
                  </p>
                </div>
              </div>
              
              {/* Enhanced Product List */}
              <div className="bg-black/50 rounded border border-gray-800 p-4 group-hover:border-blue-400/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white text-sm">Популярные категории</span>
                  <span className="market-data">50+ товаров</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'Плоскорезы Фокина', price: 'от 1,890 ₽', color: 'green' },
                    { name: 'Плоскорезы Стриж', price: 'от 1,590 ₽', color: 'blue' },
                    { name: 'Корнеудалители', price: 'от 890 ₽', color: 'yellow' },
                    { name: 'Парники и укрытия', price: 'от 1,290 ₽', color: 'purple' }
                  ].map((item, index) => (
                    <div key={item.name} className="flex items-center space-x-2 group/item hover:scale-105 transition-transform duration-300">
                      <div className={`w-2 h-2 bg-${item.color}-400 rounded-full pulse-glow`}></div>
                      <span className="market-data group-hover/item:text-white transition-colors duration-300">{item.name}</span>
                      <span className="text-green-400 text-xs ml-auto group-hover/item:text-gradient transition-all duration-300">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stylish Divider Line */}
      <div className="relative py-12 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black px-8">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-green-400/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section id="products" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <span className="market-data text-green-400 tracking-wider mb-4 block">ПОПУЛЯРНЫЕ САДОВЫЕ ИНСТРУМЕНТЫ</span>
            <h2 className="fintech-headline text-4xl md:text-5xl font-light mb-6">
              Лучшие плоскорезы и<br />
              <span className="text-green-400 text-gradient">садовые инструменты</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="dark-card rounded-lg p-8 fade-in-up group relative overflow-hidden flex flex-col h-full" style={{animationDelay: '0.2s'}}>
              <div className="absolute top-0 right-0 w-24 h-24 morphing-bg opacity-20 -z-10"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="market-data text-yellow-400">ХИТ ПРОДАЖ</span>
                  <h3 className="text-white text-xl font-medium mt-2 group-hover:text-gradient transition-all duration-300">Плоскорез Фокина большой</h3>
                </div>
                <span className="text-2xl group-hover:animate-spin">🔧</span>
              </div>
              
              <p className="fintech-subtext text-sm mb-6">
                Классический плоскорез Фокина для основных работ на участке. 
                Универсальный инструмент с эргономичной ручкой.
              </p>
              
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex justify-between">
                  <span className="market-data">Цена</span>
                  <span className="text-white">2,490 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="market-data">Скидка</span>
                  <span className="market-data-green">-500 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="market-data">Гарантия</span>
                  <span className="text-white">12 месяцев</span>
                </div>
              </div>
              
              <Link href="/product/1" className="fintech-button-primary w-full py-3 rounded font-medium block text-center group-hover:pulse-glow transition-all duration-300 mt-auto">
                Подробнее
              </Link>
            </div>

            {/* Product 2 */}
            <div className="dark-card rounded-lg p-8 fade-in-up group relative overflow-hidden flex flex-col h-full" style={{animationDelay: '0.4s'}}>
              <div className="absolute top-0 right-0 w-24 h-24 morphing-bg opacity-20 -z-10" style={{animationDelay: '2s'}}></div>
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="market-data text-blue-400">НОВИНКА</span>
                  <h3 className="text-white text-xl font-medium mt-2 group-hover:text-gradient transition-all duration-300">Плоскорез Стриж малый</h3>
                </div>
                <span className="text-2xl group-hover:animate-bounce">🌿</span>
              </div>
              
              <p className="fintech-subtext text-sm mb-6">
                Компактный плоскорез Стриж для точных работ в теплицах и на грядках. 
                Идеален для прополки между растениями и рыхления почвы.
              </p>
              
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex justify-between">
                  <span className="market-data">Цена</span>
                  <span className="text-white">1,890 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="market-data">Размер</span>
                  <span className="market-data-green">Малый</span>
                </div>
                <div className="flex justify-between">
                  <span className="market-data">Вес</span>
                  <span className="text-white">0.6 кг</span>
                </div>
              </div>
              
              <Link href="/product/2" className="fintech-button w-full py-3 rounded font-medium block text-center mt-auto">
                Подробнее
              </Link>
            </div>

            {/* Product 3 */}
            <div className="dark-card rounded-lg p-8 fade-in-up group relative overflow-hidden flex flex-col h-full" style={{animationDelay: '0.6s'}}>
              <div className="absolute top-0 right-0 w-24 h-24 morphing-bg opacity-20 -z-10" style={{animationDelay: '4s'}}></div>
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="market-data text-purple-400">ПРОФИ</span>
                  <h3 className="text-white text-xl font-medium mt-2 group-hover:text-gradient transition-all duration-300">Плоскорез Краб большой</h3>
                </div>
                <span className="text-2xl group-hover:animate-pulse">✂️</span>
              </div>
              
              <p className="fintech-subtext text-sm mb-6">
                Универсальный плоскорез Краб для обработки почвы и ухода за растениями. 
                Эргономичная конструкция для комфортной работы на участке.
              </p>
              
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex justify-between">
                  <span className="market-data">Цена</span>
                  <span className="text-white">1,590 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="market-data">Материал</span>
                  <span className="market-data-green">Сталь</span>
                </div>
                <div className="flex justify-between">
                  <span className="market-data">Макс. диаметр</span>
                  <span className="text-white">25 мм</span>
                </div>
              </div>
              
              <Link href="/product/6" className="fintech-button w-full py-3 rounded font-medium block text-center mt-auto">
                Подробнее
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/catalog" className="fintech-button-primary px-8 py-4 rounded text-lg font-medium tracking-wide group relative overflow-hidden">
              <span className="relative z-10">Смотреть весь каталог</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Elegant Divider Line */}
      <div className="relative py-8 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600/40 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black px-6">
                <div className="w-8 h-8 border border-green-400/30 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full pulse-glow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <span className="market-data text-green-400 tracking-wider mb-4 block">ПОЧЕМУ ВЫБИРАЮТ НАС</span>
            <h2 className="fintech-headline text-4xl md:text-5xl font-light mb-6">
              Ваши преимущества<br />
              <span className="text-green-400 text-gradient">с GreenTools</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🚚', title: 'Быстрая доставка', desc: 'Плоскорезы Фокина, Стриж, садовые инструменты по Москве 1-2 дня, по России 3-7 дней. Бесплатно от 3000 ₽' },
              { icon: '🛡️', title: 'Гарантия качества', desc: 'Официальная гарантия от 12 месяцев на все плоскорезы и садовые инструменты' },
              { icon: '💳', title: 'Удобная оплата', desc: 'Карты, наличные, переводы. Рассрочка без переплат на плоскорезы и садовый инвентарь' },
              { icon: '🎯', title: 'Экспертная помощь', desc: 'Консультации по выбору плоскорезов Фокина, Стриж и использованию садовых инструментов' }
            ].map((benefit, index) => (
              <div key={benefit.title} className="dark-card rounded-lg p-6 text-center fade-in-up group relative overflow-hidden" style={{animationDelay: `${0.1 * (index + 1)}s`}}>
                <div className="absolute top-0 right-0 w-16 h-16 morphing-bg opacity-20 -z-10" style={{animationDelay: `${index * 2}s`}}></div>
                <div className="text-4xl mb-4 group-hover:animate-bounce">{benefit.icon}</div>
                <h3 className="text-white text-lg font-medium mb-2 group-hover:text-gradient transition-all duration-300">{benefit.title}</h3>
                <p className="fintech-subtext text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Divider Line */}
      <div className="relative py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black px-12">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 border-2 border-green-400/60 rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-green-400/80 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-1 h-1 bg-green-400/60 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    <div className="w-1 h-1 bg-green-400/80 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                    <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
                  </div>
                  <div className="w-4 h-4 border-2 border-green-400/60 rounded-full animate-spin" style={{animationDuration: '8s', animationDirection: 'reverse'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center fade-in-up">
          <span className="market-data text-green-400 tracking-wider mb-4 block">ГОТОВЫ НАЧАТЬ?</span>
          <h2 className="fintech-headline text-4xl md:text-5xl font-light mb-8">
            Сделайте свой сад<br />
            <span className="text-green-400 text-gradient">процветающим</span>
          </h2>
          <p className="fintech-subtext text-lg mb-12 max-w-2xl mx-auto">
            Закажите качественные плоскорезы Фокина, Стриж, Краб, садовые инструменты и парники с доставкой по всей России. 
            Консультации специалистов и гарантия качества на все товары.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/catalog" className="fintech-button-primary px-10 py-4 rounded text-lg font-medium tracking-wide group relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 text-black group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                </svg>
                <span>Перейти в каталог</span>
              </span>
            </Link>
            <Link href="/contacts" className="fintech-button px-10 py-4 rounded text-lg font-medium tracking-wide group relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span className="group-hover:animate-pulse">📞</span>
                <span>Получить консультацию</span>
              </span>
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
}
