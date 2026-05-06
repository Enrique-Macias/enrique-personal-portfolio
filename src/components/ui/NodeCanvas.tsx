import { motion, useReducedMotion } from "framer-motion";

type Node = { id: string; label: string; x: number; y: number; accent?: "teal" | "purple" };
type Edge = { from: string; to: string };

const NODES: Node[] = [
  { id: "trigger", label: "Trigger", x: 60, y: 70, accent: "teal" },
  { id: "llm", label: "LLM", x: 220, y: 50, accent: "purple" },
  { id: "parse", label: "Parse", x: 220, y: 170 },
  { id: "branch", label: "Branch", x: 380, y: 110, accent: "purple" },
  { id: "action", label: "Action", x: 540, y: 60, accent: "teal" },
  { id: "output", label: "Output", x: 540, y: 180, accent: "teal" },
];

const EDGES: Edge[] = [
  { from: "trigger", to: "llm" },
  { from: "trigger", to: "parse" },
  { from: "llm", to: "branch" },
  { from: "parse", to: "branch" },
  { from: "branch", to: "action" },
  { from: "branch", to: "output" },
];

const NODE_W = 96;
const NODE_H = 40;

function nodeCenter(n: Node) {
  return { cx: n.x + NODE_W / 2, cy: n.y + NODE_H / 2 };
}

export function NodeCanvas() {
  const reduce = useReducedMotion();
  const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-[var(--background)]/40 backdrop-blur-sm">
      {/* dotted grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.97 0.005 270 / 0.35) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      {/* glow */}
      <div
        aria-hidden
        className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[var(--teal)] opacity-[0.12] blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[var(--purple)] opacity-[0.14] blur-3xl"
      />

      <svg
        viewBox="0 0 660 280"
        className="relative h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="edge-grad" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.82 0.14 180)" />
            <stop offset="100%" stopColor="oklch(0.78 0.16 295)" />
          </linearGradient>
        </defs>

        {/* edges */}
        {EDGES.map((e, i) => {
          const a = nodeCenter(byId[e.from]);
          const b = nodeCenter(byId[e.to]);
          const midX = (a.cx + b.cx) / 2;
          const d = `M ${a.cx} ${a.cy} C ${midX} ${a.cy}, ${midX} ${b.cy}, ${b.cx} ${b.cy}`;
          return (
            <g key={i}>
              <path
                d={d}
                fill="none"
                stroke="url(#edge-grad)"
                strokeOpacity="0.45"
                strokeWidth="1.5"
              />
              {!reduce && (
                <motion.circle
                  r="3"
                  fill="url(#edge-grad)"
                  initial={{ offsetDistance: "0%" }}
                  animate={{ offsetDistance: "100%" }}
                  transition={{
                    duration: 3 + i * 0.4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.3,
                  }}
                  style={{ offsetPath: `path("${d}")` }}
                />
              )}
            </g>
          );
        })}

        {/* nodes */}
        {NODES.map((n, i) => {
          const stroke =
            n.accent === "purple"
              ? "oklch(0.78 0.16 295)"
              : n.accent === "teal"
                ? "oklch(0.82 0.14 180)"
                : "oklch(1 0 0 / 0.18)";
          return (
            <motion.g
              key={n.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{
                opacity: 1,
                y: reduce ? 0 : [0, -3, 0, 3, 0],
              }}
              transition={{
                opacity: { duration: 0.5, delay: 0.1 * i },
                y: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <rect
                x={n.x}
                y={n.y}
                width={NODE_W}
                height={NODE_H}
                rx="8"
                fill="oklch(0.16 0.012 270)"
                stroke={stroke}
                strokeWidth="1"
              />
              <circle cx={n.x + 14} cy={n.y + NODE_H / 2} r="3" fill={stroke} />
              <text
                x={n.x + 26}
                y={n.y + NODE_H / 2 + 4}
                fill="oklch(0.97 0.005 270)"
                fontFamily="Geist Mono Variable, monospace"
                fontSize="12"
              >
                {n.label}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
