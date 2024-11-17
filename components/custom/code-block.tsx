import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import {
    transformerNotationDiff,
    transformerNotationErrorLevel,
    // transformerMetaWordHighlight, // Not working
    // transformerMetaHighlight // Not working
    transformerNotationFocus,
    transformerNotationHighlight,
    transformerNotationWordHighlight,
} from "@shikijs/transformers";

// import {
//     transformerNotationDiff,
//     transformerNotationErrorLevel
//     // transformerMetaWordHighlight, // Not working
//     // transformerMetaHighlight // Not working
//     ,
//     transformerNotationFocus,
//     transformerNotationHighlight,
//     transformerNotationWordHighlight
// } from 'shikiji-transformers';

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
                // transformerCopyButton({
                //     visibility: "always",
                //     feedbackDuration: 3_000,
                // }),
                transformerNotationHighlight(),
                // transformerNotationDiff(),
                // transformerNotationErrorLevel(),
                // transformerNotationFocus(),
                // transformerNotationWordHighlight(),
            ],
        })
        .use(rehypeStringify)
        .process(props.code);

    return (
        <section
            className="my-20"
            dangerouslySetInnerHTML={{ __html: String(file) }}
        ></section>
    );
}

type Props = {
    code: string;
};
