import Header from "./components/Header";
import { Section } from "./components/Section";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import PdfButton from "./components/PdfButton";
import { resumeData } from "./lib/resume";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <div className="mx-auto max-w-4xl px-5 py-8" id="resume-root">
        <Header />

        <Section title="职业概述">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {resumeData.summary.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </Section>

        <Section title="IT 技能与优势">
          <Skills data={resumeData.skills} />
        </Section>

        <Section title="项目经验与成果">
          <Projects items={resumeData.projects} />
        </Section>

        <Section title="工作经历">
          <Experience items={resumeData.experiences} />
        </Section>

        <Section title="教育经历">
          <ul className="list-disc pl-5 text-sm text-zinc-300">
            {resumeData.education.map((e) => (
              <li key={e.period}>
                {e.period} · {e.school} {e.major ? `· ${e.major}` : ""}
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <div className="sticky bottom-4 w-full no-print">
        <div className="mx-auto max-w-4xl px-5 flex justify-end">
          <PdfButton />
        </div>
      </div>
    </div>
  );
}
