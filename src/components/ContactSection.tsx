import { Mail, Phone, Instagram, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`);
    window.open(`https://wa.me/918185967282?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono text-xs text-primary tracking-widest uppercase">Contact</span>
          <h2 className="font-display font-black text-3xl md:text-4xl mt-3 text-foreground">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 space-y-4">
            <input
              type="text"
              id="contact-name"
              placeholder="Your Name"
              aria-label="Your Name"
              required
              value={form.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
                setSent(false);
              }}
              className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
            <input
              type="email"
              id="contact-email"
              placeholder="Your Email"
              aria-label="Your Email"
              required
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
                setSent(false);
              }}
              className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
            <textarea
              id="contact-message"
              placeholder="Your Message"
              aria-label="Your Message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => {
                setForm({ ...form, message: e.target.value });
                setSent(false);
              }}
              className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
            />
            <Button type="submit" className="w-full h-auto min-h-12 py-3 rounded-xl font-semibold hover:scale-105 glow-cyan transition-all duration-300">
              <Send className="w-4 h-4" />
              {sent ? "Send it in WhatsApp" : "Continue to WhatsApp"}
            </Button>
            <p aria-live="polite" className="text-sm text-muted-foreground">
              {sent
                ? "WhatsApp is ready with your message. Tap Send there to deliver it."
                : "Opens WhatsApp with your message prefilled. You’ll send it there."}
            </p>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 flex flex-col justify-center">
            <a href="tel:+918185967282" className="flex items-center gap-4 glass rounded-xl p-4 hover:glow-cyan transition-all duration-300">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="font-mono text-foreground">+91 8185967282</p>
              </div>
            </a>
            <a href="mailto:BHARAT.LUCKY2010@GMAIL.COM" className="flex items-center gap-4 glass rounded-xl p-4 hover:glow-cyan transition-all duration-300">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="font-mono text-foreground text-sm">BHARAT.LUCKY2010@GMAIL.COM</p>
              </div>
            </a>
            <a href="https://instagram.com/white.shadow.x444" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 glass rounded-xl p-4 hover:glow-cyan transition-all duration-300">
              <Instagram className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Instagram</p>
                <p className="font-mono text-foreground">@white.shadow.x444</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
