"use client";
import React from "react";
import Chip from "./Chip";
import { useLanguage } from "../contexts/LanguageContext";

export type SkillKey =
  | "frontend"
  | "crossPlatform"
  | "testing"
  | "dataApi"
  | "build"
  | "designNpm"
  | "backend"
  | "frameworks"
  | "db"
  | "devops";

export type SkillGroups = Record<SkillKey, string[]>;

export default function Skills({ data }: { data: SkillGroups }) {
  const { language } = useLanguage();

  const skillLabels = {
    en: {
      frontend: "Frontend",
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
    <div className="grid md:grid-cols-4 gap-4">
      {groups.map((g) => (
        <div key={`group-${g.key}`} className="card p-4">
          <h4 className="text-sm font-semibold" style={{ color: 'var(--heading)' }}>{g.label}</h4>
          <div className="mt-2 flex flex-wrap">
            {data[g.key].map((s: string, idx: number) => (
              <Chip key={`${g.key}-${s}-${idx}`} i={idx}>{s}</Chip>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
