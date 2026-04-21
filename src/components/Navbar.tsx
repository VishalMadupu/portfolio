import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/data/portfolio";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container px-4 py-4">
        <div
          className={`flex items-center justify-between rounded-full border px-4 py-3 transition-all sm:px-6 ${
            scrolled
              ? "border-white/60 bg-white/75 shadow-[0_16px_50px_rgba(15,23,42,0.12)]"
              : "border-white/40 bg-white/55"
          }`}
        >
          <div className="font-display text-lg tracking-tight text-slate-900 sm:text-xl">
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                VM
              </span>
              <span>{siteConfig.name}</span>
            </a>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-950"
              >
                {link.name}
              </a>
            ))}
            <Button
              asChild
              size="sm"
              className="rounded-full bg-slate-950 px-4 text-white shadow-[0_12px_30px_rgba(15,23,42,0.18)] hover:bg-slate-800"
            >
              <a href="#contact">
                Let&apos;s Talk
                <ArrowUpRight />
              </a>
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-slate-900 md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="container px-4 pb-4 md:hidden">
          <div className="space-y-2 rounded-[1.75rem] border border-white/60 bg-white/80 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-2xl px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block rounded-2xl bg-slate-950 px-3 py-2 text-sm font-medium text-white"
              onClick={toggleMenu}
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
