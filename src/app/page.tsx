import Navigation from "@/components/landing/navigation";
import Hero from "@/components/landing/hero";
import WhoWeServe from "@/components/landing/who-we-serve";
import KeyFeatures from "@/components/landing/key-features";
import ImpactNumbers from "@/components/landing/impact-numbers";
import HowItWorks from "@/components/landing/how-it-works";
import BehindTheAI from "@/components/landing/behind-the-ai";
import Cta from "@/components/landing/cta";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <WhoWeServe />
        <KeyFeatures />
        <ImpactNumbers />
        <HowItWorks />
        <BehindTheAI />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
