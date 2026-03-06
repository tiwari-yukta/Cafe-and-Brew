import { Outlet } from 'react-router-dom';
import { LayoutWrapper, Main } from './styled';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { CartDrawer } from '@/components/features/cart/CartDrawer';

export const MainLayout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
      <CartDrawer />
    </LayoutWrapper>
  );
};
