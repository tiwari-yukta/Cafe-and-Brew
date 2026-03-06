import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, ThemeModeSync } from '@/theme';
import { CursorEffects } from '@/components/effects/CursorEffects';
import { CartDrawerProvider } from '@/components/features/cart/CartDrawer';
import { MainLayout } from '@/components/layout';
import {
  HomePage,
  ProductsPage,
  ProductDetailPage,
  CartPage,
  WishlistPage,
  ReservationPage,
  CheckoutPage,
  SuccessPage,
  LoginPage,
  SignUpPage,
  AccountPage,
} from '@/pages';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ThemeModeSync />
        <CursorEffects />
        <CartDrawerProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="products/:id" element={<ProductDetailPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="wishlist" element={<WishlistPage />} />
              <Route path="reservation" element={<ReservationPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="success" element={<SuccessPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignUpPage />} />
              <Route path="account" element={<AccountPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        </CartDrawerProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
