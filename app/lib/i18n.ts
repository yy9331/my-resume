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
    dapp: string[];
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
  // Optional: self-built DApp section
  personalProjects?: {
    title: string;
    period?: string;
    summary: string;
    links?: { label: string; url: string }[];
    details?: string[];
    stack?: string[];
  }[];
  projects: {
    title: string;
    period?: string;
    summary: string;
    links?: { label: string; url: string }[];
    details?: string[];
    stack?: string[];
  }[];
  education: { school: string; major?: string; degree?: string }[];
}

export const resumeDataEn: ResumeDataI18n = {
  name: "Yu Yi (Yves)",
  title: "DApp/Web3 Full Stack Engineer (Next.js/Node/DApp/Electron)",
  contacts: {
    phone: "+86 13143745768",
    emails: ["yuyi.gz@gmail.com", "yuyi.gz@163.com",],
    location: "Guangzhou, China"
  },
  links: [
    { label: "Tech Blog", url: "https://zyzy.info" },
    { label: "GitHub", url: "https://github.com/yy9331" }
  ],
  summary: [
    "Full‑stack Web3 delivery: Electron desktop + Solidity/Hardhat with React/Next.js; wagmi/viem/ethers, WalletConnect & EIP‑712; The Graph/Subgraph; Node/Next.js backend; on‑chain/off‑chain data flow and performance/security optimization.",
    "Remote‑ready: solid async communication, documentation and overlap with APAC/EU time zones.",
    "8+ years of full-stack development experience, deep expertise in React ecosystem, with experience in designing and publishing public npm packages.",
    "Served Fortune 500 companies, capable of English meetings, communication, presentations, and written correspondence."
  ],
  strengths: [
    "Rapid response and refactoring capabilities: Can combine AI suggestions for frontend component refactoring and optimization",
    "Excellent collaboration: Independent communication, quick adaptation to different microservice frontend stacks and interaction changes",
    "Engineering accumulation: Multiple reusable components, significantly improving team delivery efficiency"
  ],
  experiences: [
    {
      period: "2024.06 – 2025.09",
      company: "Rain Protocol",
      role: "Senior DApp Engineer (DeFi Lending) Remote",
      bullets: [
        "Own the frontend architecture and development for Rain.fi lending protocol",
        "Integrate Solana Programs with the app frontend",
        "Develop lending SDK and API integrations for third‑party developers",
        "Protocol TVL surpassed $10M with rapid user growth",
        "SDK adopted and integrated by multiple DeFi projects",
        "Built wallet flows with @solana/web3.js, native Solana transaction signing and authorization",
        "Hardhat based CI pipeline: unit/integration tests, mainnet forking, coverage and gas‑report",
        "Auth & data: Subgraph/The Graph for analytics, optimized RPC usage (batch, caching)",
        "Improved critical paths by ~25% through gas & network optimization"
      ],
      stack: ["DeFi Lending", "Solana", "@solana/web3.js", "Wallet Adapter", "React", "Next.js", "TypeScript"]
    },
    {
      period: "2023.03 – 2024.05",
      company: "Bunni Protocol",
      role: "Senior DApp Engineer (DEX) Remote",
      bullets: [
        "Built liquidity engine UI based on Uniswap v4 hooks",
        "Developed liquidity shaping and dynamic fee adjustment modules",
        "Implemented LP profitability optimization strategies and data visualization",
        "Improved LP APR by 20%+ through optimization",
        "Helped several projects migrate from Uniswap v2/SushiSwap to v3 for capital efficiency",
        "Participated in protocol security review and risk control mechanism design",
        "Designed EIP‑712 typed‑data schemas and signing/verification flows with permit authorization patterns",
        "Set up feature flags/remote config for safe, incremental rollouts in production",
        "Async remote collaboration across time zones; PRD → design → implementation → docs handover"
      ],
      stack: ["Uniswap v4 Hooks", "React 18+", "TypeScript", "Next.js", "wagmi/viem", "ethers.js"]
    },
    {
      period: "2024.06 – 2025.06",
      company: "Guangzhou Friendship Foreign Service Co., Ltd.",
      role: "Cathay Pacific CXA Project Team Frontend Developer",
      bullets: [
        "Led frontend development for Cathay Pacific CXA project, built reusable frontend component library, improving team development efficiency by 30%+",
        "Combined AI tools for code refactoring and optimization, enhanced existing component performance by 25% with significantly improved maintainability",
        "Independently completed complex business component refactoring, collaborated efficiently with product and design teams to ensure on-time delivery",
        "Quickly adapted to UX design changes, rapidly adjusted interaction logic during mid-project designer transition while maintaining development progress",
        "Proficiently handled multi-tech stack switching in microservice architecture, including rapid onboarding and development with React, Vue, Angular frameworks"
      ],
      stack: ["React", "TypeScript", "Frontend Library", "Microservice Architecture", "AI-Assisted Development"]
    },
    {
      period: "2022.06 – 2024.02",
      company: "Symbio (China) Co., Ltd. · HSBC Investment Banking MSS-FICC-MKTY Project Team",
      role: "Full Stack Developer",
      bullets: [
        "Independent frontend and backend development to production; multiple solution comparisons and optimal solution communication",
        "Gradually modularized requirements; packaged Export Excel / Date Picker and other plugins",
        "Optimization and packaging reduced approximately 40% of duplicate code; improved efficiency",
        "Quickly mastered Electron, Scala, SQL and implemented",
        "Scala for app data request layer; SQL task optimization; Oracle and MongoDB integration"
      ],
      stack: ["Electron", "React Hooks", "Next.js", "Scala", "SQL", "Java Microservices", "MongoDB", "E2E Automated Testing(Cypress)"]
    },
    {
      period: "2021.12 – 2022.06",
      company: "Zebra Network Technology Co., Ltd.",
      role: "Automotive Industry Digitalization Full Stack Developer",
      bullets: [
        "Led full-stack development for automotive industry digitalization projects, tackled complex frontend technical challenges including CSS3 animations and Canvas graphics rendering",
        "Implemented high-performance card flip animations, Canvas coloring and other interactive effects, improving user experience by 40%+",
        "Proficiently utilized React, Rax, Umi and other cross-platform frameworks for project refactoring, supporting unified multi-platform development",
        "Designed and implemented componentized architecture, extracted common modules into npm packages, reducing duplicate code by 50% and improving team development efficiency",
        "Built universal component library supporting rapid integration of different project modules, significantly reducing new project development costs",
        "Conducted in-depth research on micro-frontend qiankun architecture, implemented sandbox environment debugging, successfully applied to large-scale projects",
        "Adopted agile development methodology, rapidly responded to requirement changes, ensuring on-time project delivery",
        "Maintained strict control over interface experience quality, meeting high-standard user interface requirements through multiple iteration optimizations"
      ],
      stack: ["React", "Rax", "Umi", "Micro-frontend qiankun", "Canvas", "CSS Animation", "npm Package Management"]
    },
    {
      period: "2021.07 – 2021.12",
      company: "Yunxi Technology Guangzhou Co., Ltd.",
      role: "Pharmaceutical Business Department Frontend Team Lead",
      bullets: [
        "Served as frontend technical lead for pharmaceutical business department, formulated and implemented frontend architecture solutions, optimized business code structure, improving system maintainability",
        "Designed and packaged universal component library, established component design standards, regularly organized technical sharing sessions, enhancing overall team technical level",
        "Responsible for project progress control and resource coordination, developed project plans, ensured on-time delivery with 35% improvement in team delivery efficiency",
        "Established new employee training system, quickly trained 3 junior developers, reducing newcomer onboarding time by 50%",
        "Built efficient communication mechanisms with clients, product, and UI teams, ensuring accurate requirement understanding and transparent project progress control",
        "Established frontend development standards and code review processes, significantly improving code quality and team collaboration efficiency"
      ],
      stack: ["Frontend Architecture", "Team Management", "Component Packaging", "Technical Sharing", "Project Management"]
    },
    {
      period: "2019.09 – 2021.07",
      company: "Chinasoft International Co., Ltd. · HSBC Private Banking PAYMENT Project Team",
      role: "Frontend Developer",
      bullets: [
        "Refactored legacy modules and improved code quality via modular design",
        "Packaged reusable components: search/filter, date‑range picker, loading/steps widgets",
        "Introduced BDD to key flows and kept unit tests green in CI",
        "Optimized critical UI paths (search/rendering), noticeably faster and smoother",
        "Collaborated with backend for interfaces and integration; supported engineering rollout"
      ],
      stack: ["React", "React Hooks", "Redux", "ECharts", "Webpack"]
    },
    {
      period: "2018.12 – 2019.09",
      company: "Isoftstone Information Technology (Group) Co., Ltd. · Huawei Hardware Testing Digitalization",
      role: "Frontend Developer",
      bullets: ["Data visualization and report export modules, test result backfill and statistics modules"],
      stack: ["Vue", "Element UI", "Vuex"]
    },
    {
      period: "2017.08 – 2018.12",
      company: "Guangzhou Pugu Technology Co., Ltd.",
      role: "Frontend Developer",
      bullets: ["Delivered responsive UI components and integrations across multiple client projects handled by the company."]
    },
    {
      period: "2014.08 – 2017.08",
      company: "Gongcheng Management Consulting Co., Ltd.",
      role: "Bidding and Procurement Data Analysis",
      bullets: ["Prepared procurement data reports and dashboards supporting municipal bidding decisions."]
    },
    {
      period: "2007.07 – 2014.07",
      company: "Zhongjie Communication Co., Ltd.",
      role: "Bidding and Procurement Data Analysis",
      bullets: ["Maintained telecom procurement datasets and ensured compliance documentation accuracy."]
    }
  ],
  skills: {
    frontend: ["TypeScript", "ES6+", "React + Hooks", "tailwindCSS", "Next.js", "Vue", "Angular"],
    dapp: [
      "Solidity", "Hardhat", "OpenZeppelin",
      "ethers.js", "viem", "wagmi", "WalletConnect",
      "EIP-712 Signatures", "Gas optimization",
      "Multichain(EVM/Solana)", "The Graph/Subgraph"
    ],
    crossPlatform: ["Electron", "React Native", "Mini Programs"],
    testing: ["BDD(Jest & Enzyme)", "e2e(Cypress)"],
    dataApi: ["React Query", "GraphQL"],
    build: ["Webpack", "npm", "Vite", "Rollup"],
    designNpm: ["Component Design", "Npm Package Design & Debugging"],
    backend: ["Scala", "Java", "Python"],
    frameworks: ["Next.js", "Spring Boot", "Django"],
    db: ["SQL", "Supabase", "Postgres", "Oracle", "MongoDB"],
    devops: ["Vercel", "Jenkins", "Docker", "Nginx"]
  },
  personalProjects: [
    {
      title: "Decentralized Exchange Pyro Wing DEX (Sepolia)",
      summary: "End-to-end by myself: factory contracts, routing, frontend/backends, liquidity and 24h stats.",
      links: [
        { label: "DEX", url: "https://pws.zyzy.info" },
        { label: "Contract Repo", url: "https://github.com/yy9331/pyro-wing-swap-v2" },
        { label: "Frontend/Backend Repo", url: "https://github.com/yy9331/pyro-wing-swap-fe" }
      ],
      details: [
        "Tech Highlights:",
        "- Contracts: Factory/Pair/Router split; WETH integration; UniswapV2-style library & TransferHelper",
        "- Tooling: Hardhat + viem toolbox, hardhat-deploy, gas-reporter, solidity-coverage",
        "- Frontend: wagmi/viem + WalletConnect, network switch, batch RPC and caching",
        "- Trading: add/remove liquidity, exactIn token/ETH swaps; path routing with amount calculations",
        "Architecture / Outcomes:",
        "- Events and Subgraph-ready design for 24h volume/TVL; pluggable data aggregation",
        "- One-click deploy scripts and env-based config; Sepolia deployments verified",
        "- Request merging reduces RPC roundtrips (~20%+ latency cut on hot paths)"
      ]
    },
    {
      title: "Decentralized Staking Pyro Wing Stake (Sepolia)",
      summary: "YY Token staking; includes solidity contracts and frontend integration.",
      links: [
        { label: "Stake", url: "http://stake.zyzy.info" },
        { label: "Solidity Repo", url: "https://github.com/yy9331/yy-eth-stake" }
      ],
      details: [
        "Tech Highlights:",
        "- Contracts: ERC20 (YY.sol) + Staking (YYStake.sol) with deposit/withdraw/reward logic",
        "- Tooling: Hardhat, ignition deploy, unit tests for reward accrual and time simulation",
        "- Frontend: React + wagmi/viem; real-time positions/APR/rewards display; permit flow (extensible)",
        "Architecture / Outcomes:",
        "- Reward policy abstracted for future decay/weight models; pausable & admin-guard rails",
        "- Scripts for testnet deployment/verification; event-driven analytics hooks",
        "- Addresses: YY 0x86c52d5fAFD11e88358CE2bf1a47cB5bB9db0D4D; Stake 0xcbE2a64e27bf8b0fdd024e389CfC0B82751A9181"
      ]
    },
    {
      title: "Pyro Wing Wallet",
      summary: "Basic wallet features: transfer/receive/mint/add tokens.",
      links: [{ label: "GitHub", url: "https://github.com/yy9331/pyro-wing-wallet" }],
      stack: ["Plasmo Extension", "React", "TypeScript", "Tailwind", "Viem"],
      details: [
        "Tech Stack:",
        "- Extension framework: Plasmo, frontend with React/TS and Tailwind",
        "- Wallet: mnemonic/private key import, asset listing, transfer/mint, custom tokens",
        "- Hooks: balance queries and subscriptions, Gas/Nonce handling, error fallbacks"
      ]
    },
    {
      title: "Personal Tech Blog (with Login Auth, Comments & MCP Service)",
      summary: "Record daily tech insights; self-developed MCP service integrated with AI; supports Markdown editing and comments.",
      links: [
        { label: "Website", url: "https://zyzy.info" },
        { label: "MCP Service Repo", url: "https://github.com/yy9331/blog-mcp-server" }
      ],
      stack: ["Next.js", "Postgres", "Vercel", "Supabase Auth"]
    }
  ],
  projects: [
    {
      title: "Rain.fi - Solana Decentralized Lending Protocol (Remote Part-time)",
      period: "2024.05 – 2025.09",
      summary: "A Solana-based decentralized lending protocol focusing on token and NFT lending.",
      stack: ["Solana", "React 18+", "Next.js 13+", "TypeScript 5+", "DeFi"],
      details: [
        "Tech Highlights:",
        "- Precision handling: avoid JS float errors; handle Solana u64/u128 big integers",
        "- One‑click lending: smart prefill of optimal parameters to enhance UX",
        "- Integrations: @solana/wallet-adapter and TradingView charts",
        "Core Module Development:",
        "- Trade builder: orchestrate complex Solana Program calls",
        "- Business modules: JLP collateral, lending parameter optimization, risk management"
      ]
    },
    {
      title: "Bunni Liquidity Engine Platform (Remote Part-time)",
      period: "2022.03 – 2023.07",
      summary: "Advanced liquidity management platform built on Uniswap V4 hooks.",
      stack: ["React 18+", "TypeScript", "Uniswap V4", "Web Workers", "WebSocket"],
      details: [
        "Tech Highlights:",
        "- Complex data visualization: liquidity density, real‑time price curves, multi‑dimensional interactive charts",
        "- Real‑time compute architecture: Markout analytics, TVL‑adjusted yield, impermanent loss tracking",
        "Innovative Architecture:",
        "- Modular Hook system: custom useBunniPool to compose complex business logic",
        "- Smart caching: Web Worker for compute‑intensive tasks",
        "- Risk evaluation system: real‑time liquidity risk computation with intelligent parameter suggestions"
      ]
    },
    {
      title: "HSBC MSS-FICC-MKTY Electron Desktop Application",
      period: "2022.06 – 2024.02",
      summary: "Monitor foreign exchange/cash/bond trading capital flows; multi-data source aggregation and report generation.",
      stack: ["Electron", "React", "Next.js", "Scala", "SQL", "MongoDB"],
      details: [
        "Highlights:",
        "- Owned full‑stack delivery for several modules in the Electron app (frontend → production)",
        "- Abstracted reusable utilities/components; improved team delivery efficiency by ~50%",
        "- Published lightweight npm helpers for API requests to simplify integration",
        "- Built a Scala‑based request layer; quickly learned Scala and adapted APIs",
        "- Storage split: Oracle for trades, MongoDB for behavior; tuned SQL/NoSQL queries"
      ]
    },
    {
      title: "Hongqi Automotive WeChat Mini-Program Marketing Campaign Series",
      period: "2021.12 – 2022.06",
      summary: "Annual marketing campaign series for Hongqi mini-program, monthly themed activities to maintain and manage Hongqi car owner relationships, enhancing user engagement.",
      stack: ["React Native", "Umi", "Canvas", "Ant Design Mobile", "Rax", "DVA", "MongoDB"],
      details: [
        "Project Highlights:",
        "- Intensive development pace, independently completed 12 monthly marketing campaigns with frequent and complex requirement changes",
        "- Implemented high-difficulty interactive effects: card flip animations, coloring interactions, GIF insertion in interfaces and other complex animations",
        "- Built comprehensive data tracking system, storing user behavior data in MongoDB for campaign effectiveness analysis",
        "Technical Achievements:",
        "- Independently completed 3 large-scale campaign projects, all highly praised by clients",
        "- Packaged npm utility packages for API requests, significantly improving team development efficiency",
        "- Optimized Canvas rendering performance, ensuring smooth animations on mobile devices",
        "- Established automated testing and deployment pipeline, supporting rapid campaign launches"
      ]
    },
    {
      title: "HSBC WPB-CHANNELS-PAYMENT Web Application",
      summary: "Internal web application for private banking; large-amount capital flow display and integrations.",
      stack: ["React", "React Hooks", "Webpack", "BDD Automated Testing (Jest & Enzyme)"],
      details: [
        "Highlights:",
        "- Refactored a large legacy module and integrated with internal systems & SWIFT",
        "- Delivered shared components: search, table/filters, date‑range picker, loading, steps",
        "- Introduced BDD (Jest & Enzyme); pipelines stayed green, stability improved",
        "- Optimized search path; runtime roughly doubled (~100%) with better UX",
        "- Received positive feedback and a quarterly award for reliability and speed"
      ]
    },
    {
      title: "Huawei HDP-TSP Hardware Testing System",
      period: "2018.05 – 2019.09",
      summary: "Data dashboard, result backfill, report export and statistics modules; full CI/CD pipeline setup.",
      stack: ["Vue", "Angular", "Vuex", "RxJS", "ECharts"]
    }
  ],
  education: [
    { school: "Guangdong University of Foreign Studies", major: "Business Administration", degree: "Bachelor degree (2003 – 2007)" }
  ]
};

export const resumeDataZh: ResumeDataI18n = {
  name: "余翼",
  title: "DApp全栈工程师（Next.js/Node/DApp/Electron）",
  contacts: {
    phone: "+86 13143745768",
    emails: ["yuyi.gz@gmail.com", "yuyi.gz@163.com",],
    location: "籍贯汕头，现居广州"
  },
  links: [
    { label: "技术博客", url: "https://zyzy.info" },
    { label: "GitHub", url: "https://github.com/yy9331" }
  ],
  summary: [
    "Web3 全栈交付：Electron 桌面端 + Solidity/Hardhat 与 React/Next.js；wagmi/viem/ethers、WalletConnect 与 EIP‑712、The Graph/Subgraph；Node/Next.js 后端；覆盖链上/链下数据流与性能/安全优化。",
    "适配远程：善于异步沟通与文档沉淀，可与亚太/欧洲时区重叠工作",
    "全栈开发8年+经验，深入 React 生态，具备公共 npm package 设计与发布经验。",
    "服务过世界500强，能英文会议、交流、present与书面往来。",
  ],
  strengths: [
    "快速响应与重构能力：能结合 AI 建议进行前端组件重构与优化",
    "良好协作：独立沟通、快速适配不同微服务前端栈与交互变化",
    "工程化沉淀：多处封装复用，显著提升团队交付效率"
  ],
  experiences: [
    {
      period: "2024.06 – 2025.09",
      company: "Rain Protocol",
      role: "高级DApp工程师（DeFi 借贷方向）远程工作 兼职",
      bullets: [
        "负责 Rain.fi 借贷协议前端架构与开发",
        "参与 Solana Program 与前端的集成开发",
        "开发借贷 SDK 与 API 集成，服务第三方开发者",
        "协议 TVL 突破 1000 万美元，用户增长迅速",
        "借贷 SDK 被多个 DeFi 项目集成使用",
        "接入 @solana/web3.js 钱包与签名流程，实现 Solana 原生交易签名与授权",
        "基于 Hardhat 构建 CI：单测/集成测试、主网分叉、覆盖率与 gas report",
        "数据与分析：使用 The Graph/Subgraph；优化 RPC（批处理、缓存）",
        "通过 gas 与网络优化将关键链路耗时下降约 25%"
      ],
      stack: ["DeFi 借贷", "Solana", "@solana/web3.js", "Wallet Adapter", "React", "Next.js", "TypeScript"]
    },
    {
      period: "2022.03 – 2024.05",
      company: "Bunni Protocol",
      role: "高级DApp工程师（DEX 方向）远程工作 兼职",
      bullets: [
        "基于 Uniswap v4 hook 构建流动性引擎前端界面",
        "开发流动性塑形与动态费用调整功能模块",
        "负责 LP 盈利优化策略的前端实现与数据可视化",
        "成功实现 LP 盈利优化，提升流动性提供者收益率 20%+",
        "帮助多个项目从 Uniswap v2/SushiSwap 迁移至 v3，提升资本效率",
        "参与协议安全审计与风控机制设计",
        "设计 EIP‑712 typed‑data 签名结构并与后端/合约对齐，实现 permit 授权模式与权限安全",
        "设计签名结构并与后端/合约对齐，保障 EIP‑712 验签与权限安全",
        "建立功能开关与灰度策略，确保生产环境稳健迭代",
        "远程协作：跨时区异步推进 PRD/设计/实现/文档交接"
      ],
      stack: ["Uniswap v4 Hook", "React 18+", "TypeScript", "Next.js", "wagmi/viem", "ethers.js"]
    },
    {
      period: "2024.06 – 2025.06",
      company: "广州市友谊对外服务有限公司",
      role: "国泰航空 CXA 项目组 前端开发",
      bullets: [
        "负责国泰航空 CXA 项目前端开发，构建可复用的前端组件库，提升团队开发效率 30%+",
        "结合 AI 工具进行代码重构与优化，将现有组件性能提升 25%，代码可维护性显著改善",
        "独立完成复杂业务组件重构，与产品、设计团队高效协作，确保项目按时交付",
        "快速适应 UX 设计变更，在项目中期设计师更换情况下，迅速调整交互逻辑并保持开发进度",
        "熟练应对微服务架构下的多技术栈切换，包括 React、Vue、Angular 等框架的快速上手与开发"
      ],
      stack: ["React", "TypeScript", "前端Library", "微服务架构", "AI辅助开发"]
    },
    {
      period: "2022.06 – 2024.02",
      company: "信必优（中国）有限公司 · 汇丰银行 投资银行 MSS-FICC-MKTY 项目组",
      role: "全栈开发",
      bullets: [
        "前后端独立开发至上线；多方案对比并沟通最优解",
        "将需求逐步插件化；封装 Export Excel / Date Picker 等插件",
        "优化与封装减少约40%重复代码；提升效率",
        "快速上手 Electron、Scala、SQL 并落地",
        "Scala 编写 App 数据请求层；调优 SQL 任务；Oracle 与 MongoDB 并用"
      ],
      stack: ["Electron", "React Hooks", "Next.js", "Scala", "SQL", "Java 微服务", "MongoDB", "E2E Automated Testing(Cypress)"]
    },
    {
      period: "2021.12 – 2022.06",
      company: "斑马网络技术有限公司",
      role: "车机产业数字化 全栈开发",
      bullets: [
        "负责车机产业数字化项目全栈开发，攻克复杂前端技术难点，包括 CSS3 动画、Canvas 图形渲染等",
        "实现高性能卡牌翻转动画、Canvas 填色等交互效果，提升用户体验 40%+",
        "熟练运用 React、Rax、Umi 等跨端框架进行项目重构，支持多端统一开发",
        "设计并实施组件化架构，将公共模块提取为 npm 包，减少重复代码 50%，提升团队开发效率",
        "构建通用组件库，支持不同项目模块的快速集成，显著降低新项目开发成本",
        "深入研究微前端 qiankun 架构，实现沙箱环境调试，成功应用于大型项目中",
        "采用敏捷开发模式，快速响应需求变更，确保项目按时交付",
        "严格把控界面体验质量，通过多次迭代优化，满足高标准的用户界面要求"
      ],
      stack: ["React", "Rax", "Umi", "微前端qiankun", "Canvas", "CSS动画", "npm包管理"]
    },
    {
      period: "2021.07 – 2021.12",
      company: "云徙科技广州有限公司",
      role: "医药业务部 前端组长",
      bullets: [
        "担任医药业务部前端技术负责人，制定并实施前端架构方案，优化业务代码结构，提升系统可维护性",
        "设计并封装通用组件库，建立组件设计规范，定期组织技术分享，提升团队整体技术水平",
        "负责项目进度管控与资源协调，制定开发计划，确保项目按时交付，团队交付效率提升 35%",
        "建立新人培训体系，快速培养 3 名初级开发者，缩短新人上手时间 50%",
        "与客户方、产品、UI 团队建立高效沟通机制，确保需求理解准确，项目进展透明可控",
        "建立前端开发规范与代码审查流程，显著提升代码质量与团队协作效率"
      ],
      stack: ["前端架构", "团队管理", "组件封装", "技术分享", "项目管理"]
    },
    {
      period: "2019.09 – 2021.07",
      company: "中软国际有限公司 · 汇丰银行 私人银行 PAYMENT 项目组",
      role: "前端开发",
      bullets: [
        "对旧模块进行重构与模块化改造，提升代码质量",
        "封装通用组件：搜索/筛选、日期范围、loading/steps 等",
        "在关键流程引入 BDD，CI 持续保持单测通过",
        "优化搜索与渲染等关键路径，界面响应更快更流畅",
        "配合后端接口联调，支持工程化上线与迭代"
      ],
      stack: ["React", "React Hooks", "Redux", "ECharts", "Webpack", "BDD Automated Testing(Jest & Enzyme)"]
    },
    {
      period: "2018.12 – 2019.09",
      company: "软通动力信息技术（集团）有限公司 · 华为硬件测试数字化",
      role: "前端开发",
      bullets: ["数据可视化与报告导出模块、用例结果回填与统计模块等"],
      stack: ["Vue", "Element UI", "Vuex"]
    },
    {
      period: "2017.08 – 2018.12",
      company: "广州普谷科技有限公司",
      role: "前端开发工程师",
      bullets: ["负责公司承接的多个项目的前端开发，交付响应式组件并对接后端接口。"]
    },
    {
      period: "2014.08 – 2017.08",
      company: "公诚管理咨询有限公司",
      role: "招标采购数据分析",
      bullets: ["整理并分析招标采购数据，输出报表支持政府与企业决策。"]
    },
    {
      period: "2007.07 – 2014.07",
      company: "中捷通信有限公司",
      role: "招标采购数据分析",
      bullets: ["维护通信行业招采数据与合规文档，保障流程合规落地。"]
    }
  ],
  skills: {
    frontend: ["TypeScript", "ES6+", "React + Hooks", "tailwindCSS", "Next.js", "Vue", "Angular"],
    dapp: [
      "Solidity", "Hardhat", "OpenZeppelin",
      "ethers.js", "viem", "wagmi", "WalletConnect",
      "EIP-712 签名", "Gas 优化",
      "多链(EVM/Solana)",
      "The Graph/Subgraph"
    ],
    crossPlatform: ["Electron", "React Native", "小程序"],
    testing: ["BDD(Jest & Enzyme)", "e2e(Cypress)"],
    dataApi: ["React Query", "GraphQL"],
    build: ["Webpack", "npm", "Vite", "Rollup"],
    designNpm: ["组件设计", "Npm package 设计与调试"],
    backend: ["Scala", "Java", "Python"],
    frameworks: ["Next.js", "Spring Boot", "Django"],
    db: ["SQL", "Supabase", "Postgres", "Oracle", "MongoDB"],
    devops: ["Vercel", "Jenkins", "Docker", "Nginx"]
  },
  personalProjects: [
    {
      title: "去中心化交易所 Pyro Wing DEX（Sepolia）",
      summary: "从工厂合约、路由到前后端一体化，自主完成，提供流动性与 24h 交易统计。",
      links: [
        { label: "DEX", url: "https://pws.zyzy.info" },
        { label: "合约仓库", url: "https://github.com/yy9331/pyro-wing-swap-v2" },
        { label: "前后端仓库", url: "https://github.com/yy9331/pyro-wing-swap-fe" }
      ],
      details: [
        "技术亮点：",
        "- 合约：Factory/Pair/Router 分层；WETH 集成；UniswapV2 风格库与 TransferHelper",
        "- 工具：Hardhat + viem toolbox、hardhat-deploy、gas-reporter、solidity-coverage",
        "- 前端：wagmi/viem + WalletConnect，网络切换、批量 RPC 与缓存",
        "- 交易：添加/移除流动性、exactIn 兑换路径与金额计算",
        "架构/创新/成绩：",
        "- 事件与子图友好设计，支持 24h 成交量/TVL 统计；可插拔聚合层",
        "- 一键部署脚本与多环境配置，Sepolia 已验证部署",
        "- 通过请求合并与缓存等手段，热点链路延迟下降约 20%+",
        "地址参考：Factory 0x36473449F68df1784b3bcBcbB315Fc02D7DC89fA；Router 0x4aA798Ea712bfAF21D6109013bb112E8F8AcC2ef"
      ]
    },
    {
      title: "去中心化抵押 Pyro Wing Stake（Sepolia）",
      summary: "YY Token 抵押挖矿；包含 Solidity 合约与前端集成，自主完成。",
      links: [
        { label: "Stake", url: "http://stake.zyzy.info" },
        { label: "Solidity 仓库", url: "https://github.com/yy9331/yy-eth-stake" }
      ],
      details: [
        "技术亮点：",
        "- 合约：ERC20(YY.sol) + Staking(YYStake.sol) 抵押/赎回/奖励结算",
        "- 工具：Hardhat + ignition 部署，单测覆盖收益累积与时间加速",
        "- 前端：React + wagmi/viem，实时仓位/APR/奖励；permit 授权路径（可扩展）",
        "架构/创新/成绩：",
        "- 策略抽象，便于后续衰减/权重模型；Pausable/管理员权限保护",
        "- 部署/校验脚本与事件驱动分析，便于导出收益曲线",
        "- 地址：YY 0x86c52d5fAFD11e88358CE2bf1a47cB5bB9db0D4D；Stake 0xcbE2a64e27bf8b0fdd024e389CfC0B82751A9181"
      ]
    },
    {
      title: "Pyro Wing Wallet（钱包）",
      summary: "具备转账、接收、铸造与添加代币等基础功能。",
      links: [ { label: "GitHub", url: "https://github.com/yy9331/pyro-wing-wallet" } ],
      stack: ["Plasmo Extension", "React", "TypeScript", "Tailwind", "Viem"],
      details: [
        "技术栈：",
        "- 扩展框架 Plasmo，前端 React/TS 与 Tailwind",
        "- 钱包：助记词/私钥导入、资产列表、转账/铸造、自定义 Token",
        "- Hooks：余额查询订阅、Gas/Nonce 处理、错误兜底"
      ]
    },
    {
      title: "个人技术博客（含登录鉴权与评论、MCP 服务）",
      summary: "记录技术日常；自研 MCP 服务集成 AI；支持 Markdown 编辑与评论。",
      links: [
        { label: "站点", url: "https://zyzy.info" },
        { label: "MCP 服务仓库", url: "https://github.com/yy9331/blog-mcp-server" }
      ],
      stack: ["Next.js", "Postgres", "Vercel", "Supabase Auth"]
    }
  ],
  projects: [
    {
      title: "Rain.fi - Solana 去中心化借贷协议",
      period: "2024.05 – 2025.09",
      summary: "基于 Solana 的去中心化借贷协议，专注于代币与 NFT 借贷。",
      stack: ["Solana", "React 18+", "Next.js 13+", "TypeScript 5+", "DeFi"],
      details: [
        "技术亮点：",
        "- 精度处理：避免 JavaScript 浮点误差，处理 Solana 的 u64/u128 大整数",
        "- 一键借贷：智能预填充最优参数，提升用户体验",
        "- 集成 @solana/wallet-adapter 与 TradingView 图表库",
        "核心模块开发：",
        "- 交易构建器：处理复杂的 Solana Program 调用逻辑",
        "- 业务开发：JLP 代币抵押、借贷参数优化、风险管理"
      ]
    },
    {
      title: "Bunni 流动性引擎平台",
      period: "2022.03 – 2023.07",
      summary: "基于 Uniswap V4 Hook 的流动性管理平台。",
      stack: ["React 18+", "TypeScript", "Uniswap V4", "Web Workers", "WebSocket"],
      details: [
        "技术亮点：",
        "- 实现复杂数据可视化：流动性密度函数、实时价格曲线、多维交互图表",
        "- 构建实时计算架构：Markout 分析、TVL 调整收益率、套利损失追踪",
        "创新架构设计：",
        "- 模块化 Hook 系统：自定义 useBunniPool 组合复杂业务逻辑",
        "- 智能缓存策略：Web Worker 处理计算密集任务",
        "- 风险评估系统：实时计算流动性风险并提供智能参数推荐"
      ]
    },
    {
      title: "汇丰银行 MSS-MKTY Electron 桌面应用",
      period: "2022.06 – 2024.02",
      summary: "监测外汇/现金/债权交易资金流；多数据源汇总与报表生成。",
      stack: ["Electron", "React", "Next.js", "Scala", "SQL", "MongoDB", "E2E Automated Testing(Cypress)"],
      details: [
        "亮点：",
        "- 负责 Electron 应用内多个模块的端到端交付（前端开发直至上线）",
        "- 抽象通用工具/组件，团队交付效率提升约 50%",
        "- 发布轻量 npm 工具用于接口请求，降低集成成本",
        "- 搭建 Scala 请求层，快速学习并按需调整接口",
        "- 存储分层：交易数据 Oracle、行为数据 MongoDB；按需优化 SQL/NoSQL 查询"
      ]
    },
    {
      title: "红旗汽车车机微信小程序系列活动",
      period: "2021.12 – 2022.06",
      summary: "红旗小程序年度营销系列活动，每月主题活动，维护和管理红旗车主关系，提升用户粘性。",
      stack: ["React Native", "Umi", "Canvas", "Ant Design Mobile", "Rax", "DVA", "MongoDB"],
      details: [
        "项目亮点：",
        "- 开发节奏紧凑，独立完成 12 个月度营销活动，需求变化频繁且复杂",
        "- 实现高难度交互效果：翻卡动效、填色互动、界面 GIF 插入等复杂动画",
        "- 构建完整数据埋点体系，用户行为数据存储于 MongoDB，支持活动效果分析",
        "技术成果：",
        "- 独立完成 3 个大型活动项目，均获得委托方高度好评",
        "- 封装 npm 工具包用于接口请求，显著提升团队开发效率",
        "- 优化 Canvas 渲染性能，确保移动端动画流畅度",
        "- 建立自动化测试与部署流水线，支持快速活动上线"
      ]
    },
    {
      title: "汇丰银行 WPB-CHANNELS-PAYMENT Web 应用",
      summary: "对私银行内部 Web 应用：大额资金流展示与各系统对接。",
      stack: ["React", "React Hooks", "Webpack", "BDD 自动化测试 (Jest & Enzyme)"],
      details: [
        "亮点：",
        "- 重构大型遗留模块，对接内部系统与 SWIFT",
        "- 沉淀通用组件：搜索、表格/筛选、日期范围、loading、steps 等",
        "- 引入 BDD（Jest & Enzyme），流水线稳定通过",
        "- 优化搜索链路，运行效率约提升 100%，体验显著改善",
        "- 获得同组用户正面反馈及季度奖项"
      ]
    },
    {
      title: "华为 HDP-TSP 硬件测试系统",
      period: "2018.05 – 2019.09",
      summary: "数据看板、结果回填、报告导出与统计模块；CI/CD 全流程搭建。",
      stack: ["Vue", "Angular", "Vuex", "RxJS", "ECharts"]
    }
  ],
  education: [
    { school: "广东外语外贸大学 (双一流)", major: "工商管理", degree: "统招本科（2003 – 2007）" }
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
      wallet: "Wallet",
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
      wallet: "钱包",
      close: "关闭设置"
    }
  }
};
