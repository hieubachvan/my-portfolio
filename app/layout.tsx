import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import MainLayout from "./layouts/MainLayout";
import ModalProvider from "./untils/ModalProvider";

const workSans = Work_Sans({ subsets: ["latin"] });

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
      <body className={workSans.className}>
        <ModalProvider>
          <MainLayout>{children}</MainLayout>
        </ModalProvider>
      </body>
    </html>
  );
}
