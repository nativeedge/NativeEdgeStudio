"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Logo from "@/components/logo";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
    return (
      <Link
        href={href}
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
          isActive ? "text-primary-foreground" : "text-muted-foreground"
        )}
        onClick={() => setIsMenuOpen(false)}
      >
        {children}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b">
        <div className="container flex h-16 items-center">
            <div className="hidden md:flex items-center gap-6">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <Logo />
                </Link>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                    {navLinks.map((link) => (
                    <NavLink key={link.href} href={link.href}>
                        {link.label}
                    </NavLink>
                    ))}
                </nav>
            </div>
            <div className="hidden md:flex flex-1 items-center justify-end">
                <Button asChild size="sm">
                    <Link href="/contact">Book a Call</Link>
                </Button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center justify-between w-full">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="pl-2">
                <Logo />
                </Link>
                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between border-b pb-4">
                        <Link href="/" onClick={() => setIsMenuOpen(false)}>
                        <Logo />
                        </Link>
                        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                            <X className="h-5 w-5" />
                            <span className="sr-only">Close Menu</span>
                        </Button>
                    </div>
                    <nav className="flex-1 flex flex-col gap-6 mt-6">
                        {navLinks.map((link) => (
                        <NavLink key={link.href} href={link.href}>
                            <span className="text-lg">{link.label}</span>
                        </NavLink>
                        ))}
                    </nav>
                    <Button asChild className="mt-auto">
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Book a Call</Link>
                        </Button>
                    </div>
                </SheetContent>
                </Sheet>
            </div>
        </div>
    </header>
  );
}
