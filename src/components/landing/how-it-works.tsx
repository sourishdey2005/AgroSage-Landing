import { UploadCloud, Bot, BarChart } from "lucide-react";

const steps = [
  {
    icon: <UploadCloud className="h-10 w-10 text-primary" />,
    step: "1. Data Aggregation",
    description: "We collect data from satellites, drones, IoT sensors, and field agents.",
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    step: "2. AI Analysis",
    description: "Our proprietary AI models process and analyze the multi-layered data.",
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    step: "3. Actionable Insights",
    description: "Get tailored reports, alerts, and forecasts on our unified dashboards.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-background">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            A simple, powerful process to turn data into decisions.
          </p>
        </div>
        <div className="relative">
            <div className="absolute left-1/2 top-10 hidden h-0.5 w-2/3 -translate-x-1/2 bg-primary md:block"></div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {steps.map((item, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 border-2 border-primary bg-background">
                    {item.icon}
                </div>
                <h3 className="font-headline text-xl font-bold">{item.step}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
}
