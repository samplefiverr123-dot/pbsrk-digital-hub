const skills = [
  { name: "AI Tools (ChatGPT, Claude, Midjourney)", pct: 95 },
  { name: "Canva & Graphic Design", pct: 90 },
  { name: "WordPress & Website Building", pct: 88 },
  { name: "Figma & UI/UX Design", pct: 82 },
  { name: "Meta Ads Manager", pct: 85 },
  { name: "Automation & Zapier", pct: 80 },
];

export const SkillsSection = () => (
  <section className="py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="font-mono text-xs text-primary tracking-widest uppercase">Skills</span>
        <h2 className="font-display font-black text-3xl md:text-4xl mt-3 text-foreground">
          My <span className="text-gradient">Toolkit</span>
        </h2>
      </div>

      <div className="space-y-6">
        {skills.map(({ name, pct }) => (
          <div key={name} className="glass rounded-xl p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-foreground">{name}</span>
              <span className="font-mono text-xs text-primary">{pct}%</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
