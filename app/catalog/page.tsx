'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { Product, ProductWithId, getCatalogData, getProductsByCategory, getUniqueCategories, formatPrice, getImagePath } from "../lib/catalog";
import Image from "next/image";

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Array<{id: string, name: string, count: number}>>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductWithId[]>([]);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [sortBy, setSortBy] = useState('popularity');


  useEffect(() => {
    async function loadData() {
      try {
        const catalogData = await getCatalogData();
        setProducts(catalogData);
        setCategories(getUniqueCategories(catalogData));
        setFilteredProducts(getProductsByCategory(catalogData, 'all'));
      } catch (error) {
        console.error('Error loading catalog:', error);
      } finally {
        setLoading(false);
      }
    }
    
    loadData();
  }, []);

  useEffect(() => {
    let filtered = getProductsByCategory(products, selectedCategory);
    
    // Фильтр по цене
    if (priceRange.min || priceRange.max) {
      filtered = filtered.filter(product => {
        const price = formatPrice(product.price);
        const min = priceRange.min ? parseInt(priceRange.min) : 0;
        const max = priceRange.max ? parseInt(priceRange.max) : Infinity;
        return price >= min && price <= max;
      });
    }
    
    // Сортировка
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => formatPrice(a.price) - formatPrice(b.price));
        break;
      case 'price-desc':
        filtered.sort((a, b) => formatPrice(b.price) - formatPrice(a.price));
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // По популярности (оставляем исходный порядок)
        break;
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, products, priceRange, sortBy]);

  const applyPriceFilter = () => {
    // Перерендер произойдет автоматически благодаря useEffect
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black data-grid flex items-center justify-center">
        <div className="text-white text-xl">Загрузка каталога...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black data-grid">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="fintech-headline text-4xl md:text-5xl font-light mb-4">
            Каталог <span className="text-green-400">товаров</span>
          </h1>
          <p className="fintech-subtext text-lg">
            Оригинальные плоскорезы Фокина и садовое оборудование для эффективного земледелия
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="dark-card rounded-lg p-6">
              <h3 className="text-white text-lg font-medium mb-6">Категории</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-green-400/20 text-green-400 border border-green-400/30'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{category.name}</span>
                      <span className="market-data">{category.count}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Price Filter */}
              <div className="mt-8">
                <h4 className="text-white text-md font-medium mb-4">Цена</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <input 
                      type="number" 
                      placeholder="от"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                      className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white text-sm"
                    />
                    <span className="text-gray-400">—</span>
                    <input 
                      type="number" 
                      placeholder="до"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                      className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white text-sm"
                    />
                  </div>
                  <button 
                    onClick={applyPriceFilter}
                    className="fintech-button w-full py-2 rounded text-sm"
                  >
                    Применить
                  </button>
                </div>
              </div>


            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort and View Options */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm">Найдено: {filteredProducts.length} товаров</span>
              </div>
              <div className="flex items-center space-x-4">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white text-sm"
                >
                  <option value="popularity">По популярности</option>
                  <option value="price-asc">По цене (возрастание)</option>
                  <option value="price-desc">По цене (убывание)</option>
                  <option value="name">По названию</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="dark-card rounded-lg p-6 relative flex flex-col h-full">
                  {/* Product Image */}
                  <div className="text-center mb-4">
                    <div className="w-full h-48 bg-gray-800 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <Image
                        src={getImagePath(product.image)}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          // Fallback на иконку если изображение не найдено
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = '<div class="text-6xl text-gray-600">📦</div>';
                        }}
                      />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="text-center flex-grow flex flex-col">
                    <h3 className="text-white text-lg font-medium mb-2 line-clamp-2">{product.name}</h3>
                    <p className="fintech-subtext text-sm mb-4 line-clamp-2">{product.small_description}</p>
                    
                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-white text-xl font-medium">{formatPrice(product.price).toLocaleString()} ₽</span>
                      </div>
                    </div>

                    {/* Category and Country */}
                    <div className="mb-4 space-y-1">
                      <div className="text-xs text-green-400">{product.category}</div>
                      <div className="text-xs text-gray-500">{product.country}</div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3 mt-auto">
                      <Link 
                        href={`/product/${product.id}`}
                        className="block fintech-button w-full py-2.5 rounded text-sm font-medium text-center"
                      >
                        Подробнее
                      </Link>
                      <button className="fintech-button-primary w-full py-2.5 rounded text-sm font-medium">
                        В корзину
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl text-gray-600 mb-4">🔍</div>
                <h3 className="text-white text-xl mb-2">Товары не найдены</h3>
                <p className="text-gray-400">Попробуйте изменить параметры поиска</p>
              </div>
            )}

            {/* Load More - показываем только если есть товары */}
            {filteredProducts.length > 0 && (
              <div className="text-center mt-12">
                <button className="fintech-button px-8 py-3 rounded text-lg font-medium tracking-wide">
                  Показать еще
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 