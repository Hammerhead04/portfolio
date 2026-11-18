import { motion, useReducedMotion } from "motion/react";

export const SCAN_SECONDS = 5;
const mono = "JetBrains Mono Variable, monospace";

/**
 * A video-editor timeline with a playhead that scans clips and an audio waveform.
 * Check markers pulse as the playhead passes; results feed an engagement-data node.
 */
export default function VideoVerify({ checks, signal }: { checks: string[]; signal: string }) {
  const reduce = useReducedMotion();
  const x0 = 40;
  const width = 400;
  const clips = [
    { x: 0, w: 92, c: "rgb(139 92 246)" },
    { x: 96, w: 64, c: "rgb(34 211 238)" },
    { x: 164, w: 110, c: "rgb(139 92 246)" },
    { x: 278, w: 52, c: "rgb(236 72 153)" },
    { x: 334, w: 66, c: "rgb(34 211 238)" },
  ];
  const wave = Array.from({ length: 64 }, (_, i) => 4 + Math.abs(Math.sin(i * 0.7) * Math.cos(i * 0.23)) * 18);

  return (
    <svg viewBox="0 0 480 330" className="h-auto w-full" role="img" aria-label="Video timeline being scanned by automated checks">
      <defs>
        <linearGradient id="vv-head" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="rgb(163 230 53)" />
          <stop offset="1" stopColor="rgb(163 230 53 / 0)" />
        </linearGradient>
      </defs>

      {/* Preview frame */}
      <rect x="140" y="12" width="200" height="112" rx="12" fill="#11111c" stroke="rgb(255 255 255 / 0.1)" />
      <path d="M140 100 L 200 64 L 240 90 L 280 58 L 340 100 V 112 a12 12 0 0 1 -12 12 H 152 a12 12 0 0 1 -12 -12 Z" fill="rgb(139 92 246 / 0.25)" />
      <circle cx="300" cy="40" r="10" fill="rgb(34 211 238 / 0.5)" />
      <path d="M232 56 L 252 68 L 232 80 Z" fill="#fff" opacity="0.85" />

      {/* Track labels */}
      <text x="8" y="168" fill="rgb(160 160 182)" fontSize="10" fontFamily={mono}>V1</text>
      <text x="8" y="212" fill="rgb(160 160 182)" fontSize="10" fontFamily={mono}>A1</text>

      {/* Ruler */}
      {Array.from({ length: 21 }, (_, i) => (
        <line key={i} x1={x0 + i * 20} x2={x0 + i * 20} y1="140" y2={i % 5 ? 146 : 150} stroke="rgb(255 255 255 / 0.2)" />
      ))}

      {/* Video clips */}
      {clips.map((c, i) => (
        <motion.rect
          key={i}
          x={x0 + c.x}
          y="154"
          height="24"
          rx="5"
          fill={c.c}
          fillOpacity="0.35"
          stroke={c.c}
          initial={{ width: 0 }}
          whileInView={{ width: c.w }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
        />
      ))}

      {/* Audio waveform */}
      {wave.map((h, i) => (
        <rect key={i} x={x0 + i * 6.25} y={208 - h / 2} width="3" height={h} rx="1.5" fill="rgb(34 211 238 / 0.55)" />
      ))}

      {/* Check markers along the timeline */}
      {checks.map((label, i) => {
        const cx = x0 + ((i + 0.5) / checks.length) * width;
        return (
          <g key={label}>
            <line x1={cx} x2={cx} y1="226" y2="248" stroke="rgb(255 255 255 / 0.15)" strokeDasharray="2 3" />
            <motion.circle
              cx={cx}
              cy="256"
              r="8"
              fill="#11111c"
              stroke="rgb(163 230 53)"
              strokeWidth="1.5"
              animate={reduce ? undefined : { scale: [1, 1.35, 1], fill: ["#11111c", "rgb(163 230 53 / 0.35)", "#11111c"] }}
              transition={{
                duration: 0.6,
                delay: (SCAN_SECONDS * (i + 0.5)) / checks.length,
                repeat: Infinity,
                repeatDelay: SCAN_SECONDS - 0.6,
              }}
              style={{ transformOrigin: `${cx}px 256px` }}
            />
            <path d={`M${cx - 3.5} 256 l2.5 2.5 l4.5 -5`} stroke="rgb(163 230 53)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          </g>
        );
      })}

      {/* Feed into engagement data */}
      <motion.path
        d={`M${x0} 280 C ${x0} 300, 240 290, 240 306`}
        fill="none"
        stroke="rgb(255 255 255 / 0.2)"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
      />
      <motion.path
        d={`M${x0 + width} 280 C ${x0 + width} 300, 240 290, 240 306`}
        fill="none"
        stroke="rgb(255 255 255 / 0.2)"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
      />
      <rect x="178" y="302" width="124" height="26" rx="13" fill="#11111c" stroke="rgb(139 92 246 / 0.7)" />
      <text x="240" y="319" textAnchor="middle" fill="#e4e4f0" fontSize="11" fontFamily={mono}>
        {signal} ↗
      </text>

      {/* Playhead */}
      <motion.g
        initial={{ x: 0 }}
        animate={reduce ? { x: width * 0.62 } : { x: [0, width] }}
        transition={reduce ? { duration: 0 } : { duration: SCAN_SECONDS, repeat: Infinity, ease: "linear" }}
      >
        <rect x={x0 - 1} y="136" width="2" height="128" fill="rgb(163 230 53)" />
        <path d={`M${x0 - 6} 132 h12 v6 l-6 6 l-6 -6 z`} fill="rgb(163 230 53)" />
        <rect x={x0 - 18} y="136" width="18" height="128" fill="url(#vv-head)" opacity="0.15" />
      </motion.g>
    </svg>
  );
}
