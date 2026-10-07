import { useEffect, useState } from "react";

export function useMotionPreferences() {
  const [reduced, setReduced] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [pageVisible, setPageVisible] = useState(() => !document.hidden);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    const visibility = () => setPageVisible(!document.hidden);
    media.addEventListener("change", update);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      media.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);
  return { reduced, pageVisible };
}