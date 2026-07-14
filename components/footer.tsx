import Link from "next/link";
import { Logo } from "@/components/logo";
import { nav } from "@/lib/site-config";
import { practices } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-paper">
      <div className="container-content py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-[14.5px] leading-relaxed text-paper/55">
              A business transformation firm — helping growing companies eliminate operational
              friction through better systems, technology, and strategy.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4 !text-teal-bright">Firm</p>
            <ul className="space-y-3 text-[14.5px] text-paper/65">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-paper transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="hover:text-paper transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 !text-teal-bright">Consulting Practices</p>
            <ul className="space-y-3 text-[14.5px] text-paper/65">
              {practices.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link href={`/services/${p.slug}`} className="hover:text-paper transition-colors">
                    {p.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 !text-teal-bright">Start Here</p>
            <ul className="space-y-3 text-[14.5px] text-paper/65">
              <li>
                <Link href="/business-health-assessment" className="hover:text-paper transition-colors">
                  Business Health Assessment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-paper transition-colors">
                  Book a Discovery Call
                </Link>
              </li>
              <li>
                <Link href="/technology-solutions" className="hover:text-paper transition-colors">
                  Technology Solutions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-paper/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-[13px] text-paper/40">© {new Date().getFullYear()} Lumeva Digital. All rights reserved.</p>
          <p className="text-[13px] text-paper/40">Move Smarter. Achieve More.</p>
        </div>
      </div>
    </footer>
  );
}
