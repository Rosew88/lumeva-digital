import type { Metadata } from "next";
import { ShieldCheck, Cloud, Cpu, Layers, MessagesSquare, DatabaseBackup, Network, Gauge, MonitorSmartphone } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/waitlist-form";
import { technologyCategories, advisoryProcess } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Technology Solutions — Launching Soon",
  description:
    "Lumeva is building a curated technology advisory platform to help businesses confidently choose, implement, and optimize software and technology — vendor-neutral, by design.",
};

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Cybersecurity": ShieldCheck,
  "Microsoft Solutions": Layers,
  "Cloud Infrastructure": Cloud,
  "AI Platforms": Cpu,
  "Business Software": Gauge,
  "Business Communications": MessagesSquare,
  "Backup & Disaster Recovery": DatabaseBackup,
  "Networking": Network,
  "Business Productivity": MonitorSmartphone,
};

export default function TechnologySolutionsPage() {
  return (
    <>
      <Section tone="navy" className="!pb-20 !pt-40">
        <p className="eyebrow mb-6 !text-teal-bright">Technology Solutions · Launching Soon</p>
        <h1 className="max-w-3xl text-display-1 font-display">Technology shouldn&apos;t be confusing.</h1>
        <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-paper/70">
          Lumeva is building a curated technology advisory platform that helps businesses
          confidently choose, implement, and optimize software and technology solutions —
          without the sales pressure of a reseller relationship.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="#early-access" variant="primary">Join the Early Access List</Button>
          <Button href="/contact" variant="ghost">Book a Technology Consultation</Button>
        </div>
      </Section>

      {/* Categories */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What's Coming"
          title="Advisory across every category that matters to a growing business."
          description="Each category will connect to vetted, vendor-neutral guidance — not a static list of logos."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologyCategories.map((cat) => {
            const Icon = categoryIcons[cat] ?? Layers;
            return (
              <div key={cat} className="flex items-center gap-4 rounded-lg border border-line bg-paper p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-teal-mist text-teal">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-[15px] font-medium text-navy">{cat}</span>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Philosophy */}
      <Section tone="mist">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Our Technology Philosophy" title="An advisor, not a reseller." />
            <p className="mt-6 text-[15.5px] leading-relaxed text-slate">
              We don&apos;t make more by selling you more software. Our recommendations are based
              on your business goals, existing systems, budget, and long-term scalability — never
              on which vendor pays the highest margin.
            </p>
            <p className="mt-5 text-[15.5px] leading-relaxed text-slate">
              That independence is the point. It&apos;s the difference between a vendor pitching
              their product and an advisor telling you the truth about whether you need it.
            </p>
          </div>
          <div className="rounded-xl border border-line bg-paper p-9">
            <p className="eyebrow mb-5">What We Will Never Do</p>
            <ul className="space-y-4 text-[14.5px] text-navy/80">
              <li className="border-b border-line pb-4">Push a product because it pays a higher commission</li>
              <li className="border-b border-line pb-4">Recommend a platform your team doesn&apos;t need</li>
              <li>Disappear once the contract is signed</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Advisory Process */}
      <Section tone="paper">
        <SectionHeading eyebrow="Technology Advisory Process" title="How we'll guide every recommendation." />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-5">
          {advisoryProcess.map((step, i) => (
            <div key={step.step} className="relative">
              <span className="font-mono text-[11px] text-teal">{step.step}</span>
              <p className="mt-3 text-[15px] font-medium text-navy">{step.name}</p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-slate">{step.detail}</p>
              {i < advisoryProcess.length - 1 && (
                <span className="mt-6 hidden h-px w-full bg-line sm:block" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Trusted Partnerships */}
      <Section tone="mist">
        <SectionHeading
          eyebrow="Trusted Partnerships"
          title="Backed by established distribution, guided by independent advice."
          description="We're building relationships with established technology distributors so our recommendations come with real implementation support behind them."
        />
        <div className="mt-12 flex flex-col items-start gap-8 rounded-xl border border-line bg-paper p-9 sm:flex-row sm:items-center">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-navy text-paper font-display text-xl">
            CS
          </div>
          <div>
            <p className="eyebrow mb-2">Launch Partner</p>
            <h3 className="text-[19px] font-display text-navy">Climb Channel Solutions</h3>
            <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-slate">
              Our initial strategic distribution partner, giving Lumeva access to a broad
              catalog of enterprise-grade technology as our advisory platform comes online.
              Additional partnerships will be added over time as the platform grows.
            </p>
          </div>
        </div>
      </Section>

      {/* Early Access */}
      <Section id="early-access" tone="navy">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow mb-5 !text-teal-bright">Early Access</p>
            <h2 className="text-display-2 font-display">Be the first to know when we launch.</h2>
            <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-paper/70">
              Join the list for launch announcements, early technology buying guides, and
              updates you won&apos;t see anywhere else.
            </p>
            <div className="mt-9 max-w-lg">
              <WaitlistForm />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              "Early launch announcements",
              "Technology buying guides before public release",
              "Exclusive updates as the platform is built",
            ].map((item) => (
              <div key={item} className="rounded-md border border-paper/10 bg-paper/[0.03] px-6 py-4 text-[14.5px] text-paper/80">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
