"use client";
import Header from "./components/Header";
import { Section } from "./components/Section";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Sidebar from "./components/Sidebar";
import { useLanguage } from "./contexts/LanguageContext";
import { resumeDataEn, resumeDataZh, translations } from "./lib/i18n";

export default function Home() {
  const { language } = useLanguage();
  const resumeData = language === 'en' ? resumeDataEn : resumeDataZh;
  const t = translations[language];

  return (
    <div className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <div className="mx-auto max-w-4xl px-5 py-8" id="resume-root">
        <Header />

        <Section title={t.sections.overview}>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {resumeData.summary.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </Section>

        <Section title={t.sections.skills}>
          <Skills data={resumeData.skills} />
        </Section>

        <Section title={t.sections.projects}>
          <Projects items={resumeData.projects} />
        </Section>

        <Section title={t.sections.experience}>
          <Experience items={resumeData.experiences} />
        </Section>

        <Section title={t.sections.education}>
          <ul className="list-disc pl-5 text-sm text-zinc-300">
            {resumeData.education.map((e) => (
              <li key={e.period}>
                {e.period} · {e.school} {e.major ? `· ${e.major}` : ""}
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <Sidebar />
    </div>
  );
}
