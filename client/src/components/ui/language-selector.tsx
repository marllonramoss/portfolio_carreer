import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from '@/contexts/language-context';
import { createPortal } from 'react-dom';

const languages = [
  {
    code: "pt-BR",
    name: "Português",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
    alt: "Bandeira do Brasil"
  },
  {
    code: "en-US",
    name: "English",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
    alt: "US Flag"
  }
];

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Encontrar o idioma atual para exibir no botão
  const currentLanguage = languages.find(lang => lang.code === language) || languages[1];

  // Atualizar posição do dropdown quando o botão é clicado
  useEffect(() => {
    if (isOpen && buttonRef.current && containerRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      
      if (dropdownRef.current) {
        dropdownRef.current.style.top = `${buttonRect.height + 8}px`;
        dropdownRef.current.style.right = '0';
      }
    }
  }, [isOpen]);

  // Mostrar tooltip após 3 segundos e escondê-lo após 6 segundos
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 9000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Fechar dropdown ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setShowTooltip(false); // Esconder tooltip quando o dropdown é aberto
  };

  const handleLanguageSelect = (langCode: string) => {
    setLanguage(langCode as 'pt-BR' | 'en-US');
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-zinc-800/70 hover:bg-zinc-700/70 transition-colors duration-200"
        aria-label="Selecionar idioma"
      >
        <div className="w-6 h-6 rounded-full overflow-hidden">
          <img 
            src={currentLanguage.flagUrl} 
            alt={currentLanguage.alt}
            className="w-full h-full object-cover" 
          />
        </div>
        <span className="text-sm text-zinc-300">{currentLanguage.code}</span>
        <i className={`fas fa-chevron-down text-xs text-zinc-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Tooltip */}
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
                damping: 20
              }
            }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute top-full right-0 mt-3 bg-zinc-800 border border-zinc-700 p-3 rounded-md shadow-lg z-50 w-56"
          >
            <p className="text-sm text-zinc-300">
              {language === 'pt-BR' 
                ? 'Troque o idioma aqui!' 
                : 'Change the language here!'}
            </p>
            <div className="flex items-center mt-2 text-xs text-zinc-400">
              <span className="mr-1">🇺🇸</span> English or{" "}
              <span className="mx-1">🇧🇷</span> Português
            </div>
            <div className="absolute -top-2 right-3 w-3 h-3 bg-zinc-800 border-t border-l border-zinc-700 transform rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute bg-zinc-800 border border-zinc-700 rounded-lg shadow-xl overflow-hidden min-w-[120px] z-[1000]"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-zinc-700 transition-colors ${
                  lang.code === language ? 'bg-zinc-700' : ''
                }`}
              >
                <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={lang.flagUrl} 
                    alt={lang.alt}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <span className={`text-sm ${lang.code === language ? 'text-white' : 'text-zinc-300'}`}>
                  {lang.name}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
