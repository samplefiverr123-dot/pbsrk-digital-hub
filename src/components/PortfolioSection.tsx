import { ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const projects = [
  {
    title: "E-Commerce Store Redesign",
    desc: "Complete Shopify store overhaul with conversion optimization",
    tools: ["WordPress", "Canva", "AI"],
    result: "Boosted sales 250%",
    link: "#",
  },
  {
    title: "AI Customer Support Bot",
    desc: "24/7 intelligent chatbot for a SaaS startup",
    tools: ["ChatGPT API", "Zapier", "Figma"],
    result: "Cut support tickets 60%",
    link: "#",
  },
  {
    title: "Restaurant Brand Identity",
    desc: "Full branding package including logo, menu, and social media",
    tools: ["Canva", "Midjourney", "Figma"],
    result: "3x Instagram growth",
    link: "#",
  },
  {
    title: "Meta Ads Campaign — Fashion",
    desc: "Targeted Facebook & Instagram campaigns for a fashion brand",
    tools: ["Meta Ads", "Canva", "Analytics"],
    result: "5.2x ROAS achieved",
    link: "#",
  },
  {
    title: "Productivity Dashboard",
    desc: "Custom task & team management tool for a small agency",
    tools: ["React", "AI Tools", "Automation"],
    result: "Saved 15 hrs/week",
    link: "#",
  },
  {
    title: "Digital Growth Package",
    desc: "End-to-end website + ads + branding for a local business",
    tools: ["WordPress", "Meta Ads", "Canva"],
    result: "200% more leads",
    link: "#",
  },
];

export const PortfolioSection = () => (
  <section id="portfolio" className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="font-mono text-xs text-primary tracking-widest uppercase">Portfolio</span>
        <h2 className="font-display font-black text-3xl md:text-4xl mt-3 text-foreground">
          My <span className="text-gradient">Works</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 100}>
            <div className="group glass rounded-2xl overflow-hidden hover:glow-cyan transition-all duration-500 hover:-translate-y-1 h-full">
              <div className="h-44 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="font-display font-bold text-lg text-primary/40 group-hover:text-primary/70 transition-colors">
                  {p.title.split(" ")[0]}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{p.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tools.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-full bg-muted text-[10px] font-mono text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-primary font-semibold glow-cyan rounded px-2 py-0.5 bg-primary/10">
                    {p.result}
                  </span>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
