"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { framework, type FrameworkStage } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function FrameworkExplorer({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(0);
  const stage: FrameworkStage = framework[active] ?? framework[0];

  return (
    <div>
      {/* Node rail — the six stages as a connected sequence, since order here
          carries real information: each stage depends on the last. */}
      <div className="relative">
        <div className="absolute left-0 right-0 top-[15px] h-px bg-line" aria-hidden="true" />
        <motion.div
          className="absolute left-0 top-[15px] h-px bg-teal-bright"
          initial={{ width: "0%" }}
          animate={{ width: `${(active / (framework.length - 1)) * 100}%` }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        />
        <div className="relative grid grid-cols-3 gap-y-8 sm:grid-cols-6 sm:gap-y-0">
          {framework.map((s, i) => (
            <button
              key={s.step}
              onClick={() => setActive(i)}
              className="group flex flex-col items-center gap-3 outline-none"
              aria-pressed={active === i}
            >
              <span
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border font-mono text-[11px] transition-all duration-300 ease-signature",
                  active === i
                    ? "border-teal-bright bg-teal-bright text-navy scale-110"
                    : i < active
                    ? "border-teal-bright bg-paper text-teal"
                    : "border-line bg-paper text-slate-light group-hover:border-slate-light"
                )}
              >
                {s.step}
              </span>
              <span
                className={cn(
                  "text-[13.5px] font-medium transition-colors duration-300",
                  active === i ? "text-navy" : "text-slate group-hover:text-navy"
                )}
              >
                {s.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Detail panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={stage.step}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={cn("mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr]", compact && "mt-10 gap-8")}
        >
          <div>
            <p className="eyebrow mb-3">Stage {stage.step} · {stage.name}</p>
            <p className="text-[18px] leading-relaxed text-navy/85">{stage.purpose}</p>
            <p className="mt-5 text-[14.5px] leading-relaxed text-teal">{stage.outcome}</p>
          </div>
          <div className="rounded-lg border border-line bg-mist/60 p-6">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-slate">
              Typical Deliverables
            </p>
            <ul className="space-y-3">
              {stage.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-[14.5px] text-navy/80">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-bright" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
