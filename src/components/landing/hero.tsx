import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden bg-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-transparent dark:from-background-dark dark:via-background-dark/50 dark:to-transparent"></div>
      <div className="container relative mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block self-start bg-soft-yellow/80 backdrop-blur-sm text-deep-grey text-sm font-bold py-2 px-6 rounded-full font-soft shadow-sm border border-soft-yellow">
              Trusted by 50,000+ Farmers Across India
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl md:text-7xl font-black font-heading leading-[1.1] tracking-tight text-deep-grey dark:text-white">
                India’s Smartest <span className="text-primary dark:text-light-green">Agriculture</span> Intelligence
              </h1>
              <p className="text-xl md:text-2xl text-deep-grey/80 dark:text-white/70 font-soft leading-relaxed max-w-xl">
                Empowering the backbone of India with precision AI insights for Farmers, Banks, and Government.
              </p>
            </div>
            <div className="flex flex-wrap gap-5">
              <Link href="https://agro-wise-sigma.vercel.app/login" target="_blank" rel="noopener noreferrer">
                <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-16 px-10 bg-gradient-to-r from-primary to-green-600 text-white text-lg font-bold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105 active:scale-95">
                  <span className="truncate">Start Exploring</span>
                </button>
              </Link>
              <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-16 px-10 bg-white/5 backdrop-blur-md border-2 border-primary/30 text-primary dark:border-light-green/30 dark:text-light-green text-lg font-bold hover:bg-primary/5 dark:hover:bg-light-green/5 transition-all duration-300 hover:scale-105 active:scale-95">
                <span className="truncate">Watch Demo</span>
              </button>
            </div>
          </div>
          <div className="relative w-full aspect-square rounded-3xl shadow-2xl shadow-primary/10 dark:shadow-primary/20 group opacity-0 animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl z-10 pointer-events-none"></div>
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAS39ffuUNtdrlfvAjDRjtoUdyjnMdOQVh0C7cwM6Be-CwR92mm4AeJ-5GyyCaMwRl_7AhSH5sADgsTTBjIe5s3G80E0dljMycLX9c5P9L8vGfoCUPXwJ23YANiKtaM8owWL-hTqIrMQJ4WHorpvEi0_8uqQ_zDqcLnef7jaG9utUfsB7uT3r2JvAItXNx3O9smRWB4OGH6WdRndZ7ehN1d66lc4S17FsobiQE__YuRD2xnOoRO-NYLLiYrdbqnsQh9XarZtelO7FQ"
              alt="Futuristic data map of India"
              width={800}
              height={800}
              className="w-full h-full bg-center bg-no-repeat bg-cover rounded-3xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
              data-ai-hint="map india"
            />
            <div className="absolute -top-10 -left-10 size-32 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 shadow-2xl animate-float">
              <span className="material-symbols-outlined text-5xl text-primary dark:text-light-green">grass</span>
            </div>
            <div className="absolute -bottom-8 -right-8 size-28 bg-soft-yellow/20 backdrop-blur-xl rounded-3xl flex items-center justify-center border border-white/20 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
              <span className="material-symbols-outlined text-4xl text-deep-grey dark:text-soft-yellow">monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}