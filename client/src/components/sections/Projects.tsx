import { FaGithub } from "react-icons/fa";
import { projects } from "@/content/resume";
import SectionHeading from "@/components/layout/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { projectArt } from "@/components/illustrations/ProjectArt";

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="relative py-20 md:py-24">
      <div className="container">
        <SectionHeading
          index="05"
          eyebrow="Projects"
          id="projects-title"
          title={
            <>
              Things I've built <span className="text-gradient">outside the day job.</span>
            </>
          }
        />

        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {projects.map((p, i) => {
            const Art = projectArt[p.id];
            return (
              <StaggerItem key={p.id} className={i === 0 ? "md:col-span-2 lg:col-span-1" : undefined} data-testid="project">
                <article className="card group flex h-full flex-col overflow-hidden transition-colors duration-300 hover:border-line/20">
                  <div className="relative aspect-[16/9] border-b border-line/[0.06] bg-[radial-gradient(80%_80%_at_50%_0%,rgb(var(--violet)/0.14),transparent)] p-4">
                    <div className="bg-grid absolute inset-0 opacity-60 [mask-image:linear-gradient(#000,transparent)]" aria-hidden />
                    <div className="relative h-full transition-transform duration-500 group-hover:scale-[1.03]">
                      <Art />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech">
                      {p.tech.map((t) => (
                        <li key={t} className="chip">
                          {t}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 self-start pt-6 text-sm font-medium text-fg/80 transition-colors hover:text-cyan"
                    >
                      <FaGithub aria-hidden /> View on GitHub
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
