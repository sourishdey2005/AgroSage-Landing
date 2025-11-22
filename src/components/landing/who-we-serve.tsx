import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Users, Landmark, Building } from "lucide-react";

const services = [
  {
    icon: <Leaf className="h-8 w-8 text-primary" />,
    title: "Farmers",
    description: "Crop guidance, weather insights, and AI-powered yield forecasts to maximize output.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Field Agents",
    description: "Efficient field survey tools, digital farmer onboarding, and real-time data collection.",
  },
  {
    icon: <Landmark className="h-8 w-8 text-primary" />,
    title: "Banks",
    description: "Accurate loan risk prediction, data-driven credit insights, and portfolio monitoring.",
  },
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    title: "Government",
    description: "Policy impact analytics, subsidy-based monitoring, and supply management.",
  },
];

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="bg-background">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Who We Serve
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            Tailored solutions for every stakeholder in the agricultural ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="group transform border-border/50 bg-card/50 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:bg-card/75 hover:shadow-2xl hover:shadow-primary/10">
              <CardHeader className="items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-2xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
