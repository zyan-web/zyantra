/**
 * ALL editable site content lives in this file.
 * Components only read from here — edit text, links and lists below.
 * Search for "TODO" to find everything that still needs your real details.
 */

export type Service = {
  title: string;
  description: string;
  points: string[];
  icon: "bot" | "code" | "megaphone" | "sparkles" | "cloud";
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  /** Path inside /public, e.g. "/projects/rag-qa.png". A styled placeholder shows if the file is missing. */
  image: string;
  /** Leave empty ("") to hide the button. */
  github: string;
  /** Leave empty ("") to hide the button. */
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

const services: Service[] = [
  {
    title: "AI Engineering",
    description:
      "Custom AI that does real work inside your business, grounded in your data and connected to your tools.",
    points: ["AI agents", "RAG chatbots", "GenAI solutions", "Workflow automation"],
    icon: "bot",
  },
  {
    title: "Web & App Development",
    description:
      "Fast, polished websites and apps that turn visitors into customers and give your team the tools it needs.",
    points: ["Business websites", "Web & mobile apps", "APIs", "AI integrations"],
    icon: "code",
  },
  {
    title: "Digital Marketing",
    description:
      "Get found by the right people and give them a reason to choose you, across search and social.",
    points: ["SEO", "Social media management", "Content strategy", "Digital advertising"],
    icon: "megaphone",
  },
  {
    title: "AI-Powered Growth",
    description:
      "Marketing that learns as it goes: AI helps us create faster, engage better and spend where it pays off.",
    points: [
      "AI-assisted content creation",
      "Social engagement optimization",
      "Audience insights",
      "Data-driven marketing strategies",
    ],
    icon: "sparkles",
  },
  {
    title: "Cloud & Deployment",
    description:
      "We take what we build from demo to dependable, on infrastructure that grows with your traffic.",
    points: ["Scalable infrastructure", "API integration", "Production deployment"],
    icon: "cloud",
  },
];

const name = "Zyantra";

export const site = {
  name,
  /** Logo mark (navbar, footer, favicon). The OG image draws the same "Z" in `accent`. */
  logo: "/logo.svg",
  footerLine: `${name}: intelligent systems that scale.`,
  tagline:
    "We build intelligent digital solutions that help businesses automate workflows, streamline operations, and scale faster.",
  location: "Based in Pakistan, working with clients worldwide",
  /** Your deployed domain, no trailing slash. Used for SEO, sitemap and robots. */
  url: "https://zyantra.vercel.app",
  /** The one accent colour for the whole site (CSS variable --accent, OG image). public/logo.svg has its own copy of this colour. */
  accent: "#7C5CFF",

  seo: {
    title: `${name} | AI Engineering, Web & App Development, Digital Marketing`,
    description:
      "We build intelligent digital solutions that help businesses automate workflows, streamline operations, and scale faster: AI agents, apps, marketing and cloud deployment.",
  },

  /** Leave any link empty ("") to hide that icon/button everywhere. */
  links: {
    linkedin: "https://www.linkedin.com/in/alamwazir/",
    github: "https://github.com/zyan-web",
    instagram: "https://www.instagram.com/yk___alam/",
    x: "https://x.com/NeoPro_",
    fiverr: "https://www.fiverr.com/alamsher6252",
    upwork: "https://www.upwork.com/freelancers/~012d16ba0be40a0ecb",
    email: "bloomwaxiri@gmail.com",
  },

  /** WhatsApp chat used by every WhatsApp button. Leave `phone` empty to hide them all. */
  whatsapp: {
    /** Country code + number, digits only. */
    phone: "923091902453",
    message: "Hi! I came across your website and I'd like to discuss a project.",
  },

  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#projects" },
    { label: "Founder", href: "#founder" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  primaryCta: { label: "Book a discovery call", href: "#contact" },

  hero: {
    eyebrow: "AI · Web & Apps · Marketing · Cloud",
    // The words in `accent` are rendered in the italic serif font.
    headlineStart: "We build",
    accent: "intelligent",
    headlineEnd: "digital solutions that help businesses scale.",
    subtext:
      "We help businesses automate workflows, streamline operations and scale faster, with AI agents, websites and apps, growth marketing and production-ready cloud.",
    secondaryCta: { label: "See our work", href: "#projects" },
  },

  skills: [
    "AI Agents",
    "RAG",
    "LangChain",
    "OpenAI",
    "Claude",
    "LiveKit",
    "MCP",
    "n8n",
    "Python",
    "FastAPI",
    "Next.js",
    "Flutter",
    "Android",
    "Firebase",
    "SEO",
    "Social Media",
    "Content Strategy",
    "Paid Ads",
    "Docker",
    "AWS",
    "CI/CD",
  ],

  audiences: [
    {
      title: "Startups & founders",
      description:
        "You have a product idea and need one team to build the AI, the app and the infrastructure, then help you find your first users.",
    },
    {
      title: "Growing businesses",
      description:
        "Manual work is slowing you down and your marketing isn't pulling its weight. We automate the busywork and build a growth engine around it.",
    },
    {
      title: "Agencies & in-house teams",
      description:
        "Your clients want AI features or your roadmap is overloaded. We plug in as a reliable engineering and marketing partner, white-label if you prefer.",
    },
  ],

  services,

  projects: [
    {
      title: "RAG Document Q&A",
      description: "Ask questions over your own documents and get answers with sources.",
      tags: ["Python", "RAG", "LangChain", "Vector DB"],
      image: "/projects/rag-document-qa.png",
      github: "", // TODO: GitHub repo URL
      live: "", // TODO: live demo URL
    },
    {
      title: "LiveKit Voice Agent",
      description: "Real-time voice AI with MCP tools, shipped via CI/CD to AWS EC2.",
      tags: ["LiveKit", "MCP", "GitHub Actions", "AWS EC2"],
      image: "/projects/livekit-voice-agent.png",
      github: "", // TODO: GitHub repo URL
      live: "", // TODO: live demo URL
    },
    {
      title: "AI Quiz & Evaluation System",
      description: "LLM-generated quizzes with rubric-based grading of answers.",
      tags: ["LLM", "Python", "FastAPI", "Evaluation"],
      image: "/projects/ai-quiz-evaluation.png",
      github: "", // TODO: GitHub repo URL
      live: "", // TODO: live demo URL
    },
    {
      title: "Sentiment Intelligence API",
      description: "Classifies client feedback as positive, negative or neutral.",
      tags: ["NLP", "FastAPI", "Python", "REST API"],
      image: "/projects/sentiment-intelligence-api.png",
      github: "", // TODO: GitHub repo URL
      live: "", // TODO: live demo URL
    },
    {
      title: "WhatsApp AI Support Bot",
      description: "Customer support on WhatsApp powered by n8n and the WhatsApp Business API.",
      tags: ["n8n", "WhatsApp API", "LLM", "Automation"],
      image: "/projects/whatsapp-ai-support-bot.png",
      github: "", // TODO: GitHub repo URL
      live: "", // TODO: live demo URL
    },
    {
      title: "Safir-e-Quran",
      description: "A Flutter app for learning Tajweed step by step.",
      tags: ["Flutter", "Dart", "Firebase", "Mobile"],
      image: "/projects/safir-e-quran.png",
      github: "", // TODO: GitHub repo URL
      live: "", // TODO: Play Store / live URL
    },
    {
      title: "AI Quiz LLM Project",
      description: "LLM-powered app that generates quizzes on any topic and evaluates answers instantly.",
      tags: ["LLM", "Python", "GenAI", "Evaluation"],
      image: "/projects/ai-quiz-llm.png",
      github: "", // TODO: GitHub repo URL
      live: "", // TODO: live demo URL
    },
    {
      title: "AI Healthcare Operations Administration Agent",
      description:
        "AI agent that automates healthcare admin work such as appointment scheduling, patient records and staff workflows.",
      tags: ["AI Agent", "LLM", "Automation", "Healthcare"],
      image: "/projects/healthcare-ops-agent.png",
      github: "", // TODO: GitHub repo URL
      live: "", // TODO: live demo URL
    },
  ] satisfies Project[],

  /** "Sound familiar?" — client problems shown as an accordion, one per service. */
  faq: [
    {
      question: "“Our team spends hours on the same repetitive tasks and questions.”",
      answer:
        "AI Engineering: we build AI agents, RAG chatbots and automated workflows that handle routine support, admin and data entry, grounded in your own documents and connected to the tools you already use.",
    },
    {
      question: "“Our website looks dated and our customers expect an app.”",
      answer:
        "Web & App Development: we design and build fast business websites, web and mobile apps, and the APIs behind them, with AI features built in where they genuinely help.",
    },
    {
      question: "“People can't find us online, and our ads don't convert.”",
      answer:
        "Digital Marketing: we fix your SEO, manage your social channels, plan content that speaks to your buyers and run ad campaigns measured against real business results.",
    },
    {
      question: "“We post constantly, but we're guessing what our audience wants.”",
      answer:
        "AI-Powered Growth: we use AI to speed up content creation, optimise engagement and surface audience insights, so every campaign is shaped by data instead of hunches.",
    },
    {
      question: "“It worked in the demo, then crashed when real users arrived.”",
      answer:
        "Cloud & Deployment: we set up scalable infrastructure, clean API integrations and automated production deployments, so your product stays fast and online as you grow.",
    },
  ] satisfies FaqItem[],

  /** Stats with value 0 are hidden; the whole section hides if all are 0. */
  stats: [
    { label: "Projects delivered", value: 100, suffix: "+" },
    { label: "Trusted clients", value: 20, suffix: "+" },
    { label: "Years of experience", value: 2, suffix: "+" },
  ] satisfies Stat[],

  founder: {
    name: "Alam",
    title: `Founder & CEO of ${name}`,
    /** Put your photo at public/founder.jpg. A styled placeholder shows if it's missing. */
    photo: "/founder.jpg",
    bio: [
      "I'm an AI engineer and app developer. I build RAG chatbots, real-time voice agents and automation workflows, and ship Flutter and Android apps.",
      "I started the agency to give businesses one team that can take an idea from prototype to production, then help it grow.",
    ],
  },

  /** Real client reviews only. The section is hidden while this is empty. */
  reviews: [] as Review[],

  cta: {
    heading: "Ready to scale your",
    accent: "business?",
    subtext: "Let's turn your next idea into a competitive advantage.",
    whatsappLabel: "Message us",
  },

  contact: {
    heading: "Tell us about your",
    accent: "project",
    subtext: "Share what you're working on and we'll get back to you within 24 hours.",
    interests: [...services.map((s) => s.title), "Not sure yet"],
  },
};

export const footerLinks = [{ label: "Home", href: "#top" }, ...site.nav];
