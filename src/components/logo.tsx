import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => (
  <svg
    className={cn("h-6 w-auto text-foreground", className)}
    width="100"
    height="24"
    viewBox="0 0 100 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
      fill="currentColor"
    />
    <path
      d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18Z"
      fill="currentColor"
      fillOpacity="0.5"
    />
    <text x="30" y="18" fontFamily="'Space Grotesk', sans-serif" fontSize="20" fontWeight="bold" fill="currentColor">
      DevCore
    </text>
  </svg>
);

export default Logo;
