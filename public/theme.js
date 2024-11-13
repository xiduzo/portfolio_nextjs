const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

console.log(prefersDarkScheme);
if (!prefersDarkScheme.matches) {
    document.documentElement.classList.remove("dark");
}

prefersDarkScheme.addEventListener("change", () => {
    document.documentElement.classList.toggle("dark");
});
