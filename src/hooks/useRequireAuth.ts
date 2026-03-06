import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './useAuth';
import { ROUTES } from '@/constants/routes';

export const useRequireAuth = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const requireAuth = useCallback(
    (action: () => void) => {
      if (!user) {
        navigate(ROUTES.LOGIN, { state: { from: location.pathname } });
        return;
      }
      action();
    },
    [user, navigate, location.pathname]
  );

  return { requireAuth, isAuthenticated: Boolean(user) };
};
