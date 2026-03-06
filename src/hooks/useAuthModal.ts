import { useState, useEffect, useCallback } from 'react';
import { updateProfile } from 'firebase/auth';
import { signInWithEmail, signUpWithEmail, signInWithGoogle } from '@/services/auth';
import { getAuthErrorMessage } from '@/utils/authErrors';

export function useAuthModal(
  isOpen: boolean,
  defaultMode: 'signup' | 'signin',
  onClose: () => void
) {
  const [mode, setMode] = useState<'signup' | 'signin'>(defaultMode);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setMode(defaultMode);
      setError(null);
    }
  }, [isOpen, defaultMode]);

  const handleGoogleAuth = useCallback(async () => {
    setError(null);
    try {
      await signInWithGoogle();
      onClose();
    } catch (err) {
      setError(getAuthErrorMessage(err));
    }
  }, [onClose]);

  const handleEmailSignIn = useCallback(
    async (values: { email: string; password: string }) => {
      setError(null);
      try {
        await signInWithEmail(values.email, values.password);
        onClose();
      } catch (err) {
        setError(getAuthErrorMessage(err));
      }
    },
    [onClose]
  );

  const handleEmailSignUp = useCallback(
    async (values: { name: string; email: string; password: string }) => {
      setError(null);
      try {
        const { user } = await signUpWithEmail(values.email, values.password);
        if (user) {
          await updateProfile(user, { displayName: values.name });
        }
        onClose();
      } catch (err) {
        setError(getAuthErrorMessage(err));
      }
    },
    [onClose]
  );

  const switchToSignIn = useCallback(() => {
    setMode('signin');
    setError(null);
  }, []);

  const switchToSignUp = useCallback(() => {
    setMode('signup');
    setError(null);
  }, []);

  return {
    mode,
    error,
    handleGoogleAuth,
    handleEmailSignIn,
    handleEmailSignUp,
    switchToSignIn,
    switchToSignUp,
  };
}
