import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { Link } from "wouter";
import { Menu } from "lucide-react";
import LanguageSelector from "@/components/ui/language-selector";
import MegaMenu from "@/components/ui/mega-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-display tracking-wider text-zinc-200 relative z-10 group"
          >
            <span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-600 after:transition-all after:duration-300 group-hover:after:w-full">
              Marllon Ramos
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#about"
              className="text-zinc-300 hover:text-zinc-100 transition-colors"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/#projects"
              className="text-zinc-300 hover:text-zinc-100 transition-colors"
            >
              {t.nav.projects}
            </Link>
            <Link
              href="/#contact"
              className="text-zinc-300 hover:text-zinc-100 transition-colors"
            >
              {t.nav.contact}
            </Link>
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6 text-zinc-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu */}
      <MegaMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
