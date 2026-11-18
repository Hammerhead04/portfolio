import { useEffect, useState } from "react";

/** True when the browser can create a WebGL2 context (checked once, client-side). */
export function supportsWebGL2(): boolean {
  if (typeof document === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!canvas.getContext("webgl2");
  } catch {
    return false;
  }
}

/**
 * Tracks which section is currently in the reading zone of the viewport.
 * A section becomes active when it crosses the band 35%–55% from the top.
 */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const observed = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        // Pick the top-most intersecting section.
        visible.sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);
        setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: 0 },
    );

    // Sections can mount later (lazy-loaded chunk), so keep looking until all are observed.
    const attach = () => {
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && !observed.has(id)) {
          observed.add(id);
          observer.observe(el);
        }
      }
      return observed.size === ids.length;
    };
    const mutations = new MutationObserver(() => attach() && mutations.disconnect());
    if (!attach()) mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer.disconnect();
    };
  }, [ids]);

  return active;
}
