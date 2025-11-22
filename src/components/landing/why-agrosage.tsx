import { Cpu, Satellite, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const pillars = [
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "AI-Powered",
    description: "Trained on 20+ years of climate, satellite, and market data to provide unparalleled predictive accuracy.",
  },
  {
    icon: <Satellite className="h-8 w-8 text-primary" />,
    title: "Real-Time Insights",
    description: "Access live satellite maps, mandi prices, and dynamic rainfall models for proactive decision-making.",
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Made for India",
    description: "Comprehensive support for all major Indian crops, regions, languages, and soil types.",
  },
];

export default function WhyAgroSage() {
  return (
    <section id="why-agrosage" className="relative overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 z-0 opacity-5">
        {/* Subtle background crop pattern would go here as an SVG */}
      </div>
      <div className="container relative z-10 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Why AgroSage?
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            The most comprehensive and intelligent platform for Indian agriculture.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Card key={index} className="border-0 bg-transparent shadow-none">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-card shadow-sm">
                  {pillar.icon}
                </div>
                <CardTitle className="font-headline text-xl font-bold">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-muted-foreground">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
