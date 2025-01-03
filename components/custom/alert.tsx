import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";
import * as Icons from "lucide-react";

export default function Alert(props: Props) {
    const Icon = Icons[props.icon] as typeof Icons.AArrowDown;

    return (
        <div className={container({ intent: props.intent })}>
            <div className={text({ intent: props.intent })}>
                <Icon size={36} className="shrink-0" />
                {props.children}
            </div>
        </div>
    );
}

type Props = PropsWithChildren &
    VariantProps<typeof container> & {
        icon: keyof typeof Icons;
    };

const container = cva("border-l-4 p-4", {
    variants: {
        intent: {
            success:
                "border-green-400 bg-green-50 dark:border-green-500 dark:bg-green-900",
            info: "border-sky-400 bg-sky-50 dark:border-sky-500 dark:bg-sky-900",
            danger: "border-red-400 bg-red-50 dark:border-red-500 dark:bg-red-900",
            warning:
                "border-orange-400 bg-orange-50 dark:border-orange-500 dark:bg-orange-900",
        },
    },
});

const text = cva("flex gap-3 text-sm", {
    variants: {
        intent: {
            success: "text-green-400 dark:text-green-100",
            info: "text-sky-400 dark:text-sky-100",
            danger: "text-red-400 dark:text-red-100",
            warning: "text-orange-400 dark:text-orange-100",
        },
    },
});
