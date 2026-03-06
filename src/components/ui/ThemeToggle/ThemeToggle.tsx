import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import { useThemeStore } from '@/store';
import { ToggleButton } from './styled';

export const ThemeToggle = () => {
  const { mode, toggleMode } = useThemeStore();

  return (
    <ToggleButton
      onClick={toggleMode}
      aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
    >
      {mode === 'light' ? <HiOutlineMoon /> : <HiOutlineSun />}
    </ToggleButton>
  );
};
