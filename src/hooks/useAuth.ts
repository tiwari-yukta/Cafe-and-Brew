import { useEffect } from 'react';
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
import { auth } from '@/config/firebase';
import { useAuthStore } from '@/store/authStore';

export const useAuth = () => {
  const { user, isLoading, setUserFromFirebase, logout: storeLogout } = useAuthStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUserFromFirebase(firebaseUser);
    });
    return () => unsubscribe();
  }, [setUserFromFirebase]);

  const logout = async () => {
    await firebaseSignOut(auth);
    storeLogout();
  };

  return { user, isLoading, logout };
};
