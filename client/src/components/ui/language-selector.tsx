import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  {
    code: "en-US",
    name: "English",
    flag: "🇺🇸",
  },
  {
    code: "pt-BR",
    name: "Português",
    flag: "🇧🇷",
  },
];

interface LanguageSelectorProps {
  className?: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    languages[0],
  );
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const selectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show tooltip after 3 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    // Hide tooltip after it's been shown for 6 seconds
    const hideTooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 9000);

    return () => {
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltipTimer);
    };
  }, []);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      selectorRef.current &&
      !selectorRef.current.contains(e.target as Node) &&
      tooltipRef.current &&
      !tooltipRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setShowTooltip(false); // Hide tooltip when dropdown is toggled
  };

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    setIsOpen(false);
    // Here you would typically handle language change in your app
    // For example: i18n.changeLanguage(language.code);
    console.log("Language changed to:", language.code);
  };

  return (
    <div ref={selectorRef} className={cn("relative", className)}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 py-1 px-2 rounded-md hover:bg-zinc-800 transition-colors"
        aria-label="Select language"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="text-xs text-zinc-400">{currentLanguage.code}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-1 bg-zinc-800 border border-zinc-700 rounded-md shadow-lg z-50 overflow-hidden min-w-[120px]"
          >
            <div className="py-1">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => changeLanguage(language)}
                  className={cn(
                    "w-full text-left px-3 py-2 flex items-center space-x-2 hover:bg-zinc-700",
                    currentLanguage.code === language.code
                      ? "bg-zinc-700 text-zinc-100"
                      : "text-zinc-300",
                  )}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span className="text-sm">{language.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute top-full right-0 mt-3 bg-zinc-800 border border-zinc-700 p-3 rounded-md shadow-lg z-50 w-56 lang-tooltip"
          >
            <p className="text-sm text-zinc-300">Change the language here!</p>
            <div className="flex items-center mt-2 text-xs text-zinc-400">
              <span className="mr-1">🇺🇸</span> English or{" "}
              <span className="mx-1">🇧🇷</span> Português
            </div>
            <motion.div className="absolute -top-6 right-3 text-lg transform rotate-180 lang-tooltip-arrow"></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
