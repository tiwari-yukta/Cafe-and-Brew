import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui';
import { CartDrawerItem } from '@/components/features/cart/CartDrawer';
import { useCart } from '@/hooks';
import {
  PageWrapper,
  BagCard,
  BagHeader,
  BagTitle,
  BagCount,
  BagItems,
  ItemsScrollArea,
  SummarySticky,
  SummaryStickyInner,
  TotalRow,
  TotalLabel,
  TotalValue,
  ButtonWrapper,
} from './styled';

export const CheckoutPage = memo(function CheckoutPage() {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();

  const handlePlaceOrder = () => {
    clearCart();
    navigate('/success', {
      state: {
        type: 'order',
        orderId: `ORD-${Date.now().toString(36).toUpperCase()}`,
      },
    });
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  const itemCount = items.length;
  const itemLabel = itemCount === 1 ? '1 Item' : `${itemCount} Items`;

  return (
    <PageWrapper>
      <ItemsScrollArea>
        <BagCard>
          <BagHeader>
            <BagTitle>Bag</BagTitle>
            <BagCount>{itemLabel}</BagCount>
          </BagHeader>
          <BagItems>
            {items.map((item) => (
              <CartDrawerItem key={item.id} item={item} />
            ))}
          </BagItems>
        </BagCard>
      </ItemsScrollArea>

      <SummarySticky>
        <SummaryStickyInner>
          <TotalRow>
            <TotalLabel>Order Total</TotalLabel>
            <TotalValue>${totalPrice.toFixed(2)}</TotalValue>
          </TotalRow>
          <ButtonWrapper>
            <Button fullWidth buttonSize="lg" onClick={handlePlaceOrder}>
              Place Order
            </Button>
          </ButtonWrapper>
        </SummaryStickyInner>
      </SummarySticky>
    </PageWrapper>
  );
});
