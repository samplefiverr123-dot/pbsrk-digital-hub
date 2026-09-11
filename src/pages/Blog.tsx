import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { faqArticles } from "@/data/faqArticles";

const SITE = "https://hustlebharat.lovable.app";
const TITLE = "Blog | PBSRK — AI Freelancer Articles from Yanam";
const DESC =
  "Articles by PBSRK on AI freelancing: services, project timelines, working with international clients, revisions, support and how to start a project.";

const Blog = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESC} />
      <link rel="canonical" href={`${SITE}/blog`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESC} />
      <meta property="og:url" content={`${SITE}/blog`} />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESC} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: TITLE,
          description: DESC,
          url: `${SITE}/blog`,
          author: { "@type": "Person", name: "PBSRK", url: `${SITE}/` },
          blogPost: faqArticles.map((a) => ({
            "@type": "BlogPosting",
            headline: a.title,
            description: a.description,
            image: `${SITE}${a.cover}`,
            url: `${SITE}/answers/${a.slug}`,
            author: { "@type": "Person", name: "PBSRK" },
          })),
        })}
      </script>
    </Helmet>

    <Navbar />

    <main className="max-w-6xl mx-auto px-4 pt-14 pb-20">
      <header className="mb-12 max-w-2xl">
        <span className="font-mono text-xs text-primary tracking-widest uppercase">Blog</span>
        <h1 className="font-display font-black text-3xl md:text-5xl mt-3 text-foreground">
          Articles on <span className="text-gradient">AI-powered freelancing</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          Everything I have written about building websites, chatbots, branding and ad campaigns —
          how the work runs, what it costs and what results to expect.
        </p>
      </header>

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {faqArticles.map((a, i) => (
          <li key={a.slug}>
            <ScrollReveal delay={i * 60}>
              <article className="h-full">
                <Link
                  to={`/answers/${a.slug}`}
                  className="glass rounded-xl overflow-hidden h-full flex flex-col hover:glow-cyan transition-all duration-300"
                >
                  <img
                    src={a.cover}
                    alt={a.coverAlt}
                    width={1200}
                    height={630}
                    loading={i < 3 ? "eager" : "lazy"}
                    className="w-full aspect-[1200/630] object-cover"
                  />
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <h2 className="font-display font-bold text-lg text-foreground">{a.question}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {a.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Read the article
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </article>
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

export default Blog;
