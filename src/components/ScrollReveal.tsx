import { useScrollReveal } from "@/hooks/useScrollReveal";
import { type ReactNode } from "react";

export const ScrollReveal = ({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => {
  const { ref, visible } = useScrollReveal(0.12);
  return (
    <div
      ref={ref}
      className={`scroll-reveal ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${className}`}
      style={{ transitionDelay: `${Math.min(delay, 250)}ms` }}
    >
      {children}
    </div>
  );
};
