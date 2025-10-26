import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Section } from "./section";
import { Text } from "./text";
import { EllipsisIcon } from "lucide-react";

export function TLDR(props: Props) {
  return (
    <Section>
      <Accordion
        type="single"
        collapsible
        dir="ltr"
        className="[&_div]:border-none"
      >
        <AccordionItem value="tldr">
          <AccordionTrigger
            className={cn(
              "flex-row-reverse",
              "hover:text-muted-foreground hover:no-underline",
              "[&[data-state=open]_svg.lucide-ellipsis]:opacity-0",
              "[&[data-state=open]_svg.lucide-chevron-down]:rotate-0 [&[data-state=closed]_svg.lucide-chevron-down]:-rotate-90"
            )}
          >
            <Text
              size="sm"
              className={cn(
                "flex-grow text-left flex items-center",
                "text-muted-foreground hover:text-muted-foreground",
                "before:mr-2",
                "ml-2 !mb-0"
              )}
            >
              TLDR;
              <EllipsisIcon aria-hidden="true" className="opacity-60 size-4" />
            </Text>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground after:content-['*/'] after:ml-9 after:text-2xl">
            {props.lines.map((line, index) => (
              <Text
                motion="none"
                size="sm"
                className="before:content-['*'] before:mr-2 ml-9 !mb-1.5"
                key={index}
              >
                {line}
              </Text>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Section>
  );
}

type Props = {
  lines: string[];
};
