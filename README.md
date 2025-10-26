# My resume - Interactive Resume

A modern, interactive resume built with Next.js featuring wallet integration and multi-language support.

## Features

- 📝 **Interactive Resume**: Professional resume with dark/light themes
- 🌍 **Multi-language**: English and Chinese (中文) support
- 🎨 **Modern UI**: Animated particles background with Tailwind CSS
- 📄 **PDF Export**: Export resume with localized filenames
- 🔐 **Wallet Integration**: MetaMask support for Web3 showcase

---

## Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone and install dependencies**:
   ```bash
   git clone <your-repo-url>
   cd my-resume
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**: [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
my-resume/
├── app/
│   ├── api/
│   │   └── auth/              # NextAuth configuration
│   ├── components/            # React components
│   │   ├── Header.tsx         # resume header with contact info
│   │   ├── Experience.tsx     # Work experience section
│   │   ├── Projects.tsx       # Project showcase
│   │   ├── Skills.tsx         # Skills grid
│   │   ├── Sidebar.tsx        # Settings sidebar
│   │   └── ...
│   ├── contexts/              # React contexts
│   │   ├── LanguageContext.tsx # Multi-language support
│   │   └── WalletContext.tsx   # Web3 wallet integration
│   ├── lib/
│   │   └── i18n.ts            # Translations and resume data
│   ├── globals.css            # Global styles and print CSS
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Main resume page
├── public/                    # Static assets
└── package.json
```

---

## Features Guide

### PDF Export

Export your resume as PDF with language-aware filenames:
- English: `Yu-Yi-Resume.pdf`
- Chinese: `余翼-简历.pdf`

**Optimizations**:
- Compressed images (quality: 40)
- Hidden decorative elements in print
- System fonts to reduce embedded font data
- Target size: ~1-2MB

### Multi-language Support

Switch between English and Chinese:
- Click **Settings** → **Language**
- All content updates automatically
- Language preference saved to localStorage

### Wallet Integration

Connect MetaMask to showcase Web3 capabilities:

Supported networks:
- Ethereum Mainnet
- Optimism
- Polygon
- Arbitrum
- BNB Smart Chain

---

## Scripts

- `npm run dev` - Start development server (with Turbopack)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

---

## Troubleshooting

### PDF export is too large (>10MB)

**Causes**: High-quality images or complex fonts

**Solutions**:
- Image quality already optimized (quality: 40)
- Avatar hidden in print mode
- Use browser's "Print to PDF" with "Background graphics" unchecked
- Ensure print CSS is working (decorative elements should be hidden)

---

## Tech Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Styling**: Tailwind CSS 4, CSS Variables for theming
- **UI Components**: React 19, React Icons
- **Web3**: MetaMask integration (viem/wagmi-compatible context)
- **Animations**: tsParticles (background particles)
- **PDF Export**: Browser native print API
- **TypeScript**: Full type safety
- **Deployment**: Vercel-ready

---

## Contributing

This is a personal resume project, but suggestions are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## License

MIT License - feel free to use this template for your own resume!

---

## Contact

- **Email**: yuyi.gz@gmail.com
- **GitHub**: [@yy9331](https://github.com/yy9331)
- **Telegram**: [@yyi9331](https://t.me/yyi9331)
- **WhatsApp**: [+44 7763 334391](https://wa.me/447763334391)
- **WeChat**: [WeChat](weixin://dl/chat?13143745768)
- **X (Twitter)**: [@yy9331](https://x.com/yy9331)
- **Discord**: yy9331_03247

---

## Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Deployed on [Vercel](https://vercel.com)
- Icons from [React Icons](https://react-icons.github.io/)
- Particles by [tsParticles](https://particles.js.org/)

---

**Note**: This is an open-source project. Feel free to use it as a template for your own resume!
