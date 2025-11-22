import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import IndiaMap from "./india-map";
import { PlayCircle } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background pt-16 md:pt-24 lg:pt-32">
       <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-black/90 opacity-80"></div>
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
      <div className="container relative z-10 mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="secondary" className="mb-4 animate-fade-in rounded-lg bg-white/10 py-1 text-sm font-normal text-white backdrop-blur-sm">
              Trusted by 50,000+ Farmers
            </Badge>
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              India’s Smartest Agriculture Intelligence Platform
            </h1>
            <p className="mt-6 max-w-xl font-body text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
              AI-powered insights for Farmers, Banks, Agents & Government.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button asChild size="lg" className="rounded-full bg-primary font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-shadow hover:shadow-xl hover:shadow-primary/40">
                <Link href="https://agro-wise-sigma.vercel.app/login" target="_blank" rel="noopener noreferrer">
                  Start Exploring
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/30 bg-transparent text-white backdrop-blur-sm hover:bg-white/10 hover:text-white">
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="relative flex h-full min-h-[300px] items-center justify-center lg:min-h-[500px]">
            <IndiaMap />
          </div>
        </div>
      </div>
    </section>
  );
}
