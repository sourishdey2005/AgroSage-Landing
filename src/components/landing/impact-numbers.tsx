export default function ImpactNumbers() {
  const stats = [
    { value: "1.2M+", label: "Farmers Empowered", sub: "Active across 15+ states", delay: "0.2s" },
    { value: "18%", label: "Avg. Yield Increase", sub: "Verified crop optimization", delay: "0.4s" },
    { value: "₹5B+", label: "Loans Disbursed", sub: "Enabled via risk analytics", delay: "0.6s" },
  ];

  return (
    <section id="impact" className="py-24 bg-background-light dark:bg-black/20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-deep-grey dark:text-white tracking-tight">
            Our Impact in Numbers
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-deep-grey/70 dark:text-white/60 font-soft">
            Driving India's green digital revolution through data-led results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, i) => (
            <div 
              key={i}
              className="bg-white/40 dark:bg-deep-grey/10 backdrop-blur-md p-10 rounded-3xl border border-black/5 dark:border-white/5 shadow-lg hover:shadow-primary/20 hover:-translate-y-3 transition-all duration-500 opacity-0 animate-fade-in-up" 
              style={{ animationDelay: stat.delay }}
            >
              <div className="text-7xl font-black font-heading text-primary dark:text-light-green drop-shadow-sm mb-4">
                {stat.value}
              </div>
              <h3 className="text-2xl font-bold text-deep-grey dark:text-white">
                {stat.label}
              </h3>
              <p className="mt-3 text-lg text-deep-grey/70 dark:text-white/60 font-soft">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}