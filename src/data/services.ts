import {
  Globe,
  LayoutDashboard,
  MousePointerClick,
  Layers,
  RefreshCw,
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
    slug: "website-development",
    title: "Website Development",
    icon: Globe,
    summary: "Professional, fast and accessible websites that represent your business clearly.",
    covers: ["Information architecture", "Responsive development", "Content structure and SEO foundations", "Launch support"],
    benefits: ["A credible online presence", "Consistent experience on every device", "A site your team can grow with"],
    cta: "Plan your website",
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
    slug: "business-web-applications",
    title: "Business Web Applications",
    icon: LayoutDashboard,
    summary: "Browser-based applications such as portals, dashboards and internal tools.",
    covers: ["Customer and staff portals", "Dashboards and reporting views", "Role-based access", "Data management interfaces"],
    benefits: ["Centralized information", "Access from anywhere", "Streamlined day-to-day operations"],
    cta: "Talk about your web application",
  },
];
