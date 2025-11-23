export default function BehindTheAI() {
  return (
    <section className="py-24 bg-deep-grey dark:bg-background-dark overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white">Behind the AI</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/60 font-soft">Powered by a robust, scalable, and cutting-edge technology stack.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="relative tech-card group flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-light-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            <div className="relative">
              <span className="material-symbols-outlined text-5xl text-light-green">layers</span>
              <h3 className="mt-4 text-lg font-bold text-white">Geospatial AI</h3>
            </div>
          </div>
          <div className="relative tech-card group flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-light-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            <div className="relative">
              <span className="material-symbols-outlined text-5xl text-light-green">hub</span>
              <h3 className="mt-4 text-lg font-bold text-white">Neural Networks</h3>
            </div>
          </div>
          <div className="relative tech-card group flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-light-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            <div className="relative">
              <span className="material-symbols-outlined text-5xl text-light-green">deployed_code</span>
              <h3 className="mt-4 text-lg font-bold text-white">Big Data Pipelines</h3>
            </div>
          </div>
          <div className="relative tech-card group flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-light-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            <div className="relative">
              <span className="material-symbols-outlined text-5xl text-light-green">security</span>
              <h3 className="mt-4 text-lg font-bold text-white">Secure GenAI</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
