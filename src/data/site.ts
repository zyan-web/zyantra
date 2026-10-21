/**
 * ALL editable site content lives in this file.
 * Components only read from here — edit text, links and lists below.
 * Search for "TODO" to find everything that still needs your real details.
 */

export type Service = {
  title: string;
  description: string;
  points: string[];
  icon: "bot" | "mic" | "workflow" | "smartphone";
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  /** Path inside /public, e.g. "/projects/rag-qa.png". A styled placeholder shows if the file is missing. */
  image: string;
  github: string;
  live: string;
};

export type Review = {
  name: string;
  role: string;
  quote: string;
};

export type Stat = {
  label: string;
  /** Stats with value 0 are hidden. */
  value: number;
  suffix?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const site = {
  name: "Alam Ai Engineer",
  /** Used for the favicon and logo mark. */
  initials: "AA",
  role: "AI Engineer & App Developer (Flutter & Android)",
  location: "Pakistan, working with clients worldwide",
  /** Your deployed domain, no trailing slash. Used for SEO, sitemap and robots. */
  url: "https://TODO-your-domain.com", // TODO: your live domain
  /** The one accent colour for the whole site (CSS variable --accent, OG image, favicon). */
  accent: "#7C5CFF",

  seo: {
    title: "Alam Ai Engineer | AI Engineer & Flutter / Android Developer",
    description:
      "AI engineer and app developer building RAG chatbots, voice AI agents, n8n automations and Flutter & Android apps for founders, businesses and agencies worldwide.",
  },

  links: {
    linkedin: "https://www.linkedin.com/in/TODO", // TODO: LinkedIn profile URL
    instagram: "https://www.instagram.com/TODO", // TODO: Instagram profile URL
    github: "https://github.com/TODO", // TODO: GitHub profile URL
    fiverr: "https://www.fiverr.com/TODO", // TODO: Fiverr profile URL
    upwork: "https://www.upwork.com/freelancers/TODO", // TODO: Upwork profile URL
    email: "TODO@example.com", // TODO: email address (no "mailto:")
    whatsapp: "https://wa.me/TODO", // TODO: wa.me link with country code, e.g. https://wa.me/923001234567
  },

  nav: [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Available for new projects",
    // The words in `accent` are rendered in the italic serif font.
    headlineStart: "I turn AI ideas into",
    accent: "working products",
    headlineEnd: "your users love.",
    subtext:
      "Chatbots that answer from your own data, voice agents that pick up the phone, automations that run while you sleep, and mobile apps to put it all in your customers' hands.",
  },

  skills: [
    "Python",
    "LangChain",
    "LlamaIndex",
    "OpenAI",
    "Claude",
    "RAG",
    "Vector Databases",
    "LiveKit",
    "MCP",
    "FastAPI",
    "n8n",
    "WhatsApp Business API",
    "Flutter",
    "Dart",
    "Kotlin",
    "Android",
    "Firebase",
    "Docker",
    "AWS EC2",
    "GitHub Actions",
  ],

  audiences: [
    {
      title: "Founders",
      description:
        "You have an AI product idea and need someone who can take it from prototype to something real users can rely on, without a full in-house team.",
    },
    {
      title: "Growing businesses",
      description:
        "Your team spends hours on support replies, data entry or follow-ups. I automate the repetitive work so people can focus on customers.",
    },
    {
      title: "Agencies needing an AI dev",
      description:
        "Your clients are asking for AI features. I plug into your workflow as a reliable white-label engineer and deliver to your standards.",
    },
  ],

  services: [
    {
      title: "AI Chatbots & RAG",
      description:
        "Assistants grounded in your documents, website or database, so answers stay accurate and on-brand.",
      points: ["Document & knowledge-base Q&A", "Source citations", "Web, app or Slack embed"],
      icon: "bot",
    },
    {
      title: "Voice AI Agents",
      description:
        "Real-time voice agents that take calls, book appointments and use your tools mid-conversation.",
      points: ["Low-latency speech pipelines", "Tool calling via MCP", "Deployed to your cloud"],
      icon: "mic",
    },
    {
      title: "AI Automation",
      description:
        "n8n workflows and WhatsApp bots that connect your apps and handle routine work end to end.",
      points: ["n8n workflows", "WhatsApp Business bots", "CRM & sheet integrations"],
      icon: "workflow",
    },
    {
      title: "Flutter & Android Apps",
      description:
        "Polished cross-platform and native apps, with AI features built in where they actually help.",
      points: ["Flutter (iOS & Android)", "Native Android / Kotlin", "Firebase & API backends"],
      icon: "smartphone",
    },
  ] satisfies Service[],

  projects: [
    {
      title: "RAG Document Q&A",
      description: "Ask questions over your own documents and get answers with sources.",
      tags: ["Python", "RAG", "LangChain", "Vector DB"],
      image: "/projects/rag-document-qa.png",
      github: "TODO", // TODO: GitHub repo URL
      live: "TODO", // TODO: live demo URL
    },
    {
      title: "LiveKit Voice Agent",
      description: "Real-time voice AI with MCP tools, shipped via CI/CD to AWS EC2.",
      tags: ["LiveKit", "MCP", "GitHub Actions", "AWS EC2"],
      image: "/projects/livekit-voice-agent.png",
      github: "TODO", // TODO: GitHub repo URL
      live: "TODO", // TODO: live demo URL
    },
    {
      title: "AI Quiz & Evaluation System",
      description: "LLM-generated quizzes with rubric-based grading of answers.",
      tags: ["LLM", "Python", "FastAPI", "Evaluation"],
      image: "/projects/ai-quiz-evaluation.png",
      github: "TODO", // TODO: GitHub repo URL
      live: "TODO", // TODO: live demo URL
    },
    {
      title: "Sentiment Intelligence API",
      description: "Classifies client feedback as positive, negative or neutral.",
      tags: ["NLP", "FastAPI", "Python", "REST API"],
      image: "/projects/sentiment-intelligence-api.png",
      github: "TODO", // TODO: GitHub repo URL
      live: "TODO", // TODO: live demo URL
    },
    {
      title: "WhatsApp AI Support Bot",
      description: "Customer support on WhatsApp powered by n8n and the WhatsApp Business API.",
      tags: ["n8n", "WhatsApp API", "LLM", "Automation"],
      image: "/projects/whatsapp-ai-support-bot.png",
      github: "TODO", // TODO: GitHub repo URL
      live: "TODO", // TODO: live demo URL
    },
    {
      title: "Safir-e-Quran",
      description: "A Flutter app for learning Tajweed step by step.",
      tags: ["Flutter", "Dart", "Firebase", "Mobile"],
      image: "/projects/safir-e-quran.png",
      github: "TODO", // TODO: GitHub repo URL
      live: "TODO", // TODO: Play Store / live URL
    },
  ] satisfies Project[],

  /** "Sound familiar?" — client problems shown as an accordion. */
  faq: [
    {
      question: "“Our support inbox never stops, and most questions are the same.”",
      answer:
        "I build a chatbot trained on your docs and past answers that resolves the repeat questions instantly on your site or WhatsApp, and hands the tricky ones to a human with full context.",
    },
    {
      question: "“We tried ChatGPT, but it makes things up about our business.”",
      answer:
        "Retrieval-augmented generation (RAG) grounds every answer in your own content and shows the source, so the assistant says “I don't know” instead of guessing.",
    },
    {
      question: "“We miss calls and leads after hours.”",
      answer:
        "A voice AI agent answers every call, qualifies the lead, books the slot in your calendar and sends you a summary, 24/7.",
    },
    {
      question: "“My team copies data between tools all day.”",
      answer:
        "I map the workflow and automate it with n8n: forms, sheets, CRM, email and WhatsApp talking to each other without manual copy-paste.",
    },
    {
      question: "“We need an app, but freelancers keep disappearing mid-project.”",
      answer:
        "You get clear milestones, regular demo builds and clean, documented Flutter or Android code that you own from day one.",
    },
  ] satisfies FaqItem[],

  /** Stats with value 0 are hidden; the whole section hides if all are 0. */
  stats: [
    { label: "Projects delivered", value: 0, suffix: "+" }, // TODO: number of projects
    { label: "Happy clients", value: 0, suffix: "+" }, // TODO: number of clients
    { label: "Years of experience", value: 0, suffix: "+" }, // TODO: years
    { label: "Countries served", value: 0 }, // TODO: number of countries
  ] satisfies Stat[],

  /** Real client reviews only. The section is hidden while this is empty. */
  reviews: [] as Review[],

  contact: {
    heading: "Let's build something useful",
    subtext: "Tell me what you're working on. I usually reply within 24 hours.",
    interests: [
      "AI Chatbot / RAG",
      "Voice AI Agent",
      "AI Automation",
      "Flutter App",
      "Android App",
      "Something else",
    ],
  },
};

export const footerLinks = [{ label: "Home", href: "#top" }, ...site.nav];
