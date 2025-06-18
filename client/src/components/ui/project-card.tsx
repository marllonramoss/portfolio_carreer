import { Project } from "@/lib/projects-data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Badge } from "./badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { Link } from "wouter";

type ProjectCardProps = {
  project: Project;
  className?: string;
  delay?: number;
};

const ProjectCard = ({ project, className, delay = 0 }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        // Limpa qualquer timeout existente
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        
        // Reseta o vídeo e inicia a reprodução
        videoRef.current.currentTime = 0;
        const playPromise = videoRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log("Playback failed:", error);
          });
        }
      } else {
        // Adiciona um pequeno delay antes de pausar
        timeoutRef.current = setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }, 100);
      }
    }

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isHovered]);

  return (
    <Link href={`/project/${project.id}`}>
      <TooltipProvider>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: delay * 0.1 }}
          className={cn(
            "group relative overflow-hidden rounded-xl metallic-border hover-shine cursor-pointer",
            className
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {project.videoUrl && (
            <video
              ref={videoRef}
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                isHovered ? "opacity-100" : "opacity-0"
              )}
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          
          <img
            src={project.mainImage}
            alt={project.title}
            className={cn(
              "w-full h-64 object-cover transition-all duration-500",
              isHovered ? "opacity-0" : "opacity-100 group-hover:scale-110"
            )}
          />
          
          <div className={cn(
            "absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/70 to-transparent transition-opacity duration-300",
            isHovered ? "opacity-95" : "opacity-90 group-hover:opacity-70"
          )}></div>
          
          <div className="absolute bottom-0 left-0 w-full p-6">
            <span className="text-xs font-mono text-purple-500 uppercase tracking-wider">
              {project.type}
            </span>
            <h3 className="text-xl font-display font-bold text-zinc-100 mt-2">
              {project.title}
            </h3>
            <p className="text-zinc-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.shortDescription}
            </p>
            
            <div className="flex items-center mt-4 gap-3 flex-wrap">
              {project.technologies.map((tech: string, index: number) => (
                <span key={index} className="text-xs bg-zinc-800 px-2 py-1 rounded-full text-zinc-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {project.isSold && (
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="absolute right-4 top-4 z-10">
                    <Badge variant="sold">
                      Sold
                    </Badge>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Projeto vendido para cliente real</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </motion.div>
      </TooltipProvider>
    </Link>
  );
};

export default ProjectCard;
