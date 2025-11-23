import { GraduationCap, Landmark, HandCoins } from "lucide-react";

const aiModels = [
  {
    icon: <GraduationCap className="size-8 text-primary dark:text-light-green" />,
    title: "Government: Crop Yield Prediction",
    description: "Utilizes satellite imagery, weather patterns, and soil data to deliver high-accuracy regional crop yield forecasts, enabling proactive policy-making and resource allocation.",
    flowFile: "predict-crop-yields.ts",
    delay: '0.2s',
  },
  {
    icon: <HandCoins className="size-8 text-primary dark:text-light-green" />,
    title: "Farmer: Personalized Crop Insights",
    description: "Generates actionable recommendations on fertilizer use, pest control, and irrigation by analyzing farm-specific data, empowering farmers to boost productivity and sustainability.",
    flowFile: "generate-crop-insights.ts",
    delay: '0.4s',
  },
  {
    icon: <Landmark className="size-8 text-primary dark:text-light-green" />,
    title: "Bank: Agricultural Loan Risk Analysis",
    description: "Provides a data-driven risk score by assessing farmer profiles, financial history, and market conditions, allowing for faster, more accurate, and equitable loan disbursal.",
    flowFile: "analyze-loan-risk.ts",
    delay: '0.6s',
  },
];

export default function AIModels() {
  return (
    <section id="ai-models" className="py-24 bg-background-light dark:bg-black/20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-deep-grey dark:text-white">
            AI Models in Action
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-deep-grey/70 dark:text-white/60 font-soft">
            Explore the Genkit flows that power our intelligent platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aiModels.map((model) => (
            <div
              key={model.title}
              className="group relative flex flex-col p-8 bg-white dark:bg-deep-grey/20 rounded-xl shadow-lg shadow-black/[0.04] border border-black/5 dark:border-white/10 hover:shadow-primary/20 dark:hover:shadow-light-green/10 hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: model.delay }}
            >
                <div className="flex items-center gap-4">
                    {model.icon}
                    <h3 className="text-xl font-bold font-heading text-deep-grey dark:text-white">{model.title}</h3>
                </div>
              <p className="mt-4 text-deep-grey/80 dark:text-white/70 font-soft text-base flex-grow">
                {model.description}
              </p>
              <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10">
                <p className="text-xs text-deep-grey/60 dark:text-white/50 font-mono">
                  Source: <code className="font-bold text-primary/80 dark:text-light-green/80">{`src/ai/flows/${model.flowFile}`}</code>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
