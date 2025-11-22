"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, XAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { ChartTooltipContent } from "@/components/ui/chart";
import { Database, LineChart, MapPin, Store } from "lucide-react";

const chartData = [
  { month: 'Jan', yield: 186 },
  { month: 'Feb', yield: 305 },
  { month: 'Mar', yield: 237 },
  { month: 'Apr', yield: 273 },
  { month: 'May', yield: 209 },
  { month: 'Jun', yield: 214 },
];

const dataPoints = [
  {
    icon: <Database className="h-6 w-6 text-primary" />,
    value: "5TB+",
    label: "Agricultural Datasets",
  },
  {
    icon: <LineChart className="h-6 w-6 text-primary" />,
    value: "20M+",
    label: "Crop Health Records",
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    value: "890",
    label: "Districts Mapped",
  },
  {
    icon: <Store className="h-6 w-6 text-primary" />,
    value: "4500+",
    label: "Mandi Price Sources",
  },
];


export default function DataEngine() {
  return (
    <section id="data-engine" className="bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              The Intelligence Behind the Insights
            </h2>
            <p className="mt-4 font-body text-lg text-muted-foreground">
              Our robust data engine processes petabytes of information to deliver actionable intelligence in milliseconds.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {dataPoints.map((point) => (
                <div key={point.label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-card shadow-sm">
                    {point.icon}
                  </div>
                  <div>
                    <p className="font-headline text-2xl font-bold text-primary">{point.value}</p>
                    <p className="text-sm text-muted-foreground">{point.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Card className="shadow-xl shadow-primary/10">
              <CardHeader>
                <CardTitle className="font-headline">Yield Prediction Model</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis
                      dataKey="month"
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip
                        cursor={{fill: 'hsl(var(--accent) / 0.3)'}}
                        content={<ChartTooltipContent />}
                     />
                    <Bar dataKey="yield" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
