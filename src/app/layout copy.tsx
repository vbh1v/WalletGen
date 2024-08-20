import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { REM } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "@/components/Footer";

const rem = REM({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WalletGen",
  description: "A simple Web3 Wallet generator.",
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      url: "/favicon-light.png",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-dark.png",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={rem.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Footer/>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
