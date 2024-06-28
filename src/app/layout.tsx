import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import siteConfig from "@/core/data/site-config";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import PageWrapper from "@/components/shells/PageWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <PageWrapper>
          <Header />
          {children}
        </PageWrapper>
        <Toaster invert />
      </body>
    </html>
  );
}
