import { ThemeProvider } from "@/components/component/theme-provider";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Providers } from '@/app/providers'
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import "./globals.css";

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});


export const metadata: Metadata = {
  title: 'Trakiz',
  description: 'Trakiz is a simple, fast, and secure way to track your habits and goals.',
  icons: "/logooftrakiz.png",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", fontHeading.variable, fontBody.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SpeedInsights />
          <Analytics />
          <Toaster
            toastOptions={{
              style: {
                textAlign: "center",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
