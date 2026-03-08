import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypePrettyCode from 'rehype-pretty-code';
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
  transformerNotationFocus,
  transformerNotationErrorLevel,
  transformerMetaWordHighlight,
  transformerMetaHighlight,
} from '@shikijs/transformers';
import clsx from 'clsx';

// Cache the unified processor to avoid recreating it for each code block
let cachedProcessor: ReturnType<typeof createProcessor> | null = null;

function createProcessor() {
  return unified()
    .use(remarkParse)
    .use(remarkRehype, {})
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .use(rehypePrettyCode as any, {
      theme: {
        dark: 'github-dark',
        light: 'github-light',
      },
      transformers: [
        transformerMetaWordHighlight(),
        transformerMetaHighlight(),
        transformerNotationHighlight(),
        transformerNotationDiff(),
        transformerNotationErrorLevel(),
        transformerNotationFocus(),
        transformerNotationWordHighlight(),
      ],
    })
    .use(rehypeStringify);
}

export async function CodeBlock(props: Props) {
  // Reuse the processor to reduce memory allocation
  if (!cachedProcessor) {
    cachedProcessor = createProcessor();
  }

  const file = await cachedProcessor.process(props.code);

  return (
    <div
      className={clsx(
        'my-36 intersect-once intersect:motion-preset-slide-up-md intersect:motion-delay-300',
        props.className
      )}
      dangerouslySetInnerHTML={{ __html: String(file) }}
    ></div>
  );
}

type Props = {
  code: string;
  className?: string;
};
