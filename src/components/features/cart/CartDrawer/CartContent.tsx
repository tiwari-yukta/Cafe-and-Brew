import { FaTimes, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';
import {
  Header,
  HeaderLeft,
  HeaderTitle,
  ItemCount,
  CloseButton,
  BackButton,
  WishlistLink,
  ScrollArea,
  Footer,
  SummaryRow,
  TotalRow,
  ProceedButton,
  EmptyWrapper,
  EmptyText,
} from './styled';
import { Button } from '@/components/ui';
import { EmptyStateDoodle, DoodleWrapper } from '@/components/ui';
import { CartDrawerItem } from './CartDrawerItem';
import { useCart, useCartContent } from '@/hooks';
import { ROUTES } from '@/constants/routes';

export type CartContentProps = {
  variant: 'drawer' | 'page';
  onClose?: () => void;
};

export const CartContent = ({ variant, onClose }: CartContentProps) => {
  const { items, itemCount, totalPrice } = useCart();
  const { handleProceed } = useCartContent(onClose);

  return (
    <>
      <Header>
        <HeaderLeft>
          {variant === 'drawer' ? (
            <CloseButton
              type="button"
              onClick={onClose}
              aria-label="Close cart"
            >
              <FaTimes />
            </CloseButton>
          ) : (
            <BackButton to={ROUTES.PRODUCTS} aria-label="Go back">
              <FaArrowLeft />
            </BackButton>
          )}
          <HeaderTitle>
            Bag
            <ItemCount>
              {itemCount} {itemCount === 1 ? 'item' : 'items'}
            </ItemCount>
          </HeaderTitle>
        </HeaderLeft>
        <WishlistLink to={ROUTES.WISHLIST} onClick={onClose}>
          View Wishlist
        </WishlistLink>
      </Header>

      {items.length === 0 ? (
        <EmptyWrapper>
          <DoodleWrapper>
            <EmptyStateDoodle variant="cart" />
          </DoodleWrapper>
          <EmptyText>
            Your cart is empty. Browse our menu to add something sweet!
          </EmptyText>
          <Button to={ROUTES.PRODUCTS} onClick={onClose}>
            <FaShoppingCart />
            View Menu
          </Button>
        </EmptyWrapper>
      ) : (
        <>
          <ScrollArea>
            {items.map((item) => (
              <CartDrawerItem key={item.id} item={item} />
            ))}
          </ScrollArea>
          <Footer>
            <SummaryRow>
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </SummaryRow>
            <TotalRow>
              <span>You Pay</span>
              <span>${totalPrice.toFixed(2)}</span>
            </TotalRow>
            <ProceedButton to={ROUTES.CHECKOUT} onClick={handleProceed}>
              Proceed to Checkout
              <span aria-hidden>→</span>
            </ProceedButton>
          </Footer>
        </>
      )}
    </>
  );
};
