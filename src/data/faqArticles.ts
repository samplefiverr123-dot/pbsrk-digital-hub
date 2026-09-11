import coverServices from "@/assets/blog-services.jpg";
import coverTimelines from "@/assets/blog-timelines.jpg";
import coverInternational from "@/assets/blog-international.jpg";
import coverWhyChoose from "@/assets/blog-why-choose.jpg";
import coverSupport from "@/assets/blog-support.jpg";
import coverGetStarted from "@/assets/blog-get-started.jpg";

export interface FaqArticle {
  slug: string;
  cover: string;
  coverAlt: string;
  question: string;
  answer: string;
  title: string;
  description: string;
  keywords: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  takeaway: string;
}

export const faqArticles: FaqArticle[] = [
  {
    slug: "ai-freelancer-services",
    question: "What services do you offer as an AI freelancer?",
    answer:
      "I build high-converting websites, AI chatbots, branding & graphics, Meta ad campaigns, custom productivity tools, and complete digital growth packages — all powered by smart AI workflows.",
    title: "AI Freelancer Services in Yanam — Websites, Chatbots, Ads & Automation",
    description:
      "A full breakdown of the services PBSRK offers as an AI freelancer from Yanam: websites, AI chatbots, branding, Meta ads, custom tools and growth packages.",
    keywords:
      "AI freelancer services, AI chatbot developer India, website developer Yanam, Meta ads freelancer, branding designer India",
    intro:
      "Hiring one person to cover design, development, ads and automation only works when the workflow behind it is fast. Here is exactly what I deliver, how each service works, and who it is right for.",
    sections: [
      {
        heading: "High-converting websites and modern apps",
        body: [
          "Every site starts with the goal, not the layout: leads, bookings, sales or credibility. I map the visitor journey first, then build a fast, mobile-first site around that single action.",
          "Typical builds include landing pages, multi-section business sites, portfolios and lightweight web apps with forms, dashboards and payment links.",
        ],
      },
      {
        heading: "Intelligent AI agents and smart chatbots",
        body: [
          "Chatbots trained on your own content — services, prices, policies, FAQs — so they answer like your best salesperson instead of a generic script.",
          "These agents qualify leads, book calls, answer repeat questions on WhatsApp or your website, and hand off to you only when a human is genuinely needed.",
        ],
      },
      {
        heading: "Graphics, branding and Meta ads",
        body: [
          "Logo systems, colour palettes, social templates and ad creative that stay consistent everywhere your brand shows up.",
          "On the paid side I run Meta campaigns end to end: audience research, creative testing, budget pacing and weekly reporting on cost per lead and ROAS.",
        ],
      },
      {
        heading: "Custom tools and complete growth packages",
        body: [
          "Small internal tools remove the repetitive work: order trackers, invoice generators, content calendars, automated report emails.",
          "The growth package bundles site, brand, chatbot and ads into one plan so all pieces are built to support the same funnel.",
        ],
      },
    ],
    takeaway:
      "If your project touches design, code, content or ads, it fits inside one of these six services — and usually inside one timeline and one invoice.",
  },
  {
    slug: "project-timelines",
    question: "How long does a typical project take?",
    answer:
      "Most starter projects ship in 3 days, growth packages in 7 days, and premium full-stack builds in 14 days. I always confirm a clear timeline before starting.",
    title: "How Long Does a Freelance Website or AI Project Take? Real Timelines",
    description:
      "Realistic delivery timelines for freelance websites, chatbots and ad campaigns — 3 days for starters, 7 for growth builds, 14 for premium full-stack projects.",
    keywords:
      "website delivery time, how long does a website take, freelance project timeline, fast website developer India",
    intro:
      "Speed is only useful when it is predictable. These are the timelines I quote, what happens on each day, and the two things that actually cause delays.",
    sections: [
      {
        heading: "Starter projects: about 3 days",
        body: [
          "Day one is content and structure, day two is design and build, day three is revisions plus launch. Single-page sites, simple landing pages and small graphic sets fit here.",
          "This pace works because the scope is fixed before day one — no mid-build additions.",
        ],
      },
      {
        heading: "Growth packages: about 7 days",
        body: [
          "Multi-section sites, a chatbot trained on your content, and a first ad set. The first three days cover strategy and copy, the middle three the build, the last day testing and handover.",
        ],
      },
      {
        heading: "Premium full-stack builds: about 14 days",
        body: [
          "Logins, databases, dashboards, payments and automations need real testing time. Two weeks includes a mid-point review so you see progress before final delivery.",
        ],
      },
      {
        heading: "What actually causes delays",
        body: [
          "Waiting on content — photos, text, logins, product details — is the single biggest cause. Scope added after the build starts is the second.",
          "I send one content checklist at the start; once it comes back complete, the clock runs without pauses.",
        ],
      },
    ],
    takeaway:
      "Expect 3, 7 or 14 days depending on tier, confirmed in writing before any work begins.",
  },
  {
    slug: "international-clients",
    question: "Do you work with international clients or only India?",
    answer:
      "I'm based in Yanam, India, but I work with clients worldwide. Payments can be made in INR or USD via UPI, bank transfer, or international gateways.",
    title: "Working With an Indian Freelancer From Abroad — Timezones & Payments",
    description:
      "How remote work with PBSRK, an AI freelancer based in Yanam, India, works for international clients: communication, overlap hours and payment options in INR or USD.",
    keywords:
      "hire Indian freelancer, remote freelancer India, international freelance payments, freelancer timezone overlap",
    intro:
      "I am based in Yanam, India, and most of my work is remote. Here is how collaboration across timezones and currencies actually runs day to day.",
    sections: [
      {
        heading: "Timezones and overlap",
        body: [
          "I work on IST (UTC+5:30), which overlaps comfortably with Europe, the Middle East, Africa, Singapore and Australia, and gives US clients early-morning or late-evening calls.",
          "Async updates are the default: you get written progress notes and a preview link, so nothing waits on a live meeting.",
        ],
      },
      {
        heading: "Communication",
        body: [
          "WhatsApp for quick decisions, email for documents, and a shared preview link that always shows the latest version of your build.",
          "All work happens in English, and every deliverable comes with a short plain-language explanation of what changed.",
        ],
      },
      {
        heading: "Payments",
        body: [
          "Indian clients pay in INR via UPI or bank transfer. International clients pay in USD through standard online gateways or wire transfer.",
          "Structure is usually 50% to start and 50% on delivery, with an invoice for both halves.",
        ],
      },
    ],
    takeaway:
      "Location is not a constraint — timezone overlap, English communication and dual-currency payments are already part of how I work.",
  },
  {
    slug: "why-choose-me",
    question: "What makes you different from other freelancers?",
    answer:
      "I combine youth-driven speed with AI-powered efficiency — delivering agency-quality work at freelancer rates, with real measurable results (sales boosts, lead growth, ROAS) for every client.",
    title: "Why Hire an AI-Powered Freelancer Instead of an Agency?",
    description:
      "The honest comparison: AI-powered freelance delivery versus agencies and traditional freelancers, on speed, cost, accountability and measurable results.",
    keywords:
      "freelancer vs agency, AI powered freelancer, affordable web developer India, measurable marketing results",
    intro:
      "Most freelancers compete on price and most agencies compete on polish. I compete on how quickly a measurable result reaches you.",
    sections: [
      {
        heading: "AI-assisted workflow, human judgement",
        body: [
          "AI handles drafting, variations and repetitive production work. Strategy, structure and final quality stay with me.",
          "The result is agency-level output volume without agency-level overhead in the price.",
        ],
      },
      {
        heading: "One person, no handoffs",
        body: [
          "You talk to the person building your project. No account manager relaying feedback, no briefs lost between departments, no week-long approval chains.",
        ],
      },
      {
        heading: "Results are the deliverable",
        body: [
          "Every project closes with a number: sales lift, lead volume, cost per lead or ROAS. Past work includes sales increases above 200% and cost-per-lead cuts of more than half.",
          "If a build cannot be tied to a number, I say so upfront rather than promising vague 'brand value'.",
        ],
      },
      {
        heading: "Where an agency is the better choice",
        body: [
          "Large multi-market campaigns with heavy compliance review or dedicated 24/7 staffing genuinely need a team. I will tell you when that is your situation.",
        ],
      },
    ],
    takeaway:
      "Faster turnaround, direct access, freelancer pricing and a measurable outcome attached to every project.",
  },
  {
    slug: "revisions-and-support",
    question: "Do you offer revisions and post-delivery support?",
    answer:
      "Yes — every plan includes revisions (2 to unlimited based on tier) and 1–3 months of priority support after delivery to make sure everything runs perfectly.",
    title: "Revisions and Post-Delivery Support — What's Included in Every Plan",
    description:
      "Exactly what revisions and after-launch support you get with each plan: revision counts by tier, 1–3 months of priority support, and what falls outside scope.",
    keywords:
      "website revisions included, post launch support freelancer, freelance web support plan",
    intro:
      "Launch day is not the finish line. Here is what is covered after delivery, for how long, and where the line sits between a revision and new work.",
    sections: [
      {
        heading: "Revisions by tier",
        body: [
          "Starter includes 2 rounds, Growth includes 5, Premium includes unlimited rounds within the agreed scope.",
          "A round means one consolidated list of changes, not one change at a time — batching feedback gets you through revisions much faster.",
        ],
      },
      {
        heading: "Priority support window",
        body: [
          "Starter gets 1 month, Growth 2 months, Premium 3 months of priority support after delivery.",
          "That covers bug fixes, broken links, form or chatbot issues, small text and image swaps, and questions about managing your own site.",
        ],
      },
      {
        heading: "What counts as new work",
        body: [
          "New pages, a redesign, a new campaign, or features not in the original brief are quoted separately — usually at a returning-client rate.",
          "Ongoing monthly retainers are available if you would rather keep continuous support instead of one-off requests.",
        ],
      },
    ],
    takeaway:
      "Every plan ships with revisions plus 1–3 months of priority support, and the boundary between fixes and new work is agreed in writing before launch.",
  },
  {
    slug: "how-to-get-started",
    question: "How do I get started?",
    answer:
      "Just hit the WhatsApp button or fill out the contact form. We'll have a free chat about your goals, pick the right package, and I'll get to work right away.",
    title: "How to Start a Project With PBSRK — Free Chat to Launch in 4 Steps",
    description:
      "The four-step process for starting a project: free WhatsApp chat, scope and quote, build with previews, then launch and handover — with what to prepare first.",
    keywords:
      "hire AI freelancer, start website project, free consultation freelancer India, WhatsApp freelancer Yanam",
    intro:
      "Getting started takes one message. This is the full process from first chat to launch, so you know what happens at each step before you reach out.",
    sections: [
      {
        heading: "Step 1 — Free chat",
        body: [
          "Message me on WhatsApp at +91 8185967282 or send the contact form. We talk about your goal, audience and budget. No charge and no obligation.",
        ],
      },
      {
        heading: "Step 2 — Scope and quote",
        body: [
          "You get a short written plan: what is being built, the tier it fits, the timeline and the fixed price. Work starts on a 50% advance.",
        ],
      },
      {
        heading: "Step 3 — Build with previews",
        body: [
          "You receive a live preview link early and updates as sections land, so feedback arrives during the build instead of after it.",
        ],
      },
      {
        heading: "Step 4 — Launch and handover",
        body: [
          "I publish, run final checks on mobile and desktop, and hand over access plus a short guide for updating content yourself. Priority support starts here.",
        ],
      },
      {
        heading: "What to prepare",
        body: [
          "Your logo if you have one, a few sentences about your business, product or service details with prices, and any photos you want used. Missing pieces I can draft for you.",
        ],
      },
    ],
    takeaway:
      "One WhatsApp message starts it; a written scope, live previews and a supported launch follow.",
  },
];

export const getFaqArticle = (slug?: string) =>
  faqArticles.find((a) => a.slug === slug);
