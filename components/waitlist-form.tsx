"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": "early-access", email }).toString(),
      });
    } catch {
      // Netlify Forms submits statically in production; failures here are non-blocking.
    }
    setStatus("done");
  };

  if (status === "done") {
    return (
      <div className="flex items-center gap-3 rounded-md border border-teal-bright/40 bg-teal-mist px-6 py-4 text-[14.5px] font-medium text-teal">
        <Check className="h-5 w-5" />
        You’re on the list — we’ll be in touch as soon as Technology Solutions launches.
      </div>
    );
  }

  return (
    <form
      name="early-access"
      onSubmit={handleSubmit}
      data-netlify="true"
      className="flex flex-col gap-3 sm:flex-row"
    >
      <input type="hidden" name="form-name" value="early-access" />
      <label htmlFor="waitlist-email" className="sr-only">Work email</label>
      <input
        id="waitlist-email"
        type="email"
        name="email"
        required
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-md border border-paper/25 bg-paper/5 px-5 py-3.5 text-[14.5px] text-paper placeholder:text-paper/40 outline-none focus:border-teal-bright sm:w-80"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex items-center justify-center gap-2 rounded-md bg-teal px-6 py-3.5 text-[14.5px] font-medium text-paper transition-colors hover:bg-teal-bright disabled:opacity-60"
      >
        {status === "submitting" ? "Joining…" : "Join the Early Access List"}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
