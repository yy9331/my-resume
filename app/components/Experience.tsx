import React from "react";
import { ExperienceItem } from "../lib/resume";
import Chip from "./Chip";

export default function Experience({ items }: { items: ExperienceItem[] }) {
  return (
    <ul className="space-y-5">
      {items.map((exp) => (
        <li key={`${exp.company}-${exp.period}`} className="card p-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-base font-semibold">
              {exp.company}
              <span className="ml-2 text-xs muted">{exp.role}</span>
            </h3>
            <span className="text-xs muted">{exp.period}</span>
          </div>
          {exp.stack && (
            <div className="mt-2 flex flex-wrap">
              {exp.stack.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          )}
          <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
            {exp.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
