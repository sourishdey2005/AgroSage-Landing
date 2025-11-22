import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit, Database, ShieldCheck, Box } from "lucide-react";

const technologies = [
  {
    icon: <BrainCircuit className="h-8 w-8" />,
    name: "Geospatial AI"
  },
  {
    icon: <Box className="h-8 w-8" />,
    name: "Neural Networks"
  },
  {
    icon: <Database className="h-8 w-8" />,
    name: "Big Data Pipelines"
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    name: "Blockchain"
  }
];

export default function BehindTheAI() {
  return (
    <section id="technology" className="bg-background">
      <div className="container mx-auto text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Behind the AI
        </h2>
        <p className="mt-4 font-body text-lg text-muted-foreground">
          Powered by a robust, scalable, and cutting-edge technology stack.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {technologies.map((tech) => (
            <Card key={tech.name} className="border-border/50 bg-card/50 p-6 transition-colors hover:border-primary/50 hover:bg-card/75">
              <CardContent className="flex flex-col items-center justify-center gap-4">
                <div className="text-primary">{tech.icon}</div>
                <p className="font-semibold text-foreground">{tech.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
