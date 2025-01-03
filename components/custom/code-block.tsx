import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import {
    transformerNotationDiff,
    transformerNotationHighlight,
    transformerNotationWordHighlight,
    transformerNotationFocus,
    transformerNotationErrorLevel,
    transformerMetaWordHighlight,
    transformerMetaHighlight,
} from "@shikijs/transformers";

export async function CodeBlock(props: Props) {
    const file = await unified()
        .use(remarkParse)
        .use(remarkRehype, {})
        .use(rehypePrettyCode, {
            theme: {
                dark: "github-dark",
                light: "github-light",
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
        .use(rehypeStringify)
        .process(props.code);

    return (
        <div
            className="my-36 intersect-once intersect:motion-preset-slide-up-md intersect:motion-delay-300"
            dangerouslySetInnerHTML={{ __html: String(file) }}
        ></div>
    );
}

type Props = {
    code: string;
};
