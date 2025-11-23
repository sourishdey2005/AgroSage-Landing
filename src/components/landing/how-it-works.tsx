export default function HowItWorks() {
  return (
    <section className="py-24 bg-pattern">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-deep-grey dark:text-white">How It Works</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-deep-grey/70 dark:text-white/60 font-soft">A simple, powerful process to turn data into decisions.</p>
        </div>
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-primary/20 dark:bg-light-green/20 hidden md:block"></div>
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary to-green-600 hidden md:block" style={{width: "50%"}}></div>
          <div className="relative flex flex-col items-center text-center max-w-xs">
            <div className="z-10 flex items-center justify-center size-20 rounded-full bg-primary text-white shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined text-4xl">cloud_upload</span>
            </div>
            <h3 className="mt-6 text-xl font-bold text-deep-grey dark:text-white">1. Data Aggregation</h3>
            <p className="mt-2 text-deep-grey/80 dark:text-white/70 font-soft">We collect data from satellites, drones, IoT sensors, and field agents.</p>
          </div>
          <div className="relative flex flex-col items-center text-center max-w-xs">
            <div className="z-10 flex items-center justify-center size-20 rounded-full bg-primary text-white shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined text-4xl">model_training</span>
            </div>
            <h3 className="mt-6 text-xl font-bold text-deep-grey dark:text-white">2. AI Analysis</h3>
            <p className="mt-2 text-deep-grey/80 dark:text-white/70 font-soft">Our proprietary AI models process and analyze the multi-layered data.</p>
          </div>
          <div className="relative flex flex-col items-center text-center max-w-xs">
            <div className="z-10 flex items-center justify-center size-20 rounded-full bg-primary text-white shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined text-4xl">insights</span>
            </div>
            <h3 className="mt-6 text-xl font-bold text-deep-grey dark:text-white">3. Actionable Insights</h3>
            <p className="mt-2 text-deep-grey/80 dark:text-white/70 font-soft">Get tailored reports, alerts, and forecasts on our unified dashboards.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
