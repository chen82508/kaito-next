import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaito",
  description: "Kaito 的個人網頁：軟體工程師，開放 Forward Deployed Engineer（FDE）職缺與自主接案合作。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
