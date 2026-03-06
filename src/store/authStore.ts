import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from 'firebase/auth';

export type AuthUser = {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  phoneNumber: string | null;
};

type AuthStore = {
  user: AuthUser | null;
  isLoading: boolean;
  setUser: (user: AuthUser | null) => void;
  setLoading: (loading: boolean) => void;
  setUserFromFirebase: (user: User | null) => void;
  logout: () => void;
};

const userFromFirebase = (user: User | null): AuthUser | null => {
  if (!user) return null;
  return {
    uid: user.uid,
    email: user.email ?? null,
    displayName: user.displayName ?? null,
    photoURL: user.photoURL ?? null,
    phoneNumber: user.phoneNumber ?? null,
  };
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isLoading: true,

      setUser: (user) => set({ user }),

      setLoading: (isLoading) => set({ isLoading }),

      setUserFromFirebase: (user) => {
        set({ user: userFromFirebase(user), isLoading: false });
      },

      logout: () => set({ user: null }),
    }),
    {
      name: 'cafe-and-brew-auth',
      partialize: (s) => ({
        user: s.user,
        isLoading: s.user ? false : s.isLoading,
      }),
    }
  )
);
