import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/content/resume";
import { Reveal } from "@/components/motion/Reveal";
import Magnet from "@/components/reactbits/Magnet";

type CopyState = "idle" | "copied" | "failed";

export default function Contact() {
  const [state, setState] = useState<CopyState>("idle");
  const emailRef = useRef<HTMLSpanElement>(null);
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setState("copied");
    } catch {
      // Clipboard blocked: select the address so the user can copy it manually.
      const el = emailRef.current;
      if (el) {
        const range = document.createRange();
        range.selectNodeContents(el);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
      setState("failed");
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState("idle"), 2200);
  };

  const links = [
    { href: `mailto:${profile.email}`, label: "Email", value: "Open mail app", Icon: Mail, external: false },
    { href: profile.linkedin, label: "LinkedIn", value: "in/abhay-krishna-mv", Icon: FaLinkedin, external: true },
    { href: profile.github, label: "GitHub", value: "Hammerhead04", Icon: FaGithub, external: true },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden py-24 md:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[70%] aurora-fallback rotate-180 opacity-60" />
      <div className="container text-center">
        <Reveal>
          <p className="eyebrow justify-center">
            <span className="text-muted">08</span>
            <span aria-hidden className="h-px w-8 bg-cyan/60" />
            Contact
          </p>
          <h2 id="contact-title" className="mx-auto mt-5 max-w-4xl text-balance text-4xl font-semibold sm:text-6xl md:text-7xl">
            Let's build something <span className="text-gradient animate-gradient-pan">people enjoy using.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted md:text-lg">
            Open to product engineering roles across mobile and full-stack. The quickest way to reach me is email.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-col items-center gap-4">
          <Magnet padding={80} magnetStrength={4}>
            <button
              type="button"
              onClick={copy}
              className="group inline-flex items-center gap-3 rounded-full border border-line/15 bg-surface/80 py-2 pl-6 pr-2 font-mono text-sm text-fg backdrop-blur transition-colors hover:border-line/30 sm:text-base"
              aria-label={`Copy email address ${profile.email}`}
            >
              <span ref={emailRef}>{profile.email}</span>
              <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-fg text-bg">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={state}
                    initial={{ y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -16, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    {state === "copied" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </motion.span>
                </AnimatePresence>
              </span>
            </button>
          </Magnet>
          <p role="status" aria-live="polite" className="h-5 text-xs text-muted">
            {state === "copied" && "Copied to clipboard"}
            {state === "failed" && "Couldn't access clipboard. The address is selected; press ⌘/Ctrl + C"}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="mx-auto mt-6 grid max-w-3xl gap-3 sm:grid-cols-3">
            {links.map(({ href, label, value, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="card flex items-center gap-3 p-4 text-left transition-colors hover:border-line/20 hover:bg-elevated"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-line/[0.06] text-lg text-fg">
                    <Icon aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted">{label}</span>
                    <span className="block truncate text-sm text-fg">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a href={profile.resumeUrl} download={profile.resumeFileName} className="btn-ghost mt-8" data-testid="resume-download">
            <Download className="h-4 w-4" aria-hidden /> Download resume (PDF)
          </a>
        </Reveal>
      </div>
    </section>
  );
}
