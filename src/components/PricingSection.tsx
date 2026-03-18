import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "₹4,999",
    desc: "Perfect for small projects & quick wins",
    features: [
      "1 Custom Website / Landing Page",
      "Basic SEO Setup",
      "Mobile Responsive Design",
      "2 Revisions",
      "3-Day Delivery",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₹9,999",
    desc: "Best for growing businesses",
    features: [
      "Full Website + Branding Package",
      "AI Chatbot Integration",
      "Advanced SEO & Analytics",
      "Social Media Graphics (10 posts)",
      "5 Revisions",
      "7-Day Delivery",
      "1 Month Support",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "₹19,999",
    desc: "Complete digital transformation",
    features: [
      "Everything in Growth",
      "Meta Ads Campaign Setup & Management",
      "Custom Automation Tools",
      "Full Brand Identity Package",
      "Unlimited Revisions",
      "14-Day Delivery",
      "3 Months Priority Support",
    ],
    highlighted: false,
  },
];

export const PricingSection = () => (
  <section id="pricing" className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="font-mono text-xs text-primary tracking-widest uppercase">Pricing</span>
        <h2 className="font-display font-black text-3xl md:text-4xl mt-3 text-foreground">
          Simple <span className="text-gradient">Plans</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`glass rounded-2xl p-6 flex flex-col transition-all duration-500 hover:-translate-y-1 ${
              t.highlighted
                ? "glow-purple border-accent/50 scale-[1.02]"
                : "hover:glow-cyan"
            }`}
          >
            {t.highlighted && (
              <div className="text-center mb-2">
                <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-mono font-semibold">
                  Most Popular
                </span>
              </div>
            )}
            <h3 className="font-display font-bold text-xl text-foreground">{t.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{t.desc}</p>
            <div className="mb-6">
              <span className="font-display font-black text-4xl text-foreground">{t.price}</span>
              <span className="text-muted-foreground text-sm"> / project</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={`https://wa.me/918185967282?text=Hey%20PBSRK!%20I'm%20interested%20in%20the%20${t.name}%20plan.`}
              target="_blank"
              rel="noopener noreferrer"
              className={`block text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                t.highlighted
                  ? "bg-accent text-accent-foreground hover:scale-105 glow-purple"
                  : "bg-primary text-primary-foreground hover:scale-105 glow-cyan"
              }`}
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);
