import { Grid } from './styled';
import { ProductCard } from '../ProductCard';
import type { Product } from '@/types';

export type ProductGridProps = {
  products: Product[];
};

export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <Grid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
};
