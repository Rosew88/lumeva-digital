"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LumevaMark } from "@/components/logo";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-navy text-paper">
      {/* Ambient gradient field — slow, directional, never distracting */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-[10%] top-[-10%] h-[60vh] w-[60vh] rounded-full bg-teal/25 blur-[120px]"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-5%] top-[20%] h-[50vh] w-[50vh] rounded-full bg-teal-bright/10 blur-[130px]"
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 grain opacity-40" />
      </div>

      {/* Oversized watermark mark, anchored bottom-right — restrained, not decorative clutter */}
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[520px] w-[520px] opacity-[0.06]">
        <LumevaMark tone="light" className="h-full w-full" />
      </div>

      <div className="container-content relative z-10 pt-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow mb-7 !text-teal-bright"
        >
          Business Transformation Firm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-display-1 font-display"
        >
          Fewer bottlenecks.<br />
          <span className="italic text-paper/60">Better decisions.</span> More growth.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-[18px] leading-relaxed text-paper/70"
        >
          Lumeva partners with growing businesses to eliminate operational friction —
          rebuilding the systems, technology, and strategy underneath the growth, so
          the business runs the way it should have all along.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
          className="mt-11 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="/business-health-assessment" variant="primary">
            Take the Business Health Assessment
          </Button>
          <Button href="/contact" variant="ghost">
            Book a Discovery Call
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="h-10 w-px bg-gradient-to-b from-paper/40 to-transparent" />
      </motion.div>
    </section>
  );
}
