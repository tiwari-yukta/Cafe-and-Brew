import { memo } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { Button, Typography } from '@/components/ui';
import { WishlistItem } from '@/components/features/wishlist';
import { useWishlist } from '@/hooks';
import { EmptyStateDoodle, DoodleWrapper } from '@/components/ui';
import {
  PageWrapper,
  EmptyStateWrapper,
  TitleWrapper,
  EmptyStateTextWrapper,
  ItemList,
} from './styled';

export const WishlistPage = memo(function WishlistPage() {
  const { items } = useWishlist();

  if (items.length === 0) {
    return (
      <PageWrapper>
        <EmptyStateWrapper>
          <DoodleWrapper>
            <EmptyStateDoodle variant="wishlist" />
          </DoodleWrapper>
          <TitleWrapper>
            <Typography name="display">Your Wishlist</Typography>
          </TitleWrapper>
          <EmptyStateTextWrapper>
            <Typography name="secondary">
              Nothing in your wishlist yet. Add items from our menu to save them for
              later!
            </Typography>
          </EmptyStateTextWrapper>
          <Button to="/products">
            <FaShoppingBag />
            Browse Menu
          </Button>
        </EmptyStateWrapper>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <TitleWrapper>
        <Typography name="display">Your Wishlist</Typography>
      </TitleWrapper>
      <ItemList>
        {items.map((product) => (
          <WishlistItem key={product.id} product={product} />
        ))}
      </ItemList>
    </PageWrapper>
  );
});
