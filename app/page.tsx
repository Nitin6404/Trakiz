import { LandingPage } from "@/components/component/landing-page";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Trakiz',
  description: 'Trakiz is a simple, fast, and secure way to track your habits and goals.',
  icons: "/logooftrakiz.png",
}

export default function Home() {
  return (
    <div className="w-screen">
      <LandingPage />
    </div>
  );
}
