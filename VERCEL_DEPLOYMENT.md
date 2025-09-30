# Vercel 部署指南 / Vercel Deployment Guide

## 环境变量配置

### 重要提示
Push 代码到 GitHub 后，你的 `.env.local` 文件不会上传（已被 `.gitignore` 忽略）。
你需要在 Vercel Dashboard 中手动配置环境变量。

---

## 配置步骤

### 方法 1：通过 Vercel Dashboard（推荐）

1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 选择你的项目
3. 点击 **Settings** → **Environment Variables**
4. 添加以下变量：

#### DATABASE_URL
- **Key**: `DATABASE_URL`
- **Value**: `postgresql://yy9331:justin84@154.89.149.178:5432/cv_database`
- **Environments**: 勾选 `Production`, `Preview`, `Development`

#### DATABASE_SSL
- **Key**: `DATABASE_SSL`
- **Value**: `false`
- **Environments**: 勾选 `Production`, `Preview`, `Development`

5. 点击 **Save**
6. 触发重新部署：**Deployments** → 最新部署 → **Redeploy**

---

### 方法 2：通过 Vercel CLI

如果你安装了 Vercel CLI：

```bash
# 安装 Vercel CLI（如果还没有）
npm i -g vercel

# 登录
vercel login

# 切换到项目目录
cd /path/to/my-cv

# 添加环境变量
vercel env add DATABASE_URL
# 输入: postgresql://yy9331:justin84@154.89.149.178:5432/cv_database
# 选择环境: Production, Preview, Development

vercel env add DATABASE_SSL
# 输入: false
# 选择环境: Production, Preview, Development

# 查看已配置的环境变量
vercel env ls
```

---

## 验证部署

### 1. 检查环境变量是否生效

部署完成后，访问你的 Vercel 项目 URL：
```
https://your-project.vercel.app/api/guestbook?ownerAddress=0xea1e562c8e689d938d67a8ef9bd44d4ddb82e76b
```

如果返回 JSON 数据（即使是空数组 `[]`），说明数据库连接成功。

### 2. 测试留言板功能

1. 访问：`https://your-project.vercel.app/guestbook`
2. 连接钱包或输入 GitHub 用户名
3. 尝试发送留言
4. 检查是否保存成功

---

## 常见问题

### ❌ "DATABASE_URL environment variable is not set"

**原因**: Vercel 中未配置环境变量

**解决**:
1. 检查 Vercel Dashboard → Settings → Environment Variables
2. 确保 `DATABASE_URL` 已添加且选择了正确的环境（Production/Preview/Development）
3. 重新部署项目

---

### ❌ "Connection timeout" 或 "Unable to connect to database"

**原因**: 数据库服务器防火墙阻止了 Vercel 的 IP

**解决**:
1. 确保你的数据库服务器允许外部连接
2. 配置防火墙允许端口 5432
3. 检查 PostgreSQL 的 `pg_hba.conf` 和 `postgresql.conf`

推荐配置 `pg_hba.conf`:
```
# 允许所有 IP（生产环境建议限制为 Vercel IP 段）
host  cv_database  yy9331  0.0.0.0/0  md5
```

---

### ❌ "password authentication failed"

**原因**: 环境变量中的密码错误

**解决**:
1. 验证 `.env.local` 中的密码是否正确
2. 确保 Vercel Dashboard 中的 `DATABASE_URL` 与本地一致
3. 检查数据库用户是否存在：
   ```sql
   SELECT usename FROM pg_user WHERE usename = 'yy9331';
   ```

---

## 安全建议（生产环境）

### 🔒 部署到生产前

1. **修改数据库密码**（推荐）:
   ```sql
   ALTER USER yy9331 WITH PASSWORD 'new_strong_password_123!@#';
   ```
   然后更新 Vercel 中的 `DATABASE_URL`

2. **启用 SSL**（如果数据库支持）:
   - 设置 `DATABASE_SSL=true`
   - 确保数据库配置了 SSL 证书

3. **配置 IP 白名单**:
   - 获取 Vercel 的 IP 范围
   - 在数据库防火墙中只允许这些 IP

4. **启用数据库日志**:
   ```sql
   -- postgresql.conf
   log_connections = on
   log_disconnections = on
   ```

---

## Git 安全检查

### 确保敏感信息没有提交

部署前运行：

```bash
# 检查 .env.local 是否被 gitignore
git check-ignore .env.local
# 应该输出: .env.local

# 检查 Git 历史中是否有泄露
git log --all --full-history --source --all -- .env.local

# 检查暂存区
git status
# 不应该看到 .env.local
```

如果 `.env.local` 已经被提交：

```bash
# 从 Git 历史中移除
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch .env.local" \
  --prune-empty --tag-name-filter cat -- --all

# 强制推送
git push origin --force --all
```

---

## 部署检查清单

- [ ] `.env.local` 已添加到 `.gitignore`
- [ ] `.env.local.example` 已脱敏且提交到 Git
- [ ] Vercel Dashboard 中已配置 `DATABASE_URL`
- [ ] Vercel Dashboard 中已配置 `DATABASE_SSL`
- [ ] 环境变量已选择正确的环境（Production/Preview/Development）
- [ ] 数据库表已创建（`guestbook_messages`）
- [ ] 数据库允许远程连接（防火墙和 `pg_hba.conf`）
- [ ] 代码已推送到 GitHub
- [ ] Vercel 已触发自动部署或手动重新部署
- [ ] 访问 `/guestbook` 页面测试功能

---

## 后续维护

### 更新环境变量

如果需要修改数据库密码或其他配置：

1. 更新本地 `.env.local`
2. 更新 Vercel Dashboard 中的环境变量
3. 重新部署项目（Vercel 会自动重启以应用新变量）

### 查看部署日志

如果出现问题：

1. Vercel Dashboard → **Deployments** → 点击具体部署
2. 查看 **Function Logs** 或 **Build Logs**
3. 搜索错误信息（如 "DATABASE_URL" 或 "connection"）

---

**记住**: Vercel 的环境变量是与代码仓库分离的，这是一个安全的设计！
