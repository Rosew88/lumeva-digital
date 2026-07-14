import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export default function NotFound() {
  return (
    <Section tone="paper" className="!py-40 text-center">
      <p className="eyebrow mb-5 text-center">404</p>
      <h1 className="text-display-2 font-display">This page moved, or never existed.</h1>
      <p className="mx-auto mt-5 max-w-md text-[15.5px] leading-relaxed text-slate">
        Let&apos;s get you back to something useful.
      </p>
      <div className="mt-9 flex justify-center gap-4">
        <Button href="/" variant="primary">Back to home</Button>
        <Button href="/contact" variant="secondary">Contact us</Button>
      </div>
    </Section>
  );
}
