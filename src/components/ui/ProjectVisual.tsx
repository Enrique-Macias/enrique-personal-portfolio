import { motion, useReducedMotion } from "framer-motion";

type Kind = "cms" | "meds" | "legal" | "coach";

export function ProjectVisual({ kind }: { kind: Kind }) {
  return (
    <div className="relative h-28 w-full overflow-hidden rounded-xl border border-border/70 bg-[var(--background)]/50">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.97 0.005 270 / 0.4) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />
      <div
        aria-hidden
        className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--purple)] opacity-[0.10] blur-2xl"
      />
      <div
        aria-hidden
        className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-[var(--teal)] opacity-[0.10] blur-2xl"
      />
      <div className="relative h-full w-full">
        {kind === "cms" && <CmsVisual />}
        {kind === "meds" && <MedsVisual />}
        {kind === "legal" && <LegalVisual />}
        {kind === "coach" && <CoachVisual />}
      </div>
    </div>
  );
}

function CmsVisual() {
  const reduce = useReducedMotion();
  const teal = "oklch(0.82 0.14 180)";
  const muted = "oklch(1 0 0 / 0.18)";
  return (
    <svg viewBox="0 0 240 110" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      {/* window chrome */}
      <rect x="14" y="12" width="212" height="86" rx="8" fill="oklch(0.16 0.012 270)" stroke={muted} />
      <circle cx="24" cy="22" r="2" fill={muted} />
      <circle cx="32" cy="22" r="2" fill={muted} />
      <circle cx="40" cy="22" r="2" fill={muted} />
      <line x1="14" y1="32" x2="226" y2="32" stroke={muted} />
      {/* sidebar */}
      <rect x="14" y="32" width="50" height="66" fill="oklch(0.18 0.012 270)" />
      <rect x="22" y="42" width="30" height="4" rx="2" fill={muted} />
      <rect x="22" y="52" width="22" height="4" rx="2" fill={muted} />
      <rect x="22" y="62" width="28" height="4" rx="2" fill={teal} opacity="0.7" />
      <rect x="22" y="72" width="20" height="4" rx="2" fill={muted} />
      {/* content lines with typing cursor */}
      <rect x="74" y="42" width="120" height="6" rx="2" fill={muted} opacity="0.6" />
      <rect x="74" y="56" width="140" height="4" rx="2" fill={muted} opacity="0.4" />
      <rect x="74" y="66" width="100" height="4" rx="2" fill={muted} opacity="0.4" />
      <motion.rect
        x="74"
        y="78"
        height="4"
        rx="2"
        fill={teal}
        initial={{ width: 0 }}
        animate={{ width: reduce ? 90 : [0, 110, 110, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 0.85, 1] }}
      />
      {!reduce && (
        <motion.rect
          y="76"
          width="2"
          height="8"
          fill={teal}
          animate={{ x: [74, 184, 184, 74], opacity: [1, 1, 0, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 0.85, 1] }}
        />
      )}
    </svg>
  );
}

function MedsVisual() {
  const reduce = useReducedMotion();
  const teal = "oklch(0.82 0.14 180)";
  const purple = "oklch(0.78 0.16 295)";
  const muted = "oklch(1 0 0 / 0.18)";
  return (
    <svg viewBox="0 0 240 110" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      {/* phone frame */}
      <rect x="90" y="10" width="60" height="90" rx="10" fill="oklch(0.16 0.012 270)" stroke={muted} />
      <rect x="96" y="20" width="48" height="6" rx="2" fill={muted} opacity="0.5" />
      {/* pills */}
      <g>
        <rect x="100" y="34" width="40" height="14" rx="7" fill={teal} opacity="0.85" />
        <line x1="120" y1="34" x2="120" y2="48" stroke="oklch(0.16 0.012 270)" />
      </g>
      <g>
        <rect x="100" y="54" width="40" height="14" rx="7" fill={purple} opacity="0.85" />
        <line x1="120" y1="54" x2="120" y2="68" stroke="oklch(0.16 0.012 270)" />
      </g>
      <rect x="100" y="74" width="40" height="14" rx="7" fill={muted} />
      {/* scan line */}
      {!reduce && (
        <motion.rect
          x="90"
          width="60"
          height="2"
          fill={teal}
          opacity="0.7"
          animate={{ y: [10, 100, 10] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      {/* pulse dot */}
      <motion.circle
        cx="60"
        cy="55"
        r="4"
        fill={teal}
        animate={reduce ? {} : { scale: [1, 1.6, 1], opacity: [0.9, 0.3, 0.9] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "60px 55px" }}
      />
      <motion.circle
        cx="180"
        cy="55"
        r="4"
        fill={purple}
        animate={reduce ? {} : { scale: [1, 1.6, 1], opacity: [0.9, 0.3, 0.9] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ transformOrigin: "180px 55px" }}
      />
    </svg>
  );
}

function CoachVisual() {
  const reduce = useReducedMotion();
  const teal = "oklch(0.82 0.14 180)";
  const purple = "oklch(0.78 0.16 295)";
  const muted = "oklch(1 0 0 / 0.18)";
  return (
    <svg viewBox="0 0 240 110" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      {/* map backdrop */}
      <rect x="14" y="12" width="140" height="86" rx="8" fill="oklch(0.16 0.012 270)" stroke={muted} />
      <path d="M14 50 Q 60 30 110 55 T 154 60" stroke={muted} strokeWidth="1" fill="none" />
      <path d="M14 78 Q 50 60 100 80 T 154 75" stroke={muted} strokeWidth="1" fill="none" />
      {/* pins */}
      <motion.g
        animate={reduce ? {} : { y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "50px 50px" }}
      >
        <circle cx="50" cy="48" r="6" fill={teal} />
        <circle cx="50" cy="48" r="2" fill="oklch(0.16 0.012 270)" />
      </motion.g>
      <motion.g
        animate={reduce ? {} : { y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      >
        <circle cx="100" cy="68" r="5" fill={purple} />
        <circle cx="100" cy="68" r="1.6" fill="oklch(0.16 0.012 270)" />
      </motion.g>
      <motion.g
        animate={reduce ? {} : { y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      >
        <circle cx="130" cy="40" r="4" fill={teal} opacity="0.8" />
      </motion.g>
      {/* booking card */}
      <rect x="166" y="20" width="60" height="70" rx="6" fill="oklch(0.18 0.012 270)" stroke={muted} />
      <circle cx="180" cy="34" r="6" fill={teal} opacity="0.85" />
      <rect x="190" y="30" width="28" height="3.5" rx="1.5" fill={muted} opacity="0.7" />
      <rect x="190" y="36" width="20" height="3" rx="1.5" fill={muted} opacity="0.45" />
      {/* time slots */}
      <rect x="172" y="50" width="20" height="8" rx="2" fill={muted} opacity="0.4" />
      <rect x="196" y="50" width="20" height="8" rx="2" fill={muted} opacity="0.4" />
      <motion.rect
        x="172"
        y="62"
        width="20"
        height="8"
        rx="2"
        fill={teal}
        animate={reduce ? {} : { opacity: [0.3, 0.95, 0.3] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <rect x="196" y="62" width="20" height="8" rx="2" fill={muted} opacity="0.4" />
      <rect x="172" y="74" width="44" height="10" rx="3" fill={purple} opacity="0.7" />
    </svg>
  );
}

function LegalVisual() {
  const reduce = useReducedMotion();
  const teal = "oklch(0.82 0.14 180)";
  const purple = "oklch(0.78 0.16 295)";
  const muted = "oklch(1 0 0 / 0.18)";
  return (
    <svg viewBox="0 0 240 110" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      {/* document */}
      <rect x="50" y="14" width="100" height="86" rx="6" fill="oklch(0.16 0.012 270)" stroke={muted} />
      <rect x="58" y="24" width="60" height="6" rx="2" fill={muted} opacity="0.6" />
      <rect x="58" y="38" width="84" height="3" rx="1.5" fill={muted} opacity="0.45" />
      <rect x="58" y="46" width="84" height="3" rx="1.5" fill={muted} opacity="0.45" />
      <rect x="58" y="54" width="70" height="3" rx="1.5" fill={muted} opacity="0.45" />
      {/* highlight sweeping */}
      {!reduce && (
        <motion.rect
          x="58"
          width="84"
          height="6"
          rx="2"
          fill={teal}
          opacity="0.25"
          animate={{ y: [36, 44, 52, 36] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <rect x="58" y="66" width="50" height="3" rx="1.5" fill={muted} opacity="0.4" />
      <rect x="58" y="74" width="60" height="3" rx="1.5" fill={muted} opacity="0.4" />
      {/* AI spark */}
      <motion.g
        animate={reduce ? {} : { scale: [1, 1.15, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "170px 40px" }}
      >
        <path
          d="M170 28 L173 38 L183 41 L173 44 L170 54 L167 44 L157 41 L167 38 Z"
          fill={purple}
          opacity="0.9"
        />
      </motion.g>
      <motion.circle
        cx="180"
        cy="68"
        r="2"
        fill={teal}
        animate={reduce ? {} : { opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.circle
        cx="60"
        cy="90"
        r="2"
        fill={purple}
        animate={reduce ? {} : { opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
    </svg>
  );
}