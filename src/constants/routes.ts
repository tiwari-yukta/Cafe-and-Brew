export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: '/products/:id',
  CART: '/cart',
  WISHLIST: '/wishlist',
  RESERVATION: '/reservation',
  CHECKOUT: '/checkout',
  SUCCESS: '/success',
  LOGIN: '/login',
  SIGNUP: '/signup',
  ACCOUNT: '/account',
} as const;

export const HEADER_LINKS = [
  { path: ROUTES.HOME, label: 'Home' },
  { path: ROUTES.PRODUCTS, label: 'Menu' },
  { path: ROUTES.RESERVATION, label: 'Reserve' },
] as const;
