import { useCallback, useState } from 'react';

export type Theme = 'light' | 'dark';

const readTheme = (): Theme =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'light';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  const toggle = useCallback(() => {
    const next: Theme = readTheme() === 'dark' ? 'light' : 'dark';
    const root = document.documentElement;
    root.classList.add('theme-transition');
    root.classList.toggle('dark', next === 'dark');
    root.style.colorScheme = next;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', next === 'dark' ? '#000000' : '#FFFFFF');
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage unavailable — preference just won't persist */
    }
    window.setTimeout(() => root.classList.remove('theme-transition'), 250);
    setTheme(next);
  }, []);

  return { theme, toggle };
}
