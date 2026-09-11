import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { faqArticles, getFaqArticle } from "@/data/faqArticles";
import NotFound from "./NotFound";

const SITE = "https://hustlebharat.lovable.app";

const FaqArticle = () => {
  const { slug } = useParams();
  const article = getFaqArticle(slug);

  if (!article) return <NotFound />;

  const url = `${SITE}/answers/${article.slug}`;
  const others = faqArticles.filter((a) => a.slug !== article.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.description,
        mainEntityOfPage: url,
        author: { "@type": "Person", name: "PBSRK", url: `${SITE}/` },
        publisher: { "@type": "Person", name: "PBSRK", url: `${SITE}/` },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: article.question,
            acceptedAnswer: { "@type": "Answer", text: article.answer },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Answers", item: `${SITE}/answers` },
          { "@type": "ListItem", position: 3, name: article.question, item: url },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{article.title}</title>
        <meta name="description" content={article.description} />
        <meta name="keywords" content={article.keywords} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:url" content={url} />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.description} />
        <meta property="og:image" content={`${SITE}${article.cover}`} />
        <meta name="twitter:image" content={`${SITE}${article.cover}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />

      <article className="max-w-3xl mx-auto px-4 pt-14 pb-20">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link to="/answers" className="hover:text-primary transition-colors">Answers</Link></li>
          </ol>
        </nav>

        <header className="mb-10">
          <span className="font-mono text-xs text-primary tracking-widest uppercase">Answer</span>
          <h1 className="font-display font-black text-3xl md:text-5xl mt-3 leading-tight text-foreground">
            {article.question}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{article.intro}</p>
          <img
            src={article.cover}
            alt={article.coverAlt}
            width={1200}
            height={630}
            className="mt-8 w-full rounded-xl aspect-[1200/630] object-cover"
          />
        </header>

        <div className="glass rounded-xl p-6 mb-12 border-l-2 border-primary">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-2">Short answer</p>
          <p className="text-foreground leading-relaxed">{article.answer}</p>
        </div>

        <div className="space-y-10">
          {article.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-4">
                {s.heading}
              </h2>
              {s.body.map((p) => (
                <p key={p} className="text-muted-foreground leading-relaxed mb-3">{p}</p>
              ))}
            </section>
          ))}
        </div>

        <div className="glass rounded-xl p-6 mt-12">
          <h2 className="font-display font-bold text-lg text-foreground mb-2">The takeaway</h2>
          <p className="text-muted-foreground leading-relaxed">{article.takeaway}</p>
          <a
            href="https://wa.me/918185967282?text=Hi%20PBSRK%2C%20I%20read%20your%20answers%20page%20and%20want%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:glow-cyan transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            Start a free chat
          </a>
        </div>

        <section className="mt-16">
          <h2 className="font-display font-bold text-xl text-foreground mb-5">Keep reading</h2>
          <ul className="space-y-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  to={`/answers/${o.slug}`}
                  className="glass rounded-xl p-5 flex items-center justify-between gap-4 hover:glow-cyan transition-all duration-300"
                >
                  <span className="font-display font-semibold text-foreground">{o.question}</span>
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-8 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to homepage
          </Link>
        </section>
      </article>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FaqArticle;
