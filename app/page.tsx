import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { Hero } from "@/components/home/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FrameworkExplorer } from "@/components/framework-explorer";
import { challenges, practices, testimonials } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Business Transformation Firm for Growing Companies",
  description:
    "Lumeva Digital helps growing businesses eliminate operational friction through better systems, technology, AI, automation, and strategy. Move smarter. Achieve more.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Business challenges */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Where friction hides"
          title="Growth exposes what wasn't built to scale."
          description="These are the patterns we see most often when a business has grown past the systems that used to work fine."
        />
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((c) => (
            <div key={c.title} className="bg-paper p-8 transition-colors hover:bg-mist/60">
              <p className="text-[16px] font-medium text-navy">{c.title}</p>
              <p className="mt-3 text-[14.5px] leading-relaxed text-slate">{c.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Framework preview */}
      <Section tone="mist">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="How we work"
            title="The Business Efficiency Framework"
            description="A repeatable six-stage method for finding friction, designing the fix, and staying on as a partner once it's live."
          />
          <Link href="/framework" className="inline-flex shrink-0 items-center gap-1.5 text-[14.5px] font-medium text-teal hover:text-teal-bright">
            See the full framework <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14">
          <FrameworkExplorer compact />
        </div>
      </Section>

      {/* Consulting practices */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Consulting Practices"
          title="Six practices. One transformation."
          description="Each practice solves a distinct kind of friction — and they're designed to work together, not as siloed services."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practices.map((p, i) => (
            <Link
              key={p.slug}
              href={`/services/${p.slug}`}
              className="group flex flex-col justify-between rounded-lg border border-line bg-paper p-8 transition-all duration-300 ease-signature hover:-translate-y-1 hover:shadow-lift"
            >
              <div>
                <span className="font-mono text-[11px] text-teal">0{i + 1}</span>
                <h3 className="mt-4 text-[19px] font-display text-navy">{p.shortName}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-slate">{p.summary}</p>
              </div>
              <span className="mt-8 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-navy/70 group-hover:text-teal">
                Explore practice <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section tone="navy">
        <SectionHeading eyebrow="Client outcomes" title="What partnership looks like in practice." tone="light" />
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-lg border border-paper/10 bg-paper/[0.03] p-8">
              <Quote className="h-5 w-5 text-teal-bright" />
              <blockquote className="mt-5 text-[15.5px] leading-relaxed text-paper/85">{t.quote}</blockquote>
              <figcaption className="mt-6 text-[13.5px] text-paper/50">
                <span className="font-medium text-paper/75">{t.name}</span> · {t.context}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section tone="paper" className="!py-28">
        <div className="rounded-xl border border-line bg-gradient-to-br from-mist to-paper px-8 py-16 text-center sm:px-16">
          <h2 className="mx-auto max-w-2xl text-display-3 font-display">
            Ready to see where your business is losing time?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[16px] leading-relaxed text-slate">
            Start with the Business Health Assessment, or talk to us directly on a Discovery Call.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
