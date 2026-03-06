import { useState, useMemo } from 'react';
import {
  PageWrapper,
  PageHeader,
  Filters,
  SearchWrapper,
  CategoryButtons,
  CategoryBtn,
  LoadingState,
  LoadingTextWrapper,
  TitleWrapper,
} from './styled';
import { Input, LoadingSpinner, Typography } from '@/components/ui';
import { ProductGrid } from '@/components/features/products';
import { useProducts } from '@/hooks';
import { PRODUCT_CATEGORIES } from '@/constants/categories';

export const ProductsPage = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string>('all');

  const { data: products = [], isLoading, error } = useProducts(category);

  const filteredProducts = useMemo(() => {
    if (!search.trim()) return products;
    const q = search.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [products, search]);

  if (error) {
    return (
      <PageWrapper>
        <Typography name="error">Failed to load products. Please try again.</Typography>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <PageHeader>
        <TitleWrapper>
          <Typography name="display">Our Menu</Typography>
        </TitleWrapper>
        <Filters>
          <SearchWrapper>
            <Input
              placeholder="Search menu..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
            />
          </SearchWrapper>
          <CategoryButtons>
            {PRODUCT_CATEGORIES.map((cat) => (
              <CategoryBtn
                key={cat.value}
                $active={category === cat.value}
                onClick={() => setCategory(cat.value)}
              >
                {cat.label}
              </CategoryBtn>
            ))}
          </CategoryButtons>
        </Filters>
      </PageHeader>

      {isLoading ? (
        <LoadingState>
          <LoadingSpinner />
          <LoadingTextWrapper>
            <Typography name="secondary">Loading our delicious offerings...</Typography>
          </LoadingTextWrapper>
        </LoadingState>
      ) : (
        <ProductGrid products={filteredProducts} />
      )}
    </PageWrapper>
  );
};
