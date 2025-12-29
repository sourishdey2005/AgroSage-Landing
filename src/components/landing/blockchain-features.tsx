import { Blocks, FileText, ShieldCheck, Link as LinkIcon } from "lucide-react";

export default function BlockchainFeatures() {
  const blocks = [1, 2, 3, 4];
  return (
    <section id="blockchain" className="py-24 bg-background-light dark:bg-black/20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-deep-grey dark:text-white">
            Transparent & Secure with Blockchain
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-deep-grey/70 dark:text-white/60 font-soft">
            Leveraging blockchain for real-world trust and transparency on the chain.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
                <div className="flex items-start gap-5 animate-fade-in" style={{animationDelay: '0.2s'}}>
                    <div className="flex-shrink-0 size-14 bg-gradient-to-br from-primary/10 to-light-green/10 dark:from-primary/20 dark:to-light-green/20 text-primary dark:text-light-green rounded-lg flex items-center justify-center">
                        <Blocks className="size-7"/>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-deep-grey dark:text-white">Supply Chain Transparency</h3>
                        <p className="text-base text-deep-grey/80 dark:text-white/70 mt-1 font-soft">Track produce from farm to fork, ensuring authenticity and fair pricing for every stakeholder.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-5 animate-fade-in" style={{animationDelay: '0.4s'}}>
                    <div className="flex-shrink-0 size-14 bg-gradient-to-br from-primary/10 to-light-green/10 dark:from-primary/20 dark:to-light-green/20 text-primary dark:text-light-green rounded-lg flex items-center justify-center">
                        <FileText className="size-7"/>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-deep-grey dark:text-white">Immutable Land Records</h3>
                        <p className="text-base text-deep-grey/80 dark:text-white/70 mt-1 font-soft">Securely digitize and manage land ownership records, preventing fraud and disputes.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-5 animate-fade-in" style={{animationDelay: '0.6s'}}>
                    <div className="flex-shrink-0 size-14 bg-gradient-to-br from-primary/10 to-light-green/10 dark:from-primary/20 dark:to-light-green/20 text-primary dark:text-light-green rounded-lg flex items-center justify-center">
                        <ShieldCheck className="size-7"/>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-deep-grey dark:text-white">Verified Farmer Identity</h3>
                        <p className="text-base text-deep-grey/80 dark:text-white/70 mt-1 font-soft">Create a tamper-proof digital identity for farmers, streamlining access to credit and subsidies.</p>
                    </div>
                </div>
            </div>
            <div className="relative flex justify-center items-center h-64 animate-fade-in" style={{animationDelay: '0.2s'}}>
                {blocks.map((block, index) => (
                    <div key={block} className="relative flex items-center">
                        <div className="z-10 relative size-24 bg-white dark:bg-deep-grey/30 border-2 border-primary/50 dark:border-light-green/50 rounded-xl flex flex-col items-center justify-center p-2 shadow-lg group">
                             <Blocks className="size-8 text-primary dark:text-light-green transition-transform duration-300 group-hover:scale-110"/>
                             <p className="text-xs font-bold mt-1 text-deep-grey dark:text-white/80">Block {1 + index}</p>
                             <p className="text-[10px] text-deep-grey/60 dark:text-white/50">0x{Math.random().toString(16).substr(2, 6)}...</p>
                        </div>
                        {index < blocks.length - 1 && (
                            <div className="z-0 -ml-2 -mr-2 text-deep-grey/50 dark:text-white/40">
                                <LinkIcon className="size-8"/>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
