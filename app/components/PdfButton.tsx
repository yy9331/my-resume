"use client";
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations, resumeDataZh, resumeDataEn } from "../lib/i18n";

export default function PdfButton() {
  const { language } = useLanguage();
  const t = translations[language];

  const onExport = () => {
    const previousTitle = document.title;

    // Build language-aware, sanitized title to influence the saved PDF filename
    const sanitize = (input: string) => {
      // Replace characters not allowed in file names across OS
      const removed = input.replace(/[\/:*?"<>|]/g, " ");
      // Collapse multiple spaces and trim
      return removed.replace(/\s+/g, " ").trim();
    };

    const siteLabel = "resume.zyzy.info";
    const rawTitle = language === 'zh'
      ? `${resumeDataZh.name} ${siteLabel} ${resumeDataZh.title}`
      : `${resumeDataEn.name} ${siteLabel} ${resumeDataEn.title}`;

    const translatedTitle = sanitize(rawTitle) || previousTitle;

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
