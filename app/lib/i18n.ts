export type Language = 'en' | 'zh';

export interface ResumeDataI18n {
  name: string;
  title: string;
  contacts: { phone: string; emails: string[]; location?: string };
  links: { label: string; url: string }[];
  summary: string[];
  strengths: string[];
  experiences: {
    period: string;
    company: string;
    role: string;
    description?: string;
    bullets: string[];
    stack?: string[];
  }[];
  skills: {
    frontend: string[];
    crossPlatform: string[];
    testing: string[];
    dataApi: string[];
    build: string[];
    designNpm: string[];
    backend: string[];
    frameworks: string[];
    db: string[];
    devops: string[];
  };
  projects: {
    title: string;
    period?: string;
    summary: string;
    links?: { label: string; url: string }[];
    details?: string[];
    stack?: string[];
  }[];
  education: { period: string; school: string; major?: string }[];
}

export const resumeDataEn: ResumeDataI18n = {
  name: "Yu Yi",
  title: "Full Stack Engineer (Next.js/Node/Electron/Angular)",
  contacts: {
    phone: "13143745768",
    emails: ["yuyi.gz@163.com", "yuyi.gz@gmail.com"],
    location: "Originally from Shantou, currently in Guangzhou"
  },
  links: [
    { label: "Tech Blog", url: "https://zyzy.info" },
    { label: "GitHub", url: "https://github.com/yy9331" }
  ],
  summary: [
    "8+ years of full-stack development experience, deep expertise in React ecosystem, with experience in designing and publishing public npm packages.",
    "Proficient in Electron desktop development, Node/Next.js backend; practical experience with Java and Scala stream programming.",
    "Served Fortune 500 companies, capable of English meetings, communication, presentations, and written correspondence."
  ],
  strengths: [
    "Rapid response and refactoring capabilities: Can combine AI suggestions for frontend component refactoring and optimization",
    "Excellent collaboration: Independent communication, quick adaptation to different microservice frontend stacks and interaction changes",
    "Engineering accumulation: Multiple reusable components, significantly improving team delivery efficiency"
  ],
  experiences: [
    {
      period: "2025 - Present",
      company: "Multiple Contract/Wallet/Blockchain Projects",
      role: "Full Stack Developer",
      bullets: [
        "Responsible for integrated delivery from smart contracts to frontend and backend, see Project Experience & Results for details"
      ]
    },
    {
      period: "2024.06 – 2025.06",
      company: "Guangzhou Friendship Foreign Service Co., Ltd. · Cathay Pacific CXA Project Team",
      role: "Frontend Developer",
      bullets: [
        "Rapid response and iteration, developed frontend common library",
        "Combined AI for refactoring and optimizing existing component code",
        "Independent communication and component refactoring; adapted to new interactions after UX changes",
        "Quick switching between Angular/React stacks in microservice architecture"
      ],
      stack: ["React", "Angular", "Java Microservices", "MongoDB", "AEM"]
    },
    {
      period: "2022.06 – 2024.02",
      company: "Symbio (China) Co., Ltd. · HSBC MSS-FICC-MKTY Project Team",
      role: "Full Stack Developer",
      bullets: [
        "Independent frontend and backend development to production; multiple solution comparisons and optimal solution communication",
        "Gradually modularized requirements; packaged Export Excel / Date Picker and other plugins",
        "Optimization and packaging reduced approximately 40% of duplicate code; improved efficiency",
        "Quickly mastered Electron, Scala, SQL and implemented",
        "Scala for app data request layer; SQL task optimization; Oracle and MongoDB integration"
      ],
      stack: ["Electron", "React Hooks", "Next.js", "Scala", "SQL", "Java Microservices", "MongoDB"]
    },
    {
      period: "2021.12 – 2022.06",
      company: "Zebra Network Technology Co., Ltd. · Vehicle Industry Digitalization",
      role: "Full Stack Developer",
      bullets: [
        "Overcame frontend animations and cross-platform integration (card flipping, canvas coloring)",
        "Extracted common components and packaged as npm packages; micro-frontend qiankun practice",
        "Agile iteration with high-standard interaction and visual implementation"
      ],
      stack: ["React", "Rax", "Umi", "qiankun", "MongoDB"]
    },
    {
      period: "2021.07 – 2021.12",
      company: "Yunxi Technology (Guangzhou) Co., Ltd. · Pharmaceutical Business Department",
      role: "Frontend Team Lead",
      bullets: [
        "Established frontend architecture and code standards; common component packaging and optimization; technical sharing",
        "Progress and resource control; new employee training; efficient coordination with clients/product/UI"
      ]
    },
    {
      period: "2019.09 – 2021.07",
      company: "Wistron Software (Wuhan) Co., Ltd. / Chinasoft International Co., Ltd. · HSBC GTRF-CMB",
      role: "Frontend Developer",
      bullets: ["Responsible for module development and refactoring, automated testing and engineering collaboration"]
    },
    {
      period: "2018.12 – 2019.09",
      company: "Isoftstone Information Technology (Group) Co., Ltd. · Huawei Hardware Testing Digitalization",
      role: "Frontend Developer",
      bullets: ["Data visualization and report export modules, test result backfill and statistics modules"]
    },
    {
      period: "2017.08 – 2018.12",
      company: "Guangzhou Pugu Technology Co., Ltd.",
      role: "Frontend Developer",
      bullets: []
    },
    {
      period: "2014.08 – 2017.08",
      company: "Gongcheng Management Consulting Co., Ltd.",
      role: "Bidding and Procurement Data Analysis",
      bullets: []
    },
    {
      period: "2007.07 – 2014.07",
      company: "Zhongjie Communication Co., Ltd.",
      role: "Bidding and Procurement Data Analysis",
      bullets: []
    }
  ],
  skills: {
    frontend: ["TypeScript", "ES6+", "React + Hooks", "Next.js", "Vue", "Angular"],
    crossPlatform: ["Electron", "React Native", "Mini Programs"],
    testing: ["BDD(Jest & Enzyme)", "e2e(Cypress)"],
    dataApi: ["React Query", "GraphQL"],
    build: ["Webpack", "npm", "Vite", "Rollup"],
    designNpm: ["Component Design", "Npm Package Design & Debugging"],
    backend: ["Scala", "Java", "Python", "SQL"],
    frameworks: ["Next.js", "Spring Boot", "Django"],
    db: ["Oracle", "MongoDB"],
    devops: ["Jenkins", "Docker"]
  },
  projects: [
    {
      title: "Personal Tech Blog (with Login Auth, Comments & MCP Service)",
      summary: "Record daily tech insights; self-developed MCP service integrated with AI; supports Markdown editing and comments.",
      links: [
        { label: "Website", url: "https://zyzy.info" },
        { label: "MCP Service Repo", url: "https://github.com/yy9331/blog-mcp-server" }
      ],
      stack: ["Next.js", "Postgres", "Vercel", "Supabase Auth"]
    },
    {
      title: "Decentralized Exchange Pyro Wing DEX (Sepolia)",
      summary: "End-to-end development from factory contracts, routing to frontend and backend, providing liquidity and 24h trading volume statistics.",
      links: [
        { label: "DEX", url: "https://pws.zyzy.info" },
        { label: "Contract Repo", url: "https://github.com/yy9331/pyro-wing-swap-v2" },
        { label: "Frontend/Backend Repo", url: "https://github.com/yy9331/pyro-wing-swap-fe" }
      ],
      details: [
        "Factory Contract: 0x36473449F68df1784b3bcBcbB315Fc02D7DC89fA",
        "Router Contract: 0x4aA798Ea712bfAF21D6109013bb112E8F8AcC2ef"
      ]
    },
    {
      title: "Decentralized Staking Pyro Wing Stake (Sepolia)",
      summary: "YY Token staking mining; includes contract and frontend implementation.",
      links: [
        { label: "Stake", url: "http://stake.zyzy.info" },
        { label: "Solidity Repo", url: "https://github.com/yy9331/yy-eth-stake" }
      ],
      details: [
        "YY Token: 0x86c52d5fAFD11e88358CE2bf1a47cB5bB9db0D4D",
        "Stake Contract: 0xcbE2a64e27bf8b0fdd024e389CfC0B82751A9181"
      ]
    },
    {
      title: "Pyro Wing Wallet",
      summary: "Basic wallet functionality including transfer, receive, mint and add tokens.",
      links: [ { label: "GitHub", url: "https://github.com/yy9331/pyro-wing-wallet" } ]
    },
    {
      title: "Cathay Pacific Cathay Agent",
      period: "2024.06 – 2025.06",
      summary: "Margin booking query and management for commercial clients; parallel delivery across multiple frontend stacks.",
      stack: ["React", "Angular", "Java Microservices", "MongoDB", "AEM"]
    },
    {
      title: "HSBC MSS-FICC-MKTY Desktop Application",
      period: "2022.06 – 2024.02",
      summary: "Monitor foreign exchange/cash/bond trading capital flows; multi-data source aggregation and report generation.",
      stack: ["Electron", "React", "Next.js", "Scala", "SQL", "MongoDB"]
    },
    {
      title: "Hongqi Auto In-Car Mini Program 2022 Annual Series Events",
      summary: "High-intensity marketing campaign animations and interactions (card flipping, coloring, animations, etc.).",
      stack: ["Umi", "canvas", "antd-mobile", "React Native", "Rax", "dva", "MongoDB"]
    },
    {
      title: "Dashenlin Pharmaceutical Group Marketing Platform",
      summary: "DM marketing/returns/profit sharing/marketing rules modules; engineering and drag-and-drop poster challenges.",
      stack: ["React", "Mobx", "webpack", "ant design"]
    },
    {
      title: "HSBC WPB-CHANNELS-PAYMENT",
      period: "2020.05 – 2021.07",
      summary: "Private banking large transaction capital flow display and system integration; frontend efficiency and quality improvement.",
      stack: ["React", "Hooks", "Webpack", "BDD Automated Testing"]
    },
    {
      title: "Huawei HDP-TSP Hardware Testing System",
      period: "2018.05 – 2019.09",
      summary: "Data dashboard, result backfill, report export and statistics modules; full CI/CD pipeline setup.",
      stack: ["Vue", "Angular", "Vuex", "RxJS", "ECharts"]
    }
  ],
  education: [
    { period: "2003.09 – 2007.07", school: "Guangdong University of Foreign Studies", major: "Business Administration" }
  ]
};

export const resumeDataZh: ResumeDataI18n = {
  name: "余翼",
  title: "全栈工程师（ Next.js/ Node / Electron / Angular ）",
  contacts: {
    phone: "13143745768",
    emails: ["yuyi.gz@163.com", "yuyi.gz@gmail.com"],
    location: "籍贯汕头，现居广州"
  },
  links: [
    { label: "技术博客", url: "https://zyzy.info" },
    { label: "GitHub", url: "https://github.com/yy9331" }
  ],
  summary: [
    "全栈开发8年+经验，深入 React 生态，具备公共 npm package 设计与发布经验。",
    "熟悉 Electron 桌面端、Node/Next.js 后端；对 Java、Scala 流式编程有实践。",
    "服务过世界500强，能英文会议、交流、present与书面往来。"
  ],
  strengths: [
    "快速响应与重构能力：能结合 AI 建议进行前端组件重构与优化",
    "良好协作：独立沟通、快速适配不同微服务前端栈与交互变化",
    "工程化沉淀：多处封装复用，显著提升团队交付效率"
  ],
  experiences: [
    {
      period: "2025 - 至今",
      company: "多项合约/钱包/区块链项目",
      role: "全栈开发",
      bullets: [
        "负责从智能合约到前后端的一体化交付，详见项目经验与成果"
      ]
    },
    {
      period: "2024.06 – 2025.06",
      company: "广州市友谊对外服务有限公司 · 国泰航空 CXA 项目组",
      role: "前端开发",
      bullets: [
        "快速响应并迭代，编写前端 common library",
        "结合 AI 重构与优化现有组件代码",
        "独立沟通并完成组件重构；适配更换 UX 后的新交互",
        "微服务架构下能在 Angular/React 多栈间快速切换"
      ],
      stack: ["React", "Angular", "Java 微服务", "MongoDB", "AEM"]
    },
    {
      period: "2022.06 – 2024.02",
      company: "信必优（中国）有限公司 · 汇丰银行 MSS-FICC-MKTY 项目组",
      role: "全栈开发",
      bullets: [
        "前后端独立开发至上线；多方案对比并沟通最优解",
        "将需求逐步插件化；封装 Export Excel / Date Picker 等插件",
        "优化与封装减少约40%重复代码；提升效率",
        "快速上手 Electron、Scala、SQL 并落地",
        "Scala 编写 App 数据请求层；调优 SQL 任务；Oracle 与 MongoDB 并用"
      ],
      stack: ["Electron", "React Hooks", "Next.js", "Scala", "SQL", "Java 微服务", "MongoDB"]
    },
    {
      period: "2021.12 – 2022.06",
      company: "斑马网络技术有限公司 · 车机产业数字化",
      role: "全栈开发",
      bullets: [
        "攻克前端动效与跨端接入（卡牌翻转、canvas 填色）",
        "抽离公用组件并沉淀为 npm 包；微前端 qiankun 实践",
        "敏捷迭代，高标准交互与视觉落地"
      ],
      stack: ["React", "Rax", "Umi", "qiankun", "MongoDB"]
    },
    {
      period: "2021.07 – 2021.12",
      company: "云徙科技（广州）有限公司 · 医药业务部",
      role: "前端组长",
      bullets: [
        "制定前端架构与代码规范；通用组件封装与优化；技术分享",
        "把控进度与资源；培训新人；高效对接业主/产品/UI"
      ]
    },
    {
      period: "2019.09 – 2021.07",
      company: "纬创软件（武汉）有限公司 / 中软国际有限公司 · 汇丰银行 GTRF-CMB",
      role: "前端开发",
      bullets: ["负责模块开发与重构、自动化测试与工程化协作"]
    },
    {
      period: "2018.12 – 2019.09",
      company: "软通动力信息技术（集团）有限公司 · 华为硬件测试数字化",
      role: "前端开发",
      bullets: ["数据可视化与报告导出模块、用例结果回填与统计模块等"]
    },
    {
      period: "2017.08 – 2018.12",
      company: "广州普谷科技有限公司",
      role: "前端开发工程师",
      bullets: []
    },
    {
      period: "2014.08 – 2017.08",
      company: "公诚管理咨询有限公司",
      role: "招标采购数据分析",
      bullets: []
    },
    {
      period: "2007.07 – 2014.07",
      company: "中捷通信有限公司",
      role: "招标采购数据分析",
      bullets: []
    }
  ],
  skills: {
    frontend: ["TypeScript", "ES6+", "React + Hooks", "Next.js", "Vue", "Angular"],
    crossPlatform: ["Electron", "React Native", "小程序"],
    testing: ["BDD(Jest & Enzyme)", "e2e(Cypress)"],
    dataApi: ["React Query", "GraphQL"],
    build: ["Webpack", "npm", "Vite", "Rollup"],
    designNpm: ["组件设计", "Npm package 设计与调试"],
    backend: ["Scala", "Java", "Python", "SQL"],
    frameworks: ["Next.js", "Spring Boot", "Django"],
    db: ["Oracle", "MongoDB"],
    devops: ["Jenkins", "Docker"]
  },
  projects: [
    {
      title: "个人技术博客（含登录鉴权与评论、MCP 服务）",
      summary: "记录技术日常；自研 MCP 服务集成 AI；支持 Markdown 编辑与评论。",
      links: [
        { label: "站点", url: "https://zyzy.info" },
        { label: "MCP 服务仓库", url: "https://github.com/yy9331/blog-mcp-server" }
      ],
      stack: ["Next.js", "Postgres", "Vercel", "Supabase Auth"]
    },
    {
      title: "去中心化交易所 Pyro Wing DEX（Sepolia）",
      summary: "从工厂合约、路由到前后端一体化搭建，提供流动性与24h交易量统计。",
      links: [
        { label: "DEX", url: "https://pws.zyzy.info" },
        { label: "合约仓库", url: "https://github.com/yy9331/pyro-wing-swap-v2" },
        { label: "前后端仓库", url: "https://github.com/yy9331/pyro-wing-swap-fe" }
      ],
      details: [
        "工厂合约: 0x36473449F68df1784b3bcBcbB315Fc02D7DC89fA",
        "路由合约: 0x4aA798Ea712bfAF21D6109013bb112E8F8AcC2ef"
      ]
    },
    {
      title: "去中心化抵押 Pyro Wing Stake（Sepolia）",
      summary: "YY Token 抵押挖矿；含合约与前端实现。",
      links: [
        { label: "Stake", url: "http://stake.zyzy.info" },
        { label: "Solidity 仓库", url: "https://github.com/yy9331/yy-eth-stake" }
      ],
      details: [
        "YY Token: 0x86c52d5fAFD11e88358CE2bf1a47cB5bB9db0D4D",
        "Stake 合约: 0xcbE2a64e27bf8b0fdd024e389CfC0B82751A9181"
      ]
    },
    {
      title: "Pyro Wing Wallet（钱包）",
      summary: "具备转账、接收、铸造与添加代币等基础功能。",
      links: [ { label: "GitHub", url: "https://github.com/yy9331/pyro-wing-wallet" } ]
    },
    {
      title: "国泰航空 Cathay Agent",
      period: "2024.06 – 2025.06",
      summary: "面向商用客户的保证金订票查询与管理；多前端栈并行交付。",
      stack: ["React", "Angular", "Java 微服务", "MongoDB", "AEM"]
    },
    {
      title: "汇丰银行 MSS-FICC-MKTY 桌面应用",
      period: "2022.06 – 2024.02",
      summary: "监测外汇/现金/债权交易资金流；多数据源汇总与报表生成。",
      stack: ["Electron", "React", "Next.js", "Scala", "SQL", "MongoDB"]
    },
    {
      title: "红旗汽车车机小程序 2022 年度系列活动",
      summary: "高强度营销活动的动效与互动实现（翻卡、填色、动图等）。",
      stack: ["Umi", "canvas", "antd-mobile", "React Native", "Rax", "dva", "MongoDB"]
    },
    {
      title: "大参林医药集团营销中台",
      summary: "负责 DM 营销/退货/分润/营销规则等模块；工程化与拖拽海报等难点。",
      stack: ["React", "Mobx", "webpack", "ant design"]
    },
    {
      title: "汇丰银行 WPB-CHANNELS-PAYMENT",
      period: "2020.05 – 2021.07",
      summary: "对私银行大额业务资金流展示与系统对接；前端效率与质量提升。",
      stack: ["React", "Hooks", "Webpack", "BDD 自动化测试"]
    },
    {
      title: "华为 HDP-TSP 硬件测试系统",
      period: "2018.05 – 2019.09",
      summary: "数据看板、结果回填、报告导出与统计模块；CI/CD 全流程搭建。",
      stack: ["Vue", "Angular", "Vuex", "RxJS", "ECharts"]
    }
  ],
  education: [
    { period: "2003.09 – 2007.07", school: "广东外语外贸大学", major: "工商管理" }
  ]
};

export const translations = {
  en: {
    sections: {
      overview: "Professional Overview",
      skills: "IT Skills & Strengths",
      projects: "Project Experience & Results",
      experience: "Work Experience",
      education: "Education"
    },
    buttons: {
      lightTheme: "Light Theme",
      darkTheme: "Dark Theme",
      exportPdf: "Export PDF",
      english: "English",
      chinese: "中文"
    },
    sidebar: {
      settings: "Settings",
      theme: "Theme",
      language: "Language",
      export: "Export",
      close: "Close Settings"
    }
  },
  zh: {
    sections: {
      overview: "职业概述",
      skills: "IT 技能与优势",
      projects: "项目经验与成果",
      experience: "工作经历",
      education: "教育经历"
    },
    buttons: {
      lightTheme: "浅色主题",
      darkTheme: "深色主题",
      exportPdf: "导出 PDF",
      english: "English",
      chinese: "中文"
    },
    sidebar: {
      settings: "设置",
      theme: "主题",
      language: "语言",
      export: "导出",
      close: "关闭设置"
    }
  }
};
