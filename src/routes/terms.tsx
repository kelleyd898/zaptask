import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { site } from "@/config/site";
import { LegalPage } from "@/components/site/legal";

export const Route = createFileRoute("/terms")({
  head: () => pageHead({ path: "/terms", title: "Terms & Conditions — Zaptask LLC", description: "Terms and conditions governing the use of the Zaptask LLC website and inquiry services." }),
  component: () => (
    <LegalPage
      title="Terms & Conditions"
      sections={[
        { h: "Acceptance of Terms", body: <p>By accessing {site.url}, you agree to these Terms & Conditions. If you do not agree, please do not use the website.</p> },
        { h: "Website Content", body: <p>Content on this website is provided for general information about {site.name} and its services. It does not constitute a binding offer or a guarantee of any specific outcome.</p> },
        { h: "Inquiries and Consultation Requests", body: <p>Submitting a contact or consultation form does not create a client relationship and does not automatically confirm an appointment. Any engagement is subject to a separate written agreement.</p> },
        { h: "Intellectual Property", body: <p>The website's design, text and branding are the property of {site.name} and may not be reproduced without permission.</p> },
        { h: "Acceptable Use", body: <p>You agree not to misuse the website, submit unlawful or misleading information, or attempt to disrupt its operation.</p> },
        { h: "Limitation of Liability", body: <p>To the fullest extent permitted by law, {site.name} is not liable for indirect or consequential damages arising from use of this website.</p> },
        { h: "Governing Law", body: <p>These terms are governed by the laws of {site.legal.governingState}, without regard to conflict-of-law principles.</p> },
        { h: "Changes", body: <p>We may revise these terms at any time. Continued use of the website constitutes acceptance of the updated terms.</p> },
        { h: "Contact", body: <p>Questions about these terms can be sent to <a className="text-brand underline" href={`mailto:${site.email}`}>{site.email}</a>.</p> },
      ]}
    />
  ),
});
