import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that returns true when the element is in view.
 * Uses IntersectionObserver for performance.
 */
export function useInView(ref, options = { threshold: 0.15, once: true }) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (options.once) observer.unobserve(el);
      }
    }, { threshold: options.threshold });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options.threshold, options.once]);

  return inView;
}
