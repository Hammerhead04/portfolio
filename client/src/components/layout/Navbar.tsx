import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Download, Menu, X } from "lucide-react";
import { profile, sections } from "@/content/resume";
import { useActiveSection } from "@/lib/hooks";
import { cn } from "@/lib/utils";

const ids = sections.map((s) => s.id);
const navItems = sections.filter((s) => s.id !== "home");

export default function Navbar() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[100] rounded-full bg-fg px-4 py-2 text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-brand-gradient"
        style={{ scaleX: progress }}
      />

      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-4">
        <nav
          aria-label="Primary"
          className={cn(
            "flex w-full max-w-5xl items-center justify-between gap-2 rounded-full px-3 py-2 transition-all duration-300 sm:px-4",
            scrolled || open
              ? "glass shadow-[0_8px_40px_-12px_rgba(0,0,0,0.8)]"
              : "border border-line/[0.06] bg-bg/40 backdrop-blur-md",
          )}
        >
          <a href="#home" className="flex items-center gap-2 rounded-full px-2 py-1 font-display text-sm font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-gradient text-xs font-bold text-bg">
              AK
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
          </a>

          <ul className="hidden items-center lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id} className="relative">
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative z-10 block rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors",
                      isActive ? "text-fg" : "text-muted hover:text-fg",
                    )}
                  >
                    {item.label}
                  </a>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full border border-line/10 bg-line/[0.07]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              className="hidden items-center gap-1.5 rounded-full bg-fg px-4 py-2 text-xs font-semibold text-bg transition-colors hover:bg-white sm:inline-flex"
            >
              <Download className="h-3.5 w-3.5" aria-hidden />
              Resume
            </a>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full text-fg hover:bg-line/10 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            className="fixed inset-x-3 top-[4.75rem] z-40 rounded-3xl p-3 glass lg:hidden"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.035 } } }}
              className="grid grid-cols-2 gap-1"
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.id}
                  variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-2xl px-4 py-3 text-sm font-medium",
                      active === item.id ? "bg-line/[0.08] text-fg" : "text-muted hover:bg-line/[0.05] hover:text-fg",
                    )}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              className="btn-primary mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              <Download className="h-4 w-4" aria-hidden /> Download resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
