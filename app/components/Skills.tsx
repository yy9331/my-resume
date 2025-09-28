"use client";
import React from "react";
import Chip from "./Chip";
import { useLanguage } from "../contexts/LanguageContext";

export type SkillKey =
  | "frontend"
  | "web3"
  | "crossPlatform"
  | "testing"
  | "dataApi"
  | "build"
  | "designNpm"
  | "backend"
  | "frameworks"
  | "db"
  | "devops";

// Allow data to provide either `web3` or `dapp` key (backward compatible)
export type SkillGroups = Omit<Record<SkillKey, string[]>, 'web3'> & {
  web3?: string[];
  dapp: string[];
};

export default function Skills({ data }: { data: SkillGroups }) {
  const { language } = useLanguage();

  const skillLabels = {
    en: {
      frontend: "Frontend",
      web3: "DApp",
      crossPlatform: "Cross-platform",
      testing: "Testing",
      dataApi: "Data/API",
      build: "Build",
      designNpm: "Components & Packages",
      backend: "Backend Languages",
      frameworks: "Frameworks",
      db: "Databases",
      devops: "DevOps"
    },
    zh: {
      frontend: "前端",
      web3: "DApp",
      crossPlatform: "跨端",
      testing: "测试",
      dataApi: "数据/API",
      build: "构建",
      designNpm: "组件与包",
      backend: "后端语言",
      frameworks: "框架",
      db: "数据库",
      devops: "DevOps"
    }
  };

  const groups: { label: string; key: SkillKey }[] = [
    // 将 Web3 放在第一行，并在中大屏上独占一行
    { label: skillLabels[language].web3, key: "web3" },
    { label: skillLabels[language].frontend, key: "frontend" },
    { label: skillLabels[language].crossPlatform, key: "crossPlatform" },
    { label: skillLabels[language].testing, key: "testing" },
    { label: skillLabels[language].dataApi, key: "dataApi" },
    { label: skillLabels[language].build, key: "build" },
    { label: skillLabels[language].designNpm, key: "designNpm" },
    { label: skillLabels[language].backend, key: "backend" },
    { label: skillLabels[language].frameworks, key: "frameworks" },
    { label: skillLabels[language].db, key: "db" },
    { label: skillLabels[language].devops, key: "devops" }
  ];
  return (
    <div className="columns-1 md:columns-3 gap-4 [column-fill:_balance]" data-print-slim="skills">
      {groups.map((g) => (
        <div
          key={`group-${g.key}`}
          className="card p-4 mb-4 inline-block w-full"
          style={{ breakInside: 'avoid' }}
        >
          <h4 className="text-sm font-semibold" style={{ color: 'var(--heading)' }}>{g.label}</h4>
          <div className="mt-2 flex flex-wrap">
            {(() => {
              const record = data as unknown as Record<string, string[]>;
              const list = record[g.key] ?? (g.key === 'web3' ? record['dapp'] : undefined) ?? [];
              return list;
            })().map((s: string, idx: number) => (
              <Chip key={`${g.key}-${s}-${idx}`} i={idx}>{s}</Chip>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
