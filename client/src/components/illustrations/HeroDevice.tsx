import { motion, useReducedMotion } from "motion/react";

/**
 * Hero illustration: a code window and a phone wired together through an API node.
 * Lines draw in with pathLength; packets travel along the wires (disabled with reduced motion).
 */
export default function HeroDevice({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const draw = (delay: number) => ({
    initial: { pathLength: reduce ? 1 : 0, opacity: reduce ? 1 : 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: { duration: 1.2, delay, ease: "easeInOut" as const },
  });

  const wires = [
    "M168 150 C 230 150, 230 210, 282 210",
    "M330 210 C 380 210, 380 140, 420 140",
    "M330 222 C 380 222, 380 300, 420 300",
  ];

  return (
    <svg
      viewBox="0 0 560 420"
      className={className}
      role="img"
      aria-label="Illustration of a code editor and a phone app connected through an API"
    >
      <defs>
        <linearGradient id="hd-brand" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="rgb(139 92 246)" />
          <stop offset="1" stopColor="rgb(34 211 238)" />
        </linearGradient>
        <linearGradient id="hd-screen" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#1b1b2b" />
          <stop offset="1" stopColor="#0d0d16" />
        </linearGradient>
        <radialGradient id="hd-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="rgb(139 92 246)" stopOpacity="0.45" />
          <stop offset="1" stopColor="rgb(139 92 246)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="300" cy="215" r="200" fill="url(#hd-glow)" />

      {/* Code window */}
      <motion.g
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <rect x="12" y="70" width="210" height="170" rx="16" fill="url(#hd-screen)" stroke="rgba(255,255,255,0.1)" />
        <circle cx="32" cy="90" r="4.5" fill="#f87171" />
        <circle cx="47" cy="90" r="4.5" fill="#fbbf24" />
        <circle cx="62" cy="90" r="4.5" fill="#4ade80" />
        <text x="150" y="94" fill="rgb(160 160 182)" fontSize="10" fontFamily="JetBrains Mono Variable, monospace">
          api.ts
        </text>
        {[
          { w: 70, c: "rgb(139 92 246)", x: 30 },
          { w: 120, c: "rgba(255,255,255,0.25)", x: 44 },
          { w: 96, c: "rgb(34 211 238)", x: 44 },
          { w: 132, c: "rgba(255,255,255,0.25)", x: 58 },
          { w: 60, c: "rgb(163 230 53)", x: 58 },
          { w: 84, c: "rgba(255,255,255,0.25)", x: 44 },
          { w: 40, c: "rgb(139 92 246)", x: 30 },
        ].map((l, i) => (
          <motion.rect
            key={i}
            x={l.x}
            y={112 + i * 16}
            height="6"
            rx="3"
            fill={l.c}
            initial={{ width: reduce ? l.w : 0 }}
            animate={{ width: l.w }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
          />
        ))}
      </motion.g>

      {/* Wires */}
      {wires.map((d, i) => (
        <motion.path key={d} d={d} fill="none" stroke="url(#hd-brand)" strokeWidth="2" strokeLinecap="round" {...draw(0.9 + i * 0.2)} />
      ))}
      {!reduce &&
        wires.map((d, i) => (
          <circle key={`p-${i}`} r="3.5" fill="#fff">
            <animateMotion dur={`${2.4 + i * 0.4}s`} begin={`${2 + i * 0.3}s`} repeatCount="indefinite" path={d} />
          </circle>
        ))}

      {/* API node */}
      <motion.g
        initial={{ scale: reduce ? 1 : 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 1 }}
        style={{ transformOrigin: "306px 216px" }}
      >
        <rect x="282" y="192" width="48" height="48" rx="14" fill="#141422" stroke="url(#hd-brand)" strokeWidth="2" />
        <text x="306" y="221" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="600" fontFamily="JetBrains Mono Variable, monospace">
          API
        </text>
      </motion.g>

      {/* Phone */}
      <motion.g
        initial={{ opacity: 0, y: 24 }}
        animate={reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -8, 0] }}
        transition={
          reduce
            ? { duration: 0 }
            : { opacity: { duration: 0.8, delay: 0.3 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 } }
        }
      >
        <rect x="420" y="60" width="128" height="260" rx="26" fill="#0b0b12" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />
        <rect x="428" y="68" width="112" height="244" rx="20" fill="url(#hd-screen)" />
        <rect x="462" y="76" width="44" height="10" rx="5" fill="#000" />
        <rect x="438" y="100" width="92" height="56" rx="12" fill="url(#hd-brand)" opacity="0.9" />
        <rect x="448" y="114" width="48" height="6" rx="3" fill="rgba(255,255,255,0.85)" />
        <rect x="448" y="128" width="30" height="6" rx="3" fill="rgba(255,255,255,0.55)" />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x="438" y={168 + i * 38} width="92" height="30" rx="9" fill="rgba(255,255,255,0.05)" />
            <circle cx="452" cy={183 + i * 38} r="7" fill={["rgb(34 211 238)", "rgb(139 92 246)", "rgb(163 230 53)"][i]} />
            <rect x="466" y={178 + i * 38} width="50" height="5" rx="2.5" fill="rgba(255,255,255,0.4)" />
            <rect x="466" y={187 + i * 38} width="32" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
          </g>
        ))}
        <rect x="464" y="300" width="40" height="4" rx="2" fill="rgba(255,255,255,0.35)" />
      </motion.g>

      {/* Floating badges */}
      {[
        { x: 236, y: 92, label: "push", c: "rgb(34 211 238)", d: 1.6 },
        { x: 232, y: 318, label: "OpenAI", c: "rgb(139 92 246)", d: 1.8 },
        { x: 70, y: 278, label: "CI ✓", c: "rgb(163 230 53)", d: 2 },
      ].map((b) => (
        <motion.g
          key={b.label}
          initial={{ opacity: 0, y: reduce ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: b.d, duration: 0.5 }}
        >
          <rect x={b.x} y={b.y} width={b.label.length * 8 + 28} height="26" rx="13" fill="#11111c" stroke="rgba(255,255,255,0.12)" />
          <circle cx={b.x + 13} cy={b.y + 13} r="4" fill={b.c} />
          <text x={b.x + 23} y={b.y + 17} fill="#e4e4f0" fontSize="11" fontFamily="JetBrains Mono Variable, monospace">
            {b.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}
