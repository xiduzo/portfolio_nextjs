"use client";

import { Observer } from "tailwindcss-intersect";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ObserverProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    useEffect(() => {
        Observer.start();
    }, [pathname]);

    return <>{children}</>;
}
