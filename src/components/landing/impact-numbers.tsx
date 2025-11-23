export default function ImpactNumbers() {
  return (
    <section id="impact" className="py-24 bg-background-light dark:bg-black/20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-deep-grey dark:text-white">Our Impact in Numbers</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-deep-grey/70 dark:text-white/60 font-soft">Quantifying our contribution to India's agricultural revolution.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white dark:bg-deep-grey/20 p-8 rounded-xl shadow-lg shadow-black/[0.04] transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2">
            <span className="text-6xl font-black font-heading text-primary dark:text-light-green">1.2M+</span>
            <h3 className="mt-2 text-xl font-bold text-deep-grey dark:text-white">Farmers Empowered</h3>
            <p className="mt-2 text-deep-grey/70 dark:text-white/60 font-soft">Lives touched across 15 states.</p>
          </div>
          <div className="bg-white dark:bg-deep-grey/20 p-8 rounded-xl shadow-lg shadow-black/[0.04] transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2">
            <span className="text-6xl font-black font-heading text-primary dark:text-light-green">18%</span>
            <h3 className="mt-2 text-xl font-bold text-deep-grey dark:text-white">Average Yield Increase</h3>
            <p className="mt-2 text-deep-grey/70 dark:text-white/60 font-soft">Boosting productivity with AI.</p>
          </div>
          <div className="bg-white dark:bg-deep-grey/20 p-8 rounded-xl shadow-lg shadow-black/[0.04] transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2">
            <span className="text-6xl font-black font-heading text-primary dark:text-light-green">₹5B+</span>
            <h3 className="mt-2 text-xl font-bold text-deep-grey dark:text-white">Loans Disbursed</h3>
            <p className="mt-2 text-deep-grey/70 dark:text-white/60 font-soft">Facilitating credit through data.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
