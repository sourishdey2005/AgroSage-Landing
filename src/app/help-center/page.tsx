import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/logo";

const faqs = [
  {
    question: "What is Krishi Mitra AI?",
    answer: "Krishi Mitra AI is an AI-powered agricultural intelligence platform that provides data-driven insights to farmers, banks, field agents, and government bodies to improve decision-making across the agricultural value chain."
  },
  {
    question: "Who can use Krishi Mitra AI?",
    answer: "Our platform is designed for all stakeholders in the agricultural ecosystem: farmers who want to improve yields, field agents for data collection, banks for loan risk assessment, and government agencies for policy-making and monitoring."
  },
  {
    question: "How does the AI Yield Predictor work?",
    answer: "Our AI Yield Predictor uses a combination of machine learning models that analyze satellite imagery, historical weather patterns, soil type, and crop data to forecast yields with high accuracy."
  },
  {
    question: "Is my data secure with Krishi Mitra AI?",
    answer: "Yes, data security is our top priority. We use industry-standard encryption, role-based access control, and follow best practices to ensure your data is safe and private."
  },
  {
    question: "How do I get started as a farmer?",
    answer: "Farmers can join our platform for free. Simply click the 'Get Started' button, register for an account, and start exploring the features available in your region."
  },
  {
    question: "Do you offer partnership opportunities for banks and government agencies?",
    answer: "Absolutely. We offer tailored solutions for financial institutions and government bodies. Please visit our 'Contact' page to get in touch with our partnerships team."
  }
];

export default function HelpCenter() {
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
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tighter text-deep-grey dark:text-white">
              Help Center
            </h1>
            <p className="max-w-[600px] mx-auto text-deep-grey/70 dark:text-white/60 md:text-xl mt-4 font-soft">
              Find answers to common questions about Krishi Mitra AI.
            </p>
          </div>

          <Card className="bg-white dark:bg-deep-grey/20 border-black/5 dark:border-white/5 shadow-lg">
            <CardHeader>
              <CardTitle className="text-deep-grey dark:text-white">Frequently Asked Questions</CardTitle>
              <CardDescription className="text-deep-grey/70 dark:text-white/60 font-soft">
                Can't find the answer you're looking for? Feel free to contact us.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="font-heading text-lg text-left text-deep-grey dark:text-white">{faq.question}</AccordionTrigger>
                    <AccordionContent className="font-soft text-base text-deep-grey/80 dark:text-white/70">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
