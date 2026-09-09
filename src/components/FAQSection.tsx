import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { faqArticles } from "@/data/faqArticles";

export const faqs = faqArticles.map((a) => ({ q: a.question, a: a.answer, slug: a.slug }));

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
                  aria-expanded={open === i}
                >
                  <span className="font-display font-semibold text-foreground">{f.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      open === i ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5">
                      <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                      <Link
                        to={`/answers/${f.slug}`}
                        className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300"
                      >
                        Read the full answer
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/answers"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass font-semibold text-foreground hover:glow-cyan transition-all duration-300"
          >
            Browse all answers
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};
