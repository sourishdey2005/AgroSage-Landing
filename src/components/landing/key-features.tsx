import { BrainCircuit, Map, TrendingUp, CloudSun, ShieldCheck, Receipt, Warehouse, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Yield Predictor",
    description: "Forecast crop yields with 95% accuracy.",
  },
  {
    icon: Map,
    title: "Satellite Crop Health",
    description: "Monitor crop health in real-time via satellite.",
  },
  {
    icon: TrendingUp,
    title: "Market Price Forecasting",
    description: "Predict mandi prices to sell at the right time.",
  },
  {
    icon: CloudSun,
    title: "Real-Time Weather",
    description: "Get hyper-local weather alerts and advisories.",
  },
  {
    icon: ShieldCheck,
    title: "Loan & Credit Risk",
    description: "AI-powered risk engine for financial institutions.",
  },
  {
    icon: Receipt,
    title: "Subsidy Tracking",
    description: "Transparently track subsidy disbursement.",
  },
  {
    icon: Warehouse,
    title: "Mandi Intelligence",
    description: "Analyze arrivals and price trends across mandis.",
  },
  {
    icon: Sparkles,
    title: "Smart Recommendations",
    description: "Personalized advice for irrigation and pests.",
  },
];

export default function KeyFeatures() {
  return (
    <section id="features" className="bg-secondary/30">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Flagship Features
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            Harness the power of data and AI for smarter agriculture.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-card hover:shadow-xl">
              <CardContent className="p-6">
                <div className="mb-4">
                  <feature.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-headline text-lg font-bold">{feature.title}</h3>
                <p className="mt-2 font-body text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
