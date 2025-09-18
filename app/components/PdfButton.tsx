"use client";
import React from "react";

export default function PdfButton() {
  const onExport = () => {
    window.print();
  };

  return (
    <button
      onClick={onExport}
      className="inline-flex items-center rounded-md px-3 py-1.5 text-sm no-print"
      style={{
        color: 'var(--heading)',
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)'
      }}
    >
      导出 PDF
    </button>
  );
}
