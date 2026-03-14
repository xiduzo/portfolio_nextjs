import { ArrowRight } from 'lucide-react';
import { Text } from '@/components/custom/text';

const STEPS = ['Prompt engineer', 'AI Agents', 'Spec driven', 'Agentic AI'];

export function WorkflowProgression() {
  return (
    <div className="w-full max-w-4xl mx-auto my-12">
      <div className="flex items-center justify-center py-4">
        {STEPS.map((label, i) => (
          <div key={label} className="flex items-center gap-2 grow-1">
            {i > 0 && <ArrowRight className="size-5 shrink-0 text-foreground/50 ml-2 mb-3" />}
            <Text size="sm">{label}</Text>
          </div>
        ))}
      </div>
      <Text variant="note" size="sm">4 distinct workflows of working with AI</Text>
    </div>
  );
}
