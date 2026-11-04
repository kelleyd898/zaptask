import {
  Code2,
  Globe,
  LayoutDashboard,
  MousePointerClick,
  Layers,
  RefreshCw,
  Wrench,
  Plug,
  PenTool,
  Smartphone,
  Lightbulb,
  Network,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  covers: string[];
  benefits: string[];
  cta: string;
}

export const services: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    icon: Code2,
    summary: "Software engineered around your specific workflows, data and operational requirements.",
    covers: ["Requirements analysis", "Application design and engineering", "Testing and quality review", "Deployment support"],
    benefits: ["Tools that fit how your team works", "Reduced reliance on manual processes", "Ownership of a maintainable codebase"],
    cta: "Discuss your software project",
  },
  {
    slug: "website-development",
    title: "Website Development",
    icon: Globe,
    summary: "Professional, fast and accessible websites that represent your business clearly.",
    covers: ["Information architecture", "Responsive development", "Content structure and SEO foundations", "Launch support"],
    benefits: ["A credible online presence", "Consistent experience on every device", "A site your team can grow with"],
    cta: "Plan your website",
  },
  {
    slug: "business-web-applications",
    title: "Business Web Applications",
    icon: LayoutDashboard,
    summary: "Browser-based applications such as portals, dashboards and internal tools.",
    covers: ["Customer and staff portals", "Dashboards and reporting views", "Role-based access", "Data management interfaces"],
    benefits: ["Centralized information", "Access from anywhere", "Streamlined day-to-day operations"],
    cta: "Talk about your web application",
  },
  {
    slug: "landing-page-development",
    title: "Landing Page Development",
    icon: MousePointerClick,
    summary: "Focused, well-structured pages built for a single campaign, product or offer.",
    covers: ["Page structure and copy layout", "Responsive build", "Form and analytics integration", "Performance optimization"],
    benefits: ["A clear message for visitors", "Fast load times", "Easy measurement of results"],
    cta: "Request a landing page",
  },
  {
    slug: "frontend-development",
    title: "Frontend Development",
    icon: Layers,
    summary: "Clean, component-based user interfaces built with modern frontend technologies.",
    covers: ["Design-to-code implementation", "Component libraries", "Accessibility improvements", "Performance tuning"],
    benefits: ["Consistent, polished interfaces", "Reusable UI components", "Better usability for all visitors"],
    cta: "Discuss frontend work",
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance & Updates",
    icon: RefreshCw,
    summary: "Ongoing updates and care to keep your website accurate, current and functional.",
    covers: ["Content and layout updates", "Dependency and library updates", "Performance checks", "Minor feature additions"],
    benefits: ["A site that stays current", "Fewer unexpected issues", "A dependable point of contact"],
    cta: "Ask about maintenance",
  },
  {
    slug: "bug-fixing-support",
    title: "Bug Fixing & Technical Support",
    icon: Wrench,
    summary: "Investigation and resolution of defects in existing websites and applications.",
    covers: ["Issue diagnosis", "Code fixes and testing", "Cross-browser and device checks", "Technical guidance"],
    benefits: ["Restored functionality", "Clear explanations of root causes", "Improved stability"],
    cta: "Report a technical issue",
  },
  {
    slug: "api-integration",
    title: "API Integration",
    icon: Plug,
    summary: "Connecting your software with third-party services and internal systems.",
    covers: ["Third-party API integration", "Custom API development", "Data synchronization", "Error handling and logging"],
    benefits: ["Systems that share data reliably", "Less duplicate data entry", "Extended platform capabilities"],
    cta: "Discuss an integration",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: PenTool,
    summary: "Interface and experience design grounded in clarity and usability.",
    covers: ["User flows and wireframes", "Visual interface design", "Interactive prototypes", "Design systems"],
    benefits: ["Products that are easier to use", "Fewer revisions during development", "A consistent visual language"],
    cta: "Start a design project",
  },
  {
    slug: "mobile-application-design",
    title: "Mobile Application Design",
    icon: Smartphone,
    summary: "Design and project-based development for mobile application experiences.",
    covers: ["Mobile user flows", "Screen and interface design", "Prototypes for review", "Project-based development scope"],
    benefits: ["A clear product direction before build", "Interfaces suited to small screens", "Assets ready for development"],
    cta: "Discuss a mobile app",
  },
  {
    slug: "it-consulting",
    title: "IT Consulting",
    icon: Lightbulb,
    summary: "Practical guidance on technology choices, processes and digital initiatives.",
    covers: ["Technology assessments", "Tool and platform selection", "Project planning", "Digital process review"],
    benefits: ["Informed technology decisions", "Reduced project risk", "A clear roadmap"],
    cta: "Book a consulting session",
  },
  {
    slug: "software-architecture-consulting",
    title: "Software Architecture Consulting",
    icon: Network,
    summary: "Review and planning of system structure for maintainability and growth.",
    covers: ["Architecture reviews", "System design planning", "Technology stack evaluation", "Scalability considerations"],
    benefits: ["A sound technical foundation", "Easier long-term maintenance", "Clarity for engineering teams"],
    cta: "Discuss your architecture",
  },
];
