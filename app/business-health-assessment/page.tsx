import type { Metadata } from "next";
import { ClipboardCheck, Search, FileBarChart, ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Business Health Assessment",
  description: "A short, structured assessment that shows exactly where your business is losing time, money, and momentum — and where to fix it first.",
};

const steps = [
  { icon: ClipboardCheck, title: "Answer a short set of questions", detail: "About 10 minutes, covering operations, systems, customer experience, and data visibility." },
  { icon: Search, title: "We score it against the framework", detail: "Your answers are mapped against the same Discover/Diagnose lens we use with every client." },
  { icon: FileBarChart, title: "You get a clear starting point", detail: "A summary of where friction is concentrated, and which practice would address it first." },
];

export default function BusinessHealthAssessmentPage() {
  return (
    <>
      <Section tone="navy" className="!pb-16 !pt-40">
        <p className="eyebrow mb-6 !text-teal-bright">Business Health Assessment</p>
        <h1 className="max-w-2xl text-display-1 font-display">
          Find out where your business is losing time — before your first call with us.
        </h1>
        <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-paper/70">
          The Business Health Assessment is a short, structured diagnostic built on the same
          framework we use with every client. It’s the fastest way to see where operational
          friction is concentrated in your business right now.
        </p>
      </Section>

      <Section tone="paper">
        <SectionHeading eyebrow="How It Works" title="Three steps, about ten minutes." />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-lg border border-line bg-paper p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-teal-mist text-teal">
                <s.icon className="h-5 w-5" />
              </span>
              <p className="mt-6 text-[15.5px] font-medium text-navy">{s.title}</p>
              <p className="mt-2.5 text-[14px] leading-relaxed text-slate">{s.detail}</p>
              <span className="absolute right-6 top-8 font-mono text-[12px] text-slate-light">0{i + 1}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Placeholder for the interactive assessment experience */}
      <Section tone="mist">
        <div className="rounded-xl border border-line bg-paper p-10 sm:p-14">
          <div className="mx-auto max-w-xl text-center">
            <p className="eyebrow mb-4">The interactive assessment</p>
            <h2 className="text-display-3 font-display">The full scored experience is almost ready.</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate">
              We’re finishing the interactive version of the Business Health Assessment —
              instant scoring, a personalized breakdown by practice area, and a downloadable
              summary you can share with your leadership team.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate">
              In the meantime, book a Discovery Call and we’ll walk through the same
              assessment together, live.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" variant="primary">
                Book a Discovery Call
              </Button>
              <Button href="/framework" variant="secondary">
                See the framework first
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="paper" className="!pt-0">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="inline-flex items-center gap-2 text-[13.5px] font-medium text-teal">
            Want early access when it launches? <a href="/contact" className="inline-flex items-center gap-1 underline underline-offset-4">Let us know <ArrowRight className="h-3.5 w-3.5" /></a>
          </p>
        </div>
      </Section>
    </>
  );
}
