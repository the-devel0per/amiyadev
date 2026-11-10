import { useSyncExternalStore } from 'react';

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener('popstate', callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener('popstate', callback);
  };
}

export function usePath(): string {
  const raw = useSyncExternalStore(subscribe, () => window.location.pathname);
  return raw.length > 1 ? raw.replace(/\/+$/, '') : raw;
}

function scrollToTarget(hash: string) {
  if (hash) {
    const el = document.getElementById(hash.slice(1));
    if (el) {
      el.scrollIntoView();
      return;
    }
  }
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
}

export function navigate(to: string) {
  const url = new URL(to, window.location.origin);
  window.history.pushState(null, '', url.pathname + url.search + url.hash);
  listeners.forEach((l) => l());
  requestAnimationFrame(() => scrollToTarget(url.hash));
}

export { scrollToTarget };
