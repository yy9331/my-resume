import React from "react";
import Chip from "./Chip";

export default function Skills({ data }: { data: any }) {
  const groups: { label: string; key: keyof typeof data }[] = [
    { label: "前端", key: "frontend" },
    { label: "跨端", key: "crossPlatform" },
    { label: "测试", key: "testing" },
    { label: "数据/API", key: "dataApi" },
    { label: "构建", key: "build" },
    { label: "组件与包", key: "designNpm" },
    { label: "后端语言", key: "backend" },
    { label: "框架", key: "frameworks" },
    { label: "数据库", key: "db" },
    { label: "DevOps", key: "devops" }
  ];
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {groups.map((g) => (
        <div key={g.key} className="card p-4">
          <h4 className="text-sm font-semibold text-zinc-200">{g.label}</h4>
          <div className="mt-2 flex flex-wrap">
            {data[g.key].map((s: string, idx: number) => (
              <Chip key={s} i={idx}>{s}</Chip>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
