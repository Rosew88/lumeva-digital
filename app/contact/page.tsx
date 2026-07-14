import type { Metadata } from "next";
import { Calendar, MapPin, Mail, Phone } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { ContactForm } from "@/components/contact-form";
import { faqs } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a Discovery Call or send Lumeva Digital a message — let's talk about where your business is losing time.",
};

export default function ContactPage() {
  return (
    <>
      <Section tone="navy" className="!pb-16 !pt-40">
        <p className="eyebrow mb-6 !text-teal-bright">Contact</p>
        <h1 className="max-w-2xl text-display-1 font-display">Let&apos;s talk about your business.</h1>
        <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-paper/70">
          Whether you&apos;re ready for a Discovery Call or just have a question, this reaches
          our team directly — no ticketing queue in between.
        </p>
      </Section>

      <Section tone="paper">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <SectionHeading eyebrow="Send a Message" title="Tell us what's going on." />
            <div className="mt-9">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            {/* Calendly placeholder */}
            <div className="rounded-xl border border-line bg-mist p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-teal text-paper">
                  <Calendar className="h-5 w-5" />
                </span>
                <p className="text-[15px] font-medium text-navy">Book a Discovery Call</p>
              </div>
              <p className="mt-4 text-[14px] leading-relaxed text-slate">
                Prefer to skip the form? Grab 30 minutes directly on our calendar.
              </p>
              <div className="mt-5 flex h-52 items-center justify-center rounded-lg border border-dashed border-line bg-paper text-center text-[13px] text-slate-light">
                Calendly scheduler embeds here
              </div>
            </div>

            {/* Direct info */}
            <div className="rounded-xl border border-line bg-paper p-8">
              <p className="eyebrow mb-5">Direct</p>
              <div className="space-y-4 text-[14.5px] text-navy/80">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-teal" /> hello@lumevadigital.com
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-teal" /> (555) 010-0142
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-teal" /> Remote-first, serving clients nationally
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-line bg-mist text-[13px] text-slate-light">
              Service area map embeds here
            </div>
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading eyebrow="FAQ" title="Common questions before that first call." />
        <div className="mt-12 divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-[15.5px] font-medium text-navy">
                {f.q}
                <span className="ml-6 shrink-0 text-teal transition-transform duration-300 group-open:rotate-45 text-xl leading-none">+</span>
              </summary>
              <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-slate">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
