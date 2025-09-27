import React from "react";
import type { ResumeDataI18n } from "../lib/i18n";
import Link from "next/link";
import Chip from "./Chip";

type ProjectItem = ResumeDataI18n["projects"][number];

export default function Projects({ items }: { items: ProjectItem[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {items.map((p) => (
        <div key={p.title} className="card p-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-base font-semibold">{p.title}</h3>
            {p.period && <span className="text-xs muted">{p.period}</span>}
          </div>
          {p.stack && (
            <div className="mt-2 flex flex-wrap">
              {p.stack.map((s, idx) => (
                <Chip key={s} i={idx}>{s}</Chip>
              ))}
            </div>
          )}
          <p className="mt-2 text-sm">{p.summary}</p>
          {p.details && (
            <ul className="mt-2 list-disc pl-5 text-sm space-y-1 marker:text-amber-400">
              {p.details.map((d, i) => {
                const isSection = /[:：]$/.test(d.trim());
                const isSub = d.trim().startsWith("- ");
                const text = isSub ? d.trim().slice(2) : d;
                return (
                  <li
                    key={i}
                    className={isSection ? "list-none mt-2 font-semibold" : isSub ? "ml-4" : undefined}
                  >
                    {text}
                  </li>
                );
              })}
            </ul>
          )}
          {p.links && (
            <div className="mt-3 flex flex-wrap gap-3">
              {p.links.map((l) => (
                <Link key={l.url} href={l.url} target="_blank" className="text-amber-400 hover:text-amber-300 underline underline-offset-4">
                  {l.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
