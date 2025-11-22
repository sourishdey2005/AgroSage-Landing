import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-background">
        <Link href="/" className="flex items-center justify-center">
          <span className="sr-only">AgroSage</span>
        </Link>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
          Privacy Policy
        </h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl mt-4">
          This page is under construction.
        </p>
        <Button asChild className="mt-6">
          <Link href="/">Go back to Home</Link>
        </Button>
      </main>
    </div>
  );
}
