import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rahul M.",
    role: "E-Commerce Owner",
    quote: "PBSRK completely transformed my online store. Sales went up 250% in just 2 months. Absolute game-changer!",
  },
  {
    name: "Priya S.",
    role: "Startup Founder",
    quote: "The AI chatbot he built handles 60% of our support tickets automatically. Best investment we made this year.",
  },
  {
    name: "Arjun K.",
    role: "Restaurant Owner",
    quote: "Our Instagram following tripled after his branding work. The designs are absolutely stunning and professional.",
  },
  {
    name: "Sneha D.",
    role: "Fashion Brand CEO",
    quote: "The Meta ads campaign delivered 5.2x ROAS. PBSRK knows exactly how to target the right audience.",
  },
];

export const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono text-xs text-primary tracking-widest uppercase">Testimonials</span>
          <h2 className="font-display font-black text-3xl md:text-4xl mt-3 text-foreground">
            Client <span className="text-gradient">Love</span>
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="w-full flex-shrink-0 px-4">
                <div className="glass rounded-2xl p-8 text-center max-w-xl mx-auto">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                    <span className="font-display font-bold text-primary-foreground text-lg">
                      {t.name[0]}
                    </span>
                  </div>
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground italic mb-4">"{t.quote}"</p>
                  <p className="font-display font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1} of ${testimonials.length}`}
              aria-current={i === active ? "true" : undefined}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === active ? "bg-primary w-6" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
