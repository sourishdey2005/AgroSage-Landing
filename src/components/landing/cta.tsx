import Link from "next/link";

export default function Cta() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden bg-gradient-to-r from-primary to-green-600 rounded-xl p-10 md:p-20 text-center text-white shadow-2xl shadow-primary/30 animate-fade-in">
          <div className="absolute -top-1/2 -left-1/4 w-full h-[200%] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_50%)]"></div>
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold font-heading">Start Transforming Agriculture Today</h2>
            <p className="mt-4 max-w-xl mx-auto opacity-80 font-soft text-lg">Join the digital revolution and empower your agricultural decisions with the power of AI.</p>
            <Link href="https://agro-wise-sigma.vercel.app/login" target="_blank" rel="noopener noreferrer">
              <button className="mt-8 flex mx-auto min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-10 bg-white text-primary text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
                <span className="truncate">Join Krishi Mitra AI</span>
              </button>
            </Link>
            <p className="text-sm mt-4 opacity-70 font-soft">Free for Farmers • Secure for Banks • Verified for Government</p>
          </div>
        </div>
      </div>
    </section>
  );
}
