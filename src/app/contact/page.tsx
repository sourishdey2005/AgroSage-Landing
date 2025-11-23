import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/logo";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
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
        <div className="container mx-auto max-w-3xl px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tighter text-deep-grey dark:text-white">
              Contact Us
            </h1>
            <p className="max-w-[600px] mx-auto text-deep-grey/70 dark:text-white/60 md:text-xl mt-4 font-soft">
              Have questions or want to partner with us? We'd love to hear from you.
            </p>
          </div>

          <Card className="bg-white dark:bg-deep-grey/20 border-black/5 dark:border-white/5 shadow-lg">
            <CardHeader>
              <CardTitle className="text-deep-grey dark:text-white">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-deep-grey/90 dark:text-white/90 font-soft">Full Name</Label>
                    <Input id="name" placeholder="Enter your name" className="bg-background-light dark:bg-deep-grey/30" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-deep-grey/90 dark:text-white/90 font-soft">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" className="bg-background-light dark:bg-deep-grey/30" />
                  </div>
                </div>
                <div className="space-y-2">
                   <Label htmlFor="subject" className="text-deep-grey/90 dark:text-white/90 font-soft">Subject</Label>
                   <Input id="subject" placeholder="What is your message about?" className="bg-background-light dark:bg-deep-grey/30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-deep-grey/90 dark:text-white/90 font-soft">Message</Label>
                  <Textarea id="message" placeholder="Your message..." rows={5} className="bg-background-light dark:bg-deep-grey/30" />
                </div>
                <Button type="submit" className="w-full h-12 text-base font-bold bg-primary hover:bg-green-700 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
