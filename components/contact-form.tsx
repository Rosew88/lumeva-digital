"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const interests = [
  "Business Strategy & Operations",
  "Digital Infrastructure",
  "AI & Automation",
  "Customer Experience & Brand",
  "Business Intelligence",
  "Technology Solutions",
  "Not sure yet",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = new URLSearchParams();
    formData.forEach((value, key) => data.append(key, String(value)));
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });
    } catch {
      // Netlify Forms handles this statically in production.
    }
    setStatus("done");
  };

  if (status === "done") {
    return (
      <div className="flex items-start gap-3 rounded-lg border border-teal-bright/40 bg-teal-mist px-7 py-6 text-[15px] text-teal">
        <Check className="mt-0.5 h-5 w-5 shrink-0" />
        <div>
          <p className="font-medium">Thanks — we’ve got it.</p>
          <p className="mt-1 text-teal/80">Someone from Lumeva will follow up within one business day.</p>
        </div>
      </div>
    );
  }

  return (
    <form
      name="contact"
      onSubmit={handleSubmit}
      data-netlify="true"
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" type="text" required />
        <Field label="Work email" name="email" type="email" required />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Company" name="company" type="text" />
        <Field label="Phone (optional)" name="phone" type="tel" />
      </div>
      <div>
        <label className="mb-2 block text-[13.5px] font-medium text-navy/70" htmlFor="interest">
          What are you looking to solve?
        </label>
        <select
          id="interest"
          name="interest"
          className="w-full rounded-md border border-line bg-paper px-4 py-3 text-[14.5px] text-navy outline-none focus:border-teal-bright"
        >
          {interests.map((i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-2 block text-[13.5px] font-medium text-navy/70" htmlFor="message">
          Tell us a bit about what’s going on
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-md border border-line bg-paper px-4 py-3 text-[14.5px] text-navy outline-none focus:border-teal-bright"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex items-center gap-2 rounded-md bg-teal px-7 py-3.5 text-[14.5px] font-medium text-paper transition-colors hover:bg-teal-bright disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}

function Field({ label, name, type, required }: { label: string; name: string; type: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-2 block text-[13.5px] font-medium text-navy/70" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-line bg-paper px-4 py-3 text-[14.5px] text-navy outline-none focus:border-teal-bright"
      />
    </div>
  );
}
