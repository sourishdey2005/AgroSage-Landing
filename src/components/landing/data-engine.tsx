'use client';
import { Banknote, Building, Briefcase, Tractor, BrainCircuit } from 'lucide-react';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import IndiaMap from './india-map';

const chartData = [
  { user: 'Farmers', value: 1.2, fill: 'hsl(var(--primary))' },
  { user: 'Agents', value: 0.2, fill: 'hsl(var(--primary))' },
  { user: 'Banks', value: 0.05, fill: 'hsl(var(--primary))' },
  { user: 'Government', value: 0.02, fill: 'hsl(var(--primary))' },
];

const chartConfig = {
  value: {
    label: 'Users (in Millions)',
  },
} satisfies ChartConfig;

const dataConnections = [
  {
    icon: <Tractor className="size-8 text-primary" />,
    title: 'Farmer Data',
    description: 'Crop type, planting dates, soil health from IoT sensors.',
    delay: '0.2s',
  },
  {
    icon: <Briefcase className="size-8 text-primary" />,
    title: 'Field Agent Data',
    description: 'Geo-tagged surveys, farmer verification (eKYC).',
    delay: '0.3s',
  },
  {
    icon: <Banknote className="size-8 text-primary" />,
    title: 'Financial Data',
    description: 'Loan performance, market prices from Mandis.',
    delay: '0.4s',
  },
  {
    icon: <Building className="size-8 text-primary" />,
    title: 'Government Data',
    description: 'Policy changes, subsidy info, district-level stats.',
    delay: '0.5s',
  },
];

export default function DataEngine() {
  return (
    <section id="technology" className="py-24 bg-background-light dark:bg-black/20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-deep-grey dark:text-white">
            The AgroSage Data Engine
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-deep-grey/70 dark:text-white/60 font-soft">
            We fuse diverse data streams into a unified intelligence layer, powering insights for all.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid sm:grid-cols-2 gap-6">
            {dataConnections.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-6 bg-white dark:bg-deep-grey/20 rounded-xl shadow-lg shadow-black/[0.02] dark:shadow-black/[0.1] border border-transparent hover:border-primary/20 dark:hover:border-light-green/20 transition-all animate-fade-in"
                style={{ animationDelay: item.delay }}
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-lg text-deep-grey dark:text-white">{item.title}</h3>
                  <p className="text-sm text-deep-grey/80 dark:text-white/70 mt-1 font-soft">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            <div
              className="sm:col-span-2 flex items-center gap-6 p-6 bg-gradient-to-r from-primary/90 to-green-600 rounded-xl shadow-2xl shadow-primary/20 animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              <BrainCircuit className="size-12 text-white/80" strokeWidth={1.5} />
              <div>
                <h3 className="font-bold text-xl text-white">AI Fusion Core</h3>
                <p className="text-sm text-white/70 mt-1 font-soft">
                  Our models process, clean, and analyze these streams to create predictive insights.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <IndiaMap />
          </div>
        </div>
      </div>
    </section>
  );
}
