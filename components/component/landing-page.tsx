import { Separator } from "@/components/ui/separator";
import Header from "@/components/component/Header";
import HeroSection from "@/components/component/HeroSection";
import CardSection from "@/components/component/CardSection";
import Footer from "@/components/component/Footer";
import GradientEffect from "@/components/component/GradientEffect";

export function LandingPage() {
  return (
    <div className="bg-black w-full text-white font-sans relative">
      <GradientEffect />
      <Header />
      <HeroSection />
      <CardSection />
      <Separator className="bg-[#575757]" />
      <Footer />
    </div>
  );
}


