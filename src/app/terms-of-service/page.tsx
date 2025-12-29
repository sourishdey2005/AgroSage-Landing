import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
       <header className="sticky top-0 z-40 w-full border-b border-black/5 dark:border-white/5 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="container mx-auto max-w-7xl px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center justify-center">
            <Logo />
          </Link>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tighter text-deep-grey dark:text-white">
              Terms of Service
            </h1>
            <p className="text-deep-grey/70 dark:text-white/60 mt-2 font-soft">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose dark:prose-invert max-w-none text-deep-grey/80 dark:text-white/70 font-soft text-lg space-y-6">
            <h2 className="text-2xl font-bold font-heading text-deep-grey dark:text-white">1. Acceptance of Terms</h2>
            <p>By accessing and using the Krishi Mitra AI platform ("Service"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>

            <h2 className="text-2xl font-bold font-heading text-deep-grey dark:text-white">2. Description of Service</h2>
            <p>Krishi Mitra AI provides users with access to an agricultural intelligence platform. The Service is provided "as is" and we assume no responsibility for the timeliness, deletion, mis-delivery or failure to store any user communications or personalization settings.</p>

            <h2 className="text-2xl font-bold font-heading text-deep-grey dark:text-white">3. User Conduct</h2>
            <p>You are responsible for all activity that occurs under your account. You agree not to use the Service to upload, post, email, transmit, or otherwise make available any content that is unlawful, harmful, threatening, abusive, harassing, or otherwise objectionable.</p>
            
            <h2 className="text-2xl font-bold font-heading text-deep-grey dark:text-white">4. Disclaimer of Warranties</h2>
            <p>The service is provided on an "as is" and "as available" basis. Krishi Mitra AI expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose and non-infringement. The insights and predictions provided are for informational purposes only and should not be considered as financial or agricultural advice.</p>
            
            <h2 className="text-2xl font-bold font-heading text-deep-grey dark:text-white">5. Limitation of Liability</h2>
            <p>In no event shall Krishi Mitra AI or its suppliers be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or the inability to use the service or for the cost of procurement of substitute goods and services.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
