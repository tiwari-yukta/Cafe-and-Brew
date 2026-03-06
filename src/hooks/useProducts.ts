import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/services/api';

export const useProducts = (category?: string) => {
  return useQuery({
    queryKey: ['products', category === 'all' ? undefined : category],
    queryFn: () => fetchProducts(category === 'all' ? undefined : category),
  });
};
