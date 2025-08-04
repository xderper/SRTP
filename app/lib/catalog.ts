export interface Product {
  name: string;
  small_description: string;
  description: string;
  price: string;
  image: string;
  features: string[];
  category: string;
  length_work: string;
  length: string;
  weight: string;
  material_handle: string;
  material_blade: string;
  cover: string;
  country: string;
  guarantee: string;
  quantity: string;
}

export interface ProductWithId extends Product {
  id: number;
}

export async function getCatalogData(): Promise<Product[]> {
  const response = await fetch('/catalog.json');
  if (!response.ok) {
    throw new Error('Failed to fetch catalog data');
  }
  return response.json();
}

export function getProductById(products: Product[], id: number): ProductWithId | null {
  const product = products[id - 1];
  if (!product) return null;
  
  return {
    ...product,
    id: id
  };
}

export function getProductsByCategory(products: Product[], category: string): ProductWithId[] {
  if (category === 'all') {
    return products.map((product, index) => ({
      ...product,
      id: index + 1
    }));
  }
  
  return products
    .map((product, index) => ({
      ...product,
      id: index + 1
    }))
    .filter(product => product.category === category);
}

export function getUniqueCategories(products: Product[]): Array<{id: string, name: string, count: number}> {
  const categoryMap = new Map<string, number>();
  
  products.forEach(product => {
    const count = categoryMap.get(product.category) || 0;
    categoryMap.set(product.category, count + 1);
  });
  
  const categories = [
    { id: 'all', name: 'Все товары', count: products.length }
  ];
  
  categoryMap.forEach((count, category) => {
    categories.push({
      id: category,
      name: category,
      count: count
    });
  });
  
  return categories;
}

export function formatPrice(price: string): number {
  // Удаляем все нецифровые символы кроме точки и запятой
  const cleanPrice = price.replace(/[^\d.,]/g, '');
  return parseInt(cleanPrice) || 0;
}

export function getImagePath(imageName: string): string {
  return `/images/${imageName}`;
} 