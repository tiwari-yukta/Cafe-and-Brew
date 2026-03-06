import { useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { signInWithEmail, signInWithGoogle } from '@/services/auth';
import { getAuthErrorMessage } from '@/utils/authErrors';
import { ROUTES } from '@/constants/routes';

export function useLoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState<string | null>(null);

  const from = (location.state as { from?: string })?.from ?? ROUTES.HOME;

  const handleEmailSignIn = useCallback(
    async (values: { email: string; password: string }) => {
      setError(null);
      try {
        await signInWithEmail(values.email, values.password);
        navigate(from, { replace: true });
      } catch (err) {
        setError(getAuthErrorMessage(err));
      }
    },
    [from, navigate]
  );

  const handleGoogleSignIn = useCallback(async () => {
    setError(null);
    try {
      await signInWithGoogle();
      navigate(from, { replace: true });
    } catch (err) {
      setError(getAuthErrorMessage(err));
    }
  }, [from, navigate]);

  return { error, handleEmailSignIn, handleGoogleSignIn };
}
