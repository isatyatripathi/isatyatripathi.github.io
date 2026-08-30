"use client";

import { Icon } from "@/components/Icon";

export function ThemeToggle() {
  const toggleTheme = () => {
    const current = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("satya-theme", next);
  };

  return (
    <button
      data-theme-toggle
      className="icon-button theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <Icon name="fa-regular fa-sun" className="theme-icon theme-icon-sun" />
      <Icon name="fa-regular fa-moon" className="theme-icon theme-icon-moon" />
    </button>
  );
}
