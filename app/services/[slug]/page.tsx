import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { practices } from "@/lib/site-config";

export function generateStaticParams() {
  return practices.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const practice = practices.find((p) => p.slug === params.slug);
  if (!practice) return {};
  return {
    title: practice.name,
    description: practice.summary,
  };
}

export default function PracticePage({ params }: { params: { slug: string } }) {
  const practice = practices.find((p) => p.slug === params.slug);
  if (!practice) notFound();

  const index = practices.findIndex((p) => p.slug === params.slug);
  const next = practices[(index + 1) % practices.length];

  return (
    <>
      <Section tone="navy" className="!pb-16 !pt-40">
        <p className="eyebrow mb-6 !text-teal-bright">Consulting Practice · 0{index + 1}</p>
        <h1 className="max-w-3xl text-display-1 font-display">{practice.name}</h1>
        <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-paper/70">{practice.summary}</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/contact" variant="primary">Book a Discovery Call</Button>
          <Button href="/services" variant="ghost">All practices</Button>
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Problems We Solve" title="What this practice exists to fix." />
            <ul className="mt-8 space-y-5">
              {practice.problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3 text-[15.5px] leading-relaxed text-navy/80">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-bright" />
                  {problem}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Expected Outcomes" title="What changes once it's done." />
            <ul className="mt-8 space-y-5">
              {practice.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3 text-[15.5px] leading-relaxed text-navy/80">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Typical Deliverables" title="What you actually walk away with." />
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {practice.deliverables.map((d) => (
                <div key={d} className="rounded-md border border-line bg-paper px-5 py-4 text-[14px] font-medium text-navy">
                  {d}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Ideal For" title="Who this practice is built for." />
            <ul className="mt-8 space-y-4">
              {practice.idealFor.map((who) => (
                <li key={who} className="rounded-md border border-line bg-paper px-5 py-4 text-[14px] text-navy/80">
                  {who}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <div className="flex flex-col items-start justify-between gap-8 rounded-xl border border-line bg-gradient-to-br from-mist to-paper px-8 py-12 sm:flex-row sm:items-center sm:px-12">
          <div>
            <p className="eyebrow mb-3">Next Practice</p>
            <h3 className="text-[22px] font-display text-navy">{next.name}</h3>
          </div>
          <Button href={`/services/${next.slug}`} variant="secondary">Explore practice</Button>
        </div>
      </Section>
    </>
  );
}
