export default function KeyFeatures() {
  return (
    <section id="features" className="py-24 bg-pattern">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-deep-grey dark:text-white">Flagship Features</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-deep-grey/70 dark:text-white/60 font-soft">Unlock the power of data with our advanced agricultural tools.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-start gap-5 p-6 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex-shrink-0 size-14 bg-gradient-to-br from-primary/10 to-light-green/10 dark:from-primary/20 dark:to-light-green/20 text-primary dark:text-light-green rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">psychology</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-deep-grey dark:text-white">AI Yield Predictor</h3>
              <p className="text-base text-deep-grey/80 dark:text-white/70 mt-1 font-soft">Forecast crop yields with over 95% accuracy using machine learning.</p>
            </div>
          </div>
          <div className="flex items-start gap-5 p-6 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex-shrink-0 size-14 bg-gradient-to-br from-primary/10 to-light-green/10 dark:from-primary/20 dark:to-light-green/20 text-primary dark:text-light-green rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">satellite_alt</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-deep-grey dark:text-white">Satellite Crop Health</h3>
              <p className="text-base text-deep-grey/80 dark:text-white/70 mt-1 font-soft">Monitor crop health and stress levels in real-time with satellite imagery.</p>
            </div>
          </div>
          <div className="flex items-start gap-5 p-6 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex-shrink-0 size-14 bg-gradient-to-br from-primary/10 to-light-green/10 dark:from-primary/20 dark:to-light-green/20 text-primary dark:text-light-green rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">trending_up</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-deep-grey dark:text-white">Market Price Forecasting</h3>
              <p className="text-base text-deep-grey/80 dark:text-white/70 mt-1 font-soft">Predict mandi prices to help farmers sell at the optimal time.</p>
            </div>
          </div>
          <div className="flex items-start gap-5 p-6 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex-shrink-0 size-14 bg-gradient-to-br from-primary/10 to-light-green/10 dark:from-primary/20 dark:to-light-green/20 text-primary dark:text-light-green rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">thunderstorm</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-deep-grey dark:text-white">Real-Time Weather Alerts</h3>
              <p className="text-base text-deep-grey/80 dark:text-white/70 mt-1 font-soft">Get hyper-local weather alerts and advisories to protect your crops.</p>
            </div>
          </div>
          <div className="flex items-start gap-5 p-6 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex-shrink-0 size-14 bg-gradient-to-br from-primary/10 to-light-green/10 dark:from-primary/20 dark:to-light-green/20 text-primary dark:text-light-green rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">credit_score</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-deep-grey dark:text-white">Loan & Credit Risk Engine</h3>
              <p className="text-base text-deep-grey/80 dark:text-white/70 mt-1 font-soft">Assess creditworthiness of farmers using alternative data points.</p>
            </div>
          </div>
          <div className="flex items-start gap-5 p-6 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <div className="flex-shrink-0 size-14 bg-gradient-to-br from-primary/10 to-light-green/10 dark:from-primary/20 dark:to-light-green/20 text-primary dark:text-light-green rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">receipt_long</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-deep-grey dark:text-white">Subsidy Tracking System</h3>
              <p className="text-base text-deep-grey/80 dark:text-white/70 mt-1 font-soft">A transparent system for government to manage and disburse subsidies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
