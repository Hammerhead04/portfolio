import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionHeading({ index, eyebrow, title, lead, className, id }: SectionHeadingProps) {
  return (
    <Reveal className={cn("mb-12 max-w-3xl md:mb-16", className)}>
      <p className="eyebrow">
        <span className="text-muted">{index}</span>
        <span aria-hidden className="h-px w-8 bg-cyan/60" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-4 text-balance text-3xl font-semibold sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {lead && <p className="mt-5 text-base text-muted md:text-lg">{lead}</p>}
    </Reveal>
  );
}
