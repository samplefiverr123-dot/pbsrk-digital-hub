import { useScrollReveal } from "@/hooks/useScrollReveal";
import { type ReactNode } from "react";

export const ScrollReveal = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const { ref, visible } = useScrollReveal(0.12);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
};
