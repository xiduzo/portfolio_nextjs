"use client";

import { useEffect } from "react";

export function useSelectionColor(color: string) {
    useEffect(() => {
        document.documentElement.style.setProperty("--selection-color", color);
    }, [color]);
}

export function SelectionColor({ color }: { color: string }) {
    useSelectionColor(color);

    return null;
}
