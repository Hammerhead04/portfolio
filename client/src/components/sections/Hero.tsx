import { lazy, Suspense, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import { experience, heroStats, objective, profile, rotatingStack } from "@/content/resume";
import { supportsWebGL2 } from "@/lib/hooks";
import Magnet from "@/components/reactbits/Magnet";
import RotatingText from "@/components/reactbits/RotatingText";
import CountUp from "@/components/reactbits/CountUp";
import HeroDevice from "@/components/illustrations/HeroDevice";

const Aurora = lazy(() => import("@/components/reactbits/Aurora"));

const EASE = [0.22, 1, 0.36, 1] as const;
const current = experience.find((r) => r.end === null);
const lead = objective.split(". ")[0] + ".";

function AnimatedName({ text }: { text: string }) {
  // Keep trailing initials ("M V") together so they never wrap apart.
  const words = text.replace(/ (\S) (\S)$/, " $1\u00a0$2").split(" ");
  return (
    <h1 className="font-display text-[2.6rem] font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
      <span className="sr-only">{text}</span>
      <span aria-hidden className="flex flex-wrap gap-x-[0.25em]">
        {words.map((word, wi) => (
          <span key={wi} className="inline-flex overflow-hidden pb-[0.08em]">
            {word.split("").map((ch, ci) => (
              <motion.span
                key={ci}
                className={wi === words.length - 1 ? "text-gradient" : undefined}
                initial={{ y: "110%", opacity: 0, filter: "blur(8px)" }}
                animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.05 + wi * 0.08 + ci * 0.02 }}
              >
                {ch}
              </motion.span>
            ))}
          </span>
        ))}
      </span>
    </h1>
  );
}

export default function Hero() {
  const [webgl] = useState(supportsWebGL2);

  return (
    <section id="home" aria-label="Introduction" className="relative isolate overflow-hidden pb-20 pt-32 sm:pt-36 lg:min-h-[100svh] lg:pb-28">
      {/* Background layers */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="aurora-fallback absolute inset-0" data-testid="aurora-fallback" />
        {webgl && (
          <Suspense fallback={null}>
            <div className="absolute inset-x-0 top-0 h-[75%] opacity-90" data-testid="aurora">
              <Aurora colorStops={["#7c3aed", "#22d3ee", "#8b5cf6"]} amplitude={1.1} blend={0.6} speed={0.6} height={0.5} />
            </div>
          </Suspense>
        )}
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_40%,#000_30%,transparent_100%)]" />
        <div className="noise absolute inset-0 opacity-[0.05] mix-blend-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
      </div>

      <div className="container grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div>
          {current && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line/10 bg-line/[0.04] py-1.5 pl-3 pr-4 text-xs text-muted backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-lime motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
              </span>
              {current.title} @ <span className="text-fg">Kulcha Cultr</span>
            </motion.p>
          )}

          <AnimatedName text={profile.name} />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-5 font-display text-lg text-fg/90 sm:text-2xl"
          >
            Product Engineer · <span className="whitespace-nowrap">Mobile &amp; Full-Stack</span>
          </motion.p>

          {/* Starts fully opaque (slides only) so it can count as the LCP paint immediately. */}
          <motion.div
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-xl space-y-4 text-base text-muted sm:text-lg"
          >
            <p>{lead}</p>
            <div className="flex flex-wrap items-center gap-2 font-mono text-sm">
              <span className="text-muted">currently shipping with</span>
              <RotatingText
                texts={rotatingStack}
                mainClassName="overflow-hidden rounded-lg bg-violet/20 px-2.5 py-0.5 text-fg ring-1 ring-violet/40"
                staggerDuration={0.02}
                rotationInterval={2400}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Magnet padding={60} magnetStrength={3}>
              <a href="#apps" className="btn-primary">
                See shipped apps <ArrowDown className="h-4 w-4" aria-hidden />
              </a>
            </Magnet>
            <Magnet padding={60} magnetStrength={3}>
              <a href={profile.resumeUrl} download={profile.resumeFileName} className="btn-ghost">
                <Download className="h-4 w-4" aria-hidden /> Download resume
              </a>
            </Magnet>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: EASE }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <HeroDevice className="h-auto w-full" />
        </motion.div>
      </div>

      <div className="container mt-14 lg:mt-20">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line/[0.08] bg-line/[0.08] md:grid-cols-4">
          {heroStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.06 }}
              className="flex flex-col-reverse bg-bg/80 p-5 backdrop-blur sm:p-6"
            >
              <dt className="mt-1 text-xs text-muted sm:text-sm">{s.label}</dt>
              <dd className="font-display text-3xl font-semibold text-fg sm:text-4xl" data-testid={`stat-${i}`}>
                <CountUp to={s.value} suffix={s.suffix} duration={1.8} delay={0.6} />
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
