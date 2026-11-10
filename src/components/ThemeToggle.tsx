import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const Icon = theme === 'light' ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted transition-[background-color,color,transform] duration-200 ease-smooth hover:bg-hover hover:text-fg active:scale-95 motion-reduce:active:scale-100"
    >
      <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
    </button>
  );
}
