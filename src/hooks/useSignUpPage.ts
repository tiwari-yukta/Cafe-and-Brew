import { useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { signUpWithEmail, signInWithGoogle } from '@/services/auth';
import { getAuthErrorMessage } from '@/utils/authErrors';
import { ROUTES } from '@/constants/routes';

export function useSignUpPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState<string | null>(null);

  const from = (location.state as { from?: string })?.from ?? ROUTES.HOME;

  const handleEmailSignUp = useCallback(
    async (values: {
      name: string;
      email: string;
      password: string;
    }) => {
      setError(null);
      try {
        const { user } = await signUpWithEmail(values.email, values.password);
        if (user) {
          await updateProfile(user, { displayName: values.name });
        }
        navigate(from, { replace: true });
      } catch (err) {
        setError(getAuthErrorMessage(err));
      }
    },
    [from, navigate]
  );

  const handleGoogleSignUp = useCallback(async () => {
    setError(null);
    try {
      await signInWithGoogle();
      navigate(from, { replace: true });
    } catch (err) {
      setError(getAuthErrorMessage(err));
    }
  }, [from, navigate]);

  return { error, handleEmailSignUp, handleGoogleSignUp };
}
