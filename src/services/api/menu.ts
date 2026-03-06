import { fetchProducts } from './products';
import type { MenuItem } from '@/types';

function toMenuItem(product: {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}): MenuItem {
  return {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    image: product.image,
    category: product.category,
  };
}

export async function fetchMenu(): Promise<MenuItem[]> {
  const products = await fetchProducts();
  return products.map(toMenuItem);
}
