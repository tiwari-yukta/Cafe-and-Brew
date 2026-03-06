import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Drawer } from './styled';
import { CartContent } from './CartContent';
import { useCartDrawer } from './CartDrawerContext';

export const CartDrawer = () => {
  const { isOpen, close } = useCartDrawer();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return createPortal(
    <Overlay onClick={close} role="dialog" aria-modal="true" aria-label="Shopping cart">
      <Drawer onClick={(e) => e.stopPropagation()}>
        <CartContent variant="drawer" onClose={close} />
      </Drawer>
    </Overlay>,
    document.body
  );
};
