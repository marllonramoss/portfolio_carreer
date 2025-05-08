import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-8 bg-zinc-950 border-t border-zinc-800"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#hero" className="text-xl font-display tracking-wider text-zinc-200">
              DEVELOPER
            </a>
            <p className="text-sm text-zinc-500 mt-2">Full Stack Developer & Designer</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-200 transition-colors">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-200 transition-colors">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-200 transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-200 transition-colors">
              <i className="fab fa-dribbble"></i>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-zinc-800 text-center">
          <p className="text-sm text-zinc-500">
            &copy; {currentYear} | Designed and Developed with <i className="fas fa-heart text-purple-600"></i>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
