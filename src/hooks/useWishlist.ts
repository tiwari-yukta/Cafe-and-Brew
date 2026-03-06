import { useWishlistStore } from '@/store';

export function useWishlist() {
  const items = useWishlistStore((state) => state.items);
  const addItem = useWishlistStore((state) => state.addItem);
  const removeItem = useWishlistStore((state) => state.removeItem);
  const isInWishlist = useWishlistStore((state) => state.isInWishlist);

  return {
    items,
    addItem,
    removeItem,
    isInWishlist,
  };
}
