"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import { resumeDataEn, resumeDataZh } from "../lib/i18n";
import Chip from "./Chip";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaTelegramPlane, FaDiscord, FaGithub, FaWhatsapp, FaWeixin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Header() {
  const { language } = useLanguage();
  const resumeData = language === 'en' ? resumeDataEn : resumeDataZh;

  return (
    <header className="relative overflow-hidden card rounded-xl p-4 md:p-6 z-1">
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full" style={{ background: 'rgba(251,191,36,.15)' }} />
      <div className="absolute -left-12 -bottom-12 h-64 w-64 rounded-full" style={{ background: 'rgba(234,88,12,.12)' }} />
      <div className="relative flex flex-col md:flex-row items-start gap-4 md:gap-6">
        <div className="flex-1">
          {/* 移动端：头像浮动到右侧，文本与 Chip 在左侧环绕 */}
          <div className="md:hidden relative float-right ml-3 mb-2 w-[96px] aspect-[3/4]">
            <Image
              src="/avatar.JPG"
              alt="头像"
              fill
              sizes="(max-width: 767px) 96px"
              className="rounded-xl border-2 border-amber-400/20 shadow-lg object-contain"
              priority
              quality={40}
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              {resumeData.name}
            </span>
            <span className="ml-0 md:ml-3 block md:inline text-sm md:text-base muted">{resumeData.title}</span>
          </h1>
          <div className="mt-2 text-sm muted flex flex-wrap gap-x-4 gap-y-1 items-center">
            <span className="flex items-center gap-1"><FiPhone /> {resumeData.contacts.phone}</span>
            <span className="flex items-center gap-1"><FiMapPin /> {resumeData.contacts.location}</span>
            {resumeData.contacts.emails.map((e) => (
              <Link key={e} href={`mailto:${e}`} className="custom-link flex items-center gap-1"><FiMail /> {e}</Link>
            ))}
            <Link href="https://t.me/yyi9331" target="_blank" className="custom-link flex items-center gap-1"><FaTelegramPlane />@yyi9331</Link>
            <Link href="https://wa.me/447763334391" target="_blank" className="custom-link flex items-center gap-1"><FaWhatsapp />+44 7763 334391</Link>
            <Link href="weixin://dl/chat?13143745768" target="_blank" className="custom-link flex items-center gap-1"><FaWeixin />WeChat</Link>
            <Link href="https://x.com/yy9331" target="_blank" className="custom-link flex items-center gap-1"><FaXTwitter />@yy9331</Link>
            <Link href="https://discord.com/users/yy9331_03247" target="_blank" className="custom-link flex items-center gap-1"><FaDiscord />@yy9331_03247</Link>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-3">
            {resumeData.links.map((l) => (
              <Link key={l.url} href={l.url} target="_blank" className="custom-link flex items-center gap-1">
                {l.label === 'GitHub' ? <FaGithub /> : null}
                {l.label}
              </Link>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap">
            <Chip>React</Chip>
            <Chip>Next.js</Chip>
            <Chip>Electron</Chip>
            <Chip>Node</Chip>
            <Chip>TypeScript</Chip>
            <Chip>wagmi</Chip>
            <Chip>viem</Chip>
            <Chip>ethers.js</Chip>
            <Chip>WalletConnect</Chip>
            <Chip>EIP-712</Chip>
          </div>
        </div>
        {/* 桌面端：右侧竖版头像（不裁切） */}
        <div className="hidden md:block flex-shrink-0 self-start md:self-auto">
          <div className="relative w-[120px] lg:w-[160px] aspect-[3/4]">
            <Image
              src="/avatar.JPG"
              alt="头像"
              fill
              sizes="(min-width: 768px) 160px, 120px"
              className="rounded-xl border-2 border-amber-400/20 shadow-lg object-contain"
              priority
              quality={40}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
