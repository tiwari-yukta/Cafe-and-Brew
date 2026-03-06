import { useEffect } from 'react';
import { useThemeStore } from '@/store';

export const ThemeModeSync = () => {
  const mode = useThemeStore((state) => state.mode);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  return null;
};
