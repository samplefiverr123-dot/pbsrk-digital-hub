import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => (
  <a
    href="https://wa.me/918185967282?text=Hey%20PBSRK!%20I%27d%20like%20to%20discuss%20a%20project."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary flex items-center justify-center animate-pulse-glow hover:scale-110 transition-transform duration-300"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-6 h-6 text-primary-foreground" />
  </a>
);
