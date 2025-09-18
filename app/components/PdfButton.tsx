"use client";
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../lib/i18n";

export default function PdfButton() {
  const { language } = useLanguage();
  const t = translations[language];

  const onExport = () => {
    window.print();
  };

  return (
    <button
      onClick={onExport}
      className="inline-flex items-center rounded-md px-3 py-1.5 text-sm no-print cursor-pointer"
      style={{
        color: 'var(--heading)',
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)'
      }}
    >
      {t.buttons.exportPdf}
    </button>
  );
}
