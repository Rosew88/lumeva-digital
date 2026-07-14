// Central content model for the Lumeva site. Keeping copy and structural
// data here (rather than scattered inline in pages) means new pages —
// Client Portal, Case Studies, Knowledge Base — can be added later by
// extending these arrays instead of restructuring components.

export const nav = [
  { label: "Framework", href: "/framework" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Technology Solutions", href: "/technology-solutions" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
] as const;

export const site = {
  name: "Lumeva Digital",
  tagline: "Move Smarter. Achieve More.",
  description:
    "Lumeva Digital is a business transformation firm that helps growing companies eliminate operational friction through better systems, technology, AI, automation, and strategy.",
  url: "https://www.lumevadigital.com",
};

export type FrameworkStage = {
  step: string;
  name: string;
  purpose: string;
  deliverables: string[];
  outcome: string;
};

export const framework: FrameworkStage[] = [
  {
    step: "01",
    name: "Discover",
    purpose:
      "We start by listening. Structured conversations with your leadership and team surface where time, money, and momentum are actually being lost.",
    deliverables: ["Stakeholder interviews", "Systems & tooling inventory", "Operational friction map"],
    outcome: "A clear, shared picture of what's really slowing the business down.",
  },
  {
    step: "02",
    name: "Diagnose",
    purpose:
      "We translate what we heard into evidence. Every recommendation that follows is traceable back to a specific, observed inefficiency.",
    deliverables: ["Root-cause analysis", "Process & data audit", "Business Health Assessment scoring"],
    outcome: "Priorities ranked by business impact, not by what's easiest to sell.",
  },
  {
    step: "03",
    name: "Design",
    purpose:
      "We architect the target state — the systems, workflows, and technology stack that should exist once friction is removed.",
    deliverables: ["Future-state operating model", "Technology architecture plan", "Change roadmap"],
    outcome: "A concrete plan your team can see itself executing.",
  },
  {
    step: "04",
    name: "Develop",
    purpose:
      "We build. This is where strategy becomes software, automation, dashboards, and workflows — configured around how your business actually runs.",
    deliverables: ["Custom builds & integrations", "Automation workflows", "Brand & experience assets"],
    outcome: "Working systems, not slide decks.",
  },
  {
    step: "05",
    name: "Deploy",
    purpose:
      "We roll out deliberately — training your team, migrating data with care, and staging changes so daily operations are never disrupted.",
    deliverables: ["Team onboarding & training", "Data migration", "Phased go-live plan"],
    outcome: "Adoption from day one, not a system nobody uses.",
  },
  {
    step: "06",
    name: "Drive",
    purpose:
      "Transformation isn't a one-time project. We stay on as a partner — monitoring outcomes and refining the system as your business grows.",
    deliverables: ["Performance monitoring", "Quarterly optimization reviews", "Ongoing advisory"],
    outcome: "A business that keeps getting more efficient, not less.",
  },
];

export type Practice = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  problems: string[];
  deliverables: string[];
  idealFor: string[];
  outcomes: string[];
};

export const practices: Practice[] = [
  {
    slug: "business-strategy-operations",
    name: "Business Strategy & Operations",
    shortName: "Strategy & Operations",
    summary:
      "For businesses that have grown past the systems and structure they started with. We rebuild the operating model underneath the growth.",
    problems: [
      "Decisions rely on gut feel because there's no single source of truth",
      "The org has outgrown its processes, and everyone feels it",
      "Leadership is buried in day-to-day work instead of steering the business",
    ],
    deliverables: [
      "Operating model redesign",
      "Standard operating procedures",
      "Org & process mapping",
      "90-day transformation roadmap",
    ],
    idealFor: [
      "Founder-led businesses past $2M in revenue",
      "Companies integrating a recent acquisition",
      "Teams scaling headcount faster than process",
    ],
    outcomes: [
      "Decisions made on data, not instinct",
      "Clear ownership across the org chart",
      "A business that runs without the founder in every room",
    ],
  },
  {
    slug: "digital-infrastructure",
    name: "Digital Infrastructure",
    shortName: "Digital Infrastructure",
    summary:
      "Your website, software, and internal tools should work together — not exist as disconnected patches held together with habit.",
    problems: [
      "The website doesn't convert and no one's sure why",
      "Core tools don't talk to each other, so data is re-entered by hand",
      "Infrastructure decisions were made reactively, one crisis at a time",
    ],
    deliverables: [
      "Website & platform architecture",
      "Systems integration & API work",
      "Cloud & hosting strategy",
      "Technical audit & modernization plan",
    ],
    idealFor: [
      "Businesses with a website that isn't earning its keep",
      "Teams juggling five tools that should be one",
      "Companies preparing for a platform migration",
    ],
    outcomes: [
      "A website built to convert, not just exist",
      "Systems that share data automatically",
      "Infrastructure that scales ahead of the business, not behind it",
    ],
  },
  {
    slug: "ai-automation",
    name: "AI & Automation",
    shortName: "AI & Automation",
    summary:
      "Practical automation for the manual work quietly consuming your team's week — applied where it removes friction, not where it's trendy.",
    problems: [
      "Staff spend hours a week on repetitive, manual tasks",
      "Customer follow-up and internal handoffs depend on someone remembering",
      "Leadership isn't sure where AI would actually help versus just add noise",
    ],
    deliverables: [
      "Automation opportunity assessment",
      "Workflow & process automation",
      "AI tool selection & implementation",
      "Team training & adoption support",
    ],
    idealFor: [
      "Operations-heavy businesses with repetitive workflows",
      "Teams that have tried AI tools without a clear strategy",
      "Companies with high-volume customer communication",
    ],
    outcomes: [
      "Hours returned to the team every week",
      "Fewer things falling through the cracks",
      "Automation your team actually trusts and uses",
    ],
  },
  {
    slug: "customer-experience-brand",
    name: "Customer Experience & Brand",
    shortName: "CX & Brand",
    summary:
      "How your business looks, sounds, and feels at every touchpoint — designed to build trust before a single word is spoken.",
    problems: [
      "The brand doesn't reflect the quality of the actual business",
      "Customer experience is inconsistent across touchpoints",
      "Marketing materials feel disconnected from the sales process",
    ],
    deliverables: [
      "Brand strategy & identity",
      "Customer journey mapping",
      "Experience design across touchpoints",
      "Messaging & positioning framework",
    ],
    idealFor: [
      "Businesses rebranding to match where they are today",
      "Companies with inconsistent customer experience",
      "Teams preparing to enter a new market or segment",
    ],
    outcomes: [
      "A brand that matches the caliber of the work",
      "A consistent, trustworthy experience at every touchpoint",
      "Marketing and sales finally telling the same story",
    ],
  },
  {
    slug: "business-intelligence",
    name: "Business Intelligence",
    shortName: "Business Intelligence",
    summary:
      "Visibility into the numbers that actually matter — so decisions are made on evidence, weeks earlier than the numbers used to arrive.",
    problems: [
      "Leadership doesn't have real-time visibility into KPIs",
      "Reporting is manual, delayed, and lives in a dozen spreadsheets",
      "Data exists but no one trusts it enough to act on it",
    ],
    deliverables: [
      "KPI & metrics framework",
      "Executive dashboards",
      "Data pipeline & reporting automation",
      "Ongoing analytics support",
    ],
    idealFor: [
      "Leadership teams flying without real-time data",
      "Businesses with data scattered across systems",
      "Companies preparing for investment or acquisition",
    ],
    outcomes: [
      "One dashboard leadership actually checks",
      "Decisions made on this week's data, not last quarter's",
      "A business that can prove its own performance",
    ],
  },
  {
    slug: "technology-solutions",
    name: "Technology Solutions",
    shortName: "Technology Solutions",
    summary:
      "Independent advisory on the software and infrastructure decisions that are too consequential to get wrong — without the reseller incentive.",
    problems: [
      "Too many vendors pitching, no unbiased advice on what's right",
      "Cybersecurity and infrastructure gaps that haven't been assessed",
      "Software sprawl with no one owning the overall stack",
    ],
    deliverables: [
      "Technology stack assessment",
      "Vendor-neutral recommendations",
      "Implementation oversight",
      "Cybersecurity & infrastructure review",
    ],
    idealFor: [
      "Businesses without an internal IT strategy function",
      "Companies evaluating a major software purchase",
      "Teams that have been burned by a reseller's advice before",
    ],
    outcomes: [
      "Technology decisions backed by an advocate, not a quota",
      "A right-sized stack instead of tool sprawl",
      "Infrastructure that's assessed, not assumed, to be secure",
    ],
  },
];

export const challenges = [
  {
    title: "The business feels chaotic",
    detail: "Growth happened faster than the systems meant to support it, and everyone can feel the strain.",
  },
  {
    title: "Too much manual work",
    detail: "Your best people spend hours a week on repetitive tasks a system should be handling.",
  },
  {
    title: "Disconnected software",
    detail: "Five tools, zero integration, and data that has to be re-entered by hand every time.",
  },
  {
    title: "Inconsistent customer experience",
    detail: "The experience depends on who a customer happens to talk to, not on a designed standard.",
  },
  {
    title: "A website that isn't converting",
    detail: "Traffic arrives. It just doesn't turn into pipeline — and no one's diagnosed why.",
  },
  {
    title: "No visibility into KPIs",
    detail: "Leadership is making six-figure decisions without a reliable, real-time view of performance.",
  },
];

export const industries = [
  {
    name: "Professional Services",
    detail: "Firms trading time for revenue that need better systems to scale beyond founder hours.",
  },
  {
    name: "Healthcare & Wellness",
    detail: "Patient-facing organizations balancing compliance, experience, and operational efficiency.",
  },
  {
    name: "Manufacturing & Distribution",
    detail: "Operations-heavy businesses with complex supply chains and thin margins for error.",
  },
  {
    name: "Financial & Insurance Services",
    detail: "Regulated businesses where trust, security, and precision are the product.",
  },
  {
    name: "Real Estate & Construction",
    detail: "Project-based businesses juggling timelines, vendors, and client communication at once.",
  },
  {
    name: "Retail & E-Commerce",
    detail: "Customer-experience-driven businesses competing on speed, personalization, and trust.",
  },
];

export const testimonials = [
  {
    quote:
      "Lumeva didn't sell us a website. They sat with our operations for a month before recommending anything — and it showed in what we got back.",
    name: "Managing Partner",
    context: "Professional Services Firm",
  },
  {
    quote:
      "We finally have one dashboard leadership actually looks at every Monday. That alone changed how we run the business.",
    name: "COO",
    context: "Regional Distribution Company",
  },
  {
    quote:
      "The automation work gave three people back roughly a day a week each. It paid for itself before the quarter was over.",
    name: "Operations Director",
    context: "Healthcare Services Group",
  },
];

export const technologyCategories = [
  "Cybersecurity",
  "Microsoft Solutions",
  "Cloud Infrastructure",
  "AI Platforms",
  "Business Software",
  "Business Communications",
  "Backup & Disaster Recovery",
  "Networking",
  "Business Productivity",
];

export const advisoryProcess = [
  { step: "01", name: "Business Assessment", detail: "Understanding your goals, constraints, and current stack before any product enters the conversation." },
  { step: "02", name: "Technology Review", detail: "An honest audit of what you have — what's working, what's redundant, what's a risk." },
  { step: "03", name: "Strategic Recommendations", detail: "Vendor-neutral guidance mapped to your budget, scale, and growth trajectory." },
  { step: "04", name: "Implementation", detail: "Hands-on project management so the rollout doesn't fall on your internal team alone." },
  { step: "05", name: "Optimization", detail: "Ongoing tuning as your business — and the technology landscape — keeps moving." },
];

export const resourceCategories = [
  {
    title: "Guides",
    detail: "Practical, no-fluff walkthroughs for the operational decisions growing businesses face.",
  },
  {
    title: "Blog",
    detail: "Perspective on business transformation, technology, and operations from the Lumeva team.",
  },
  {
    title: "Templates",
    detail: "Frameworks and worksheets you can put to use before your first conversation with us.",
  },
  {
    title: "White Papers",
    detail: "Deeper research on the systems and strategy questions facing growing organizations.",
  },
  {
    title: "Business Insights",
    detail: "Data and commentary on where operational friction tends to hide, by industry.",
  },
  {
    title: "Workshops",
    detail: "Live sessions on strategy, systems, and technology — announced to our early access list first.",
  },
];

export const faqs = [
  {
    q: "Is Lumeva a marketing agency?",
    a: "No. Marketing is sometimes part of the work, but Lumeva is a business transformation firm — we start with operations, systems, and strategy, and use technology, brand, and automation as tools to fix what's actually slowing the business down.",
  },
  {
    q: "What size business do you work with?",
    a: "Most clients are growing, founder-led or mid-market businesses that have outgrown the systems they started with — typically past their first few million in revenue, though the right fit matters more than a specific number.",
  },
  {
    q: "Do you resell software?",
    a: "No. Our technology recommendations are vendor-neutral. We advise based on your goals, existing systems, and budget — not on what pays us the highest commission.",
  },
  {
    q: "How long does a typical engagement take?",
    a: "It depends on scope. A focused engagement inside one practice area might run 6–10 weeks; a full operating model transformation can run two quarters or more. We scope this together after the Discover phase.",
  },
  {
    q: "What happens after implementation?",
    a: "We don't disappear at go-live. The Drive phase of our framework is ongoing — ranging from quarterly optimization check-ins to a standing advisory relationship, depending on what you need.",
  },
];
