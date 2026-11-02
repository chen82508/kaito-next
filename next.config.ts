import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 靜態匯出到 out/，供 GitHub Pages 發布
  output: "export",
  // Project site 位於 /<repo>/ 子路徑；由部署 workflow 設定，本機開發維持根路徑
  basePath: process.env.PAGES_BASE_PATH ?? "",
  trailingSlash: true,
  // cacheComponents（PPR）與 output: "export" 不相容；純靜態頁也用不到
};

export default nextConfig;
