import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSelector from "@/components/ui/language-selector";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // header height + some padding
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      closeMobileMenu();
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        isScrolled ? "bg-zinc-900/90 backdrop-blur-md shadow-md" : ""
      }`}
      style={{ zIndex: 40 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-display tracking-wider text-zinc-200 relative z-10 group"
          >
            <span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-600 after:transition-all after:duration-300 group-hover:after:w-full">
              Marllon Ramos
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-mono uppercase tracking-widest text-zinc-300 hover:text-zinc-100 transition duration-300"
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-mono uppercase tracking-widest text-zinc-300 hover:text-zinc-100 transition duration-300"
            >
              {t.nav.contact}
            </button>
            <div className="relative" style={{ position: 'relative', zIndex: 50 }}>
              <LanguageSelector />
            </div>
          </div>

          <button
            id="mobileMenuButton"
            className="md:hidden text-zinc-300 hover:text-zinc-100 transition duration-300 z-50"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed md:hidden top-[72px] left-0 right-0 bottom-0 bg-zinc-900/95 backdrop-blur-md"
            style={{ zIndex: 45 }}
          >
            <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
              <button
                onClick={() => scrollToSection("projects")}
                className="text-lg font-mono uppercase tracking-widest text-zinc-300 hover:text-zinc-100 transition duration-300 py-2 text-left"
              >
                {t.nav.projects}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-lg font-mono uppercase tracking-widest text-zinc-300 hover:text-zinc-100 transition duration-300 py-2 text-left"
              >
                {t.nav.contact}
              </button>
              <div className="border-t border-zinc-800 pt-6 mt-2">
                <div className="relative" style={{ position: 'relative', zIndex: 50 }}>
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
