export const getAuthErrorMessage = (error: unknown): string => {
  if (typeof error !== 'object' || error === null) return 'Something went wrong';

  const err = error as { code?: string; message?: string };
  const code = err.code ?? '';

  const messages: Record<string, string> = {
    'auth/email-already-in-use': 'This email is already registered. Try signing in instead.',
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/operation-not-allowed': 'This sign-in method is not enabled. Please contact support.',
    'auth/weak-password': 'Password should be at least 6 characters.',
    'auth/user-disabled': 'This account has been disabled.',
    'auth/user-not-found': 'No account found with this email.',
    'auth/wrong-password': 'Incorrect password.',
    'auth/invalid-credential': 'Invalid email or password.',
    'auth/popup-closed-by-user': 'Sign-in was cancelled.',
    'auth/popup-blocked': 'Pop-up was blocked. Please allow pop-ups for this site.',
    'auth/cancelled-popup-request': 'Please complete the sign-in in the pop-up window.',
  };

  return messages[code] ?? err.message ?? 'Something went wrong';
};
