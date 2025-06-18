import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollObserver } from "@/hooks/use-scroll-observer";
import ProjectCard from "@/components/ui/project-card";
import { projects } from "@/lib/projects-data";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ProjectsSection = () => {
  const [ref, isVisible] = useScrollObserver<HTMLDivElement>({
    threshold: 0.1,
  });
  const [filter, setFilter] = useState("all");
  const { language } = useLanguage();
  const t = translations[language];

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter
  );

  return (
    <section id="projects" className="py-24 relative bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-zinc-100 relative inline-block">
            {t.featuredProjects.title}
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-purple-600"></span>
          </h2>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
            {t.featuredProjects.description}
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <button
              className={`px-4 py-2 ${
                filter === "all" 
                  ? "bg-purple-600 text-zinc-100 hover:bg-purple-600" 
                  : "bg-zinc-800 hover:bg-zinc-700"
              } rounded-lg text-zinc-300 transition-all duration-300 hover:scale-105`}
              onClick={() => setFilter("all")}
            >
              {language === "pt-BR" ? "Todos os Projetos" : "All Projects"}
            </button>
            <button
              className={`px-4 py-2 ${
                filter === "web" 
                  ? "bg-purple-600 text-zinc-100 hover:bg-purple-600" 
                  : "bg-zinc-800 hover:bg-zinc-700"
              } rounded-lg text-zinc-300 transition-all duration-300 hover:scale-105`}
              onClick={() => setFilter("web")}
            >
              {language === "pt-BR" ? "Aplicações Web" : "Web Apps"}
            </button>
            <button
              className={`px-4 py-2 ${
                filter === "design"
                  ? "bg-purple-600 text-zinc-100 hover:bg-purple-600" 
                  : "bg-zinc-800 hover:bg-zinc-700"
              } rounded-lg text-zinc-300 transition-all duration-300 hover:scale-105`}
              onClick={() => setFilter("design")}
            >
              {language === "pt-BR" ? "UI/UX" : "UI/UX"}
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className="inline-block px-6 py-3 border border-zinc-600 text-zinc-500 font-semibold rounded-lg cursor-not-allowed opacity-50"
                  disabled
                >
                  {language === "pt-BR" ? "Ver Todos os Projetos" : "View All Projects"}
                </button>
              </TooltipTrigger>
              <TooltipContent className="hidden md:block">
                <p>{language === "pt-BR" ? "Em breve. Subindo novos projetos." : "Coming soon. Adding new projects."}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <p className="text-sm text-zinc-500 mt-2 md:hidden">
            {language === "pt-BR" ? "Em breve. Subindo novos projetos." : "Coming soon. Adding new projects."}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
