import { Hero } from "@/components/custom/hero";

export default function Page() {
    return (
        <>
            <Hero
                title="VeileNext"
                subtitle="Modernize the biggest flower auction in the world"
                publishDate="Jul 15 2021"
                emoji="1F490"
                readTime={8}
                className="bg-indigo-900"
            />
        </>
    );
}
