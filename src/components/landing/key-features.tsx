import { BrainCircuit, Map, TrendingUp, CloudSun, ShieldCheck, Receipt } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Yield Predictor",
    description: "Forecast crop yields with over 95% accuracy using machine learning.",
  },
  {
    icon: Map,
    title: "Satellite Crop Health",
    description: "Monitor crop health and stress levels in real-time with satellite imagery.",
  },
  {
    icon: TrendingUp,
    title: "Market Price Forecasting",
    description: "Predict mandi prices to help farmers sell at the optimal time.",
  },
  {
    icon: CloudSun,
    title: "Real-Time Weather Alerts",
    description: "Get hyper-local weather alerts and advisories to protect your crops.",
  },
  {
    icon: ShieldCheck,
    title: "Loan & Credit Risk Engine",
    description: "Assess creditworthiness of farmers using alternative data points.",
  },
  {
    icon: Receipt,
    title: "Subsidy Tracking System",
    description: "A transparent system for government to manage and disburse subsidies.",
  },
];

export default function KeyFeatures() {
  return (
    <section id="features" className="bg-background">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Flagship Features
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            Unlock the power of data with our advanced agricultural tools.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-card/75 hover:shadow-xl hover:shadow-primary/10">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-headline text-lg font-bold">{feature.title}</h3>
                  <p className="mt-2 font-body text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
