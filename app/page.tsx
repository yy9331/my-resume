"use client";
import Header from "./components/Header";
import { Section } from "./components/Section";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ProjectsPersonal from "./components/ProjectsPersonal";
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

        {resumeData.personalProjects && (
          <Section title={language === 'en' ? 'Personal DApps' : '个人 DApp 项目'}>
            <ProjectsPersonal items={resumeData.personalProjects as unknown as { title: string; period?: string; summary: string; links?: { label: string; url: string }[]; details?: string[]; stack?: string[]; }[]} />
          </Section>
        )}

        <Section title={t.sections.education}>
          <ul className="list-disc pl-5 text-sm text-zinc-300">
            {resumeData.education.map((e) => (
              <li key={e.period} className="mb-1">
                <div className="flex flex-wrap items-center gap-1 text-sm">
                  <span className="text-amber-400 font-medium">{e.period}</span>
                  <span>·</span>
                  <span className="font-medium">{e.school}</span>
                  {e.major && (
                    <>
                      <span>·</span>
                      <span>{e.major}</span>
                    </>
                  )}
                  {e.degree && (
                    <>
                      <span>·</span>
                      <span className="text-green-400">{e.degree}</span>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <Sidebar />
    </div>
  );
}
