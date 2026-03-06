// Core domain types
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
};

export type ProductCategory = string;

export type CartItem = Product & {
  quantity: number;
};

export type ReservationFormValues = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests: string;
};

export type Reservation = ReservationFormValues & {
  id: string;
  userId: string;
  createdAt: number;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};
