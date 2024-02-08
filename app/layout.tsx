import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import MainLayout from "./layouts/MainLayout";
import ModalProvider from "./untils/ModalProvider";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hieu's portfolio",
  description: "Something of hieubachvan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        <ModalProvider>
          <MainLayout>{children}</MainLayout>
        </ModalProvider>
      </body>
    </html>
  );
}
