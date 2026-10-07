import { useEffect, useRef, useState } from "react";

export const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setVisible(false);
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reveal = () => { if (media.matches) setVisible(true); };
    media.addEventListener('change', reveal);
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold }
    );
    observer.observe(el);
    return () => { observer.disconnect(); media.removeEventListener('change', reveal); };
  }, [threshold]);

  return { ref, visible };
};
