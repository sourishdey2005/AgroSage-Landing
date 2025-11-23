export default function Team() {
  return (
    <section id="team" className="py-24 bg-pattern">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-deep-grey dark:text-white">Our Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-deep-grey/70 dark:text-white/60 font-soft">The minds behind AgroSage from KIIT Bhubaneswar.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative flex flex-col text-center p-8 bg-white dark:bg-deep-grey/20 rounded-xl shadow-lg shadow-black/[0.04] hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300">
            <div className="mb-4">
              <div className="size-24 mx-auto rounded-full bg-primary/10 dark:bg-light-green/10 flex items-center justify-center text-primary dark:text-light-green transition-all duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined text-5xl">school</span>
              </div>
            </div>
            <h3 className="text-xl font-bold font-heading text-deep-grey dark:text-white">Sunil Kumar Sawant</h3>
            <p className="text-sm text-primary dark:text-light-green font-bold mt-1">Mentor</p>
            <p className="mt-4 text-deep-grey/80 dark:text-white/70 font-soft text-base flex-grow">With over 20 years of experience in agricultural technology and data science, Sunil guides the AgroSage team, providing strategic direction and deep industry insights to bridge the gap between technology and on-the-ground farming realities.</p>
          </div>
          <div className="group relative flex flex-col text-center p-8 bg-white dark:bg-deep-grey/20 rounded-xl shadow-lg shadow-black/[0.04] hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300">
            <div className="mb-4">
              <div className="size-24 mx-auto rounded-full bg-primary/10 dark:bg-light-green/10 flex items-center justify-center text-primary dark:text-light-green transition-all duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined text-5xl">psychology</span>
              </div>
            </div>
            <h3 className="text-xl font-bold font-heading text-deep-grey dark:text-white">Sourish Dey</h3>
            <p className="text-sm text-primary dark:text-light-green font-bold mt-1">KIIT Bhubaneswar, Lead AI/ML Architect</p>
            <p className="mt-4 text-deep-grey/80 dark:text-white/70 font-soft text-base flex-grow">As the lead architect of our AI and machine learning models, Sourish specializes in developing predictive analytics for crop yield and risk assessment. His work is pivotal in turning complex data into actionable insights for farmers.</p>
          </div>
          <div className="group relative flex flex-col text-center p-8 bg-white dark:bg-deep-grey/20 rounded-xl shadow-lg shadow-black/[0.04] hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300">
            <div className="mb-4">
              <div className="size-24 mx-auto rounded-full bg-primary/10 dark:bg-light-green/10 flex items-center justify-center text-primary dark:text-light-green transition-all duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined text-5xl">database</span>
              </div>
            </div>
            <h3 className="text-xl font-bold font-heading text-deep-grey dark:text-white">Himanshu Keshri</h3>
            <p className="text-sm text-primary dark:text-light-green font-bold mt-1">KIIT Bhubaneswar, Lead Backend & Data Engineer</p>
            <p className="mt-4 text-deep-grey/80 dark:text-white/70 font-soft text-base flex-grow">Himanshu leads the development of our platform's backend and data engineering pipelines. He focuses on building a scalable, secure, and robust infrastructure capable of handling vast amounts of geospatial and agricultural data.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
