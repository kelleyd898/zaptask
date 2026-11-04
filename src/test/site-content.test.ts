import { describe, expect, it } from "vitest";

import { site } from "@/config/site";
import { services } from "@/data/services";

// The service list, mailing address and business-focus statements are business
// rules, not styling: they must stay exactly as confirmed by the owner.
describe("Site business rules", () => {
  it("offers only the five confirmed services", () => {
    expect(services.map((s) => s.title)).toEqual([
      "Website Development",
      "Landing Page Development",
      "Frontend Development",
      "Website Maintenance & Updates",
      "Business Web Applications",
    ]);
  });

  it("publishes the confirmed mailing address", () => {
    expect(site.address).toBe("425-1 S 3rd Street, Saint Charles, IL 60174");
  });

  it("states the small-business focus and owner-operated structure", () => {
    expect(site.focus.audience).toBe("small businesses");
    expect(site.focus.audienceLine).toContain("small businesses");
    expect(site.focus.ownerLine).toContain("single-member");
    expect(site.focus.ownerLine).toContain("owner");
  });
});
