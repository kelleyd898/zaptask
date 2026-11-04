// Central business configuration. Edit values here; every page reads from this file.
export const site = {
  name: "Zaptask LLC",
  shortName: "Zaptask",
  url: "https://zaptaskllc.com",
  email: "contact@zaptaskllc.com",
  phone: "+1 (630) 639-2809",
  phoneHref: "tel:+16306392809",
  markets: "United States and Canada",
  /** Mailing address shown in the footer, contact page and legal pages. */
  address: "425-1 S 3rd Street, Saint Charles, IL 60174",
  /** Who Zaptask is serving right now, and how the business is run. */
  focus: {
    audience: "small businesses",
    audienceEyebrow: "Now serving small businesses",
    audienceLine:
      "We are currently working with small businesses — local shops, service providers and growing teams that need dependable websites and web tools without a large agency overhead.",
    ownerEyebrow: "Owner-operated",
    ownerLine:
      "Zaptask LLC is a single-member business managed by its owner, so the person you speak with is the person doing the work.",
  },
  /** Legal placeholders — fill in once confirmed. */
  legal: {
    governingState: "[State of registration — to be confirmed]",
    effectiveDate: "November 2026",
  },
  /** Portfolio is hidden until real, approved projects exist. */
  portfolio: {
    enabled: false,
    projects: [] as Array<{ title: string; summary: string; services: string[]; url?: string }>,
  },
} as const;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;
