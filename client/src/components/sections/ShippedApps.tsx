import { ArrowUpRight } from "lucide-react";
import { FaApple } from "react-icons/fa";
import { Globe } from "lucide-react";
import { shippedApps } from "@/content/resume";
import SectionHeading from "@/components/layout/SectionHeading";
import TiltedCard from "@/components/reactbits/TiltedCard";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { BrowserMockup, PhoneMockup } from "@/components/illustrations/Mockups";

export default function ShippedApps() {
  return (
    <section id="apps" aria-labelledby="apps-title" className="relative py-20 md:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-96 bg-[radial-gradient(50%_50%_at_50%_50%,rgb(var(--violet)/0.12),transparent)]" />
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow="Shipped apps"
          id="apps-title"
          title={
            <>
              Live in the App Store <span className="text-gradient">and on the web.</span>
            </>
          }
          lead="Production products I've built and launched end-to-end, from architecture and backend to CI/CD and release."
        />

        <Stagger as="ul" className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4" stagger={0.1}>
          {shippedApps.map((app) => (
            <StaggerItem as="li" key={app.id} data-testid="app-card">
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${app.name}: ${app.subtitle} (opens ${app.platform === "ios" ? "App Store" : "website"} in a new tab)`}
                className="group block rounded-[28px]"
              >
                <TiltedCard
                  containerWidth="100%"
                  containerHeight={320}
                  imageWidth="100%"
                  imageHeight={320}
                  radius={28}
                  rotateAmplitude={10}
                  scaleOnHover={1.03}
                  showTooltip={false}
                  glare={0.35}
                >
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-surface"
                    style={{
                      backgroundImage: `radial-gradient(80% 60% at 50% 100%, ${app.accent[0]}40, transparent 70%), radial-gradient(60% 50% at 80% 0%, ${app.accent[1]}26, transparent 70%)`,
                    }}
                  >
                    {app.platform === "ios" ? <PhoneMockup app={app} /> : <BrowserMockup app={app} />}
                  </div>
                </TiltedCard>

                <div className="mt-5 flex items-start justify-between gap-3 px-1">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {app.name}
                      <span className="text-muted">: {app.subtitle}</span>
                    </h3>
                    <p className="mt-1 text-sm text-muted">{app.tagline}</p>
                  </div>
                  <ArrowUpRight
                    aria-hidden
                    className="mt-1 h-5 w-5 shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan"
                  />
                </div>
                <div className="mt-3 flex flex-wrap gap-2 px-1">
                  <span className="chip gap-1.5">
                    {app.platform === "ios" ? <FaApple aria-hidden /> : <Globe className="h-3 w-3" aria-hidden />}
                    {app.platform === "ios" ? "App Store" : "Web"}
                  </span>
                  {app.builtAt && <span className="chip">Built at {app.builtAt}</span>}
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
