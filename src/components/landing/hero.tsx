import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden bg-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent dark:from-background-dark dark:via-background-dark dark:to-transparent"></div>
      <div className="container relative mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block self-start bg-soft-yellow text-deep-grey text-sm font-bold py-2 px-4 rounded-full font-soft shadow-sm">
              Trusted by 50,000+ Farmers
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl md:text-6xl font-black font-heading leading-tight tracking-tighter text-deep-grey dark:text-white">
                India’s Smartest Agriculture Intelligence Platform
              </h1>
              <p className="text-lg md:text-xl text-deep-grey/80 dark:text-white/70 font-soft">
                AI-powered insights for Farmers, Banks, Agents & Government.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="https://agro-wise-sigma.vercel.app/login" target="_blank" rel="noopener noreferrer">
                <button className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-gradient-to-r from-primary to-green-600 text-white text-base font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105 transform">
                  <span className="truncate">Start Exploring</span>
                </button>
              </Link>
              <button className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-transparent border-2 border-primary text-primary dark:border-light-green dark:text-light-green text-base font-bold hover:bg-primary/10 dark:hover:bg-light-green/10 transition-colors duration-300 transform hover:scale-105">
                <span className="truncate">Watch Demo</span>
              </button>
            </div>
          </div>
          <div className="relative w-full aspect-square rounded-xl shadow-2xl shadow-primary/10 dark:shadow-primary/20 group animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAS39ffuUNtdrlfvAjDRjtoUdyjnMdOQVh0C7cwM6Be-CwR92mm4AeJ-5GyyCaMwRl_7AhSH5sADgsTTBjIe5s3G80E0dljMycLX9c5P9L8vGfoCUPXwJ23YANiKtaM8owWL-hTqIrMQJ4WHorpvEi0_8uqQ_zDqcLnef7jaG9utUfsB7uT3r2JvAItXNx3O9smRWB4OGH6WdRndZ7ehN1d66lc4S17FsobiQE__YuRD2xnOoRO-NYLLiYrdbqnsQh9XarZtelO7FQ"
              alt="A futuristic, glowing map of India with interconnected nodes representing farm hotspots, data points, and analytics."
              width={600}
              height={600}
              className="w-full h-full bg-center bg-no-repeat bg-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              data-ai-hint="map india"
            />
            <div className="absolute -top-8 -left-8 size-24 bg-light-green/20 dark:bg-light-green/10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12">
              <span className="material-symbols-outlined text-3xl text-primary dark:text-light-green">grass</span>
            </div>
            <div className="absolute -bottom-6 -right-6 size-20 bg-soft-yellow/50 dark:bg-soft-yellow/20 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
              <span className="material-symbols-outlined text-3xl text-deep-grey dark:text-soft-yellow">monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
