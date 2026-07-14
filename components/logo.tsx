import Image from "next/image";
import { cn } from "@/lib/utils";

// Real brand assets, provided by the client — replaces the earlier
// code-drawn placeholder mark. Color version for light backgrounds,
// a recolored (paper-tone) version for the dark navy hero/footer.
export function LumevaMark({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  const src = tone === "light" ? "/logo-mark-light.png" : "/logo-mark.png";
  return (
    <span className={cn("relative block", className)}>
      <Image src={src} alt="" fill className="object-contain" sizes="80px" priority />
    </span>
  );
}

export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const src = tone === "light" ? "/logo-full-light.png" : "/logo-full.png";
  return (
    <span className={cn("relative block h-9 w-[190px] select-none", className)}>
      <Image src={src} alt="Lumeva Digital" fill className="object-contain object-left" priority sizes="190px" />
    </span>
  );
}
