import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 优化字体加载，确保中文字体正确显示
  experimental: {
    optimizeCss: true,
  },
  // 添加字体优化配置
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
