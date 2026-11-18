import { motion, useReducedMotion } from "motion/react";

const VB = "0 0 320 180";
const mono = "JetBrains Mono Variable, monospace";

/** QR code that resolves into a rotating wireframe cube. */
export function ArArt() {
  const reduce = useReducedMotion();
  // Deterministic QR-ish pattern
  const cells = Array.from({ length: 49 }, (_, i) => ((i * 37 + 11) % 5 < 2 ? 1 : 0));
  const finders = [
    [24, 40],
    [72, 40],
    [24, 88],
  ];
  return (
    <svg viewBox={VB} className="h-full w-full" role="img" aria-label="QR code scanning into a 3D model">
      <g>
        {cells.map((on, i) =>
          on ? (
            <motion.rect
              key={i}
              x={36 + (i % 7) * 8}
              y={52 + Math.floor(i / 7) * 8}
              width="6"
              height="6"
              rx="1"
              fill="rgb(255 255 255 / 0.7)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 7) * 0.04 + Math.floor(i / 7) * 0.03 }}
            />
          ) : null,
        )}
        {finders.map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="22" height="22" rx="4" fill="none" stroke="rgb(34 211 238)" strokeWidth="3" />
        ))}
        {!reduce && (
          <motion.rect
            x="20"
            width="104"
            height="2"
            fill="rgb(34 211 238)"
            initial={{ y: 40 }}
            animate={{ y: [40, 132, 40] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: "drop-shadow(0 0 6px rgb(34 211 238))" }}
          />
        )}
      </g>

      <motion.path
        d="M136 90 H 180"
        stroke="rgb(255 255 255 / 0.3)"
        strokeWidth="2"
        strokeDasharray="4 6"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      <path d="M176 84 L182 90 L176 96" stroke="rgb(255 255 255 / 0.4)" strokeWidth="2" fill="none" strokeLinecap="round" />

      <motion.g
        style={{ transformOrigin: "245px 90px" }}
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <g fill="none" stroke="rgb(139 92 246)" strokeWidth="2" strokeLinejoin="round">
          <path d="M245 45 L285 67 L285 113 L245 135 L205 113 L205 67 Z" />
          <path d="M245 45 L245 90 M245 90 L285 113 M245 90 L205 113" stroke="rgb(139 92 246 / 0.5)" />
          <path d="M205 67 L245 90 L285 67" stroke="rgb(196 181 253)" />
        </g>
        {[
          [245, 45],
          [285, 67],
          [285, 113],
          [245, 135],
          [205, 113],
          [205, 67],
          [245, 90],
        ].map(([cx, cy]) => (
          <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="3" fill="#fff" />
        ))}
      </motion.g>
      <text x="24" y="160" fill="rgb(160 160 182)" fontSize="10" fontFamily={mono}>
        scan → render → assess
      </text>
    </svg>
  );
}

/** Bars + trend line for artist analytics. */
export function MusicArt() {
  const bars = [38, 62, 48, 84, 70, 102, 92, 118];
  const line = bars.map((h, i) => `${i ? "L" : "M"}${40 + i * 32 + 9} ${150 - h - 10}`).join(" ");
  return (
    <svg viewBox={VB} className="h-full w-full" role="img" aria-label="Animated analytics chart">
      <defs>
        <linearGradient id="ma-bar" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="rgb(139 92 246)" />
          <stop offset="1" stopColor="rgb(139 92 246 / 0.15)" />
        </linearGradient>
      </defs>
      {[50, 80, 110, 140].map((y) => (
        <line key={y} x1="32" x2="300" y1={y} y2={y} stroke="rgb(255 255 255 / 0.06)" />
      ))}
      {bars.map((h, i) => (
        <motion.rect
          key={i}
          x={40 + i * 32}
          width="18"
          rx="4"
          fill="url(#ma-bar)"
          initial={{ height: 0, y: 150 }}
          whileInView={{ height: h, y: 150 - h }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
      <motion.path
        d={line}
        fill="none"
        stroke="rgb(34 211 238)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.5, ease: "easeInOut" }}
      />
      <motion.g initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.6 }}>
        <rect x="36" y="12" width="72" height="24" rx="12" fill="rgb(163 230 53 / 0.12)" stroke="rgb(163 230 53 / 0.4)" />
        <text x="72" y="28" textAnchor="middle" fill="rgb(163 230 53)" fontSize="11" fontFamily={mono}>
          JWT ✓
        </text>
      </motion.g>
      <text x="32" y="170" fill="rgb(160 160 182)" fontSize="10" fontFamily={mono}>
        DynamoDB → cache → React
      </text>
    </svg>
  );
}

/** API gateway fanning out to services, each with its own DB, packets flowing. */
export function MicroservicesArt() {
  const reduce = useReducedMotion();
  const services = [
    { y: 36, label: "auth" },
    { y: 90, label: "students" },
    { y: 144, label: "courses" },
  ];
  const paths = services.map((s) => `M96 90 C 140 90, 140 ${s.y}, 176 ${s.y}`);
  return (
    <svg viewBox={VB} className="h-full w-full" role="img" aria-label="API gateway routing to microservices">
      <rect x="22" y="70" width="74" height="40" rx="10" fill="#141422" stroke="rgb(34 211 238)" strokeWidth="1.5" />
      <text x="59" y="94" textAnchor="middle" fill="#fff" fontSize="10" fontFamily={mono}>
        gateway
      </text>
      {paths.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          fill="none"
          stroke="rgb(255 255 255 / 0.25)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
        />
      ))}
      {!reduce &&
        paths.map((d, i) => (
          <circle key={`pk-${i}`} r="3" fill="rgb(34 211 238)">
            <animateMotion dur="1.8s" begin={`${i * 0.5}s`} repeatCount="indefinite" path={d} />
          </circle>
        ))}
      {services.map((s, i) => (
        <motion.g
          key={s.label}
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + i * 0.12 }}
        >
          <rect x="176" y={s.y - 16} width="78" height="32" rx="9" fill="#141422" stroke="rgb(139 92 246 / 0.8)" />
          <text x="215" y={s.y + 4} textAnchor="middle" fill="#e4e4f0" fontSize="10" fontFamily={mono}>
            {s.label}
          </text>
          <path d={`M254 ${s.y} H 268`} stroke="rgb(255 255 255 / 0.25)" />
          {/* DB cylinder */}
          <g fill="none" stroke="rgb(163 230 53 / 0.8)" strokeWidth="1.5">
            <ellipse cx="284" cy={s.y - 8} rx="14" ry="4" />
            <path d={`M270 ${s.y - 8} V ${s.y + 8} A 14 4 0 0 0 298 ${s.y + 8} V ${s.y - 8}`} />
          </g>
        </motion.g>
      ))}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1 }}>
        <rect x="30" y="128" width="58" height="22" rx="11" fill="rgb(239 68 68 / 0.12)" stroke="rgb(239 68 68 / 0.45)" />
        <text x="59" y="143" textAnchor="middle" fill="#fca5a5" fontSize="10" fontFamily={mono}>
          redis
        </text>
      </motion.g>
    </svg>
  );
}

export const projectArt = { ar: ArArt, music: MusicArt, microservices: MicroservicesArt } as const;
