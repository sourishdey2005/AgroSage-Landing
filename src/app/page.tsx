import Navigation from "@/components/landing/navigation";
import Hero from "@/components/landing/hero";
import WhoWeServe from "@/components/landing/who-we-serve";
import KeyFeatures from "@/components/landing/key-features";
import DashboardPreviews from "@/components/landing/dashboard-previews";
import WhyAgroSage from "@/components/landing/why-agrosage";
import Testimonials from "@/components/landing/testimonials";
import DataEngine from "@/components/landing/data-engine";
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
        <DashboardPreviews />
        <WhyAgroSage />
        <Testimonials />
        <DataEngine />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
