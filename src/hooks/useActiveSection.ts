import { useEffect, useState } from 'react';

/** Returns the id of the section currently in view, or null. Pass enabled=false on pages without these sections. */
export function useActiveSection(ids: string[], enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled || typeof IntersectionObserver === 'undefined') {
      setActive(null);
      return;
    }
    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => ratios.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0));
        let best: string | null = null;
        let bestRatio = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        });
        setActive(best);
      },
      { rootMargin: '-30% 0px -45% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids, enabled]);

  return active;
}
