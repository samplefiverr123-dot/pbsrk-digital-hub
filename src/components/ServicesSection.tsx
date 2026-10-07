import { Cpu, Eye, Brain, Zap, Layers, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const innovations = [
  { icon: Brain, title: "GPT-5o Just Dropped – Full Technical Architecture Explained", desc: "Breaking down the new multimodal reasoning engine, token economics, and what it means for developers." },
  { icon: Eye, title: "Apple Vision Pro 2 Specs & Real-World Benchmarks", desc: "Hands-on performance tests, spatial computing upgrades, and developer SDK deep dive." },
  { icon: Cpu, title: "OpenAI o3 Reasoning Model – Code-Level Deep Dive", desc: "How chain-of-thought inference works under the hood with practical implementation examples." },
  { icon: Zap, title: "Claude 4 Opus vs GPT-5o – The Ultimate Benchmark Showdown", desc: "Head-to-head comparison across coding, reasoning, and creative tasks with raw data." },
  { icon: Layers, title: "Meta's New Open-Source LLM Breaks Every Record", desc: "Llama 4 architecture analysis, fine-tuning guide, and deployment strategies." },
  { icon: Sparkles, title: "The AI Agent Stack That's Replacing Entire Teams", desc: "Production-ready agent frameworks, orchestration patterns, and real-world case studies." },
];

export const ServicesSection = () => (
  <section id="services" className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="font-mono text-xs text-primary tracking-widest uppercase">Latest Drops</span>
        <h2 className="font-display font-black text-3xl md:text-4xl mt-3 text-foreground">
          Featured <span className="text-gradient">Innovations</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {innovations.map(({ icon: Icon, title, desc }, i) => (
          <ScrollReveal key={title} delay={i * 50} className="h-full">
            <div className="glass rounded-lg p-6 h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
