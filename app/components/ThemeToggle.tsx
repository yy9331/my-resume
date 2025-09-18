"use client";
import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as "dark" | "light") || "dark";
    setTheme(saved);
    document.documentElement.dataset.theme = saved;
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggle}
      className="no-print inline-flex items-center rounded-md px-3 py-1.5 text-sm"
      style={{
        color: 'var(--heading)',
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)'
      }}
      aria-label="切换主题"
    >
      {theme === "dark" ? "浅色主题" : "深色主题"}
    </button>
  );
}
