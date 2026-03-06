import { useLocation } from 'react-router-dom';
import {
  HeaderContainer,
  Nav,
  Logo,
  NavLinks,
  NavLink,
  CartButtonWrapper,
  CartBadge,
  ThemeAndAuth,
  MobileHeaderActions,
} from './styled';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Button, ThemeToggle } from '@/components/ui';
import { UserMenu } from '@/components/features/auth';
import { useCart } from '@/hooks';
import { useCartDrawer } from '@/components/features/cart/CartDrawer';
import { HEADER_LINKS, ROUTES } from '@/constants/routes';

export const Header = () => {
  const location = useLocation();
  const { itemCount } = useCart();
  const { open: openCartDrawer } = useCartDrawer();

  return (
    <HeaderContainer>
      <Nav>
        <Logo to={ROUTES.HOME}>Café and Brew</Logo>
        <MobileHeaderActions>
          <ThemeToggle />
          <UserMenu />
        </MobileHeaderActions>
        <NavLinks>
          {HEADER_LINKS.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              $active={
                location.pathname === path ||
                (path !== '/' && location.pathname.startsWith(path))
              }
            >
              {label}
            </NavLink>
          ))}
          <CartButtonWrapper>
            <Button
              variant="ghost"
              buttonSize="sm"
              onClick={openCartDrawer}
            >
              <FaShoppingCart />
              Cart
              {itemCount > 0 && <CartBadge>{itemCount}</CartBadge>}
            </Button>
          </CartButtonWrapper>
          <Button to={ROUTES.WISHLIST} variant="ghost" buttonSize="sm">
            <FaHeart />
            Wishlist
          </Button>
          <ThemeAndAuth>
            <ThemeToggle />
            <UserMenu />
          </ThemeAndAuth>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};
