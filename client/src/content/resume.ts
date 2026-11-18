/**
 * Single source of truth for site content.
 * Copied from docs/AbhayKrishnaMV_Cardboard.txt. Update this file when the resume changes.
 * The phone number on the resume is intentionally NOT included here.
 */

export interface Profile {
  name: string;
  firstName: string;
  title: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  resumeFileName: string;
}

export interface ShippedApp {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  url: string;
  platform: "ios" | "web";
  icon?: string;
  /** Two gradient stops used for the mockup glow / splash. */
  accent: [string, string];
  builtAt?: string;
}

export interface Role {
  id: string;
  title: string;
  company: string;
  start: string;
  end: string | null;
  bullets: string[];
  tech: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  id: "ar" | "music" | "microservices";
  title: string;
  description: string;
  tech: string[];
  url: string;
}

export interface Education {
  institution: string;
  degree: string;
  start: string;
  end: string;
  location: string;
  scoreLabel: string;
  score: number;
  scoreMax?: number;
  scoreSuffix?: string;
  decimals: number;
}

export const profile: Profile = {
  name: "Abhay Krishna M V",
  firstName: "Abhay",
  title: "Product Engineer | Mobile & Full-Stack",
  email: "abhay060704@gmail.com",
  location: "Bangalore, India",
  linkedin: "https://linkedin.com/in/abhay-krishna-mv",
  github: "https://github.com/Hammerhead04",
  resumeUrl: "/resume/Abhay_Krishna_MV_Resume.pdf",
  resumeFileName: "Abhay_Krishna_MV_Resume.pdf",
};

export const objective =
  "Product-minded mobile engineer who ships React Native/Expo apps to the App Store and cares how they feel to use. Built and launched several production apps end-to-end, from architecture and backend to CI/CD and release, and experienced building AI-powered features with OpenAI and WhatsApp Business. A clear written and verbal communicator, comfortable explaining technical trade-offs to founders, designers and non-technical users. Especially interested in verification for AI video editing: automated checks for glitches, audio sync, pacing, story arc and brand fit, tied to real engagement data.";

export const traits = [
  {
    id: "ship",
    title: "Ships end-to-end",
    body: "Architecture, backend, CI/CD and App Store release for several production apps.",
  },
  {
    id: "ai",
    title: "AI-powered features",
    body: "OpenAI and WhatsApp Business integrations that turn chats into structured data.",
  },
  {
    id: "talk",
    title: "Explains trade-offs clearly",
    body: "Comfortable walking founders, designers and non-technical users through technical decisions.",
  },
] as const;

export const shippedApps: ShippedApp[] = [
  {
    id: "around",
    name: "Around",
    subtitle: "Real Estate Rentals",
    tagline: "Discover your next property, from rentals to listings nearby.",
    url: "https://apps.apple.com/in/app/around-real-estate-rentals/id6792014252",
    platform: "ios",
    icon: "/apps/around.jpg",
    accent: ["#16a34a", "#4ade80"],
    builtAt: "Kulcha Cultr",
  },
  {
    id: "represent",
    name: "Represent",
    subtitle: "Civic Companion",
    tagline: "Your neighborhood civic companion.",
    url: "https://apps.apple.com/in/app/represent-civic-companion/id6776602204",
    platform: "ios",
    icon: "/apps/represent.jpg",
    accent: ["#2536ff", "#60a5fa"],
    builtAt: "Kulcha Cultr",
  },
  {
    id: "pickup",
    name: "Pickup",
    subtitle: "Order Takeaway",
    tagline: "Order takeaway ahead: food ready when you are.",
    url: "https://apps.apple.com/in/app/pickup-order-takeaway/id6748263503",
    platform: "ios",
    icon: "/apps/pickup.jpg",
    accent: ["#dc2626", "#f97316"],
    builtAt: "Kulcha Cultr",
  },
  {
    id: "loha",
    name: "Loha Studio",
    subtitle: "lohastudio.com",
    tagline: "Live on the web at lohastudio.com.",
    url: "https://lohastudio.com/",
    platform: "web",
    accent: ["#eab308", "#f97316"],
  },
];

export const experience: Role[] = [
  {
    id: "kulcha",
    title: "Full-Stack Developer",
    company: "Kulcha Cultr Technologies",
    start: "02/2026",
    end: null,
    bullets: [
      "Built and shipped three production apps end-to-end: React Native/Expo mobile clients, Next.js and React (Vite) admin dashboards, and Node.js/Express TypeScript APIs, with Zod contracts shared across an npm-workspaces monorepo.",
      "Integrated OpenAI with WhatsApp Business (Cloud API) to extract structured data from chats, ask for missing details, auto-create accounts and submit entries, via HMAC-verified webhooks and async workers.",
      "Implemented Firebase Auth (phone OTP, Google, Apple), FCM push notifications and Razorpay payments; built admin analytics (revenue, funnel conversion, daily active users, per-item views, locality-level interest) and RBAC with audited impersonation.",
      "Designed MongoDB/Mongoose models with 2dsphere geospatial indexes, $geoNear search, aggregation pipelines and multi-document transactions; migrated a PostgreSQL (Supabase) database to MongoDB.",
      "Deployed Dockerized services on AWS and GCP (Cloud Run via Cloud Build and Artifact Registry behind a load balancer) and set up GitHub Actions CI for lint, typecheck, tests and builds.",
    ],
    tech: ["React Native", "Expo", "Next.js", "TypeScript", "Node.js", "Zod", "OpenAI", "MongoDB", "Firebase", "GCP", "AWS", "Docker"],
  },
  {
    id: "aulosa",
    title: "Software Developer Intern",
    company: "Aulosa",
    start: "10/2025",
    end: "01/2026",
    bullets: [
      "Developed 10+ RESTful APIs (Node.js/Express) to surface artist analytics and profile data, reducing response times by 35% through caching and query optimization.",
      "Integrated AWS DynamoDB to manage and query 500K+ records with indexing strategies; secured 100% of endpoints with JWT-based authentication.",
    ],
    tech: ["Node.js", "Express", "AWS DynamoDB", "JWT", "Caching"],
  },
  {
    id: "tranna",
    title: "Backend Engineer Intern",
    company: "Tranna",
    start: "01/2025",
    end: "09/2025",
    bullets: [
      "Built reusable React Native components and implemented secure JWT-based authentication across backend and mobile client integrations.",
      "Implemented a CI/CD pipeline automating build, test and deployment, and Dockerized all microservices for deployment consistency.",
      "Designed and optimized PostgreSQL schemas and SQL queries, improving backend data reliability and query performance by 20%.",
    ],
    tech: ["React Native", "JWT", "CI/CD", "Docker", "PostgreSQL", "SQL"],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Mobile & Frontend",
    items: ["React Native (Expo)", "ReactJS", "Next.js", "Three.js", "Firebase Auth", "FCM push"],
  },
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "SQL", "HTML", "CSS"] },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Zod", "async workers/webhooks"],
  },
  {
    category: "Databases & Cloud",
    items: ["MongoDB", "PostgreSQL", "AWS DynamoDB", "AWS", "GCP Cloud Run"],
  },
  { category: "DevOps", items: ["Docker", "CI/CD Pipelines", "GitHub Actions"] },
  {
    category: "Data & ML",
    items: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter Notebook"],
  },
  { category: "Tools", items: ["Git", "GitHub", "Postman", "Visual Studio Code"] },
];

export const projects: Project[] = [
  {
    id: "ar",
    title: "QR-Enabled AR System for 3D Medical and Agricultural Training",
    description:
      "Built a browser-based AR training system with a responsive React.js interface, real-time 3D model rendering (Three.js) and integrated user assessments.",
    tech: ["React.js", "Three.js", "WebAR", "Assessments"],
    url: profile.github,
  },
  {
    id: "music",
    title: "Music Artist Performance & Analytics Platform",
    description:
      "Built a secure Node.js + Express backend on AWS DynamoDB with JWT auth, role-based authorization and caching, serving real-time data to a React frontend.",
    tech: ["Node.js", "Express", "AWS DynamoDB", "JWT", "React"],
    url: profile.github,
  },
  {
    id: "microservices",
    title: "Microservices-Based Student Management System",
    description:
      "Increased scalability by 30% with modular Node.js microservices (separate databases), Docker, API Gateway and Redis caching.",
    tech: ["Node.js", "Microservices", "Docker", "API Gateway", "Redis"],
    url: profile.github,
  },
];

export const exploring = {
  title: "Verification for AI video editing",
  summary:
    "Automated checks for glitches, audio sync, pacing, story arc and brand fit, tied to real engagement data.",
  checks: ["Glitches", "Audio sync", "Pacing", "Story arc", "Brand fit"],
  signal: "Engagement data",
};

export const education: Education[] = [
  {
    institution: "Global Academy of Technology",
    degree: "B.E. Computer Science Engineering",
    start: "2022",
    end: "2026",
    location: "Bangalore, India",
    scoreLabel: "CGPA",
    score: 8.38,
    scoreMax: 10,
    decimals: 2,
  },
  {
    institution: "NMKRV College",
    degree: "PCMB",
    start: "2020",
    end: "2021",
    location: "Bangalore, India",
    scoreLabel: "Score",
    score: 82.7,
    scoreSuffix: "%",
    decimals: 1,
  },
];

export const heroStats = [
  { value: 4, suffix: "", label: "Shipped products" },
  { value: 500, suffix: "K+", label: "Records on DynamoDB" },
  { value: 35, suffix: "%", label: "Faster API responses" },
  { value: 3, suffix: "", label: "Engineering roles" },
];

export const rotatingStack = ["React Native", "Next.js", "Node.js", "OpenAI"];

export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "apps", label: "Apps" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "exploring", label: "Exploring" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];
