import { ThemeProvider } from "@/components/component/theme-provider";
import { Providers } from '@/app/providers'
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
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
