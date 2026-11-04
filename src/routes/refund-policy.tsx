import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { site } from "@/config/site";
import { LegalPage } from "@/components/site/legal";

export const Route = createFileRoute("/refund-policy")({
  head: () => pageHead({ path: "/refund-policy", title: "Refund Policy — Zaptask LLC", description: "How deposits, cancellations and refunds work for Zaptask LLC web development projects." }),
  component: () => (
    <LegalPage
      title="Refund Policy"
      sections={[
        { h: "Overview", body: <p>{site.name} provides custom web development services. Because each project is built specifically for the client, refunds depend on how much work has been completed. The exact terms of each project are set in its written agreement, which takes priority over this policy.</p> },
        { h: "Consultations", body: <p>Initial consultations are free. No payment is collected and no refund applies.</p> },
        { h: "Deposits", body: <p>Projects usually begin with a deposit. If you cancel before any work has started, the deposit is refunded in full. Once work has begun, the deposit covers planning and work already completed and is non-refundable.</p> },
        { h: "Cancellation During a Project", body: <p>You may cancel a project at any time in writing. You will be billed only for work completed up to the cancellation date, and any amount paid beyond that will be refunded.</p> },
        { h: "Completed and Approved Work", body: <p>Work that has been delivered and approved, including completed milestones, is non-refundable. If something does not match the agreed scope, we will fix it at no extra cost.</p> },
        { h: "Maintenance Plans", body: <p>Monthly maintenance can be cancelled at any time before the next billing date. The current month is not refunded partially.</p> },
        { h: "Third-Party Costs", body: <p>Domains, hosting, paid plugins, licences and other third-party purchases made on your behalf are non-refundable.</p> },
        { h: "How to Request a Refund", body: <p>Email <a className="text-brand underline" href={`mailto:${site.email}`}>{site.email}</a> with your name and project details. We reply within 5 business days, and approved refunds are returned to the original payment method within 10 business days.</p> },
        { h: "Contact", body: <p>Mailing address: {site.address}.</p> },
      ]}
    />
  ),
});
