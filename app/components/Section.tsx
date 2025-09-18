"use client";
import React from "react";

export const Section: React.FC<{ id?: string; title: string; children: React.ReactNode }>
= ({ id, title, children }) => {
  return (
    <section id={id} className="py-6">
      <h2 className="text-xl md:text-2xl font-bold tracking-wide heading">
        {title}
      </h2>
      <div className="mt-3 border-l" style={{ borderColor: 'var(--card-border)' }}>
        <div className="pl-4">
          {children}
        </div>
      </div>
    </section>
  );
};
