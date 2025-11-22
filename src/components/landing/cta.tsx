import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section
      id="cta"
      className="bg-gradient-to-r from-primary via-green-700 to-green-800 py-20 text-primary-foreground"
    >
      <div className="container mx-auto text-center">
        <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
          Start Transforming Agriculture Today
        </h2>
        <p className="mt-6 font-body text-lg text-white/80">
          Join the digital revolution and empower your agricultural decisions with the power of AI.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            variant="outline"
            className="h-14 rounded-full border-2 border-primary-foreground bg-white px-10 text-lg font-bold text-primary transition-colors hover:bg-transparent hover:text-primary-foreground"
          >
            Join AgroSage
          </Button>
          <p className="text-sm text-white/70">Free for Farmers • Secure for Banks • Verified for Government</p>
        </div>
      </div>
    </section>
  );
}
