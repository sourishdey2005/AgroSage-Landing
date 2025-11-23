import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="text-primary size-9">
        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM26 12V22H36V26H26V36H22V26H12V22H22V12H26Z" fill="#A5D6A7"></path>
          <path d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24C42 33.9411 33.9411 42 24 42Z" fill="#2E7D32"></path>
          <path d="M26 12V22H36V26H26V36H22V26H12V22H22V12H26Z" fill="#2E7D32"></path>
        </svg>
      </div>
      <h2 className="text-deep-grey dark:text-white text-2xl font-heading font-bold">AgroSage</h2>
    </div>
  );
};

export default Logo;
