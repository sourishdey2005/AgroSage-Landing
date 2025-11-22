import Link from "next/link";
import Logo from "@/components/logo";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "Impact", href: "#impact" },
    { name: "Technology", href: "#technology" },
  ],
  Support: [
    { name: "Contact", href: "#contact" },
    { name: "Help Center", href: "#" },
    { name: "API Docs", href: "#" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-background">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Logo />
            <p className="mt-4 font-body text-muted-foreground">
              Building India’s Agricultural Future with data-driven intelligence.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-headline font-semibold text-foreground">{title}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="font-body text-sm text-muted-foreground hover:text-primary">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} AgroSage Technologies Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
