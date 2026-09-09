import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { faqArticles } from "@/data/faqArticles";

const SITE = "https://hustlebharat.lovable.app";
const TITLE = "Answers & Guides | PBSRK — AI Freelancer in Yanam";
const DESC =
  "Detailed answers on working with an AI freelancer: services, project timelines, international clients, revisions, support and how to get started.";

const Answers = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESC} />
      <link rel="canonical" href={`${SITE}/answers`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESC} />
      <meta property="og:url" content={`${SITE}/answers`} />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESC} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: TITLE,
          description: DESC,
          url: `${SITE}/answers`,
          hasPart: faqArticles.map((a) => ({
            "@type": "Article",
            headline: a.title,
            url: `${SITE}/answers/${a.slug}`,
          })),
        })}
      </script>
    </Helmet>

    <Navbar />

    <main className="max-w-4xl mx-auto px-4 pt-14 pb-20">
      <header className="mb-12">
        <span className="font-mono text-xs text-primary tracking-widest uppercase">Answers</span>
        <h1 className="font-display font-black text-3xl md:text-5xl mt-3 text-foreground">
          Everything clients <span className="text-gradient">ask me</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Each common question has its own full answer — services, timelines, payments, revisions and
          how a project actually starts.
        </p>
      </header>

      <ul className="grid gap-4 md:grid-cols-2">
        {faqArticles.map((a, i) => (
          <li key={a.slug}>
            <ScrollReveal delay={i * 60}>
              <Link
                to={`/answers/${a.slug}`}
                className="glass rounded-xl p-6 h-full flex flex-col gap-3 hover:glow-cyan transition-all duration-300"
              >
                <h2 className="font-display font-bold text-lg text-foreground">{a.question}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{a.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Read the answer
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </Link>
            </ScrollReveal>
          </li>
        ))}
      </ul>

      <Link
        to="/"
        className="inline-flex items-center gap-2 mt-12 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        Back to homepage
      </Link>
    </main>

    <Footer />
    <WhatsAppButton />
  </div>
);

export default Answers;
