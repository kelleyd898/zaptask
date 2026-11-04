import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { site } from "@/config/site";
import { LegalPage } from "@/components/site/legal";

export const Route = createFileRoute("/privacy")({
  head: () => pageHead({ path: "/privacy", title: "Privacy Policy — Zaptask LLC", description: "How Zaptask LLC collects, uses and protects information submitted through zaptaskllc.com." }),
  component: () => (
    <LegalPage
      title="Privacy Policy"
      sections={[
        { h: "Overview", body: <p>This Privacy Policy explains how {site.name} ("we", "us") handles information collected through {site.url}. By using this website you agree to the practices described here.</p> },
        { h: "Information We Collect", body: <p>We collect information you voluntarily provide through our contact and consultation forms, such as your name, business email, company name, country, preferred meeting time and project details. Our hosting provider may also record standard technical data such as IP address and browser type for security and performance.</p> },
        { h: "How We Use Information", body: <p>We use submitted information to respond to inquiries, schedule consultations, provide requested services and maintain the security of the website. We do not sell personal information.</p> },
        { h: "Service Providers", body: <p>Form submissions are delivered to our team using third-party messaging and hosting services. These providers process data only as needed to deliver their services to us.</p> },
        { h: "Data Retention", body: <p>We keep inquiry information only as long as reasonably necessary for the purposes described above or as required by law.</p> },
        { h: "Your Rights", body: <p>Depending on where you live — including under applicable U.S. state laws and Canada's PIPEDA — you may have the right to access, correct or delete your personal information. Contact us to make a request.</p> },
        { h: "Security", body: <p>We use reasonable safeguards to protect information, but no method of transmission over the internet is completely secure.</p> },
        { h: "Changes", body: <p>We may update this policy from time to time. The effective date above reflects the latest version.</p> },
        { h: "Contact", body: <p>Questions about this policy can be sent to <a className="text-brand underline" href={`mailto:${site.email}`}>{site.email}</a> or {site.phone}.{site.address ? ` Mailing address: ${site.address}.` : ""}</p> },
      ]}
    />
  ),
});
