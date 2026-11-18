import type { ShippedApp } from "@/content/resume";

/** SVG iPhone frame with the real App Store icon on a splash screen. */
export function PhoneMockup({ app }: { app: ShippedApp }) {
  const [a, b] = app.accent;
  return (
    <div className="relative mx-auto aspect-[9/18.5] h-[88%] max-h-[300px]">
      {/* Screen content (HTML so the icon keeps real alt text) */}
      <div
        className="absolute inset-[3.2%] flex flex-col items-center overflow-hidden rounded-[13%/6.5%] bg-[#0b0b12]"
        style={{ backgroundImage: `radial-gradient(120% 70% at 50% 0%, ${a}55, transparent 70%)` }}
      >
        <div className="mt-[30%] flex flex-col items-center">
          <img
            src={app.icon}
            alt={`${app.name} app icon`}
            width={72}
            height={72}
            loading="lazy"
            decoding="async"
            className="h-[72px] w-[72px] rounded-[22%] shadow-[0_10px_30px_-8px_rgba(0,0,0,0.8)] ring-1 ring-white/10"
          />
          <span className="mt-3 font-display text-sm font-semibold text-white">{app.name}</span>
          <span className="text-[10px] text-white/50">{app.subtitle}</span>
        </div>
        <div className="mt-auto mb-[14%] w-[78%] space-y-2" aria-hidden>
          <div className="h-2 rounded-full" style={{ background: `linear-gradient(90deg, ${a}, ${b})` }} />
          <div className="h-2 w-2/3 rounded-full bg-white/10" />
          <div className="h-2 w-1/2 rounded-full bg-white/10" />
        </div>
      </div>
      {/* Bezel */}
      <svg viewBox="0 0 180 370" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
        <rect x="2" y="2" width="176" height="366" rx="30" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="3" />
        <rect x="6.5" y="6.5" width="167" height="357" rx="26" fill="none" stroke="#000" strokeWidth="6" />
        <rect x="66" y="17" width="48" height="13" rx="6.5" fill="#000" />
        <rect x="-1" y="90" width="3" height="28" rx="1.5" fill="rgba(255,255,255,0.25)" />
        <rect x="178" y="110" width="3" height="44" rx="1.5" fill="rgba(255,255,255,0.25)" />
        <rect x="66" y="352" width="48" height="3.5" rx="1.75" fill="rgba(255,255,255,0.5)" />
      </svg>
    </div>
  );
}

/** Browser window with an SVG monogram for web projects. */
export function BrowserMockup({ app }: { app: ShippedApp }) {
  const [a, b] = app.accent;
  const host = new URL(app.url).host;
  return (
    <div className="relative mx-auto w-[88%] overflow-hidden rounded-2xl border border-white/15 bg-[#0b0b12] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4ade80]" />
        <span className="ml-3 flex-1 truncate rounded-md bg-white/[0.06] px-2.5 py-1 font-mono text-[10px] text-white/60">
          https://{host}
        </span>
      </div>
      <svg viewBox="0 0 300 170" className="block h-auto w-full" role="img" aria-label={`${app.name} website preview`}>
        <defs>
          <linearGradient id={`bm-${app.id}`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor={a} />
            <stop offset="1" stopColor={b} />
          </linearGradient>
        </defs>
        <rect width="300" height="170" fill="#0b0b12" />
        {/* Monogram */}
        <rect x="24" y="30" width="52" height="52" rx="14" fill={`url(#bm-${app.id})`} />
        <path d="M40 44 V 68 H 60" stroke="#0b0b12" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="90" y="54" fill="#fff" fontSize="18" fontWeight="600" fontFamily="Space Grotesk Variable, sans-serif">
          {app.name}
        </text>
        <rect x="90" y="64" width="90" height="6" rx="3" fill="rgba(255,255,255,0.25)" />
        {/* Gallery grid */}
        {[0, 1, 2].map((i) => (
          <rect key={i} x={24 + i * 88} y="100" width="80" height="50" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.08)" />
        ))}
        <rect x="24" y="100" width="80" height="50" rx="10" fill={`url(#bm-${app.id})`} opacity="0.55" />
      </svg>
    </div>
  );
}
