import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: `${site.fullName} — ${site.role}`,
  description: "문제를 정의하고 프로토타입까지 직접 만들어 검증하는 AI Product Builder. 수리넷 창업, AX 인재전쟁 본선, 해커톤 우승, HR RAG 챗봇, 스톡챗.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={inter.variable}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
