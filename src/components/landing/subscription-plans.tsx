import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const plans = [
    {
        name: "Basic Farmer",
        price: 99,
        priceSuffix: "/month",
        description: "Essential tools for individual farmers to start optimizing.",
        features: [
            "Basic Crop Advisory",
            "Localized Weather Forecasts",
            "Mandi Price Updates",
            "Community Forum Access",
        ],
        isRecommended: false,
    },
    {
        name: "Agri-Pro",
        price: 1299,
        priceSuffix: "/month",
        description: "Advanced analytics for large farms and agribusinesses.",
        features: [
            "All Basic Features",
            "AI Yield Prediction",
            "Satellite Crop Health Monitoring",
            "Pest & Disease Alerts",
            "Soil Health Analysis",
            "Priority Support"
        ],
        isRecommended: true,
    }
];

export default function SubscriptionPlans() {
  return (
    <section id="pricing" className="py-24 bg-pattern">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-deep-grey dark:text-white">
            Flexible Plans for Every Need
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-deep-grey/70 dark:text-white/60 font-soft">
            Start free and scale as you grow. Choose the plan that's right for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
            {plans.map((plan, index) => (
                <div 
                    key={plan.name} 
                    className={`relative bg-white dark:bg-deep-grey/20 rounded-xl shadow-lg border border-black/5 dark:border-white/10 p-8 flex flex-col animate-fade-in ${plan.isRecommended ? 'scale-105 border-primary dark:border-light-green shadow-primary/20 dark:shadow-light-green/10' : ''}`}
                    style={{ animationDelay: `${0.2 * (index + 1)}s` }}
                >
                    {plan.isRecommended && (
                        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                            <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                                Recommended
                            </span>
                        </div>
                    )}
                    <div className="flex-grow">
                        <h3 className="text-2xl font-bold font-heading text-deep-grey dark:text-white">{plan.name}</h3>
                        <p className="mt-2 text-deep-grey/70 dark:text-white/60 font-soft">{plan.description}</p>
                        <div className="my-8">
                            <span className="text-5xl font-black font-heading text-deep-grey dark:text-white">₹{plan.price}</span>
                            <span className="text-lg font-medium text-deep-grey/60 dark:text-white/50">{plan.priceSuffix}</span>
                        </div>
                        <ul className="space-y-4">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-3">
                                    <CheckCircle2 className="size-5 text-primary dark:text-light-green" />
                                    <span className="text-deep-grey/90 dark:text-white/80 font-soft">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-10">
                        <Button 
                            className={`w-full h-12 text-base font-bold ${plan.isRecommended ? 'bg-primary hover:bg-green-700 text-white' : 'bg-primary/10 hover:bg-primary/20 text-primary dark:bg-light-green/10 dark:hover:bg-light-green/20 dark:text-light-green'}`}
                        >
                            Choose Plan
                        </Button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
