import "../../public/reset.css";
import "@/app/styles/global.css";

import type { Metadata } from "next";
import { color } from "./styles/color";

export const metadata: Metadata = {
  title: "하지원 포트폴리오",
  description: "Jiwon Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: color.white,
          padding: 30,
          overflow: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  );
}
