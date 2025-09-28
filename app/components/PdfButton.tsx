"use client";
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations, resumeDataZh } from "../lib/i18n";

export default function PdfButton() {
  const { language } = useLanguage();
  const t = translations[language];

  const onExport = () => {
    const previousTitle = document.title;

    // Only translate the existing title when current language is Chinese
    const translatedTitle = language === 'zh'
      ? `${resumeDataZh.name}, cv.zyzy.info, ${resumeDataZh.title}`
      : previousTitle;

    const restoreTitle = () => {
      document.title = previousTitle;
      window.removeEventListener('afterprint', restoreTitle);
    };

    window.addEventListener('afterprint', restoreTitle);
    document.title = translatedTitle;
    window.print();
    // Fallback in case 'afterprint' isn't fired in some environments
    setTimeout(restoreTitle, 1500);
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
