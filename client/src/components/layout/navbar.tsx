import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { Link, useLocation } from "wouter";
import { Menu, Mail, Linkedin, MessageCircle } from "lucide-react";
import LanguageSelector from "@/components/ui/language-selector";
import MegaMenu from "@/components/ui/mega-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  const [location] = useLocation();

  // Detecta se está em uma página de projeto dinâmica
  const isProjectPage = location.startsWith("/project/");

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
        isProjectPage
          ? "bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800"
          : isScrolled
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
              href="/"
              className={
                location === "/"
                  ? "text-zinc-100 font-semibold border-b-2 border-purple-500 pb-1 px-4 relative"
                  : "text-zinc-300 hover:text-zinc-100 transition-colors px-4 relative"
              }
            >
              Home
            </Link>
            {/* Projects (disabled) */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span
                    className="text-zinc-400 cursor-not-allowed opacity-60 select-none font-semibold pb-1 px-4 relative flex items-center justify-center min-w-[80px]"
                  >
                    Projects
                    <span className="absolute -top-1 -right-0 text-[10px] text-zinc-400">
                      <i className="fas fa-lock"></i>
                    </span>
                  </span>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="text-xs">
                  Coming soon
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {/* Tech Stack (disabled) */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span
                    className="text-zinc-400 cursor-not-allowed opacity-60 select-none font-semibold pb-1 px-4 relative flex items-center justify-center min-w-[80px]"
                  >
                    Tech Stack
                    <span className="absolute -top-1 -right-0 text-[10px] text-zinc-400">
                      <i className="fas fa-lock"></i>
                    </span>
                  </span>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="text-xs">
                  Coming soon
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {/* Contact Icons */}
            <div className="flex items-center gap-5 ml-2">
              <a
                href="mailto:marllonramos@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-purple-500 transition-colors text-lg"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://linkedin.com/in/marllonramos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-purple-500 transition-colors text-lg"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://wa.me/5521989399832"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-purple-500 transition-colors text-lg"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
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
