import Link from "next/link";
import Logo from "@/components/logo";

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "Impact", href: "#impact" },
    { name: "Technology", href: "#technology" },
  ],
  Support: [
    { name: "Contact", href: "/contact" },
    { name: "Help Center", href: "/help-center" },
    { name: "API Docs", href: "/api-docs" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-background-light dark:bg-black/20 border-t border-black/5 dark:border-white/5">
      <div className="container mx-auto max-w-7xl px-4 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="col-span-2 lg:col-span-2 pr-8">
            <Logo />
            <p className="mt-4 text-base text-deep-grey/70 dark:text-white/60 font-soft">
              Building India’s Agricultural Future with data-driven intelligence.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold font-heading text-deep-grey dark:text-white">{title}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-base text-deep-grey/70 dark:text-white/60 hover:text-primary dark:hover:text-light-green font-soft transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-deep-grey/60 dark:text-white/50 font-soft">© {new Date().getFullYear()} AgroSage. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
          </div>
        </div>
      </div>
    </footer>
  );
}
