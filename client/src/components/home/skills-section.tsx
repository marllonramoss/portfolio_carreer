import { motion } from "framer-motion";
import { useScrollObserver } from "@/hooks/use-scroll-observer";
import { useEffect } from "react";
import {
  frontendSkills,
  backendSkills,
  designSkills,
  additionalSkills,
  othersIcon,
} from "@/lib/skills-data";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

const SkillBar = ({
  skill,
  level,
  label,
  delay = 0,
}: {
  skill: string;
  level: number;
  label: string;
  delay?: number;
}) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay }}
      className="mb-5"
    >
      <div className="flex justify-between mb-1">
        <span className="font-medium text-zinc-200">{skill}</span>
        <span className="text-zinc-400 text-sm">{label}</span>
      </div>
      <div className="w-full bg-zinc-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1,
            delay: delay + 0.2,
            ease: "easeOut"
          }}
          className="bg-purple-600 h-2 rounded-full"
        />
      </div>
    </motion.li>
  );
};

const SkillsSection = () => {
  const [ref, isVisible] = useScrollObserver<HTMLDivElement>({
    threshold: 0.1,
  });
  
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="skills" className="py-24 relative bg-grain">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-zinc-100 relative inline-block">
            {t.skills.title}
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-purple-600"></span>
          </h2>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900/80 rounded-xl p-8 backdrop-blur-sm"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center mr-4">
                <i className="fas fa-laptop-code text-purple-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-display font-bold text-zinc-100">
                {t.skills.frontend}
              </h3>
            </div>

            <ul className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <SkillBar
                  key={index}
                  skill={skill.name}
                  level={skill.level}
                  label={skill.label}
                  delay={index * 0.1}
                />
              ))}
            </ul>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-zinc-900/80 rounded-xl p-8 backdrop-blur-sm"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center mr-4">
                <i className="fas fa-server text-purple-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-display font-bold text-zinc-100">
                {t.skills.backend}
              </h3>
            </div>

            <ul className="space-y-4">
              {backendSkills.map((skill, index) => (
                <SkillBar
                  key={index}
                  skill={skill.name}
                  level={skill.level}
                  label={skill.label}
                  delay={index * 0.1}
                />
              ))}
            </ul>
          </motion.div>

          {/* Design Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-zinc-900/80 rounded-xl p-8 backdrop-blur-sm"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center mr-4">
                <i className="fas fa-tools text-purple-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-display font-bold text-zinc-100">
                {t.skills.others}
              </h3>
            </div>

            <ul className="space-y-4">
              {designSkills.map((skill, index) => (
                <SkillBar
                  key={index}
                  skill={skill.name}
                  level={skill.level}
                  label={skill.label}
                  delay={index * 0.1}
                />
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Additional skills display in a grid */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-xl font-display font-bold text-zinc-100 mb-8 text-center"
          >
            {t.skills.additionalExpertise}
          </motion.h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.15,
                  ease: [0.175, 0.885, 0.32, 1.1],
                }}
                className="bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105 hover:border-zinc-600"
              >
                <i
                  className={`${skill.icon} text-purple-600 text-2xl mb-3`}
                ></i>
                <span className="font-mono text-sm text-zinc-300 block">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
