import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '@/types';

type WishlistStore = {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
};

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) => {
        set((state) => {
          if (state.items.some((i) => i.id === product.id)) {
            return state;
          }
          return { items: [...state.items, product] };
        });
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== productId),
        }));
      },

      isInWishlist: (productId) =>
        get().items.some((i) => i.id === productId),
    }),
    { name: 'cafe-and-brew-wishlist' }
  )
);
