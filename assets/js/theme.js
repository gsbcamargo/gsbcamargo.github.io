const button = document.querySelector("#theme-toggle");

button?.addEventListener("click", () => {
  const root = document.documentElement;
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = root.dataset.theme === "dark"
    || (!root.dataset.theme && systemDark);

  const nextTheme = isDark ? "light" : "dark";
  root.dataset.theme = nextTheme;

  try {
    localStorage.setItem("theme", nextTheme);
  } catch (error) {
    // The chosen theme still works for this visit.
  }
});