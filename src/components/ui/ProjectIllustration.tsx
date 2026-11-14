import { useRef } from "react";
import { useInView } from "framer-motion";
import type { VisualKind } from "@/i18n/types";
import { NodeCanvas } from "./NodeCanvas";
import "./project-illustration.css";

// Decorative, conceptual SVGs. No product data, screenshots or runtime requests.
export function ProjectIllustration({
  kind,
  compact = false,
}: {
  kind: VisualKind;
  compact?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.2 });
  const illustrations = {
    wallet: WalletIllustration,
    marketplace: MarketplaceIllustration,
    workflow: NodeCanvas,
    legal: LegalIllustration,
    scrum: ScrumIllustration,
    medication: MedicationIllustration,
    coach: CoachIllustration,
  } satisfies Record<VisualKind, () => React.JSX.Element>;
  const Illustration = illustrations[kind];
  return (
    <div
      ref={ref}
      aria-hidden="true"
      data-visual={kind}
      data-active={inView}
      className={`project-illustration ${compact ? "project-illustration--compact" : "project-illustration--featured"}`}
    >
      <Illustration />
    </div>
  );
}

function WalletIllustration() {
  return (
    <svg viewBox="0 0 480 300" fill="none" focusable="false">
      <rect className="visual-panel" x="30" y="38" width="320" height="220" rx="14" />
      <path className="visual-line" d="M30 70H350M86 70V258" />
      <circle className="visual-teal" cx="46" cy="54" r="3" />
      <circle className="visual-purple" cx="58" cy="54" r="3" />
      <path
        className="visual-muted"
        strokeWidth="4"
        strokeLinecap="round"
        d="M46 94H68M46 110H61M46 126H68M46 142H58"
      />
      <rect className="visual-inset" x="104" y="90" width="224" height="60" rx="8" />
      <path
        className="visual-muted"
        strokeWidth="5"
        strokeLinecap="round"
        d="M118 106H174M118 121H151"
      />
      <path
        className="visual-teal-stroke visual-trace"
        pathLength="1"
        strokeWidth="2"
        d="M202 132L224 119L244 125L266 105L288 114L312 99"
      />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect className="visual-inset" x={104 + i * 78} y="164" width="68" height="68" rx="8" />
          <rect
            className={i === 1 ? "visual-purple" : "visual-teal"}
            opacity="0.6"
            x={116 + i * 78}
            y="178"
            width="18"
            height="5"
            rx="2"
          />
          <path
            className="visual-muted"
            strokeLinecap="round"
            strokeWidth="4"
            d={`M${116 + i * 78} 198h38m-38 13h26`}
          />
        </g>
      ))}
      <g className="visual-float">
        <rect
          className="visual-panel visual-purple-stroke"
          x="318"
          y="76"
          width="104"
          height="154"
          rx="14"
          transform="rotate(9 370 153)"
        />
        <rect
          className="visual-panel visual-teal-stroke"
          x="302"
          y="88"
          width="104"
          height="154"
          rx="14"
        />
        <path className="visual-teal-stroke" strokeWidth="2" d="M318 111h20l5 8h23v16h-48z" />
        <path
          className="visual-muted"
          strokeWidth="4"
          strokeLinecap="round"
          d="M318 153h47m-47 12h29"
        />
        {[0, 1, 2, 3, 4].map((i) => (
          <circle
            key={i}
            className={i < 3 ? "visual-teal visual-indicator" : "visual-muted-fill"}
            cx={321 + i * 15}
            cy="187"
            r="4"
          />
        ))}
        <path
          className="visual-muted"
          strokeWidth="2"
          d="M318 210v13m5-13v13m4-13v13m7-13v13m3-13v13m6-13v13m4-13v13m7-13v13m4-13v13m4-13v13m7-13v13"
        />
      </g>
    </svg>
  );
}

function MarketplaceIllustration() {
  return (
    <svg viewBox="0 0 480 300" fill="none" focusable="false">
      <path
        className="visual-line"
        d="M132 112H182M298 166H350M132 216H182"
        strokeDasharray="4 6"
      />
      <g className="visual-float">
        <rect
          className="visual-panel visual-teal-stroke"
          x="174"
          y="24"
          width="136"
          height="252"
          rx="24"
        />
        <path
          className="visual-line"
          strokeWidth="4"
          strokeLinecap="round"
          d="M224 38h36M226 262h32"
        />
        <rect className="visual-inset" x="188" y="55" width="108" height="23" rx="8" />
        <circle className="visual-muted" cx="199" cy="66" r="3" />
        <path className="visual-muted" d="m201 69 3 3M215 66h59" />
        {[0, 1, 2, 3].map((i) => {
          const x = 188 + (i % 2) * 57;
          const y = 90 + Math.floor(i / 2) * 76;
          return (
            <g key={i}>
              <rect className="visual-inset" x={x} y={y} width="51" height="66" rx="7" />
              <rect
                className={i % 2 ? "visual-purple" : "visual-teal"}
                opacity="0.16"
                x={x + 5}
                y={y + 5}
                width="41"
                height="32"
                rx="4"
              />
              <path
                className={i % 2 ? "visual-purple-stroke" : "visual-teal-stroke"}
                d={`M${x + 16} ${y + 28}v-14h18v14zm0-10h18`}
              />
              <path
                className="visual-muted"
                strokeWidth="3"
                strokeLinecap="round"
                d={`M${x + 7} ${y + 46}h34m-34 10h21`}
              />
            </g>
          );
        })}
        <path
          className="visual-muted"
          strokeWidth="4"
          strokeLinecap="round"
          d="M200 244h12m23 0h12m23 0h12"
        />
      </g>
      <g>
        <rect className="visual-panel" x="40" y="78" width="110" height="70" rx="12" />
        <path
          className="visual-purple-stroke"
          strokeWidth="2"
          d="m61 99 14-7 14 7-14 7zm4 3v10q10 7 20 0v-10"
        />
        <path className="visual-muted" strokeWidth="4" strokeLinecap="round" d="M59 130h71" />
        <rect className="visual-panel" x="338" y="128" width="98" height="82" rx="12" />
        <path
          className="visual-teal-stroke"
          strokeWidth="2"
          d="m387 142 16 6v13q-3 13-16 19-13-6-16-19v-13zm-7 16 5 5 10-11"
        />
        <circle className="visual-teal visual-indicator" cx="359" cy="193" r="3" />
        <path className="visual-muted" strokeWidth="4" strokeLinecap="round" d="M370 193h45" />
        <rect className="visual-panel" x="63" y="190" width="82" height="50" rx="10" />
        <path className="visual-purple-stroke" d="M77 206h19v18H77zM81 201h11m-7-4h3" />
        <path
          className="visual-muted"
          strokeWidth="3"
          strokeLinecap="round"
          d="M106 207h25m-25 10h18"
        />
      </g>
    </svg>
  );
}

// Restored from the original ProjectVisual: phone, pills, scanner and AI accents.
function MedicationIllustration() {
  return (
    <svg viewBox="0 0 240 110" fill="none" focusable="false">
      <rect className="visual-panel" x="90" y="10" width="60" height="90" rx="10" />
      <path className="visual-muted" strokeWidth="4" strokeLinecap="round" d="M103 22h34" />
      <rect className="visual-teal" opacity="0.8" x="100" y="34" width="40" height="14" rx="7" />
      <rect className="visual-purple" opacity="0.8" x="100" y="54" width="40" height="14" rx="7" />
      <path stroke="var(--background)" d="M120 34v14m0 6v14" />
      <rect className="visual-inset" x="100" y="76" width="40" height="12" rx="3" />
      <path className="visual-teal-stroke visual-scan" strokeWidth="1.5" d="M94 30h52" />
      <path className="visual-line" strokeDasharray="3 4" d="M55 55h25m80 0h25" />
      <path
        className="visual-purple-stroke visual-indicator"
        d="m184 44 3 8 8 3-8 3-3 8-3-8-8-3 8-3z"
      />
      <rect className="visual-line" x="42" y="43" width="19" height="25" rx="3" />
      <path className="visual-muted" d="M47 50h9m-9 5h9m-9 5h6" />
    </svg>
  );
}

// Original map pins and booking card, adapted to a tennis/padel court.
function CoachIllustration() {
  return (
    <svg viewBox="0 0 240 110" fill="none" focusable="false">
      <rect className="visual-panel" x="14" y="12" width="140" height="86" rx="8" />
      <path
        className="visual-line"
        d="M28 27h112v56H28zm12 0v56m88-56v56M28 55h112M84 27v56M40 41h88M40 69h88M84 41v28"
      />
      <g className="visual-float">
        <circle className="visual-teal" cx="55" cy="43" r="5" />
        <circle className="visual-purple" cx="111" cy="67" r="5" />
      </g>
      <rect className="visual-panel" x="166" y="20" width="60" height="70" rx="6" />
      <circle className="visual-teal" cx="180" cy="34" r="6" opacity="0.8" />
      <path
        className="visual-muted"
        strokeWidth="3"
        strokeLinecap="round"
        d="M192 31h24m-24 7h16"
      />
      <rect className="visual-inset" x="172" y="50" width="20" height="8" rx="2" />
      <rect className="visual-inset" x="196" y="50" width="20" height="8" rx="2" />
      <rect className="visual-teal visual-indicator" x="172" y="62" width="20" height="8" rx="2" />
      <rect className="visual-inset" x="196" y="62" width="20" height="8" rx="2" />
      <rect className="visual-purple" opacity="0.6" x="172" y="76" width="44" height="6" rx="3" />
    </svg>
  );
}

// Original document and AI motif, with appointment slots for Bufetec.
function LegalIllustration() {
  return (
    <svg viewBox="0 0 240 110" fill="none" focusable="false">
      <rect className="visual-panel" x="43" y="14" width="104" height="84" rx="6" />
      <path
        className="visual-muted"
        strokeLinecap="round"
        strokeWidth="4"
        d="M56 27h58m-58 13h76m-76 9h76m-76 9h64"
      />
      <path
        className="visual-teal-stroke visual-scan"
        opacity="0.5"
        strokeWidth="5"
        d="M55 38h78"
      />
      <rect className="visual-inset" x="56" y="71" width="20" height="14" rx="3" />
      <rect className="visual-inset" x="82" y="71" width="20" height="14" rx="3" />
      <rect
        className="visual-teal visual-indicator"
        x="108"
        y="71"
        width="24"
        height="14"
        rx="3"
        opacity="0.6"
      />
      <g className="visual-float">
        <path className="visual-purple" d="m176 28 3 10 10 3-10 3-3 10-3-10-10-3 10-3z" />
        <path
          className="visual-line"
          strokeWidth="1.5"
          d="M178 64v21m-14 0h28m-28-16h28m-23 0-5 9h10zm18 0-5 9h10z"
        />
      </g>
    </svg>
  );
}

function ScrumIllustration() {
  return (
    <svg viewBox="0 0 240 110" fill="none" focusable="false">
      <rect className="visual-panel" x="20" y="12" width="200" height="86" rx="8" />
      <path className="visual-line" d="M20 31h200M86 31v67M153 31v67" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            className={i === 1 ? "visual-purple" : "visual-teal"}
            x={32 + i * 67}
            y="21"
            width="31"
            height="3"
            rx="1.5"
            opacity="0.6"
          />
          <g className={i === 1 ? "visual-float" : undefined}>
            <rect className="visual-inset" x={29 + i * 67} y="41" width="48" height="23" rx="4" />
            <path
              className="visual-muted"
              strokeWidth="3"
              strokeLinecap="round"
              d={`M${36 + i * 67} 49h28m-28 8h18`}
            />
          </g>
        </g>
      ))}
      <rect className="visual-inset" x="29" y="71" width="48" height="18" rx="4" />
      <path className="visual-purple-stroke visual-trace" pathLength="1" d="M106 81h24q8 0 8-9" />
      <path className="visual-teal-stroke visual-indicator" d="m176 78 4 4 9-10" strokeWidth="2" />
    </svg>
  );
}
