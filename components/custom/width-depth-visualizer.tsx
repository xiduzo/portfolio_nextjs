'use client';

import React, { useState, useCallback } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '@/lib/utils';
import { note } from '@/components/custom/text';

const PRESETS = [
  { label: '1. Prompt engineering', sub: 'Wide · shallow', width: 85, inPct: 90, outPct: 70 },
  { label: '2. AI Agents', sub: 'Wide · deep', width: 70, inPct: 75, outPct: 50 },
  { label: '3. Spec-driven development', sub: 'Narrow · shallow or deep', width: 35, inPct: 55, outPct: 30 },
  { label: '4. Agentic AI', sub: 'Narrow · Deep', width: 15, inPct: 35, outPct: 18 },
] as const;

function ThemedSlider(props: React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>) {
  return (
    <SliderPrimitive.Root
      className="relative flex w-full touch-none select-none items-center"
      {...props}
    >
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
        <SliderPrimitive.Range className="absolute h-full bg-muted-foreground/40" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-muted-foreground bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
    </SliderPrimitive.Root>
  );
}

type WidthDepthVisualizerProps = {
  showValidation?: boolean;
  /** Initial step index 0–3 (default 0). */
  initialStep?: number;
  /** If false, the step slider is disabled and cannot be dragged (default true). */
  draggable?: boolean;
};

export function WidthDepthVisualizer({
  showValidation = false,
  initialStep = 0,
  draggable = true,
}: WidthDepthVisualizerProps) {
  const clampedInitial = Math.min(3, Math.max(0, initialStep));
  const [widthPct, setWidthPct] = useState(PRESETS[clampedInitial].width);
  const [activePreset, setActivePreset] = useState(clampedInitial);

  // Depth is inversely proportional to width
  const depthPct = Math.min(100, Math.max(15, 115 - widthPct));

  // Validation position shifts left as width narrows (left-shifted validation)
  const validationX = widthPct > 50 ? 70 : 45;

  const handleSliderChange = useCallback((value: number[]) => {
    const index = value[0];
    setActivePreset(index);
    setWidthPct(PRESETS[index].width);
  }, []);

  const handlePreset = useCallback((index: number) => {
    setActivePreset(index);
    setWidthPct(PRESETS[index].width);
  }, []);

  // SVG tunnel shape calculations
  const svgW = 400;
  const svgH = 240;
  const padding = 30;
  const centerY = svgH / 2;

  const maxHeight = svgH - padding * 2;
  const preset = PRESETS[activePreset];
  const inHeight = (preset.inPct / 100) * maxHeight;
  const outHeight = (preset.outPct / 100) * maxHeight;

  const topIn = centerY - inHeight / 2;
  const botIn = centerY + inHeight / 2;
  const topOut = centerY - outHeight / 2;
  const botOut = centerY + outHeight / 2;

  const depthX = padding + ((svgW - padding * 2) * 0.9 * depthPct) / 100;

  // Curved tunnel path
  const cpX = padding + (depthX - padding) * 0.5;
  const tunnelPath = `
    M ${padding} ${topIn}
    C ${cpX} ${topIn}, ${depthX - 30} ${topOut}, ${depthX} ${topOut}
    L ${depthX} ${botOut}
    C ${depthX - 30} ${botOut}, ${cpX} ${botIn}, ${padding} ${botIn}
    Z
  `;

  // Validation line position
  const valX = padding + ((depthX - padding) * validationX) / 100;

  return (
    <div className="w-full max-w-3xl mx-auto my-12">
      {/* SVG Visualization */}
      <div className="relative bg-muted/30 rounded-xl border border-border p-4">
        <svg
          viewBox={`0 0 ${svgW} ${svgH}`}
          className="w-full h-auto"
          role="img"
          aria-label={`Tunnel visualization for ${activePreset !== null ? PRESETS[activePreset].label : 'workflow'}`}
        >
          {/* Tunnel fill */}
          <path
            d={tunnelPath}
            className="fill-foreground/10 stroke-foreground/60"
            strokeWidth="2"
            style={{ transition: 'all 0.3s ease' }}
          />

          {/* Time arrow (centered) */}
          <style>{`@keyframes dashFlow { to { stroke-dashoffset: -14; } }`}</style>
          <line
            x1={padding + 20}
            y1={centerY}
            x2={svgW - padding - 15}
            y2={centerY}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            className="text-muted-foreground/50"
            style={{ animation: 'dashFlow 1s linear infinite' }}
          />
          <polygon
            points={`${svgW - padding - 15},${centerY - 4} ${svgW - padding - 5},${centerY} ${svgW - padding - 15},${centerY + 4}`}
            fill="currentColor"
            className="text-muted-foreground/50"
          />
          <text
            x={svgW - padding}
            y={centerY - 8}
            textAnchor="end"
            className={cn('text-[10px] fill-current', note.className)}
          >
            time
          </text>

          {/* Validation line */}
          {showValidation && (
            <g style={{ transform: `translateX(${valX}px)`, transition: 'transform 0.3s ease' }}>
              <line
                x1={0}
                y1={padding}
                x2={0}
                y2={svgH - padding}
                stroke="currentColor"
                strokeWidth="2"
                className="text-foreground/60"
              />
              <text
                x={0}
                y={padding - 6}
                textAnchor="middle"
                className={cn('text-[10px] fill-current text-foreground/60')}
              >
                Human validation
              </text>
            </g>
          )}

          {/* Width axis label */}
          <text
            x={12}
            y={centerY}
            textAnchor="middle"
            className={cn('text-[11px] fill-current', note.className)}
            transform={`rotate(-90, 12, ${centerY})`}
          >
            width
          </text>

          {/* Depth axis label */}
          <text
            x={svgW / 2}
            y={svgH - 4}
            textAnchor="middle"
            className={cn('text-[11px] fill-current', note.className)}
          >
            depth
          </text>

          {/* Width axis (dotted, full height) */}
          <line
            x1={20}
            y1={padding}
            x2={20}
            y2={svgH - padding}
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="2 2"
            className="text-muted-foreground/40"
          />

          {/* Depth axis (dotted, full width) */}
          <line
            x1={padding}
            y1={svgH - 16}
            x2={svgW - padding}
            y2={svgH - 16}
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="2 2"
            className="text-muted-foreground/40"
          />
        </svg>
      </div>

      {draggable && (
        <>
          {/* Slider */}
          <div className={cn('mt-6 px-2')}>
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              <span>Wide</span>
              <span>Narrow</span>
            </div>
            <ThemedSlider
              value={[activePreset]}
              onValueChange={handleSliderChange}
              min={0}
              max={3}
              step={1}
              aria-label="Select workflow type"
            />
          </div>

          {/* Caption */}
          <p className={cn('text-center text-sm text-muted-foreground mt-4', note.className)}>
            Drag to narrow the width of the workflow
          </p>
        </>
      )}


      {/* Preset buttons */}
      {/* <div className="grid grid-cols-2 gap-2 mt-8">
        {PRESETS.map((p, i) => {
          const c = colorMap[p.color];
          const isActive = activePreset === i;
          return (
            <button
              key={p.label}
              onClick={() => handlePreset(i)}
              className={cn(
                'text-left px-3 py-2 rounded-lg border transition-all text-sm',
                isActive
                  ? `${c.border} ${c.bg} ${c.text}`
                  : 'border-muted-foreground/20 text-muted-foreground hover:border-muted-foreground/40'
              )}
            >
              <span className="font-semibold block">{p.label}</span>
              <span className="text-xs opacity-70">{p.sub}</span>
            </button>
          );
        })}
      </div> */}
    </div>
  );
}
