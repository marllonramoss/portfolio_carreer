import { useParams, Link } from "wouter";
import { projects } from "@/lib/projects-data";
import { projectsTranslations } from "@/lib/projects-translations";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Github, ExternalLink, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { useState } from "react";
import PageTransition from "@/components/layout/page-transition";
import ImageModal from "@/components/ui/image-modal";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type ContentTab = "overview" | "gallery";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  const { language } = useLanguage();
  const t = translations[language];
  const projectTranslation = project ? projectsTranslations[language][project.id] : null;
  const [activeTab, setActiveTab] = useState<ContentTab>("overview");
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!project || !projectTranslation) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-zinc-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-zinc-100 mb-4">Project Not Found</h1>
          <Link href="/" className="text-purple-500 hover:text-purple-400">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <motion.div 
        className="bg-zinc-900 min-h-screen"
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Navbar />
        
        <main>
          {/* Hero Video Section */}
          <motion.div 
            className="relative w-full h-[80vh] overflow-hidden"
            variants={fadeInUp}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-zinc-900/20 to-zinc-900/20">
              {/* Animated gradient background */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 animate-gradient-x" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-zinc-900" />
              </div>
              
              {/* Animated shapes */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-[500px] h-[500px] -top-48 -left-48 bg-purple-500/10 rounded-full mix-blend-overlay blur-3xl animate-blob" />
                <div className="absolute w-[600px] h-[600px] -top-48 left-48 bg-blue-500/10 rounded-full mix-blend-overlay blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute w-[400px] h-[400px] top-48 left-48 bg-purple-500/10 rounded-full mix-blend-overlay blur-3xl animate-blob animation-delay-4000" />
              </div>
            </div>

            {project.videoUrl && (
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                src={project.videoUrl}
              />
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent">
              <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12">
                <motion.div
                  variants={fadeInUp}
                  className="mb-6"
                >
                  <Link href="/#projects" className="inline-flex items-center text-zinc-400 hover:text-zinc-100 transition-colors">
                    <ChevronLeft className="w-5 h-5 mr-2" />
                    Back to Projects
                  </Link>
                </motion.div>
                
                <motion.div
                  variants={fadeInUp}
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <h1 className="text-4xl md:text-5xl font-display font-bold text-zinc-100">
                        {projectTranslation.title}
                      </h1>
                      <span className="px-4 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                        {project.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href={project.repositoryUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={cn(
                                "inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all",
                                project.isPrivateRepo
                                  ? "bg-zinc-800/50 text-zinc-500 cursor-not-allowed"
                                  : "bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-purple-400"
                              )}
                              onClick={(e) => {
                                if (project.isPrivateRepo) {
                                  e.preventDefault();
                                }
                              }}
                            >
                              <Github className={cn("w-5 h-5", project.isPrivateRepo && "opacity-50")} />
                              Repository
                              {project.isPrivateRepo && (
                                <Lock className="w-4 h-4 opacity-50" />
                              )}
                            </a>
                          </TooltipTrigger>
                          {project.isPrivateRepo && (
                            <TooltipContent>
                              <p>Private repository</p>
                            </TooltipContent>
                          )}
                        </Tooltip>
                      </TooltipProvider>

                      {project.liveUrl && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                  "inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all",
                                  project.isPrivateLive
                                    ? "bg-zinc-800/50 text-zinc-500 cursor-not-allowed"
                                    : "bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-purple-400"
                                )}
                                onClick={(e) => {
                                  if (project.isPrivateLive) {
                                    e.preventDefault();
                                  }
                                }}
                              >
                                <ExternalLink className={cn("w-5 h-5", project.isPrivateLive && "opacity-50")} />
                                Live Demo
                                {project.isPrivateLive && (
                                  <Lock className="w-4 h-4 opacity-50" />
                                )}
                              </a>
                            </TooltipTrigger>
                            {project.isPrivateLive && (
                              <TooltipContent>
                                <p>Private demo</p>
                              </TooltipContent>
                            )}
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </div>
                  </div>
                  <p className="text-xl text-zinc-300 max-w-3xl">
                    {projectTranslation.shortDescription}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="container mx-auto px-4 py-12">
            {/* Tabs */}
            <motion.div 
              variants={fadeInUp}
              className="flex gap-4 mb-8 border-b border-zinc-800"
            >
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-6 py-3 text-lg font-medium transition-colors relative ${
                  activeTab === "overview"
                    ? "text-purple-500"
                    : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                Overview
                {activeTab === "overview" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab("gallery")}
                className={`px-6 py-3 text-lg font-medium transition-colors relative ${
                  activeTab === "gallery"
                    ? "text-purple-500"
                    : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                Gallery
                {activeTab === "gallery" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"
                  />
                )}
              </button>
            </motion.div>

            {/* Tab Content */}
            <div className="grid md:grid-cols-3 gap-12">
              <AnimatePresence mode="wait">
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    className="md:col-span-3 grid md:grid-cols-3 gap-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Main Content */}
                    <div className="md:col-span-2">
                      <div className="prose prose-invert max-w-none">
                        <p className="text-zinc-300 whitespace-pre-line">
                          {projectTranslation.longDescription}
                        </p>

                        {/* Features */}
                        <div className="mt-12">
                          <h3 className="text-xl font-bold text-zinc-100 mb-4">Key Features</h3>
                          <div className="flex flex-col gap-3">
                            {projectTranslation.features.map((feature, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-zinc-800/30 rounded-lg px-4 py-3 border border-zinc-700/50 hover:border-purple-500/30 transition-colors"
                              >
                                <h4 className="text-lg font-body text-purple-400 mb-2">
                                  {feature.title}
                                </h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                  {feature.items.map((item, itemIndex) => (
                                    <li
                                      key={itemIndex}
                                      className="flex items-start text-zinc-300"
                                    >
                                      <span className="text-purple-500 mr-2">•</span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sidebar */}
                    <div className="md:col-span-1">
                      <div className="bg-zinc-800/50 rounded-xl p-6 sticky top-24 space-y-8">
                        <div>
                          <h3 className="text-xl font-bold text-zinc-100 mb-4">Technologies</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-zinc-700/50 text-zinc-300 rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-zinc-100 mb-4">Category</h3>
                          <span className="px-3 py-1 bg-zinc-700/50 text-zinc-300 rounded-full text-sm">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "gallery" && (
                  <motion.div
                    key="gallery"
                    className="md:col-span-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {project.gallery.map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
                          onClick={() => {
                            setSelectedImage(index);
                            setIsModalOpen(true);
                          }}
                        >
                          <img
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-lg font-medium">View Image</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </main>

        <Footer />
      </motion.div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={project.gallery[selectedImage]}
        totalImages={project.gallery.length}
        currentIndex={selectedImage}
        onNext={() => {
          if (selectedImage < project.gallery.length - 1) {
            setSelectedImage(selectedImage + 1);
          }
        }}
        onPrevious={() => {
          if (selectedImage > 0) {
            setSelectedImage(selectedImage - 1);
          }
        }}
      />
    </PageTransition>
  );
} 