export type LinkItem = { label: string; url: string };
export type ExperienceItem = {
  period: string;
  company: string;
  role: string;
  description?: string;
  bullets: string[];
  stack?: string[];
};
export type ProjectItem = {
  title: string;
  period?: string;
  summary: string;
  links?: LinkItem[];
  details?: string[];
  stack?: string[];
};

export type ResumeData = {
  name: string;
  title: string;
  contacts: { phone: string; emails: string[]; location?: string };
  links: LinkItem[];
  summary: string[];
  strengths: string[];
  experiences: ExperienceItem[];
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
  projects: ProjectItem[];
  education: { period: string; school: string; major?: string }[];
};

export const resumeData: ResumeData = {
  name: "余翼",
  title: "全栈工程师（React / Next.js / Electron / Node）",
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
