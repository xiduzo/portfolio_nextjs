import Link from "next/link";
import { PropsWithChildren } from "react";

export function Quote(props: Props) {
    return (
        <figure className="space-y-4 my-24 lg:my-36 px-4 lg:px-12 mx-auto prose md:prose-xl lg:prose-2xl max-w-screen-md">
            <blockquote
                cite={props.link ?? props.cite}
                className="text-muted-foreground not-italic"
            >
                {props.children}
            </blockquote>
            <figcaption className="text-muted-foreground">
                {props.link && (
                    <Link
                        target="_blank"
                        href={props.link}
                        className="text-muted-foreground"
                    >
                        {props.cite}
                    </Link>
                )}

                {!props.link && props.cite}
            </figcaption>
        </figure>
    );
}

type Props = PropsWithChildren & {
    cite: string;
    link?: string;
};
