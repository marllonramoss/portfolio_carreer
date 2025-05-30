import { motion } from "framer-motion";
import ParticlesBackground from "@/components/ui/particles-background";
import React from "react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

const technologies = [
  "REACT",
  "NODE.JS",
  "TYPESCRIPT",
  "EXPRESS",
  "JAVASCRIPT",
  "MONGODB",
  "POSTGRESQL",
  "HTML5",
  "CSS3",
];

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-grain"
    >
      <ParticlesBackground />
      <div className="absolute inset-0 z-0">
        {/* Abstract design elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-zinc-800/50 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-zinc-700/30 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl"
        ></motion.div>

        {/* Graphic elements */}
        <div className="hidden md:block absolute top-1/4 left-16 w-32 h-1 bg-zinc-600 transform rotate-45"></div>
        <div className="hidden md:block absolute bottom-1/4 right-16 w-32 h-1 bg-zinc-600 transform -rotate-45"></div>
        <div className="hidden md:block absolute top-1/3 right-24 w-16 h-16 border border-zinc-600 rounded-full"></div>
        <div className="hidden md:block absolute bottom-1/3 left-24 w-24 h-24 border border-zinc-600 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <motion.h1 className="text-4xl md:text-7xl font-display font-bold text-zinc-100 mb-8 tracking-tight">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="block"
              >
                {t.hero.title[0]}
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block"
              >
                {t.hero.title[1]}
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl font-body text-zinc-300 max-w-2xl mx-auto mb-12"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    const y =
                      projectsSection.getBoundingClientRect().top +
                      window.pageYOffset -
                      80;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                className="px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-zinc-100 font-semibold rounded-lg hero-button-shine hover:shadow-xl transition duration-300 hover:scale-105"
              >
                {t.hero.viewWorkButton}
              </button>
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    const y =
                      contactSection.getBoundingClientRect().top +
                      window.pageYOffset -
                      80;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                className="px-6 py-4 border border-zinc-600 text-zinc-200 font-semibold rounded-lg hero-button-shine hover:border-zinc-400 transition duration-300 hover:scale-105"
              >
                {t.hero.connectButton}
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden py-4 bg-zinc-900/60 backdrop-blur-sm">
        <div className="marquee">
          <div className="marquee-content">
            {technologies.map((tech, index) => (
              <React.Fragment key={`group-${index}`}>
                <span className="font-mono text-sm text-zinc-400 mx-4">
                  {tech}
                </span>
                {index < technologies.length - 1 && (
                  <span className="inline-block w-2 h-2 bg-zinc-500 rounded-full mx-1"></span>
                )}
              </React.Fragment>
            ))}
            {technologies.map((tech, index) => (
              <React.Fragment key={`group-repeat-${index}`}>
                <span className="font-mono text-sm text-zinc-400 mx-4">
                  {tech}
                </span>
                {index < technologies.length - 1 && (
                  <span className="inline-block w-2 h-2 bg-zinc-500 rounded-full mx-1"></span>
                )}
              </React.Fragment>
            ))}
            {technologies.map((tech, index) => (
              <React.Fragment key={`group-repeat-2-${index}`}>
                <span className="font-mono text-sm text-zinc-400 mx-4">
                  {tech}
                </span>
                {index < technologies.length - 1 && (
                  <span className="inline-block w-2 h-2 bg-zinc-500 rounded-full mx-1"></span>
                )}
              </React.Fragment>
            ))}
            {technologies.map((tech, index) => (
              <React.Fragment key={`group-repeat-3-${index}`}>
                <span className="font-mono text-sm text-zinc-400 mx-4">
                  {tech}
                </span>
                {index < technologies.length - 1 && (
                  <span className="inline-block w-2 h-2 bg-zinc-500 rounded-full mx-1"></span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
