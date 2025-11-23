import Link from "next/link";
import Logo from "../logo";

const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'Impact', href: '#impact' },
  { name: 'Technology', href: '#technology' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md shadow-lg shadow-black/[0.03] dark:shadow-black/[0.1]">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <nav className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href} className="nav-link text-sm font-medium text-deep-grey/80 dark:text-white/70 hover:text-primary dark:hover:text-light-green transition-colors">
                {item.name}
              </Link>
            ))}
          </nav>
          <Link href="https://agro-wise-sigma.vercel.app/login" target="_blank" rel="noopener noreferrer" className="hidden md:flex">
            <button className="min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 px-6 bg-gradient-to-r from-primary to-green-600 text-white text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5">
              <span className="truncate">Get Started</span>
            </button>
          </Link>
          <button className="md:hidden flex items-center justify-center text-deep-grey dark:text-white">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
