# My CV - Interactive Resume & Guestbook

A modern, interactive resume built with Next.js featuring wallet integration, multi-language support, and a PostgreSQL-backed guestbook.

## Features

- 📝 **Interactive Resume**: Professional CV with dark/light themes
- 🌍 **Multi-language**: English and Chinese (中文) support
- 💬 **Guestbook**: PostgreSQL-backed messaging system
- 🔐 **Wallet Auth**: MetaMask integration with owner-only access control
- 🎨 **Modern UI**: Animated particles background with Tailwind CSS
- 📄 **PDF Export**: Export resume with localized filenames
- 🔒 **Secure**: Environment-based configuration, no hardcoded credentials

---

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (local or remote)
- MetaMask or compatible Web3 wallet (optional, for guestbook)

### Installation

1. **Clone and install dependencies**:
   ```bash
   git clone <your-repo-url>
   cd my-cv
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` and add your database credentials:
   ```bash
   DATABASE_URL=postgresql://YOUR_USERNAME:YOUR_PASSWORD@YOUR_HOST:5432/YOUR_DATABASE
   DATABASE_SSL=false
   ```

3. **Initialize database**:
   ```bash
   npm run db:init
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**: [http://localhost:3000](http://localhost:3000)

---

## Database Setup

### Automatic Setup (Recommended)

Run the initialization script:
```bash
npm run db:init
```

This will:
- Connect to your PostgreSQL database
- Create the `guestbook_messages` table
- Create necessary indexes
- Verify the setup

### Manual Setup

If automatic setup fails, connect to your PostgreSQL server and run:

```sql
-- Create guestbook_messages table
CREATE TABLE IF NOT EXISTS guestbook_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  author_address TEXT,
  author_github TEXT,
  author_name TEXT NOT NULL,
  message TEXT NOT NULL,
  CONSTRAINT check_author CHECK (
    author_address IS NOT NULL OR author_github IS NOT NULL
  )
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_messages_created_at ON guestbook_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_messages_author_address ON guestbook_messages(author_address);
CREATE INDEX IF NOT EXISTS idx_messages_author_github ON guestbook_messages(author_github);
```

See `scripts/init-database.sql` for the complete SQL script.

### Database Schema

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key (auto-generated) |
| created_at | TIMESTAMP | Message timestamp |
| author_address | TEXT | Wallet address (optional) |
| author_github | TEXT | GitHub username (optional) |
| author_name | TEXT | Display name (required) |
| message | TEXT | Message content (required) |

**Constraint**: At least one of `author_address` or `author_github` must be provided.

---

## Environment Variables

### Required

- `DATABASE_URL`: PostgreSQL connection string
  - Format: `postgresql://username:password@host:port/database`
  - Example: `postgresql://user:pass@localhost:5432/cv_database`

- `NEXTAUTH_SECRET`: Secret used to sign and encrypt NextAuth JWT/session
  - Generate locally: `openssl rand -base64 32`

- `NEXTAUTH_URL`: The canonical application URL
  - Local: `http://localhost:3000`
  - Production: `https://your-project.vercel.app`

- `GITHUB_ID`: GitHub OAuth Client ID
- `GITHUB_SECRET`: GitHub OAuth Client Secret

### Optional

- `DATABASE_SSL`: Enable SSL for database connection (`true` or `false`, default: `false`)

### Vercel Deployment

Add environment variables in Vercel Dashboard:

1. Go to **Project Settings** → **Environment Variables**
2. Add `DATABASE_URL` with your connection string
3. Add `DATABASE_SSL` (optional)
4. Select environments: **Production**, **Preview**, **Development**
5. Save and redeploy

Or use Vercel CLI:
```bash
vercel env add DATABASE_URL
vercel env add DATABASE_SSL
vercel env add NEXTAUTH_SECRET
vercel env add NEXTAUTH_URL
vercel env add GITHUB_ID
vercel env add GITHUB_SECRET
```

---

## Project Structure

```
my-cv/
├── app/
│   ├── api/
│   │   └── guestbook/          # API routes for guestbook
│   ├── components/             # React components
│   │   ├── Header.tsx          # CV header with contact info
│   │   ├── Experience.tsx      # Work experience section
│   │   ├── Projects.tsx        # Project showcase
│   │   ├── Skills.tsx          # Skills grid
│   │   ├── Sidebar.tsx         # Settings sidebar
│   │   └── ...
│   ├── contexts/               # React contexts
│   │   ├── LanguageContext.tsx # Multi-language support
│   │   └── WalletContext.tsx   # Web3 wallet integration
│   ├── guestbook/              # Guestbook page
│   │   └── page.tsx
│   ├── lib/
│   │   ├── db.ts               # Database client and queries
│   │   └── i18n.ts             # Translations and resume data
│   ├── globals.css             # Global styles and print CSS
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Main CV page
├── scripts/
│   ├── init-database.ts        # Automated database setup
│   ├── init-database.sql       # Manual SQL setup script
│   └── create-user.sql         # User creation script
├── public/                     # Static assets
├── .env.local.example          # Environment template
└── package.json
```

---

## Features Guide

### Guestbook

The guestbook allows visitors to leave messages with wallet or GitHub authentication.

**Access Control**:
- **Owner** (wallet `0xea1e562c8e689d938d67a8ef9bd44d4ddb82e76b`): Views all messages
- **Visitors**: View only their own messages after authentication

**Authentication Methods**:
- **Wallet**: Connect MetaMask or compatible Web3 wallet
- **GitHub (SSO)**: Sign in via GitHub OAuth using NextAuth.js

**Usage**:
1. Click **Settings** button (top right)
2. Click **Guestbook** → **Open**
3. Sign in with wallet or GitHub
4. Leave a message with your name

Notes:
- When authenticated, the display name is locked to your identity:
  - Wallet sign-in → address as name
  - GitHub sign-in → GitHub username as name
- Owner privileges (wallet `0xea1e...e76b` or GitHub `yy9331`): view/delete all messages and inline edit message content (except author name).

### Authentication (GitHub OAuth SSO)

This project uses NextAuth.js with the GitHub provider.

1) Create a GitHub OAuth App

- Open GitHub Developer Settings → OAuth Apps → New OAuth App
- Local development values:
  - Application name: My CV Guestbook
  - Homepage URL: `http://localhost:3000`
  - Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
- After registering, copy the Client ID and generate a Client Secret

2) Configure env vars

Add to `.env.local`:

```bash
NEXTAUTH_SECRET=<openssl rand -base64 32>
NEXTAUTH_URL=http://localhost:3000
GITHUB_ID=<your_client_id>
GITHUB_SECRET=<your_client_secret>
```

3) Start the app and test

```bash
npm run dev
# visit http://localhost:3000/guestbook and click "Sign in with GitHub"
```

4) Production (Vercel)

- Create another GitHub OAuth App for production with:
  - Homepage URL: `https://your-project.vercel.app`
  - Callback URL: `https://your-project.vercel.app/api/auth/callback/github`
- Set envs in Vercel: `NEXTAUTH_URL` to your domain, plus `NEXTAUTH_SECRET`, `GITHUB_ID`, `GITHUB_SECRET`

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
- All content (CV, guestbook, UI) updates automatically
- Language preference saved to localStorage

### Wallet Integration

Connect MetaMask to:
- Sign guestbook messages
- Access owner-only features (if you're the CV owner)

Supported networks:
- Ethereum Mainnet
- Optimism
- Polygon
- Arbitrum
- BNB Smart Chain

---

## Security Best Practices

### ✅ Implemented

- Environment variables for sensitive data
- No hardcoded credentials in source code
- `.env.local` gitignored
- Connection pooling for database
- Input validation on API routes

### 🔒 Recommended for Production

1. **Enable SSL for database**:
   ```bash
   DATABASE_SSL=true
   ```

2. **Use IP whitelisting** in `pg_hba.conf`:
   ```
   host  your_database  your_user  VERCEL_IP_RANGE  md5
   ```

3. **Rotate passwords regularly** (every 3-6 months)

4. **Add rate limiting** to API routes (e.g., with `express-rate-limit` or Vercel Edge Config)

5. **Enable database audit logging**:
   ```sql
   -- In postgresql.conf
   log_connections = on
   log_disconnections = on
   log_statement = 'all'
   ```

6. **Use read-only user for analytics** (optional):
   ```sql
   CREATE USER readonly_user WITH PASSWORD 'secure_password';
   GRANT CONNECT ON DATABASE your_database TO readonly_user;
   GRANT SELECT ON guestbook_messages TO readonly_user;
   ```

### If Credentials Are Compromised

1. **Immediately change database password**:
   ```sql
   ALTER USER your_username WITH PASSWORD 'new_secure_password';
   ```

2. **Update environment variables**:
   - Local: `.env.local`
   - Vercel: Dashboard or CLI

3. **Check database logs** for unauthorized access

4. **Review Git history**:
   ```bash
   git log --all --full-history -- .env.local
   ```

5. **Consider migrating database** if exposure was severe

---

## Scripts

- `npm run dev` - Start development server (with Turbopack)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:init` - Initialize database (create tables and indexes)

---

## Troubleshooting

### "DATABASE_URL environment variable is not set"

**Solution**:
1. Ensure `.env.local` exists in project root
2. Verify it contains `DATABASE_URL=...`
3. Restart dev server: `npm run dev`

### "password authentication failed"

**Causes**:
- Incorrect username/password
- User doesn't exist
- PostgreSQL not configured for remote access

**Solutions**:
1. Verify credentials in `.env.local`
2. Create user if needed (see `scripts/create-user.sql`)
3. Configure PostgreSQL to allow remote connections:
   - Edit `postgresql.conf`: `listen_addresses = '*'`
   - Edit `pg_hba.conf`: Add entry for your IP/user
   - Restart PostgreSQL: `sudo systemctl restart postgresql`

### "relation 'guestbook_messages' does not exist"

**Solution**: Run database initialization:
```bash
npm run db:init
```

Or manually execute `scripts/init-database.sql`

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
- **Database**: PostgreSQL with `pg` driver
- **Web3**: MetaMask integration (viem/wagmi-compatible context)
- **Animations**: tsParticles (background particles)
- **PDF Export**: Browser native print API
- **TypeScript**: Full type safety
- **Deployment**: Vercel-ready

---

## Contributing

This is a personal CV project, but suggestions are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## License

MIT License - feel free to use this template for your own CV!

---

## Contact

- **Email**: yuyi.gz@gmail.com
- **GitHub**: [@yy9331](https://github.com/yy9331)
- **Telegram**: [@yy9331](https://t.me/yy9331)
- **X (Twitter)**: [@yy9331](https://x.com/yy9331)
- **Discord**: yy9331_03247

---

## Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Deployed on [Vercel](https://vercel.com)
- Icons from [React Icons](https://react-icons.github.io/)
- Particles by [tsParticles](https://particles.js.org/)

---

**Note**: This is an open-source project. All sensitive credentials (database passwords, API keys) are stored in `.env.local` which is gitignored. Never commit credentials to version control!