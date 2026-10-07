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

const Index = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <link rel="canonical" href="https://hustlebharat.lovable.app/" />
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
