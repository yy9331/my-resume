"use client";
import React from "react";
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, ImageRun, HorizontalPositionAlign, VerticalPositionAlign, TextWrappingType, TextWrappingSide } from "docx";
import { saveAs } from "file-saver";
import { useLanguage } from "../contexts/LanguageContext";
import { translations, resumeDataZh, resumeDataEn } from "../lib/i18n";

export default function WordButton() {
  const { language } = useLanguage();
  const t = translations[language];
  const resumeData = language === 'en' ? resumeDataEn : resumeDataZh;

  const sanitize = (input: string) => {
    const removed = input.replace(/[\/:*?"<>|]/g, " ");
    return removed.replace(/\s+/g, " ").trim();
  };

  const generateWordDoc = async () => {
    const children: (Paragraph | Table)[] = [];

    // 加载头像图片
    let avatarImage: ImageRun | null = null;
    try {
      const imageResponse = await fetch('/avatar.JPG');
      const imageBlob = await imageResponse.blob();
      const imageArrayBuffer = await imageBlob.arrayBuffer();
      
      // 创建图片，设置合适的大小（宽度约 3cm，保持比例）
      // 设置为浮动图片，文字环绕为 Square，位置在右上角
      avatarImage = new ImageRun({
        data: imageArrayBuffer,
        transformation: {
          width: 113, // 约 3cm (1cm = 37.8 points)
          height: 151, // 保持 3:4 比例
        },
        floating: {
          horizontalPosition: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            relative: "rightMargin" as any,
            align: HorizontalPositionAlign.RIGHT,
            offset: 0, // 距离右边缘的距离（单位：twips，1cm = 567 twips）
          },
          verticalPosition: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            relative: "topMargin" as any,
            align: VerticalPositionAlign.TOP,
            offset: 0, // 距离顶部的距离
          },
          wrap: {
            type: TextWrappingType.SQUARE,
            side: TextWrappingSide.BOTH_SIDES,
          },
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any);
    } catch (error) {
      console.warn('Failed to load avatar image:', error);
    }

    // 第一个段落：包含浮动头像和标题文本
    // 浮动图片会在右上角，文本会自动环绕
    const firstParagraphChildren: (ImageRun | TextRun)[] = [];
    if (avatarImage) {
      firstParagraphChildren.push(avatarImage);
    }
    firstParagraphChildren.push(
      new TextRun({
        text: resumeData.name,
        bold: true,
        size: 32, // 标题大小
      })
    );
    
    children.push(
      new Paragraph({
        children: firstParagraphChildren,
        heading: HeadingLevel.TITLE,
        alignment: AlignmentType.LEFT,
        spacing: { after: 100 },
      })
    );

    // 职位
    children.push(
      new Paragraph({
        text: resumeData.title,
        alignment: AlignmentType.LEFT,
        spacing: { after: 200 },
      })
    );

    // 联系信息
    const contactInfo: string[] = [];
    contactInfo.push(resumeData.contacts.phone);
    if (resumeData.contacts.location) {
      contactInfo.push(resumeData.contacts.location);
    }
    contactInfo.push(...resumeData.contacts.emails);
    resumeData.links.forEach(link => {
      contactInfo.push(`${link.label}: ${link.url}`);
    });

    children.push(
      new Paragraph({
        text: contactInfo.join(" | "),
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
      })
    );

    // 职业概述
    children.push(
      new Paragraph({
        text: t.sections.overview,
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 200, after: 200 },
      })
    );

    resumeData.summary.forEach((item) => {
      children.push(
        new Paragraph({
          text: item,
          bullet: { level: 0 },
          spacing: { after: 100 },
        })
      );
    });

    // IT 技能与优势
    children.push(
      new Paragraph({
        text: t.sections.skills,
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 400, after: 200 },
      })
    );

    const skillsText: string[] = [];
    Object.entries(resumeData.skills).forEach(([key, values]) => {
      if (values && values.length > 0) {
        const skillLabel = language === 'en' 
          ? key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()
          : getSkillLabelZh(key);
        skillsText.push(`${skillLabel}: ${values.join(", ")}`);
      }
    });

    skillsText.forEach((skill) => {
      children.push(
        new Paragraph({
          text: skill,
          spacing: { after: 100 },
        })
      );
    });

    // 优势
    if (resumeData.strengths && resumeData.strengths.length > 0) {
      children.push(
        new Paragraph({
          text: language === 'en' ? "Strengths" : "优势",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 200 },
        })
      );

      resumeData.strengths.forEach((strength) => {
        children.push(
          new Paragraph({
            text: strength,
            bullet: { level: 0 },
            spacing: { after: 100 },
          })
        );
      });
    }

    // 项目经验
    if (resumeData.projects && resumeData.projects.length > 0) {
      children.push(
        new Paragraph({
          text: t.sections.projects,
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 400, after: 200 },
        })
      );

      resumeData.projects.forEach((project) => {
        const projectTitle = project.period 
          ? `${project.title} (${project.period})`
          : project.title;
        
        children.push(
          new Paragraph({
            text: projectTitle,
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 100 },
          })
        );

        children.push(
          new Paragraph({
            text: project.summary,
            spacing: { after: 100 },
          })
        );

        if (project.details && project.details.length > 0) {
          project.details.forEach((detail) => {
            children.push(
              new Paragraph({
                text: detail,
                bullet: { level: 0 },
                spacing: { after: 50 },
              })
            );
          });
        }

        if (project.stack && project.stack.length > 0) {
          children.push(
            new Paragraph({
              text: `Tech Stack: ${project.stack.join(", ")}`,
              spacing: { before: 100, after: 200 },
            })
          );
        }
      });
    }

    // 个人 DApp 项目
    if (resumeData.personalProjects && resumeData.personalProjects.length > 0) {
      children.push(
        new Paragraph({
          text: language === 'en' ? 'Personal DApps' : '个人 DApp 项目',
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 400, after: 200 },
        })
      );

      resumeData.personalProjects.forEach((project) => {
        const projectTitle = project.period 
          ? `${project.title} (${project.period})`
          : project.title;
        
        children.push(
          new Paragraph({
            text: projectTitle,
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 100 },
          })
        );

        children.push(
          new Paragraph({
            text: project.summary,
            spacing: { after: 100 },
          })
        );

        if (project.details && project.details.length > 0) {
          project.details.forEach((detail) => {
            children.push(
              new Paragraph({
                text: detail,
                bullet: { level: 0 },
                spacing: { after: 50 },
              })
            );
          });
        }

        if (project.stack && project.stack.length > 0) {
          children.push(
            new Paragraph({
              text: `Tech Stack: ${project.stack.join(", ")}`,
              spacing: { before: 100, after: 200 },
            })
          );
        }
      });
    }

    // 工作经历
    children.push(
      new Paragraph({
        text: t.sections.experience,
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 400, after: 200 },
      })
    );

    resumeData.experiences.forEach((exp) => {
      const companyRole = `${exp.company} - ${exp.role}`;
      children.push(
        new Paragraph({
          text: companyRole,
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 50 },
        })
      );

      children.push(
        new Paragraph({
          text: exp.period,
          spacing: { after: 100 },
        })
      );

      if (exp.description) {
        children.push(
          new Paragraph({
            text: exp.description,
            spacing: { after: 100 },
          })
        );
      }

      exp.bullets.forEach((bullet) => {
        children.push(
          new Paragraph({
            text: bullet,
            bullet: { level: 0 },
            spacing: { after: 50 },
          })
        );
      });

      if (exp.stack && exp.stack.length > 0) {
        children.push(
          new Paragraph({
            text: `Tech Stack: ${exp.stack.join(", ")}`,
            spacing: { before: 100, after: 200 },
          })
        );
      }
    });

    // 教育经历
    children.push(
      new Paragraph({
        text: t.sections.education,
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 400, after: 200 },
      })
    );

    resumeData.education.forEach((edu) => {
      const eduParts: string[] = [edu.school];
      if (edu.major) eduParts.push(edu.major);
      if (edu.degree) eduParts.push(edu.degree);
      
      children.push(
        new Paragraph({
          text: eduParts.join(" · "),
          bullet: { level: 0 },
          spacing: { after: 100 },
        })
      );
    });

    // 创建文档
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: children,
        },
      ],
    });

    // 生成并下载
    const blob = await Packer.toBlob(doc);
    const fileName = sanitize(
      language === 'zh'
        ? `${resumeDataZh.name} 简历.docx`
        : `${resumeDataEn.name} Resume.docx`
    );
    saveAs(blob, fileName);
  };

  const getSkillLabelZh = (key: string): string => {
    const labels: Record<string, string> = {
      frontend: "前端",
      dapp: "DApp",
      crossPlatform: "跨平台",
      testing: "测试",
      dataApi: "数据与 API",
      build: "构建工具",
      designNpm: "设计与 npm 包",
      backend: "后端",
      frameworks: "框架",
      db: "数据库",
      devops: "DevOps",
    };
    return labels[key] || key;
  };

  return (
    <button
      onClick={generateWordDoc}
      className="inline-flex items-center rounded-md px-3 py-1.5 text-sm no-print cursor-pointer transition-all hover:opacity-80"
      style={{
        color: 'var(--heading)',
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)'
      }}
    >
      {t.buttons.exportWord}
    </button>
  );
}

