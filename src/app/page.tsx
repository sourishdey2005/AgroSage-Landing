import Navigation from "@/components/landing/navigation";
import Hero from "@/components/landing/hero";
import WhoWeServe from "@/components/landing/who-we-serve";
import KeyFeatures from "@/components/landing/key-features";
import ImpactNumbers from "@/components/landing/impact-numbers";
import HowItWorks from "@/components/landing/how-it-works";
import BehindTheAI from "@/components/landing/behind-the-ai";
import AIModels from "@/components/landing/ai-models";
import TechStack from "@/components/landing/tech-stack";
import Team from "@/components/landing/team";
import Cta from "@/components/landing/cta";
import Footer from "@/components/landing/footer";
import DataEngine from "@/components/landing/data-engine";
import Testimonials from "@/components/landing/testimonials";
import BlockchainFeatures from "@/components/landing/blockchain-features";
import SubscriptionPlans from "@/components/landing/subscription-plans";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <WhoWeServe />
        <KeyFeatures />
        <ImpactNumbers />
        <HowItWorks />
        <DataEngine />
        <BehindTheAI />
        <AIModels />
        <TechStack />
        <Testimonials />
        <Team />
        <BlockchainFeatures />
        <SubscriptionPlans />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
