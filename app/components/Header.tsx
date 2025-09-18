import React from "react";
import Link from "next/link";
import { resumeData } from "../lib/resume";
import Chip from "./Chip";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="relative overflow-hidden card rounded-xl p-6">
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full" style={{ background: 'rgba(251,191,36,.15)' }} />
      <div className="absolute -left-12 -bottom-12 h-64 w-64 rounded-full" style={{ background: 'rgba(234,88,12,.12)' }} />
      <div className="relative">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
          <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            {resumeData.name}
          </span>
          <span className="ml-3 text-base muted">{resumeData.title}</span>
        </h1>
        <div className="mt-2 text-sm muted">
          <span className="mr-4">📱 {resumeData.contacts.phone}</span>
          {resumeData.contacts.emails.map((e) => (
            <span key={e} className="mr-3">✉️ {e}</span>
          ))}
          <span>📍 {resumeData.contacts.location}</span>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          {resumeData.links.map((l) => (
            <Link key={l.url} href={l.url} target="_blank" className="custom-link">
              {l.label}
            </Link>
          ))}
          <div className="ml-auto no-print"><ThemeToggle /></div>
        </div>

        <div className="mt-4 flex flex-wrap">
          <Chip>React</Chip>
          <Chip>Next.js</Chip>
          <Chip>Electron</Chip>
          <Chip>Node</Chip>
          <Chip>TypeScript</Chip>
        </div>
      </div>
    </header>
  );
}
