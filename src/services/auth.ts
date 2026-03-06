import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  type UserCredential,
} from 'firebase/auth';
import { auth } from '@/config/firebase';

const ensureAuth = () => {
  if (!auth) {
    throw new Error('Firebase Auth is not configured. Add VITE_FIREBASE_* env vars in Vercel.');
  }
};

export const signInWithEmail = (email: string, password: string): Promise<UserCredential> => {
  ensureAuth();
  return signInWithEmailAndPassword(auth!, email, password);
};

export const signUpWithEmail = (email: string, password: string): Promise<UserCredential> => {
  ensureAuth();
  return createUserWithEmailAndPassword(auth!, email, password);
};

export const signInWithGoogle = (): Promise<UserCredential> => {
  ensureAuth();
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth!, provider);
};
