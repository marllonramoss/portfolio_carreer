import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { Link } from "wouter";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import LanguageSelector from "@/components/ui/language-selector";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  const { language } = useLanguage();
  const t = translations[language];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const menuItems = [
    {
      title: language === "pt-BR" ? "Início" : "Home",
      href: "/",
      description: language === "pt-BR" ? "Voltar para a página inicial" : "Back to home page"
    },
    {
      title: language === "pt-BR" ? "Sobre" : "About",
      href: "/#about",
      description: language === "pt-BR" ? "Conheça mais sobre mim" : "Learn more about me"
    },
    {
      title: language === "pt-BR" ? "Projetos" : "Projects",
      href: "/#projects",
      description: language === "pt-BR" ? "Veja meus trabalhos" : "View my work"
    },
    {
      title: language === "pt-BR" ? "Contato" : "Contact",
      href: "/#contact",
      description: language === "pt-BR" ? "Entre em contato" : "Get in touch"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Menu */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-0 right-0 w-full max-w-md h-screen bg-zinc-900 border-l border-zinc-800 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-800">
              <h2 className="text-xl font-display font-bold text-zinc-100">
                {language === "pt-BR" ? "Menu" : "Menu"}
              </h2>
              <div className="flex items-center gap-4">
                <LanguageSelector />
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-zinc-400" />
                </button>
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex-1 p-6 space-y-6 overflow-y-auto">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block group"
                  >
                    <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-400 mt-1">
                      {item.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-zinc-800">
              <div className="text-center">
                <span className="text-sm text-zinc-400">
                  Built with <span className="text-purple-400">&hearts;</span> by Marllon Ramos
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu; 