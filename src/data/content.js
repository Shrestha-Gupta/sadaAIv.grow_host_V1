export const services = {
  build: [
    {
      id: "ai-automation",
      title: "AI Automation & Workflows",
      description: "Custom AI-powered workflows that remove manual, repetitive work -- making execution faster and more reliable.",
      bullets: ["Process automation with AI agents", "LLM-powered document pipelines", "CRM and communication automation", "Custom GPT integrations", "Scheduled reporting systems"],
    },
    {
      id: "digital-solutions",
      title: "Digital Solutions & Web Platforms",
      description: "Websites, portals and internal tools built to be used, not just launched -- fast, maintainable, and fully yours.",
      bullets: ["Marketing websites and landing pages", "Internal dashboards and portals", "E-commerce and booking platforms", "CMS-backed content platforms"],
    },
    {
      id: "custom-tech",
      title: "Custom Technology Solutions",
      description: "Where off-the-shelf tools do not fit, we design and build the specific system the problem calls for.",
      bullets: ["Bespoke software architecture", "API design and integrations", "Data pipelines and ETL systems", "Scalable backend systems"],
    },
  ],
  run: [
    {
      id: "campaign-planning",
      title: "Campaign Planning & Execution",
      description: "From strategy to on-ground rollout -- campaigns planned with clear structure and carried through end to end.",
      bullets: ["Campaign strategy and narrative", "Multi-channel rollout planning", "On-ground activation management", "Real-time campaign monitoring"],
    },
    {
      id: "social-media",
      title: "Social Media & Digital Outreach",
      description: "Content, channels and outreach calendars run with consistency -- built around what the audience actually engages with.",
      bullets: ["Content strategy and calendar management", "Platform-specific content production", "Paid social advertising", "Community engagement management"],
    },
    {
      id: "influencer",
      title: "Influencer & Community Management",
      description: "Relationships with the right voices, and communities managed actively rather than left to run themselves.",
      bullets: ["Influencer identification and outreach", "Campaign briefs and coordination", "Community building on platforms", "UGC campaigns and ambassador programs"],
    },
    {
      id: "data-monitoring",
      title: "Data, Monitoring & Performance",
      description: "Dashboards and monitoring that tell you what is actually happening across every workstream -- in real time.",
      bullets: ["Live performance dashboards", "Cross-channel attribution reporting", "Sentiment and media monitoring", "KPI tracking and alert systems"],
    },
  ],
};

export const portfolio = [
  {
    id: 1,
    title: "HPPCHRI — Yuva Sanchar Cancer Awareness Campaign",
    sector: "Healthcare / NGO",
    tags: ["Campaign Planning", "Digital Outreach", "Web Platform"],
    tagColors: ["lime", "accent", ""],
    description: "Built the full digital infrastructure for the HPPCHRI Yuva Sanchar city-wide cancer awareness drive — campaign website, delegate registration portal, awareness quiz, and on-ground digital outreach across 13+ districts of Eastern UP.",
    result: "800+ schools reached · 10K+ registrations · 13+ districts",
    liveUrl: "https://hppchri-campaign.vercel.app/",
    bg: "#E0F7F4",
    color: "#0B6E6B",
  },
  {
    id: 2,
    title: "Bikanervala Gorakhpur — Building a Local Digital Connect",
    sector: "F&B / Restaurant",
    tags: ["Social Media Growth", "Local Brand Connect", "Content Strategy"],
    tagColors: ["accent", "lime", ""],
    description: "Bikanervala had strong brand recall but almost no local digital presence when we took over. Starting from under 300 followers, we rebuilt the page's identity around the local audience — planned a festival-and-weekend offer calendar and executed it consistently to grow a real, engaged local community.",
    result: "300 → 3,400+ followers grown organically",
    bullets: [
      "Festival & weekend offer calendar planned and executed",
      "Local customer connect built from under 300 followers",
      "Consistent organic engagement from targeted local audience",
    ],
    bg: "#FFF8ED",
    color: "#C85D0A",
  },
  {
    id: 3,
    title: "Wakhra Swaad — From Overpriced Perception to Steady Revenue",
    sector: "F&B / Restaurant",
    tags: ["Website Revamp", "Menu Optimisation", "Digital Solutions"],
    tagColors: ["accent", "", "lime"],
    description: "Wakhra Swaad was overpricing its menu without the footfall to match. We introduced structured user feedback, rebuilt their website to project a professional and trustworthy image, and optimised menu pricing to real customer expectations — bringing in steadier professional footfall and consistent revenue growth.",
    result: "Higher footfall · Consistent revenue growth",
    bullets: [
      "Website rebuilt to attract professional footfall",
      "Menu pricing optimised based on structured user feedback",
      "Consistent revenue growth from higher, steadier volume",
    ],
    bg: "#F2FBCC",
    color: "#5A6D00",
  },
  {
    id: 4,
    title: "See City Destination — Ranking First, Staying Connected",
    sector: "Travel & Tourism",
    tags: ["SEO", "Client Database Management", "Digital Outreach"],
    tagColors: ["lime", "accent", ""],
    description: "Before working with us, See City Destination had almost no visibility on Google — clients simply weren't finding them. We ran a focused SEO campaign that got them ranking #1 for key Varanasi travel searches, and built a complete client database to stay connected through regular updates for repeat and referral business.",
    result: "Ranked #1 on Google for Varanasi travel searches",
    bullets: [
      "Higher visit-to-conversion rate from top search visibility",
      "Ongoing client database built for repeat & referral business",
      "Regular client touchpoints to drive consistent bookings",
    ],
    bg: "#E8F4FF",
    color: "#1A5FA8",
  },
];

export const blogPosts = [
  {
    id: 1,
    slug: "ai-workflows-2026",
    title: "How AI Workflows Are Changing the Way Teams Operate in 2026",
    category: "AI & Automation",
    date: "Aug 28, 2026",
    readTime: "6 min read",
    excerpt: "The most impactful AI use cases are not the flashy demos -- they are the quiet automations that free up 20 hours a week from every team member.",
    bg: "#EEEAFF",
    featured: true,
  },
  {
    id: 2,
    slug: "campaign-data-india",
    title: "Why Data-Driven Campaign Management is Non-Negotiable",
    category: "Campaign Strategy",
    date: "Aug 15, 2026",
    readTime: "8 min read",
    excerpt: "Ground-level campaigns are getting more complex. Here is how technology brings structure to the chaos.",
    bg: "#FBE9E4",
    featured: false,
  },
  {
    id: 3,
    slug: "building-without-fluff",
    title: "Building Without Fluff: The Case for Execution-First Startups",
    category: "Technology",
    date: "Aug 5, 2026",
    readTime: "5 min read",
    excerpt: "Too many organisations get stuck in planning mode. Moving fast with structure beats waiting for perfect conditions.",
    bg: "#F2FBCC",
    featured: false,
  },
  {
    id: 4,
    slug: "ngo-digital-gap",
    title: "The Digital Gap in the NGO Sector -- And How to Close It",
    category: "Digital Solutions",
    date: "Jul 10, 2026",
    readTime: "6 min read",
    excerpt: "Most NGOs are still operating with outdated systems. A modern digital foundation does not have to be expensive.",
    bg: "#FBE9E4",
    featured: false,
  },
  {
    id: 5,
    slug: "custom-vs-off-shelf",
    title: "Custom vs. Off-the-Shelf: How to Actually Decide",
    category: "Technology",
    date: "Jun 28, 2026",
    readTime: "5 min read",
    excerpt: "SaaS tools are great until they are not. A practical decision framework for when you should build instead of buy.",
    bg: "#EEEAFF",
    featured: false,
  },
];

export const team = [
  { name: "Shivam S.", role: "Founder & Strategy", initials: "SS", bg: "#FBE9E4", color: "#D94F2A" },
  { name: "Aisha K.", role: "AI & Automation Lead", initials: "AK", bg: "#F2FBCC", color: "#6B7000" },
  { name: "Rohan M.", role: "Full-Stack Developer", initials: "RM", bg: "#EEEAFF", color: "#5B4EE8" },
  { name: "Priya V.", role: "Campaign & Outreach", initials: "PV", bg: "#FBE9E4", color: "#D94F2A" },
];

export const sectors = [
  "Startups & founders",
  "NGOs & social organisations",
  "Political & public campaigns",
  "SMBs & local businesses",
  "Educational institutions",
  "Creators & communities",
];

export const metrics = [
  { num: "2", label: "Core capability tracks" },
  { num: "7+", label: "Service lines delivered" },
  { num: "100%", label: "Execution-first outcomes" },
];

export const clientStories = [
  {
    id: "hppchri",
    client: "HPPCHRI",
    clientFull: "Hanuman Prasad Poddar Cancer Hospital & Research Institute",
    sector: "Healthcare / NGO",
    tags: ["Campaign Strategy", "Communication", "Execution"],
    category: "CAMPAIGN STRATEGY",
    title: "From an Idea to Something Real",
    shortDescription:
      "Built the complete digital and communication infrastructure for the Yuva Sanchar city-wide cancer awareness drive — campaign website, delegate registration, awareness quiz and on-ground outreach across 13+ districts of Eastern UP.",
    quote:
      "I had been carrying the idea of a large-scale cancer awareness drive for almost a year, but we simply couldn't get it off the ground on our own. When we connected with the sadaAIv.grow team and shared our vision, they took it seriously from day one.",
    attribution: {
      name: "Rasendu Fogla",
      role: "Joint Secretary",
      org: "Hanuman Prasad Poddar Cancer Hospital & Research Institute (HPPCHRI)",
    },
    facts: [
      "Large-scale city-wide cancer awareness campaign",
      "Campaign strategy, communication & execution planned",
      "Work delivered ahead of schedule",
    ],
    featured: true,
  },
  {
    id: "bikanervala",
    client: "Bikanervala Gorakhpur",
    sector: "F&B / Restaurant",
    tags: ["Social Media Growth", "Local Brand Connect"],
    category: "F&B / RESTAURANT",
    title: "From Brand Recognition to a Real Local Community",
    shortDescription:
      "Starting from fewer than 300 followers, the page grew organically to 3,400+ through a festival-and-weekend offer calendar that gave local customers a consistent reason to follow, engage and come back.",
    metric: "300 → 3,400+ followers grown organically",
    quote:
      "Before working with sadaAIv.grow, our social media was mostly just another place where we posted about the brand. They helped us understand how to actually connect with customers in Gorakhpur. The festival and weekend campaigns have made a real difference — people now look forward to the offers and engage with us much more. It feels like we've built a local community around the outlet, not just a social media page.",
    attribution: {
      name: "Owner",
      org: "Bikanervala Gorakhpur",
    },
    featured: false,
  },
  {
    id: "wakhra-swaad",
    client: "Wakhra Swaad",
    sector: "F&B / Restaurant",
    tags: ["Website Revamp", "Menu Optimisation"],
    category: "F&B / RESTAURANT",
    title: "Making the Menu Work for the Business",
    shortDescription:
      "Wakhra Swaad had a good product, but its pricing and online presentation were creating friction. After aligning the menu with real customer expectations and rebuilding the website, the restaurant began seeing steadier footfall and more consistent revenue.",
    metric: "Consistent revenue growth · Improved footfall",
    quote:
      "We knew the food was good, but something wasn't working when it came to getting people to come in and spend. sadaAIv.grow helped us look at the problem from the customer's point of view instead of just guessing. They took feedback seriously, worked on our menu pricing, and improved the website as well. Since then, we've seen much steadier footfall, and the revenue has become more consistent. That change has been very noticeable for us.",
    attribution: {
      name: "Owner",
      org: "Wakhra Swaad, Noida Sector 11",
    },
    featured: false,
  },
  {
    id: "see-city",
    client: "See City Destination",
    sector: "Travel & Tourism",
    tags: ["SEO", "Client Database Management"],
    category: "TRAVEL & TOURISM",
    title: "Getting Found — and Staying Connected",
    shortDescription:
      "SEO work brought See City Destination to the top position for key Varanasi travel searches, turning visibility into enquiries. A structured client database was then built to maintain relationships and drive repeat and referral business.",
    metric: "#1 Google ranking for Varanasi travel searches",
    quote:
      "Earlier, even when people were searching for travel services in Varanasi, our name simply wasn't visible. sadaAIv.grow worked on our SEO and helped us get to the top for important searches, which changed the number of people finding us online. What we also appreciated was that they didn't treat the customer relationship as finished after the trip. They helped us maintain a proper client database and stay in touch, and that has brought us some very valuable repeat and referral business.",
    attribution: {
      name: "Owner",
      org: "See City Destination Tours & Travels",
    },
    featured: false,
  },
];