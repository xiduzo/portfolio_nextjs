"use client";

import { THEME_STORAGE_KEY } from "@/lib/constants";
import { useEffect } from "react";
import { useDarkMode } from "usehooks-ts";
import { setCookie } from "@/lib/cookies";

export function Theme() {
    const { isDarkMode } = useDarkMode();

    useEffect(() => {
        setCookie(THEME_STORAGE_KEY, isDarkMode ? "dark" : "", 365);

        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            return;
        }

        document.documentElement.classList.remove("dark");
    }, [isDarkMode]);

    return null;
}
