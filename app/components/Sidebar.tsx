"use client";
import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../lib/i18n";
import ThemeToggle from "./ThemeToggle";
import PdfButton from "./PdfButton";
import LanguageSwitch from "./LanguageSwitch";
import WalletConnect from "./WalletConnect";

export default function Sidebar() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[language];

  return (
    <>
      {/* 侧边栏触发按钮 */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-50 p-3 rounded-full shadow-lg no-print cursor-pointer"
        style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
          color: 'var(--heading)'
        }}
        aria-label={t.sidebar.settings}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      </button>

      {/* 侧边栏遮罩 */}
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-white/10 dark:bg-black/20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 侧边栏内容 */}
      <div
        className={`fixed top-0 right-0 h-full w-80 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          background: 'var(--card-bg)',
          borderLeft: '1px solid var(--card-border)',
          boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.15)'
        }}
      >
        <div className="p-6 h-full overflow-y-auto">
          {/* 侧边栏头部 */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold" style={{ color: 'var(--heading)' }}>
              {t.sidebar.settings}
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full cursor-pointer transition-colors"
              style={{ 
                color: 'var(--heading)',
                background: 'transparent',
                border: '1px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--card-bg)';
                e.currentTarget.style.borderColor = 'var(--card-border)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'transparent';
              }}
              aria-label={t.sidebar.close}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          {/* 设置选项 */}
          <div className="space-y-4">
            {/* 主题切换 */}
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium" style={{ color: 'var(--heading)' }}>
                {t.sidebar.theme}
              </h3>
              <ThemeToggle />
            </div>

            {/* 语言切换 */}
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium" style={{ color: 'var(--heading)' }}>
                {t.sidebar.language}
              </h3>
              <LanguageSwitch />
            </div>

            {/* PDF导出 */}
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium" style={{ color: 'var(--heading)' }}>
                {t.sidebar.export}
              </h3>
              <PdfButton />
            </div>

            {/* 钱包连接 */}
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium" style={{ color: 'var(--heading)' }}>
                {t.sidebar.wallet}
              </h3>
              <WalletConnect />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
