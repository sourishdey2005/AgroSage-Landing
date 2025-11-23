export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="py-24 bg-background-light dark:bg-black/20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-deep-grey dark:text-white">Who We Serve</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-deep-grey/70 dark:text-white/60 font-soft">Tailored solutions for every stakeholder in the agricultural ecosystem.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="relative overflow-hidden flex flex-col gap-4 p-8 bg-white dark:bg-deep-grey/20 rounded-xl shadow-lg shadow-black/[0.04] hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 glow-effect z-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="material-symbols-outlined text-primary text-5xl">grass</span>
            <h3 className="text-xl font-bold font-heading text-deep-grey dark:text-white">Farmers</h3>
            <p className="text-deep-grey/80 dark:text-white/70 font-soft text-base">Crop guidance, weather insights, and AI-powered yield forecasts to maximize output.</p>
          </div>
          <div className="relative overflow-hidden flex flex-col gap-4 p-8 bg-white dark:bg-deep-grey/20 rounded-xl shadow-lg shadow-black/[0.04] hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 glow-effect z-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="material-symbols-outlined text-primary text-5xl">groups</span>
            <h3 className="text-xl font-bold font-heading text-deep-grey dark:text-white">Field Agents</h3>
            <p className="text-deep-grey/80 dark:text-white/70 font-soft text-base">Efficient field survey tools, digital farmer onboarding, and real-time data collection.</p>
          </div>
          <div className="relative overflow-hidden flex flex-col gap-4 p-8 bg-white dark:bg-deep-grey/20 rounded-xl shadow-lg shadow-black/[0.04] hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 glow-effect z-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <span className="material-symbols-outlined text-primary text-5xl">account_balance</span>
            <h3 className="text-xl font-bold font-heading text-deep-grey dark:text-white">Banks</h3>
            <p className="text-deep-grey/80 dark:text-white/70 font-soft text-base">Accurate loan risk prediction, data-driven credit insights, and portfolio monitoring.</p>
          </div>
          <div className="relative overflow-hidden flex flex-col gap-4 p-8 bg-white dark:bg-deep-grey/20 rounded-xl shadow-lg shadow-black/[0.04] hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 glow-effect z-10 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <span className="material-symbols-outlined text-primary text-5xl">corporate_fare</span>
            <h3 className="text-xl font-bold font-heading text-deep-grey dark:text-white">Government</h3>
            <p className="text-deep-grey/80 dark:text-white/70 font-soft text-base">Actionable policy analytics, satellite-based monitoring, and subsidy management.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
