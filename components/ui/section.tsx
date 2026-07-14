import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  tone = "paper",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "paper" | "mist" | "navy";
  id?: string;
}) {
  const toneClasses = {
    paper: "bg-paper",
    mist: "bg-mist",
    navy: "bg-navy text-paper",
  };
  return (
    <section id={id} className={cn("py-24 sm:py-28 lg:py-32", toneClasses[tone], className)}>
      <div className="container-content">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className={cn("text-display-2 font-display", tone === "light" ? "text-paper" : "text-navy")}>{title}</h2>
      {description && (
        <p className={cn("mt-5 text-[17px] leading-relaxed", tone === "light" ? "text-paper/70" : "text-slate")}>
          {description}
        </p>
      )}
    </div>
  );
}
