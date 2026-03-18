import { GraduationCap } from "lucide-react";

export const EducationSection = () => (
  <section className="py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="font-mono text-xs text-primary tracking-widest uppercase">Education</span>
        <h2 className="font-display font-black text-3xl md:text-4xl mt-3 text-foreground">
          Learning <span className="text-gradient">Journey</span>
        </h2>
      </div>

      <div className="glass rounded-2xl p-8 max-w-lg mx-auto text-center">
        <GraduationCap className="w-10 h-10 text-primary mx-auto mb-4" />
        <h3 className="font-display font-bold text-xl text-foreground mb-2">CBSE Student</h3>
        <p className="text-muted-foreground mb-1">Currently Pursuing • 2024–25</p>
        <p className="text-muted-foreground text-sm">Yanam, Puducherry, India</p>
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground">
            <span className="text-primary font-semibold">Technique-learner of Manoj</span> — constantly upgrading skills
          </p>
        </div>
      </div>
    </div>
  </section>
);
