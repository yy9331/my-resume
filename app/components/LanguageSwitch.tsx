"use client";
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
      style={{
        background: language === 'zh' 
          ? 'linear-gradient(135deg, var(--card-bg) 0%, var(--card-border) 100%)'
          : 'linear-gradient(135deg, var(--card-border) 0%, var(--card-bg) 100%)',
        border: '1px solid var(--card-border)'
      }}
      aria-label="切换语言"
    >
      {/* 背景文字 - 使用绝对定位避免被滑块遮挡 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span 
          className="text-xs font-medium transition-opacity duration-300 absolute"
          style={{ 
            color: 'var(--muted)',
            opacity: language === 'en' ? 1 : 0,
            left: '20px'
          }}
        >
          EN
        </span>
        <span 
          className="text-xs font-medium transition-opacity duration-300 absolute"
          style={{ 
            color: 'var(--muted)',
            opacity: language === 'zh' ? 1 : 0,
            right: '21px'
          }}
        >
          中
        </span>
      </div>
      
      {/* 滑动指示器 */}
      <div
        className={`absolute h-4 w-4 rounded-full shadow-md transition-all duration-300 ease-in-out flex items-center justify-center ${
          language === 'zh' ? 'translate-x-6' : 'translate-x-1'
        }`}
        style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          zIndex: 10
        }}
      >
        <div 
          className="w-1 h-1 rounded-full"
          style={{ 
            background: language === 'zh' ? 'var(--heading)' : 'var(--muted)'
          }}
        />
      </div>
    </button>
  );
}
