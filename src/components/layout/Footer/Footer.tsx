import {
  FooterContainer,
  Content,
  Brand,
  Links,
  StyledLink,
  CartLinkButton,
  MobileNav,
  MobileNavLinks,
  MobileNavLink,
  MobileNavButton,
  MobileNavCartWrapper,
  MobileNavCartBadge,
  CopyrightWrapper,
} from './styled';
import { Typography } from '@/components/ui';
import {
  FaHeart,
  FaHome,
  FaShoppingCart,
  FaCoffee,
  FaChair,
} from 'react-icons/fa';
import { ROUTES } from '@/constants/routes';
import { useCartDrawer } from '@/components/features/cart/CartDrawer';
import { useCart } from '@/hooks';

const CORE_NAV_ITEMS = [
  { path: ROUTES.HOME, label: 'Home', Icon: FaHome },
  { path: ROUTES.PRODUCTS, label: 'Menu', Icon: FaCoffee },
  { path: ROUTES.RESERVATION, label: 'Reserve', Icon: FaChair },
  { path: ROUTES.CART, label: 'Cart', Icon: FaShoppingCart, isCart: true },
  { path: ROUTES.WISHLIST, label: 'Wishlist', Icon: FaHeart },
] as const;

export const Footer = () => {
  const { open: openCartDrawer } = useCartDrawer();
  const { itemCount } = useCart();

  return (
    <FooterContainer>
      <MobileNav aria-label="Mobile navigation">
        <MobileNavLinks>
          {CORE_NAV_ITEMS.map((item) => {
            const { path, label, Icon } = item;
            const isCart = 'isCart' in item && item.isCart;
            return isCart ? (
              <MobileNavButton
                key={path}
                onClick={openCartDrawer}
                type="button"
                aria-label="Open cart"
              >
                <MobileNavCartWrapper>
                  <Icon />
                  {itemCount > 0 && (
                    <MobileNavCartBadge>{itemCount}</MobileNavCartBadge>
                  )}
                </MobileNavCartWrapper>
                <span>{label}</span>
              </MobileNavButton>
            ) : (
              <MobileNavLink key={path} to={path}>
                <Icon />
                <span>{label}</span>
              </MobileNavLink>
            );
          })}
        </MobileNavLinks>
      </MobileNav>
      <Content>
        <Brand to="/">Café and Brew</Brand>
        <Links>
          <StyledLink to="/products">Menu</StyledLink>
          <StyledLink to="/reservation">Reservations</StyledLink>
          <CartLinkButton type="button" onClick={openCartDrawer}>
            Cart
          </CartLinkButton>
        </Links>
        <CopyrightWrapper>
          <Typography name="secondarySm">
            © {new Date().getFullYear()} Café and Brew. All rights reserved.
          </Typography>
        </CopyrightWrapper>
      </Content>
    </FooterContainer>
  );
};
