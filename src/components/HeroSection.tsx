import { MessageCircle, Zap, Users, FolderOpen } from "lucide-react";

const stats = [
  { icon: FolderOpen, label: "Projects", value: "20+" },
  { icon: Users, label: "Happy Clients", value: "20+" },
  { icon: Zap, label: "AI Tools Mastered", value: "10+" },
];

export const HeroSection = () => {
  const whatsappUrl = "https://wa.me/918185967282?text=Hey%20PBSRK!%20I%27d%20like%20to%20discuss%20a%20project.";

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4">
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Avatar */}
        <div className="mx-auto w-28 h-28 rounded-full bg-gradient-to-br from-primary to-accent p-[3px] animate-float">
          <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
            <span className="font-display font-black text-3xl text-gradient">PB</span>
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-primary">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
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
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="text-center">
              <Icon className="w-5 h-5 text-primary mx-auto mb-1" />
              <div className="font-mono font-bold text-2xl text-foreground">{value}</div>
              <div className="text-xs text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg glow-cyan-strong hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Hire Me Now — Free Chat
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass text-foreground font-semibold hover:glow-cyan transition-all duration-300"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};
