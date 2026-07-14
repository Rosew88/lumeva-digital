import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { industries } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Industries",
  description: "Lumeva Digital partners with growing businesses across professional services, healthcare, manufacturing, financial services, real estate, and retail.",
};

export default function IndustriesPage() {
  return (
    <>
      <Section tone="navy" className="!pb-16 !pt-40">
        <p className="eyebrow mb-6 !text-teal-bright">Industries</p>
        <h1 className="max-w-3xl text-display-1 font-display">
          Operational friction looks different by industry. Our method doesn’t.
        </h1>
        <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-paper/70">
          The Business Efficiency Framework is industry-agnostic by design — but where we
          apply it, and what we prioritize first, is shaped by the realities of your sector.
        </p>
      </Section>

      <Section tone="paper">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {industries.map((ind) => (
            <div key={ind.name} className="rounded-lg border border-line bg-paper p-8">
              <h2 className="text-[19px] font-display text-navy">{ind.name}</h2>
              <p className="mt-3 text-[14.5px] leading-relaxed text-slate">{ind.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading
          align="center"
          eyebrow="Don't see your industry?"
          title="The framework travels. Let's talk about your business specifically."
        />
        <div className="mt-9 flex justify-center">
          <Button href="/contact" variant="primary">Book a Discovery Call</Button>
        </div>
      </Section>
    </>
  );
}
