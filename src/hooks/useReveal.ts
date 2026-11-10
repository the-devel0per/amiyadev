import { useEffect, useRef } from 'react';

/**
 * Reveals the element once when it enters the viewport.
 * Content stays visible if IntersectionObserver is unavailable or the element
 * is already on screen at mount.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) return;

    el.dataset.reveal = 'pending';
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.reveal = 'done';
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
