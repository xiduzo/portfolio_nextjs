import { cn } from '@/lib/utils';
import { note } from '@/components/custom/text';

export function QuadrantDiagram() {
  const w = 500;
  const h = 500;
  const pad = 60;
  const cx = w / 2;
  const cy = h / 2;
  const font = note.className;

  return (
    <div className="w-full max-w-2xl mx-auto my-12">
      <div className="relative bg-muted/30 rounded-xl border border-border p-4">
        <svg
          viewBox={`0 0 ${w} ${h}`}
          className="w-full h-auto"
          role="img"
          aria-label="Quadrant diagram: width (ambiguity of intent) vs depth (autonomy over time), showing Prompt Engineering, AI Agents, Spec-Driven, and Agentic AI"
        >
          {/* Y-axis (width) */}
          <line
            x1={pad} y1={h - pad} x2={pad} y2={pad - 20}
            stroke="currentColor" strokeWidth="1.5" className="text-foreground/70"
          />
          <polygon
            points={`${pad - 4},${pad - 16} ${pad},${pad - 28} ${pad + 4},${pad - 16}`}
            fill="currentColor" className="text-foreground/70"
          />

          {/* X-axis (depth) */}
          <line
            x1={pad} y1={h - pad} x2={w - pad + 20} y2={h - pad}
            stroke="currentColor" strokeWidth="1.5" className="text-foreground/70"
          />
          <polygon
            points={`${w - pad + 16},${h - pad - 4} ${w - pad + 28},${h - pad} ${w - pad + 16},${h - pad + 4}`}
            fill="currentColor" className="text-foreground/70"
          />

          {/* Dashed cross — vertical */}
          <line
            x1={cx} y1={pad - 10} x2={cx} y2={h - pad + 10}
            stroke="currentColor" strokeWidth="1" strokeDasharray="6 4"
            className="text-foreground/25"
          />
          {/* Dashed cross — horizontal */}
          <line
            x1={pad - 10} y1={cy} x2={w - pad + 10} y2={cy}
            stroke="currentColor" strokeWidth="1" strokeDasharray="6 4"
            className="text-foreground/25"
          />

          {/* Y-axis labels — rotated vertical, reading bottom-to-top */}
          {/* WIDE at top */}
          <g transform={`rotate(-90, ${pad - 10}, ${pad + 20})`}>
            <text x={pad - 10} y={pad + 10} textAnchor="start"
              className={cn('text-[13px] fill-current font-bold text-foreground/80', font)}>
              WIDE
            </text>
            <text x={pad - 60} y={pad + 10 + 12} textAnchor="start"
              className={cn('text-[9px] fill-current text-muted-foreground', font)}>
              (High ambiguity of intent)
            </text>
          </g>

          {/* NARROW at bottom */}
          <g transform={`rotate(-90, ${pad - 20}, ${h - pad - 10})`}>
            <text x={pad + 20} y={h - pad - 10} textAnchor="end"
              className={cn('text-[13px] fill-current font-bold text-foreground/80', font)}>
              NARROW
            </text>
            <text x={pad + 50} y={h - pad - 10 + 12} textAnchor="end"
              className={cn('text-[9px] fill-current text-muted-foreground', font)}>
              (Low ambiguity of intent)
            </text>
          </g>

          {/* "width" label outside, along Y-axis */}
          <text x={pad - 28} y={cy} textAnchor="middle"
            transform={`rotate(-90, ${pad - 28}, ${cy})`}
            className={cn('text-[11px] fill-current text-muted-foreground/50', font)}>
            width
          </text>

          {/* X-axis labels */}
          <text x={pad + 10} y={h - pad + 20} textAnchor="start"
            className={cn('text-[13px] fill-current font-bold text-foreground/80', font)}>
            SHALLOW
          </text>
          <text x={pad + 10} y={h - pad + 34} textAnchor="start"
            className={cn('text-[9px] fill-current text-muted-foreground', font)}>
            (Low autonomy over time)
          </text>

          <text x={w - pad} y={h - pad + 20} textAnchor="end"
            className={cn('text-[13px] fill-current font-bold text-foreground/80', font)}>
            DEEP
          </text>
          <text x={w - pad} y={h - pad + 34} textAnchor="end"
            className={cn('text-[9px] fill-current text-muted-foreground', font)}>
            (High autonomy over time)
          </text>

          {/* "depth" label below X-axis */}
          <text x={cx} y={h - pad + 38} textAnchor="middle"
            className={cn('text-[11px] fill-current text-muted-foreground/50', font)}>
            depth
          </text>

          {/* Quadrant labels */}
          {/* Top-left: Prompt Engineering */}
          <text x={(pad + cx) / 2} y={cy / 2 + pad / 2} textAnchor="middle"
            className={cn('text-[18px] fill-current font-semibold text-foreground', font)}>
            Prompt Engineering
          </text>

          {/* Top-right: AI Agents */}
          <text x={(cx + w - pad) / 2} y={cy / 2 + pad / 2} textAnchor="middle"
            className={cn('text-[18px] fill-current font-semibold text-foreground', font)}>
            AI Agents
          </text>

          {/* Bottom-left: Spec-Driven (shifted toward center/deep) */}
          <text x={cx - 20} y={(cy + h - pad) / 2 + 6} textAnchor="middle"
            className={cn('text-[18px] fill-current font-semibold text-foreground', font)}>
            Spec-Driven
          </text>

          {/* Bottom-right: Agentic AI */}
          <text x={(cx + w - pad) / 2} y={(cy + h - pad) / 2 + 6} textAnchor="middle"
            className={cn('text-[18px] fill-current font-semibold text-foreground', font)}>
            Agentic AI
          </text>
        </svg>
      </div>
    </div>
  );
}
