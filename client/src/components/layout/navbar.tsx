import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import LanguageSelector from "@/components/ui/language-selector";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

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
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-zinc-900/90 backdrop-blur-md shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
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
            onClick={() => scrollToSection("about")}
            className="text-sm font-mono uppercase tracking-widest text-zinc-300 hover:text-zinc-100 transition duration-300"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-sm font-mono uppercase tracking-widest text-zinc-300 hover:text-zinc-100 transition duration-300"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm font-mono uppercase tracking-widest text-zinc-300 hover:text-zinc-100 transition duration-300"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-mono uppercase tracking-widest text-zinc-300 hover:text-zinc-100 transition duration-300"
          >
            Contact
          </button>
          <LanguageSelector />
        </div>

        <button
          id="mobileMenuButton"
          className="md:hidden text-zinc-300 hover:text-zinc-100 transition duration-300"
          onClick={toggleMobileMenu}
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 w-full bg-zinc-900/90 backdrop-blur-md"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-mono uppercase tracking-widest text-zinc-300 hover:text-zinc-100 transition duration-300 py-2 text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-mono uppercase tracking-widest text-zinc-300 hover:text-zinc-100 transition duration-300 py-2 text-left"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-mono uppercase tracking-widest text-zinc-300 hover:text-zinc-100 transition duration-300 py-2 text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-mono uppercase tracking-widest text-zinc-300 hover:text-zinc-100 transition duration-300 py-2 text-left"
            >
              Contact
            </button>
            <div className="border-t border-zinc-800 pt-3 mt-2">
              <LanguageSelector />
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
