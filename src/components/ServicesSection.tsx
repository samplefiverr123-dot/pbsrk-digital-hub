import { Globe, Bot, Palette, Target, Wrench, Rocket } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const services = [
  { icon: Globe, title: "High-Converting Websites & Modern Apps", desc: "Lightning-fast, mobile-first sites that turn visitors into customers." },
  { icon: Bot, title: "Intelligent AI Agents & Smart Chatbots", desc: "24/7 AI assistants that handle support, sales, and engagement." },
  { icon: Palette, title: "Eye-Catching Graphics & Full Branding", desc: "Scroll-stopping visuals and cohesive brand identity packages." },
  { icon: Target, title: "Targeted Meta Ads That Drive Sales", desc: "Data-driven ad campaigns with real ROI tracking and optimization." },
  { icon: Wrench, title: "Custom Productivity & Management Tools", desc: "Tailored dashboards and automation that save hours every week." },
  { icon: Rocket, title: "Complete Digital Growth Packages", desc: "End-to-end digital transformation for serious business growth." },
];

export const ServicesSection = () => (
  <section id="services" className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="font-mono text-xs text-primary tracking-widest uppercase">Services</span>
        <h2 className="font-display font-black text-3xl md:text-4xl mt-3 text-foreground">
          What I <span className="text-gradient">Build</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc }, i) => (
          <ScrollReveal key={title} delay={i * 100}>
            <div className="group glass rounded-2xl p-6 hover:glow-cyan transition-all duration-500 hover:-translate-y-1 cursor-pointer h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{desc}</p>
              <span className="font-mono text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                View Examples →
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
