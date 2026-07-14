"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo, LumevaMark } from "@/components/logo";
import { nav } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onDark = pathname === "/" || pathname === "/technology-solutions";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const dark = onDark && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-signature",
        scrolled ? "bg-paper/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(11,27,43,0.06)]" : "bg-transparent"
      )}
    >
      <div className="container-content flex h-20 items-center justify-between">
        <Link href="/" aria-label="Lumeva Digital home" className="shrink-0">
          <LumevaMark tone={dark ? "light" : "dark"} className="h-8 w-8 sm:hidden" />
          <Logo tone={dark ? "light" : "dark"} className="hidden sm:block" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[14px] font-medium transition-colors duration-200",
                dark ? "text-paper/75 hover:text-paper" : "text-navy/70 hover:text-navy"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className={cn(
              "text-[14px] font-medium",
              dark ? "text-paper/80 hover:text-paper" : "text-navy/70 hover:text-navy"
            )}
          >
            Contact
          </Link>
          <Link
            href="/business-health-assessment"
            className="rounded-md bg-teal px-5 py-2.5 text-[14px] font-medium text-paper transition-colors hover:bg-teal-bright"
          >
            Business Health Assessment
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={cn("lg:hidden p-2 -mr-2", dark ? "text-paper" : "text-navy")}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-paper border-t border-line">
          <nav className="container-content flex flex-col py-4">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="py-3 text-[15px] font-medium text-navy border-b border-line last:border-0">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="py-3 text-[15px] font-medium text-navy">
              Contact
            </Link>
            <Link
              href="/business-health-assessment"
              className="mt-3 rounded-md bg-teal px-5 py-3 text-center text-[14px] font-medium text-paper"
            >
              Business Health Assessment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
