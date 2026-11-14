import { useId } from "react";

// Geometry and node/edge model restored from the original Featured illustration.
// This is a conceptual execution graph, not an Orqentic product screenshot.
const NODES = [
  { id: "trigger", label: "Trigger", x: 24, y: 115, accent: "teal" },
  { id: "llm", label: "LLM", x: 185, y: 45, accent: "purple" },
  { id: "parse", label: "Parse", x: 185, y: 185, accent: "teal" },
  { id: "branch", label: "Branch", x: 346, y: 115, accent: "purple" },
  { id: "action", label: "Action", x: 507, y: 45, accent: "teal" },
  { id: "output", label: "Output", x: 507, y: 185, accent: "teal" },
] as const;
const EDGES = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [3, 4],
  [3, 5],
] as const;

export function NodeCanvas() {
  const gradient = useId();
  return (
    <svg viewBox="0 0 630 280" fill="none" focusable="false">
      <defs>
        <linearGradient id={gradient} x1="0" x2="1">
          <stop offset="0%" stopColor="var(--teal)" />
          <stop offset="100%" stopColor="var(--purple)" />
        </linearGradient>
      </defs>
      {EDGES.map(([from, to]) => {
        const a = NODES[from];
        const b = NODES[to];
        const x1 = a.x + 48;
        const y1 = a.y + 22;
        const x2 = b.x + 48;
        const y2 = b.y + 22;
        const mid = (x1 + x2) / 2;
        const d = `M${x1} ${y1}C${mid} ${y1},${mid} ${y2},${x2} ${y2}`;
        return (
          <g key={`${from}-${to}`}>
            <path d={d} stroke={`url(#${gradient})`} strokeOpacity="0.25" strokeWidth="1.5" />
            <path
              className="visual-trace"
              pathLength="1"
              d={d}
              stroke={`url(#${gradient})`}
              strokeWidth="2"
            />
          </g>
        );
      })}
      {NODES.map((node, index) => (
        <g key={node.id} className={index === 1 || index === 4 ? "visual-float" : undefined}>
          <rect
            className={`visual-panel visual-${node.accent}-stroke`}
            x={node.x}
            y={node.y}
            width="96"
            height="44"
            rx="9"
          />
          <circle
            className={`visual-${node.accent} visual-indicator`}
            cx={node.x + 14}
            cy={node.y + 22}
            r="3"
          />
          <text
            x={node.x + 26}
            y={node.y + 27}
            fill="var(--foreground)"
            fontFamily="var(--font-mono)"
            fontSize="13"
          >
            {node.label}
          </text>
        </g>
      ))}
      <path
        className="visual-muted"
        strokeWidth="3"
        strokeLinecap="round"
        d="M188 260h32m9 0h14m9 0h23m9 0h50m9 0h18m9 0h34"
      />
    </svg>
  );
}
