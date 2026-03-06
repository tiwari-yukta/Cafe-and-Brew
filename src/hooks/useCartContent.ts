import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

export function useCartContent(onClose?: () => void) {
  const navigate = useNavigate();

  const handleProceed = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      onClose?.();
      navigate(ROUTES.CHECKOUT, { replace: false });
    },
    [onClose, navigate]
  );

  return { handleProceed };
}
