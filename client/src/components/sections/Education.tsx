import { GraduationCap, MapPin } from "lucide-react";
import { education } from "@/content/resume";
import SectionHeading from "@/components/layout/SectionHeading";
import CountUp from "@/components/reactbits/CountUp";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="relative py-20 md:py-24">
      <div className="container">
        <SectionHeading index="07" eyebrow="Education" id="education-title" title="Where I studied." />

        <Stagger className="grid gap-5 md:grid-cols-2">
          {education.map((e) => (
            <StaggerItem key={e.institution} data-testid="education">
              <article className="card relative flex h-full flex-col overflow-hidden p-6 md:p-8">
                <GraduationCap aria-hidden className="absolute -right-6 -top-6 h-36 w-36 text-line/[0.04]" />
                <p className="font-mono text-xs text-muted">
                  {e.start} – {e.end}
                </p>
                <h3 className="mt-3 text-xl font-semibold md:text-2xl">{e.institution}</h3>
                <p className="mt-1 text-cyan">{e.degree}</p>
                <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted">
                  <MapPin className="h-3.5 w-3.5" aria-hidden /> {e.location}
                </p>
                <div className="mt-8 flex items-end gap-2 border-t border-line/[0.08] pt-6">
                  <span className="text-gradient font-display text-5xl font-semibold leading-none" data-testid={`score-${e.scoreLabel}`}>
                    <CountUp to={e.score} decimals={e.decimals} suffix={e.scoreSuffix ?? ""} duration={1.6} />
                  </span>
                  <span className="pb-1 text-sm text-muted">
                    {e.scoreMax ? `/ ${e.scoreMax} ` : ""}
                    {e.scoreLabel}
                  </span>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
