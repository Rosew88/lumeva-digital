import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FrameworkExplorer } from "@/components/framework-explorer";

export const metadata: Metadata = {
  title: "The Business Efficiency Framework",
  description:
    "Discover, Diagnose, Design, Develop, Deploy, Drive — the six-stage methodology Lumeva uses to find operational friction and turn it into a working system.",
};

export default function FrameworkPage() {
  return (
    <>
      <Section tone="navy" className="!pb-20 !pt-40">
        <p className="eyebrow mb-6 !text-teal-bright">Our Methodology</p>
        <h1 className="max-w-3xl text-display-1 font-display">The Business Efficiency Framework</h1>
        <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-paper/70">
          Six stages, applied in order, every time. It’s the same discipline whether the
          engagement is a single automation project or a full operating model rebuild —
          because friction never gets solved by skipping straight to the build.
        </p>
      </Section>

      <Section tone="paper">
        <FrameworkExplorer />
      </Section>

      <Section tone="mist">
        <SectionHeading
          eyebrow="Why it's sequential"
          title="Each stage exists because skipping it costs more later."
          description="Most failed technology projects didn't fail at implementation — they failed because no one diagnosed the actual problem first."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-line bg-paper p-7">
            <p className="text-[15px] font-medium text-navy">Discover &amp; Diagnose</p>
            <p className="mt-2.5 text-[14px] leading-relaxed text-slate">
              Before any recommendation, we build evidence. This is where the actual root cause
              gets separated from the symptom everyone’s been treating.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-paper p-7">
            <p className="text-[15px] font-medium text-navy">Design &amp; Develop</p>
            <p className="mt-2.5 text-[14px] leading-relaxed text-slate">
              The target state gets architected before it gets built — so what we develop
              matches how the business actually operates, not a generic template.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-paper p-7">
            <p className="text-[15px] font-medium text-navy">Deploy &amp; Drive</p>
            <p className="mt-2.5 text-[14px] leading-relaxed text-slate">
              A system nobody adopts isn’t a transformation. We stage rollout deliberately, then
              stay on to keep it tuned as the business changes.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="paper" className="!pt-0">
        <div className="rounded-xl border border-line bg-mist px-8 py-14 text-center sm:px-16">
          <h2 className="mx-auto max-w-xl text-display-3 font-display">
            See where your business sits in the framework.
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/business-health-assessment" variant="primary">
              Take the Business Health Assessment
            </Button>
            <Button href="/contact" variant="secondary">
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
