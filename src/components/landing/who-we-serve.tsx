import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tractor, ClipboardList, Landmark, Building } from "lucide-react";

const services = [
  {
    icon: <Tractor className="h-10 w-10 text-primary" />,
    title: "Farmers",
    description: "Crop guidance, real-time weather insights, and AI-driven yield forecasts to maximize your harvest.",
  },
  {
    icon: <ClipboardList className="h-10 w-10 text-primary" />,
    title: "Agents",
    description: "Digital field survey tools, streamlined farmer onboarding, and performance tracking.",
  },
  {
    icon: <Landmark className="h-10 w-10 text-primary" />,
    title: "Banks",
    description: "Advanced loan risk prediction, agricultural credit insights, and portfolio monitoring.",
  },
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: "Government",
    description: "Policy impact analytics, subsidy distribution tracking, and satellite-based regional monitoring.",
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
            A unified platform connecting every stakeholder in agriculture.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="group transform text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
              <CardHeader className="items-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-accent/30 transition-colors group-hover:bg-accent">
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
