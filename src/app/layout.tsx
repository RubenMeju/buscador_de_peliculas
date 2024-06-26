import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies App",
  description: "Videoclub online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-300 dark:bg-black`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="w-4/5 m-auto">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
