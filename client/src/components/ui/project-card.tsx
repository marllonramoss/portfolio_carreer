import { cn } from "@/lib/utils";
import { ProjectType } from "@/lib/projects-data";
import { motion } from "framer-motion";

type ProjectCardProps = {
  project: ProjectType;
  className?: string;
  delay?: number;
};

const ProjectCard = ({ project, className, delay = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className={cn("group relative overflow-hidden rounded-xl metallic-border hover-shine", className)}
      data-category={project.category}
    >
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/70 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
      
      <div className="absolute bottom-0 left-0 w-full p-6">
        <span className="text-xs font-mono text-purple-500 uppercase tracking-wider">
          {project.type}
        </span>
        <h3 className="text-xl font-display font-bold text-zinc-100 mt-2">
          {project.title}
        </h3>
        <p className="text-zinc-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.description}
        </p>
        
        <div className="flex items-center mt-4 gap-3 flex-wrap">
          {project.technologies.map((tech, index) => (
            <span key={index} className="text-xs bg-zinc-800 px-2 py-1 rounded-full text-zinc-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
