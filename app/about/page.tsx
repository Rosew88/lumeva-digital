import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: "Why Lumeva Digital exists — a business transformation firm built to make enterprise-level thinking accessible to growing businesses.",
};

const principles = [
  { title: "Technology should support people", detail: "Not the other way around. Every system we design starts with how your team actually works." },
  { title: "Growth shouldn't create chaos", detail: "The friction you're feeling isn't a sign you've failed — it's a sign it's time to rebuild the foundation." },
  { title: "Every business deserves enterprise-level thinking", detail: "Rigor and strategy shouldn't be reserved for companies with a Fortune 500 budget." },
];

export default function AboutPage() {
  return (
    <>
      <Section tone="navy" className="!pb-16 !pt-40">
        <p className="eyebrow mb-6 !text-teal-bright">About Lumeva</p>
        <h1 className="max-w-3xl text-display-1 font-display">
          We started Lumeva because most businesses outgrow their systems long before anyone admits it.
        </h1>
      </Section>

      <Section tone="paper">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading eyebrow="Why We Exist" title="Growth exposes the gap between where you are and what your systems can handle." />
            <p className="mt-6 text-[15.5px] leading-relaxed text-slate">
              Most businesses reach a point where the tools, processes, and habits that got them
              here stop being enough. Leadership feels it first — in decisions made on instinct
              instead of data, in a team stretched across too many disconnected tools, in growth
              that feels more chaotic than it should.
            </p>
            <p className="mt-5 text-[15.5px] leading-relaxed text-slate">
              Lumeva exists to close that gap — not by selling a single product, but by acting as
              a genuine transformation partner: assessing what’s actually happening, designing
              the right fix, and staying involved long enough to see it work.
            </p>
          </div>
          <div className="rounded-xl border border-line bg-mist p-9">
            <p className="eyebrow mb-5">Our Mission</p>
            <p className="text-[18px] leading-relaxed text-navy/85 font-display">
              Lumeva partners with growing businesses to eliminate operational friction by
              improving systems, technology, and processes — helping organizations work more
              efficiently, make better decisions, and build stronger foundations for
              sustainable growth.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading eyebrow="Core Philosophy" title="Three beliefs that shape every engagement." />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {principles.map((p) => (
            <div key={p.title} className="rounded-lg border border-line bg-paper p-8">
              <p className="text-[16px] font-medium text-navy">{p.title}</p>
              <p className="mt-3 text-[14px] leading-relaxed text-slate">{p.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading eyebrow="Our Vision" title="The trusted transformation partner for growing companies." />
        <p className="mt-6 max-w-2xl text-[15.5px] leading-relaxed text-slate">
          We want to become the trusted business transformation partner for growing companies —
          helping them modernize operations, adopt practical technology, and build organizations
          that are efficient, resilient, and genuinely ready to scale.
        </p>
        <div className="mt-10">
          <Button href="/contact" variant="primary">Book a Discovery Call</Button>
        </div>
      </Section>
    </>
  );
}
