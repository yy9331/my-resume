import React from "react";

const palette = [
  { bg: "var(--chip-bg-1)", border: "var(--chip-border-1)", color: "var(--chip-text-1)" },
  { bg: "var(--chip-bg-2)", border: "var(--chip-border-2)", color: "var(--chip-text-2)" },
  { bg: "var(--chip-bg-3)", border: "var(--chip-border-3)", color: "var(--chip-text-3)" },
];

export default function Chip({ children, i = 0 }: { children: React.ReactNode; i?: number }) {
  const tone = palette[i % palette.length];
  return (
    <span
      style={{ background: tone.bg, borderColor: tone.border, color: tone.color }}
      className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs mr-2 mb-2"
    >
      {children}
    </span>
  );
}
