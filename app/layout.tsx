import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { EmailToastProvider } from "@/components/EmailToast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://usmanhaider.tech"),
  title: "Usman Haider | Software Engineer – AI Automation and Full Stack",
  description:
    "Hi, I'm Usman Haider. I build AI automations with n8n and full stack web apps. Explore my real projects and watch Loom walkthroughs.",
  keywords: [
    "Usman Haider",
    "Software Engineer",
    "AI Automation",
    "n8n",
    "Full Stack",
    "Next.js",
    "TypeScript",
    "Python",
    "Node.js",
    "PostgreSQL",
  ],
  authors: [{ name: "Usman Haider" }],
  creator: "Usman Haider",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://usmanhaider.tech",
    title: "Usman Haider | Software Engineer – AI Automation and Full Stack",
    description:
      "Hi, I'm Usman Haider. I build AI automations with n8n and full stack web apps. Explore my real projects and watch Loom walkthroughs.",
    siteName: "Usman Haider Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usman Haider | Software Engineer – AI Automation and Full Stack",
    description:
      "Hi, I'm Usman Haider. I build AI automations with n8n and full stack web apps. Explore my real projects and watch Loom walkthroughs.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#090a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased selection:bg-indigo-500 selection:text-white`}>
        <ThemeProvider>
          <EmailToastProvider>{children}</EmailToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
