export default function KeyFeatures() {
  const features = [
    { icon: "psychology", title: "AI Yield Predictor", desc: "Forecast crop yields with over 95% accuracy using advanced machine learning.", delay: "0.1s" },
    { icon: "satellite_alt", title: "Satellite Crop Health", desc: "Monitor crop health and stress levels in real-time with Sentinel-2 data.", delay: "0.2s" },
    { icon: "trending_up", title: "Market Price Forecasting", desc: "Predict mandi prices to help farmers sell at the optimal time for max profit.", delay: "0.3s" },
    { icon: "thunderstorm", title: "Real-Time Weather Alerts", desc: "Hyper-local weather alerts and advisories to safeguard harvests.", delay: "0.4s" },
    { icon: "credit_score", title: "Loan & Credit Risk Engine", desc: "Data-driven creditworthiness scoring for faster agricultural loan disbursal.", delay: "0.5s" },
    { icon: "receipt_long", title: "Subsidy Tracking", desc: "Transparent, automated system for efficient government subsidy management.", delay: "0.6s" },
  ];

  return (
    <section id="features" className="py-24 bg-pattern">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-deep-grey dark:text-white tracking-tight">
            Flagship Features
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-deep-grey/70 dark:text-white/60 font-soft leading-relaxed">
            Harnessing the power of precision technology to transform the agricultural lifecycle.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div 
              key={i}
              className="group flex items-start gap-6 p-8 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in-up" 
              style={{ animationDelay: feature.delay }}
            >
              <div className="flex-shrink-0 size-16 bg-gradient-to-br from-primary/10 to-light-green/20 dark:from-primary/20 dark:to-light-green/30 text-primary dark:text-light-green rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
              </div>
              <div>
                <h3 className="font-bold text-xl text-deep-grey dark:text-white group-hover:text-primary dark:group-hover:text-light-green transition-colors">
                  {feature.title}
                </h3>
                <p className="text-base text-deep-grey/80 dark:text-white/70 mt-3 font-soft leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}