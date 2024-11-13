import Link from "next/link";

export default function Page() {
    return (
        <article className="container mx-auto px-2 md:px-12">
            <h1 className="text-8xl font-extrabold mt-16">
                Let&apos;s make the world a better place for everyone ❤️
            </h1>
            <figure className="space-y-4 my-28 prose md:prose-xl lg:prose-2xl">
                <blockquote
                    cite="https://www.w3.org/mission/accessibility/"
                    className="text-white not-italic"
                >
                    The power of the Web is in its universality. Access by
                    everyone <strong>regardless of ability</strong> is an{" "}
                    <em>essential</em> aspect.
                </blockquote>
                <figcaption className="text-muted-foreground">
                    - Tim Berners-Lee
                </figcaption>
            </figure>
            <p className="text-2xl mb-28">I firmly believe in that quote.</p>
            <p className="text-2xl mb-6">
                And although I have tried my best to make this website
                accessible for everybody, I am sure there are still some
                improvements to be made. If you have any suggestions or
                feedback, I would like to hear from you!
            </p>
            <Link
                href="mailto:mail@sanderboer.nl"
                className="text-2xl underline"
            >
                Send me an email.
            </Link>
        </article>
    );
}
