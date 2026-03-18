export const StatusTicker = () => {
  const text = "SYSTEM STATUS: ACTIVE  //  PROJECTS COMPLETED: 24  //  CURRENT LOCATION: YANAM, IN  //  CURRENT FOCUS: AI AUTOMATION  //  ";
  return (
    <div className="w-full bg-primary/10 border-b border-primary/20 py-1.5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="font-mono text-xs text-primary tracking-widest mx-4">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};
