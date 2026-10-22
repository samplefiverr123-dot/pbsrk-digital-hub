import { Helmet } from "react-helmet-async";
import { StatusTicker } from "@/components/StatusTicker";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollReveal } from "@/components/ScrollReveal";

const SITE = "https://hustlebharat.lovable.app";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", "name": "What services do you offer as an AI freelancer?", "acceptedAnswer": { "@type": "Answer", "text": "I build high-converting websites, AI chatbots, branding & graphics, Meta ad campaigns, custom productivity tools, and complete digital growth packages — all powered by smart AI workflows." }},
    { "@type": "Question", "name": "How long does a typical project take?", "acceptedAnswer": { "@type": "Answer", "text": "Most starter projects ship in 3 days, growth packages in 7 days, and premium full-stack builds in 14 days." }},
    { "@type": "Question", "name": "Do you work with international clients or only India?", "acceptedAnswer": { "@type": "Answer", "text": "I'm based in Yanam, India, but I work with clients worldwide. Payments can be made in INR or USD via UPI, bank transfer, or international gateways." }},
    { "@type": "Question", "name": "What makes you different from other freelancers?", "acceptedAnswer": { "@type": "Answer", "text": "I combine youth-driven speed with AI-powered efficiency — delivering agency-quality work at freelancer rates, with real measurable results for every client." }},
    { "@type": "Question", "name": "Do you offer revisions and post-delivery support?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — every plan includes revisions (2 to unlimited based on tier) and 1–3 months of priority support after delivery." }},
    { "@type": "Question", "name": "How do I get started?", "acceptedAnswer": { "@type": "Answer", "text": "Hit the WhatsApp button or fill out the contact form. We'll have a free chat about your goals and I'll get to work right away." }},
  ],
};

const Index = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <link rel="canonical" href={`${SITE}/`} />
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
    </Helmet>
    <StatusTicker />
    <Navbar />
    <HeroSection />
    <ScrollReveal><AboutSection /></ScrollReveal>
    <ServicesSection />
    <ScrollReveal><SkillsSection /></ScrollReveal>
    <ScrollReveal><EducationSection /></ScrollReveal>
    <PortfolioSection />
    <ScrollReveal><TestimonialsSection /></ScrollReveal>
    <ScrollReveal><PricingSection /></ScrollReveal>
    <ScrollReveal><FAQSection /></ScrollReveal>
    <ScrollReveal><ContactSection /></ScrollReveal>
    <ScrollReveal><Footer /></ScrollReveal>
    <WhatsAppButton />
  </div>
);

export default Index;
