import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { experience } from "@/content/resume";
import SectionHeading from "@/components/layout/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export default function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  return (
    <section id="experience" aria-labelledby="experience-title" className="relative py-20 md:py-24">
      <div className="container">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          id="experience-title"
          title={
            <>
              From backend intern <span className="text-gradient">to shipping full-stack.</span>
            </>
          }
        />

        <ol ref={listRef} className="relative space-y-10 pl-8 md:pl-12" data-testid="timeline">
          {/* Track + scroll-drawn progress line */}
          <span aria-hidden className="absolute left-[7px] top-2 bottom-2 w-px bg-line/10 md:left-[11px]" />
          <motion.span
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-violet via-cyan to-lime md:left-[11px]"
            style={{ scaleY }}
          />

          {experience.map((role, i) => {
            const isCurrent = role.end === null;
            return (
              <li key={role.id} className="relative" data-testid="role">
                <motion.span
                  aria-hidden
                  className="absolute -left-8 top-7 grid h-[15px] w-[15px] place-items-center md:-left-12 md:h-[23px] md:w-[23px]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                >
                  {isCurrent && (
                    <span className="absolute inset-0 animate-pulse-ring rounded-full bg-lime/60 motion-reduce:animate-none" />
                  )}
                  <span
                    className={`relative h-full w-full rounded-full border-2 border-bg ${
                      isCurrent ? "bg-lime" : i === 1 ? "bg-cyan" : "bg-violet"
                    }`}
                  />
                </motion.span>

                <Reveal delay={0.05}>
                  <article className="card p-6 transition-colors duration-300 hover:border-line/15 md:p-8">
                    <header className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold md:text-2xl">{role.title}</h3>
                        <p className="mt-1 font-medium text-cyan">{role.company}</p>
                      </div>
                      <p className="shrink-0 font-mono text-xs text-muted md:mt-1.5">
                        <time>{role.start}</time> – {isCurrent ? <span className="text-lime">Present</span> : <time>{role.end}</time>}
                      </p>
                    </header>
                    <ul className="mt-5 space-y-3">
                      {role.bullets.map((b) => (
                        <li key={b} className="relative pl-5 text-[15px] leading-relaxed text-fg/80">
                          <span aria-hidden className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-violet/80" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${role.company} tech`}>
                      {role.tech.map((t) => (
                        <li key={t} className="chip">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
