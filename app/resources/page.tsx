import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { resourceCategories } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Resources",
  description: "Guides, insights, templates, and white papers on business transformation, operations, and technology from Lumeva Digital.",
};

export default function ResourcesPage() {
  return (
    <>
      <Section tone="navy" className="!pb-16 !pt-40">
        <p className="eyebrow mb-6 !text-teal-bright">Resources</p>
        <h1 className="max-w-3xl text-display-1 font-display">
          Thinking on operations, systems, and growth — worth reading before your first call.
        </h1>
        <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-paper/70">
          We’re building out this library now. Join our early access list to be notified as
          guides, templates, and workshops go live.
        </p>
      </Section>

      <Section tone="paper">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resourceCategories.map((r) => (
            <div key={r.title} className="flex flex-col justify-between rounded-lg border border-line bg-paper p-8">
              <div>
                <h2 className="text-[18px] font-display text-navy">{r.title}</h2>
                <p className="mt-3 text-[14.5px] leading-relaxed text-slate">{r.detail}</p>
              </div>
              <span className="mt-8 inline-block w-fit rounded-full bg-teal-mist px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-teal">
                Coming Soon
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading
          align="center"
          eyebrow="Get notified"
          title="Be first to know when new resources go live."
        />
        <div className="mt-9 flex justify-center">
          <Button href="/technology-solutions#early-access" variant="primary">
            Join the Early Access List
          </Button>
        </div>
      </Section>
    </>
  );
}
