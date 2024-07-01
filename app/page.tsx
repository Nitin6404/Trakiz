import { Main } from "@/components/main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Trakiz',
  description: 'Trakiz is a simple, fast, and secure way to track your habits and goals.',
  icons: "/logooftrakiz.png",
}

export default function Home() {
  return (
    <>
    <Main />
    </>
  );
}
