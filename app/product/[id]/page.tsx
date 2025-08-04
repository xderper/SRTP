'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Product, ProductWithId, getCatalogData, getProductById, getProductsByCategory, formatPrice, getImagePath } from "../../lib/catalog";
import Image from "next/image";

export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState<ProductWithId | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<ProductWithId[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function loadData() {
      try {
        const catalogData = await getCatalogData();
        const productId = parseInt(params.id as string);
        const productData = getProductById(catalogData, productId);
        
        if (productData) {
          setProduct(productData);
          // Загружаем похожие товары из той же категории
          const related = getProductsByCategory(catalogData, productData.category)
            .filter(p => p.id !== productData.id)
            .slice(0, 3);
          setRelatedProducts(related);
        }
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setLoading(false);
      }
    }
    
    loadData();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black data-grid flex items-center justify-center">
        <div className="text-white text-xl">Загрузка товара...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-black data-grid flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl text-gray-600 mb-4">😞</div>
          <h1 className="text-white text-2xl mb-2">Товар не найден</h1>
          <p className="text-gray-400 mb-6">Возможно, товар был удален или ID указан неверно</p>
          <Link 
            href="/catalog"
            className="fintech-button px-6 py-3 rounded text-lg font-medium"
          >
            Вернуться в каталог
          </Link>
        </div>
      </div>
    );
  }

  // Создаем массив изображений (пока только одно)
  const images = [product.image];

  return (
    <div className="min-h-screen bg-black data-grid">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white">Главная</Link>
            <span>›</span>
            <Link href="/catalog" className="hover:text-white">Каталог</Link>
            <span>›</span>
            <span className="text-green-400">{product.category}</span>
            <span>›</span>
            <span className="text-white">{product.name}</span>
          </nav>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="dark-card rounded-lg p-8 mb-6">
              <div className="text-center">
                <div className="w-full h-96 bg-gray-800 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                  <Image
                    src={getImagePath(images[selectedImage])}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = '<div class="text-8xl text-gray-600">📦</div>';
                    }}
                  />
                </div>
                {images.length > 1 && (
                  <div className="flex justify-center space-x-4">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-16 h-16 rounded border-2 flex items-center justify-center overflow-hidden transition-all duration-300 ${
                          selectedImage === index
                            ? 'border-green-400 bg-green-400/10'
                            : 'border-gray-700 hover:border-gray-500'
                        }`}
                      >
                        <Image
                          src={getImagePath(image)}
                          alt={product.name}
                          width={60}
                          height={60}
                          className="object-cover w-full h-full"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Product Features */}
            <div className="dark-card rounded-lg p-6">
              <h3 className="text-white text-lg font-medium mb-4">Особенности товара</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    <span className="fintech-subtext text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              {/* Category Badge */}
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-green-400/20 text-green-400 px-3 py-1 rounded text-sm font-medium border border-green-400/30">
                  {product.category}
                </span>
                <span className="market-data text-gray-400">{product.country}</span>
              </div>

              <h1 className="fintech-headline text-3xl md:text-4xl font-light mb-4">{product.name}</h1>
              
              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-white text-3xl font-medium">{formatPrice(product.price).toLocaleString()} ₽</span>
                </div>
              </div>

              {/* Short Description */}
              <p className="fintech-subtext text-lg mb-4 leading-relaxed">{product.small_description}</p>

              {/* Description */}
              <p className="fintech-subtext text-base mb-8 leading-relaxed">{product.description}</p>

              {/* Add to Cart */}
              <div className="dark-card rounded-lg p-6 mb-8">
                <div className="flex items-center space-x-4 mb-6">
                  <label className="text-white text-sm">Количество:</label>
                  <div className="flex items-center border border-gray-700 rounded">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-gray-400 hover:text-white"
                    >
                      −
                    </button>
                    <span className="px-4 py-2 text-white border-x border-gray-700">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-gray-400 hover:text-white"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-gray-400 text-sm">
                    Итого: {(formatPrice(product.price) * quantity).toLocaleString()} ₽
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button className="fintech-button-primary py-3 rounded text-lg font-medium">
                    В корзину
                  </button>
                  <button className="fintech-button py-3 rounded text-lg font-medium">
                    Купить в 1 клик
                  </button>
                </div>

                <div className="mt-4 space-y-2 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <span>🚚</span>
                    <span>Доставка по России от 200 ₽</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>🔄</span>
                    <span>Возврат в течение 14 дней</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>🛡️</span>
                    <span>Гарантия {product.guarantee}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="dark-card rounded-lg p-6">
              <h3 className="text-white text-lg font-medium mb-4">Характеристики</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="fintech-subtext">Длина рабочей части</span>
                  <span className="text-white">{product.length_work}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="fintech-subtext">Общая длина</span>
                  <span className="text-white">{product.length}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="fintech-subtext">Вес</span>
                  <span className="text-white">{product.weight}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="fintech-subtext">Материал рукоятки</span>
                  <span className="text-white">{product.material_handle}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="fintech-subtext">Материал лезвия</span>
                  <span className="text-white">{product.material_blade}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="fintech-subtext">Покрытие</span>
                  <span className="text-white">{product.cover}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="fintech-subtext">Страна производства</span>
                  <span className="text-white">{product.country}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="fintech-subtext">Гарантия</span>
                  <span className="text-white">{product.guarantee}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="fintech-subtext">Количество в упаковке</span>
                  <span className="text-white">{product.quantity}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="fintech-headline text-2xl font-light mb-8">Похожие товары</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="dark-card rounded-lg p-6">
                  <div className="text-center">
                    <div className="w-full h-32 bg-gray-800 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <Image
                        src={getImagePath(relatedProduct.image)}
                        alt={relatedProduct.name}
                        width={120}
                        height={120}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = '<div class="text-4xl text-gray-600">📦</div>';
                        }}
                      />
                    </div>
                    <h3 className="text-white text-lg font-medium mb-2 line-clamp-2">{relatedProduct.name}</h3>
                    <div className="text-white text-xl font-medium mb-4">{formatPrice(relatedProduct.price).toLocaleString()} ₽</div>
                    <Link 
                      href={`/product/${relatedProduct.id}`}
                      className="fintech-button w-full py-2 rounded text-sm font-medium inline-block text-center"
                    >
                      Подробнее
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 