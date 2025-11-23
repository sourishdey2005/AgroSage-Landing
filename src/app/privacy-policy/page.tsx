import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-deep-grey/70 dark:text-white/60 mt-2 font-soft">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose dark:prose-invert max-w-none text-deep-grey/80 dark:text-white/70 font-soft text-lg space-y-6">
            <p>Welcome to AgroSage. We are committed to protecting your privacy and handling your data in an open and transparent manner. This privacy policy sets out how we collect, use, and protect any information that you give us when you use this platform.</p>
            
            <h2 className="text-2xl font-bold font-heading text-deep-grey dark:text-white">1. Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul>
                <li>Personal identification information (Name, email address, phone number, etc.).</li>
                <li>Geographical information for your farm or area of operation.</li>
                <li>Agricultural data such as crop type, soil data, and historical yield information.</li>
                <li>Technical data such as IP address, browser type, and usage details through cookies.</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-deep-grey dark:text-white">2. How We Use Your Information</h2>
            <p>We use the information we collect to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
            <ul>
                <li>To provide our core services, such as yield prediction and crop health monitoring.</li>
                <li>For internal record keeping and to improve our products and services.</li>
                <li>To customize the platform according to your interests.</li>
                <li>To periodically send promotional emails about new products, special offers or other information which we think you may find interesting.</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-deep-grey dark:text-white">3. Security</h2>
            <p>We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.</p>
            
            <h2 className="text-2xl font-bold font-heading text-deep-grey dark:text-white">4. Your Data Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. You can also object to the processing of your personal data. If you wish to exercise any of these rights, please contact us.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
