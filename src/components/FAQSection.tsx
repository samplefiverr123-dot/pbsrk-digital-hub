import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const faqs = [
  {
    q: "What services do you offer as an AI freelancer?",
    a: "I build high-converting websites, AI chatbots, branding & graphics, Meta ad campaigns, custom productivity tools, and complete digital growth packages — all powered by smart AI workflows.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most starter projects ship in 3 days, growth packages in 7 days, and premium full-stack builds in 14 days. I always confirm a clear timeline before starting.",
  },
  {
    q: "Do you work with international clients or only India?",
    a: "I'm based in Yanam, India, but I work with clients worldwide. Payments can be made in INR or USD via UPI, bank transfer, or international gateways.",
  },
  {
    q: "What makes you different from other freelancers?",
    a: "I combine youth-driven speed with AI-powered efficiency — delivering agency-quality work at freelancer rates, with real measurable results (sales boosts, lead growth, ROAS) for every client.",
  },
  {
    q: "Do you offer revisions and post-delivery support?",
    a: "Yes — every plan includes revisions (2 to unlimited based on tier) and 1–3 months of priority support after delivery to make sure everything runs perfectly.",
  },
  {
    q: "How do I get started?",
    a: "Just hit the WhatsApp button or fill out the contact form. We'll have a free chat about your goals, pick the right package, and I'll get to work right away.",
  },
];

export const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono text-xs text-primary tracking-widest uppercase">FAQ</span>
          <h2 className="font-display font-black text-3xl md:text-4xl mt-3 text-foreground">
            Frequently <span className="text-gradient">Asked</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <ScrollReveal key={f.q} delay={i * 60}>
              <div className="glass rounded-xl overflow-hidden hover:glow-cyan transition-all duration-300">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display font-semibold text-foreground">{f.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
