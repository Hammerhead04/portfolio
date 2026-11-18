import { motion } from "motion/react";

const stroke = { fill: "none", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
const draw = (delay = 0) => ({
  initial: { pathLength: 0 },
  whileInView: { pathLength: 1 },
  viewport: { once: true },
  transition: { duration: 1.1, delay, ease: "easeInOut" as const },
});

/** Rocket on a release pipeline: build → test → ship. */
function ShipArt() {
  return (
    <svg viewBox="0 0 120 72" className="h-16 w-auto" aria-hidden>
      <motion.path d="M8 52 H 96" stroke="rgb(255 255 255 / 0.2)" {...stroke} {...draw()} />
      {[20, 46, 72].map((x, i) => (
        <motion.circle key={x} cx={x} cy={52} r={5} fill="#0e0e16" stroke="rgb(34 211 238)" strokeWidth={1.6}
          initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.2 }} />
      ))}
      <motion.g initial={{ x: -12, y: 8, opacity: 0 }} whileInView={{ x: 0, y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9, duration: 0.8 }}>
        <path d="M98 44 C 98 30, 104 18, 110 12 C 112 22, 110 34, 104 44 Z" stroke="rgb(139 92 246)" {...stroke} />
        <circle cx="105" cy="26" r="2.4" fill="rgb(139 92 246)" />
        <path d="M100 46 L 98 56 M104 46 L 104 58" stroke="rgb(163 230 53)" {...stroke} />
      </motion.g>
    </svg>
  );
}

/** Chat bubble turning into structured JSON fields. */
function AiArt() {
  return (
    <svg viewBox="0 0 120 72" className="h-16 w-auto" aria-hidden>
      <motion.path d="M8 14 h40 a8 8 0 0 1 8 8 v14 a8 8 0 0 1 -8 8 h-26 l-8 8 v-8 h-6 a8 8 0 0 1 -8 -8 v-14 a8 8 0 0 1 8 -8z"
        stroke="rgb(34 211 238)" {...stroke} {...draw()} />
      <motion.path d="M60 30 H 72" stroke="rgb(255 255 255 / 0.4)" {...stroke} {...draw(0.6)} />
      <motion.path d="M68 26 L72 30 L68 34" stroke="rgb(255 255 255 / 0.4)" {...stroke} {...draw(0.8)} />
      {[16, 30, 44].map((y, i) => (
        <motion.rect key={y} x={80} y={y} height={8} rx={3} fill="rgb(139 92 246 / 0.7)"
          initial={{ width: 0 }} whileInView={{ width: [30, 22, 34][i] }} viewport={{ once: true }} transition={{ delay: 1 + i * 0.15 }} />
      ))}
      <circle cx="20" cy="29" r="2" fill="rgb(34 211 238)" />
      <circle cx="30" cy="29" r="2" fill="rgb(34 211 238)" />
      <circle cx="40" cy="29" r="2" fill="rgb(34 211 238)" />
    </svg>
  );
}

/** Two people with a balance scale between them. */
function TalkArt() {
  return (
    <svg viewBox="0 0 120 72" className="h-16 w-auto" aria-hidden>
      <motion.circle cx="16" cy="22" r="7" stroke="rgb(163 230 53)" {...stroke} {...draw()} />
      <motion.path d="M4 54 a12 12 0 0 1 24 0" stroke="rgb(163 230 53)" {...stroke} {...draw(0.2)} />
      <motion.circle cx="104" cy="22" r="7" stroke="rgb(34 211 238)" {...stroke} {...draw(0.1)} />
      <motion.path d="M92 54 a12 12 0 0 1 24 0" stroke="rgb(34 211 238)" {...stroke} {...draw(0.3)} />
      <motion.g initial={{ rotate: -10 }} whileInView={{ rotate: [-10, 8, -4, 0] }} viewport={{ once: true }}
        transition={{ duration: 1.6, delay: 0.6 }} style={{ transformOrigin: "60px 22px" }}>
        <path d="M40 22 H 80" stroke="rgb(139 92 246)" {...stroke} />
        <path d="M40 22 l-6 14 h12 z M80 22 l-6 14 h12 z" stroke="rgb(139 92 246)" {...stroke} />
      </motion.g>
      <path d="M60 18 V 56 M52 56 H 68" stroke="rgb(255 255 255 / 0.3)" {...stroke} />
    </svg>
  );
}

export const traitArt = { ship: ShipArt, ai: AiArt, talk: TalkArt } as const;
