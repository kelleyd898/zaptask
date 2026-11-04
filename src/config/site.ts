// Central business configuration. Edit values here; every page reads from this file.
export const site = {
  name: "Zaptask LLC",
  shortName: "Zaptask",
  url: "https://zaptaskllc.com",
  email: "contact@zaptaskllc.com",
  phone: "+1 (630) 639-2809",
  phoneHref: "tel:+16306392809",
  markets: "United States and Canada",
  /** Set to the verified registered address once confirmed. Null hides it everywhere. */
  address: null as string | null,
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
