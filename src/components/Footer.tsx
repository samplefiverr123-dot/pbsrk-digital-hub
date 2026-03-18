const links = ["About", "Services", "Portfolio", "Pricing", "Contact"];

export const Footer = () => (
  <footer className="border-t border-border py-10 px-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <span className="font-display font-black text-lg">
          <span className="text-primary">PB</span>
          <span className="text-foreground">SRK</span>
        </span>
        <p className="text-xs text-muted-foreground mt-1">AI Freelancer • Yanam, India</p>
      </div>

      <div className="flex gap-6">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {l}
          </a>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} PBSRK. All rights reserved.
      </p>
    </div>
  </footer>
);
