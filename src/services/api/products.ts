import { API_BASE_URL, CAFE_CATEGORIES } from '@/constants/api';
import type { Product } from '@/types';

type FoodMenuItem = {
  id: string;
  img: string;
  name: string;
  dsc: string;
  price: number;
  rate?: number;
  country?: string;
};

function mapToProduct(raw: FoodMenuItem, category: string): Product {
  return {
    id: raw.id,
    name: raw.name,
    description: raw.dsc,
    price: Number(raw.price),
    image: raw.img,
    category,
    inStock: true,
  };
}

async function fetchCategory(category: string): Promise<Product[]> {
  const res = await fetch(`${API_BASE_URL}/${category}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch ${category}: ${res.status}`);
  }

  const data: FoodMenuItem[] = await res.json();
  return (Array.isArray(data) ? data : []).map((item) =>
    mapToProduct(item, category)
  );
}

export async function fetchProducts(category?: string): Promise<Product[]> {
  if (category && category !== 'all') {
    return fetchCategory(category);
  }

  const results = await Promise.all(
    CAFE_CATEGORIES.map((cat) => fetchCategory(cat))
  );
  const seen = new Set<string>();
  return results.flat().filter((p) => {
    if (seen.has(p.id)) return false;
    seen.add(p.id);
    return true;
  });
}

export async function fetchProductById(id: string): Promise<Product | null> {
  const products = await fetchProducts();
  return products.find((p) => p.id === id) ?? null;
}
