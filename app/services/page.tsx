import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { practices } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Consulting Practices",
  description:
    "Six consulting practices — Strategy & Operations, Digital Infrastructure, AI & Automation, CX & Brand, Business Intelligence, and Technology Solutions — built to work together.",
};

export default function ServicesPage() {
  return (
    <>
      <Section tone="navy" className="!pb-16 !pt-40">
        <p className="eyebrow mb-6 !text-teal-bright">Consulting Practices</p>
        <h1 className="max-w-3xl text-display-1 font-display">
          Six practices. Every one in service of the same goal.
        </h1>
        <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-paper/70">
          We don’t sell services individually and hope they add up. Every practice exists to
          remove a specific kind of operational friction — and most engagements draw on more
          than one at once.
        </p>
      </Section>

      <Section tone="paper">
        <div className="grid grid-cols-1 gap-8">
          {practices.map((p, i) => (
            <Link
              key={p.slug}
              href={`/services/${p.slug}`}
              className="group grid grid-cols-1 gap-6 rounded-xl border border-line bg-paper p-9 transition-all duration-300 ease-signature hover:border-teal-bright/40 hover:shadow-lift lg:grid-cols-[80px_1fr_auto] lg:items-center"
            >
              <span className="font-mono text-[13px] text-teal">0{i + 1}</span>
              <div>
                <h2 className="text-[22px] font-display text-navy">{p.name}</h2>
                <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-slate">{p.summary}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-navy/70 group-hover:text-teal">
                View practice
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading
          align="center"
          eyebrow="Not sure where to start?"
          title="Every engagement begins the same way — with Discover."
          description="We'll help you identify which practice, or combination of practices, actually matches what's slowing you down."
        />
        <div className="mt-9 flex justify-center">
          <Button href="/contact" variant="primary">
            Book a Discovery Call
          </Button>
        </div>
      </Section>
    </>
  );
}
