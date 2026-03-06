import { memo } from 'react';
import { CartContent, CartPageLayout } from '@/components/features/cart/CartDrawer';

export const CartPage = memo(function CartPage() {
  return (
    <CartPageLayout>
      <CartContent variant="page" />
    </CartPageLayout>
  );
});
