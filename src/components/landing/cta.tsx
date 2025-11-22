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
        <p className="mt-6 font-body text-lg opacity-90">
          Join the future of farming. It’s free for farmers, secure for banks, and verified for government.
        </p>
        <div className="mt-10">
          <Button
            size="lg"
            variant="outline"
            className="h-14 rounded-full border-2 border-primary-foreground bg-transparent px-10 text-lg font-bold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            Join AgroSage
          </Button>
        </div>
      </div>
    </section>
  );
}
