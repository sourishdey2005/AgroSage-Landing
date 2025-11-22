import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import IndiaMap from "./india-map";
import { PlayCircle, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background pt-16 md:pt-24 lg:pt-32">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-background to-background"></div>
      <div className="container relative z-10 mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="outline" className="mb-4 border-primary/50 bg-primary/10 text-primary animate-fade-in">
              Trusted by 50,000+ Farmers
            </Badge>
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              India’s Smartest Agriculture Intelligence Platform
            </h1>
            <p className="mt-6 max-w-xl font-body text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
              AI-powered insights for Farmers, Banks, Agents & Government.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-green-700 font-bold text-primary-foreground shadow-lg hover:shadow-xl transition-shadow">
                <Rocket className="mr-2 h-5 w-5" />
                Start Exploring
              </Button>
              <Button size="lg" variant="outline" className="rounded-full bg-background/50 backdrop-blur-sm">
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
