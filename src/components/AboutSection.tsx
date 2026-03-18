export const AboutSection = () => (
  <section id="about" className="py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
        <span className="font-mono text-xs text-primary tracking-widest uppercase">About Me</span>
        <h2 className="font-display font-black text-3xl md:text-4xl mt-3 mb-6 text-foreground">
          Young Creator. <span className="text-gradient">Real Results.</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          Young creator from Yanam turning wild ideas into clean digital experiences using smart AI tools.
          I focus on speed, results, and real value for every client. Whether it's a stunning website,
          an AI chatbot, or a full branding package — I deliver work that actually moves the needle.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <span className="text-primary font-semibold">Technique-learner of Manoj</span> — always evolving, always building, always hustling.
        </p>
      </div>
    </div>
  </section>
);
