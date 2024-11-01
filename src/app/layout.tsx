import type { Metadata } from "next";
import localFont from "next/font/local";

import { Header } from "@/ui/components/Header";
import "normalize.css";
import styles from "./styles.module.css";
import Head from "next/head";

const tacticSans = localFont({
  src: [
    { path: "./fonts/TacticSans-Thn.woff2", weight: "100", style: "normal" },
    { path: "./fonts/TacticSans-Lgt.woff2", weight: "300", style: "normal" },
    { path: "./fonts/TacticSans-Reg.woff2", weight: "400", style: "normal" },
    { path: "./fonts/TacticSans-Med.woff2", weight: "500", style: "normal" },
    { path: "./fonts/TacticSans-Bld.woff2", weight: "700", style: "normal" },
    { path: "./fonts/TacticSans-Ult.woff2", weight: "800", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Тестовое задание",
  description: "Тестовое задание",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={styles.root}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
        />
      </Head>
      <body className={tacticSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
