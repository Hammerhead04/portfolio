import { motion, useReducedMotion } from "motion/react";
import { Check } from "lucide-react";
import { exploring } from "@/content/resume";
import SectionHeading from "@/components/layout/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import VideoVerify, { SCAN_SECONDS } from "@/components/illustrations/VideoVerify";

export default function Exploring() {
  const reduce = useReducedMotion();
  const n = exploring.checks.length;

  return (
    <section id="exploring" aria-labelledby="exploring-title" className="relative py-20 md:py-24">
      <div className="container">
        <div className="card relative overflow-hidden p-6 sm:p-10 lg:p-14">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_60%_at_90%_10%,rgb(var(--lime)/0.09),transparent_70%)]" />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                index="06"
                eyebrow="Currently exploring"
                id="exploring-title"
                className="!mb-8"
                title={exploring.title}
                lead={exploring.summary}
              />
              <ul className="flex flex-wrap gap-2.5" data-testid="checks">
                {exploring.checks.map((c, i) => (
                  <motion.li
                    key={c}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.2 + i * 0.07 }}
                    className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-lime/30 bg-lime/[0.06] px-3.5 py-1.5 text-sm text-fg"
                  >
                    {!reduce && (
                      <motion.span
                        aria-hidden
                        className="absolute inset-0 bg-lime/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{
                          duration: 0.6,
                          delay: (SCAN_SECONDS * (i + 0.5)) / n,
                          repeat: Infinity,
                          repeatDelay: SCAN_SECONDS - 0.6,
                        }}
                      />
                    )}
                    <Check className="relative h-3.5 w-3.5 text-lime" aria-hidden />
                    <span className="relative">{c}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <Reveal delay={0.15}>
              <VideoVerify checks={exploring.checks} signal={exploring.signal} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
