import { EmojiHexcode, Openmoji } from "./openmoji";
import { Text } from "./text";

export function ProjectCard(props: Props) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <Text
                variant="subheading"
                motion="none"
                className="flex items-center gap-4"
            >
                {props.title}
                <Openmoji hexcode={props.emoji} size={42} />
            </Text>
            <Text size="sm" motion="none">
                {props.description}
            </Text>
        </div>
    );
}

type Props = {
    className?: string;
    title: string;
    description: string;
    emoji: EmojiHexcode;
};
