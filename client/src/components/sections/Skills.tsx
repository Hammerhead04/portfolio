import {
  SiAmazonwebservices,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiGithubactions,
  SiGooglecloud,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiThreedotjs,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import { Boxes, Brain, Cloud, Code2, Server, Smartphone, Wrench } from "lucide-react";
import { skills } from "@/content/resume";
import SectionHeading from "@/components/layout/SectionHeading";
import LogoLoop, { type LogoItem } from "@/components/reactbits/LogoLoop";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const logos: LogoItem[] = [
  { node: <SiReact />, title: "React / React Native", hoverColor: "#61dafb" },
  { node: <SiExpo />, title: "Expo", hoverColor: "#ffffff" },
  { node: <SiNextdotjs />, title: "Next.js", hoverColor: "#ffffff" },
  { node: <SiTypescript />, title: "TypeScript", hoverColor: "#3178c6" },
  { node: <SiNodedotjs />, title: "Node.js", hoverColor: "#5fa04e" },
  { node: <SiExpress />, title: "Express", hoverColor: "#ffffff" },
  { node: <SiZod />, title: "Zod", hoverColor: "#3e67b1" },
  { node: <SiMongodb />, title: "MongoDB", hoverColor: "#47a248" },
  { node: <SiPostgresql />, title: "PostgreSQL", hoverColor: "#4169e1" },
  { node: <SiAmazonwebservices />, title: "AWS", hoverColor: "#ff9900" },
  { node: <SiGooglecloud />, title: "Google Cloud", hoverColor: "#4285f4" },
  { node: <SiDocker />, title: "Docker", hoverColor: "#2496ed" },
  { node: <SiGithubactions />, title: "GitHub Actions", hoverColor: "#2088ff" },
  { node: <SiFirebase />, title: "Firebase", hoverColor: "#ffca28" },
  { node: <SiOpenai />, title: "OpenAI", hoverColor: "#ffffff" },
  { node: <SiPython />, title: "Python", hoverColor: "#3776ab" },
  { node: <SiThreedotjs />, title: "Three.js", hoverColor: "#ffffff" },
];

const categoryIcon: Record<string, typeof Code2> = {
  "Mobile & Frontend": Smartphone,
  Languages: Code2,
  Backend: Server,
  "Databases & Cloud": Cloud,
  DevOps: Boxes,
  "Data & ML": Brain,
  Tools: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="relative py-20 md:py-24">
      <div className="container">
        <SectionHeading
          index="04"
          eyebrow="Skills"
          id="skills-title"
          title={
            <>
              The stack, <span className="text-gradient">front to back.</span>
            </>
          }
        />
      </div>

      <Reveal className="mb-14 text-[34px] text-muted">
        <LogoLoop
          logos={logos}
          speed={60}
          logoHeight={34}
          gap={56}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="rgb(7, 7, 12)"
          ariaLabel="Technologies I work with"
        />
      </Reveal>

      <div className="container">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {skills.map((group, i) => {
            const Icon = categoryIcon[group.category] ?? Code2;
            return (
              <StaggerItem key={group.category} className={i === 0 ? "h-full sm:col-span-2 lg:col-span-1" : "h-full"} data-testid="skill-group">
                <SpotlightCard
                  className="h-full !p-6"
                  spotlightColor={i % 2 ? "rgba(34, 211, 238, 0.9)" : "rgba(139, 92, 246, 0.9)"}
                  intensity={0.16}
                  style={{ "--spotlight-card-surface": "rgb(14 14 22)" } as React.CSSProperties}
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-line/[0.06] text-cyan">
                      <Icon className="h-[18px] w-[18px]" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold">{group.category}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((s) => (
                      <li key={s} className="rounded-lg border border-line/10 bg-line/[0.03] px-2.5 py-1 text-[13px] text-fg/85">
                        {s}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
