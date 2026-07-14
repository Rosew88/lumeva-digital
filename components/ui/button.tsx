import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  showArrow?: boolean;
};

const variants = {
  primary:
    "bg-teal text-paper hover:bg-teal-bright shadow-card",
  secondary:
    "bg-transparent text-navy border border-navy/15 hover:border-navy/40",
  ghost:
    "bg-transparent text-paper border border-paper/25 hover:border-paper/60",
};

export function Button({ href, children, variant = "primary", className, showArrow = true }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-[14.5px] font-medium tracking-[-0.005em] transition-all duration-300 ease-signature",
        variants[variant],
        className
      )}
    >
      {children}
      {showArrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-signature group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </Link>
  );
}
