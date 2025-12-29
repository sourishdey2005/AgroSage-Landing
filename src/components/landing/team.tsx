export default function Team() {
  return (
    <section id="team" className="py-24 bg-pattern">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-deep-grey dark:text-white">Our Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-deep-grey/70 dark:text-white/60 font-soft">The minds behind Krishi Mitra AI from KIIT Bhubaneswar.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative flex flex-col text-center p-8 bg-white dark:bg-deep-grey/20 rounded-xl shadow-lg shadow-black/[0.04] hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="mb-4">
              <div className="size-24 mx-auto rounded-full bg-primary/10 dark:bg-light-green/10 flex items-center justify-center text-primary dark:text-light-green transition-all duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined text-5xl">school</span>
              </div>
            </div>
            <h3 className="text-xl font-bold font-heading text-deep-grey dark:text-white">Ms. Kajal Kishori</h3>
            <p className="text-sm text-primary dark:text-light-green font-bold mt-1">Mentor</p>
            <p className="mt-4 text-deep-grey/80 dark:text-white/70 font-soft text-base flex-grow">As a seasoned expert in agricultural policy and rural development, Ms. Kishori provides invaluable mentorship to the Krishi Mitra AI team. Her deep understanding of the agricultural ecosystem ensures our technology is aligned with the real-world needs of farmers and policymakers.</p>
          </div>
          <div className="group relative flex flex-col text-center p-8 bg-white dark:bg-deep-grey/20 rounded-xl shadow-lg shadow-black/[0.04] hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="mb-4">
              <div className="size-24 mx-auto rounded-full bg-primary/10 dark:bg-light-green/10 flex items-center justify-center text-primary dark:text-light-green transition-all duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined text-5xl">psychology</span>
              </div>
            </div>
            <h3 className="text-xl font-bold font-heading text-deep-grey dark:text-white">Sourish Dey</h3>
            <p className="text-sm text-primary dark:text-light-green font-bold mt-1">KIIT Bhubaneswar, Lead AI/ML Architect</p>
            <p className="mt-4 text-deep-grey/80 dark:text-white/70 font-soft text-base flex-grow">As the lead architect of our AI and machine learning models, Sourish specializes in developing predictive analytics for crop yield and risk assessment. His work is pivotal in turning complex data into actionable insights for farmers.</p>
          </div>
          <div className="group relative flex flex-col text-center p-8 bg-white dark:bg-deep-grey/20 rounded-xl shadow-lg shadow-black/[0.04] hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="mb-4">
              <div className="size-24 mx-auto rounded-full bg-primary/10 dark:bg-light-green/10 flex items-center justify-center text-primary dark:text-light-green transition-all duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined text-5xl">code</span>
              </div>
            </div>
            <h3 className="text-xl font-bold font-heading text-deep-grey dark:text-white">Nitish Kumar Pandit</h3>
            <p className="text-sm text-primary dark:text-light-green font-bold mt-1">School of Computer Eng., Full Stack – Developer</p>
            <p className="mt-4 text-deep-grey/80 dark:text-white/70 font-soft text-base flex-grow">Nitish is the driving force behind the platform's user interface and overall experience. As the Full Stack Developer, he masterfully crafts the responsive front-end and robust back-end, ensuring a seamless and intuitive application for all users.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
