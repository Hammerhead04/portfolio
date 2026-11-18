import { objective, traits } from "@/content/resume";
import SectionHeading from "@/components/layout/SectionHeading";
import BlurText from "@/components/reactbits/BlurText";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { traitArt } from "@/components/illustrations/TraitArt";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-20 md:py-24">
      <div className="container">
        <SectionHeading
          index="01"
          eyebrow="Objective"
          id="about-title"
          title={
            <>
              Product-minded. <span className="text-gradient">Ships to the App Store.</span>
            </>
          }
        />

        <div data-testid="objective">
          <BlurText
            text={objective}
            animateBy="words"
            direction="bottom"
            delay={18}
            stepDuration={0.3}
            className="max-w-4xl font-display text-xl leading-snug text-fg/90 sm:text-2xl md:text-[1.7rem]"
          />
        </div>

        <Stagger className="mt-16 grid gap-4 md:grid-cols-3">
          {traits.map((t) => {
            const Art = traitArt[t.id];
            return (
              <StaggerItem key={t.id} className="h-full">
                <SpotlightCard
                  className="h-full border-0"
                  spotlightColor="rgba(139, 92, 246, 0.9)"
                  intensity={0.18}
                  style={{ "--spotlight-card-surface": "rgb(14 14 22)" } as React.CSSProperties}
                >
                  <Art />
                  <h3 className="mt-6 text-lg font-semibold">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted">{t.body}</p>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
