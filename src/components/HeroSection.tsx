import { MessageCircle, Zap, Users, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const portrait = "/portrait.webp";


const stats = [
{ icon: FolderOpen, label: "Projects", value: "20+" },
{ icon: Users, label: "Happy Clients", value: "20+" },
{ icon: Zap, label: "AI Tools Mastered", value: "10+" }];


export const HeroSection = () => {
  const whatsappUrl = "https://wa.me/918185967282?text=Hey%20PBSRK!%20I%27d%20like%20to%20discuss%20a%20project.";

  return (
    <section className="hero-surface relative flex items-center justify-center overflow-hidden px-4 bg-background">

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Avatar */}
        <div className="relative mx-auto w-36 h-36">
          <div aria-hidden="true" className="absolute inset-[-8px] rounded-full border border-primary/30" />
          {/* Core avatar */}
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary to-accent p-[3px] glow-cyan z-10">
            <img
              src={portrait}
              alt="PBSRK — AI freelancer from Yanam"
              width={144}
              height={144}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full rounded-full object-cover object-top bg-card" />
          </div>

        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-primary">
          <span className="w-2 h-2 rounded-full bg-primary" />
          Student • Yanam, India • Available for Projects
        </div>

        {/* Headline */}
        <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
          <span className="text-gradient">PBSRK</span>
          <br />
          <span className="text-foreground">AI Creations That</span>
          <br />
          <span className="text-foreground">Actually </span>
          <span className="text-primary">Deliver</span>
        </h1>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Digital Hustler from Yanam — turning wild ideas into clean digital experiences with smart AI tools. Speed, results, and real value for every client.
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-8 flex-wrap">
          {stats.map(({ icon: Icon, label, value }) =>
          <div key={label} className="text-center">
              <Icon className="w-5 h-5 text-primary mx-auto mb-1" />
              <div className="font-mono font-bold text-2xl text-foreground">{value}</div>
              <div className="text-xs text-muted-foreground">{label}</div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="h-auto min-h-12 py-4 text-base sm:text-lg font-bold glow-cyan-strong whitespace-normal">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            >
            
            <MessageCircle className="w-5 h-5" />
            Hire Me Now — Free Chat
          </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-auto min-h-12 py-4 glass font-semibold">
          <a
            href="#portfolio"
            >
            
            View My Work
          </a>
          </Button>
        </div>
      </div>
    </section>);

};