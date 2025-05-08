import { motion } from "framer-motion";
import { useScrollObserver } from "@/hooks/use-scroll-observer";

const AboutSection = () => {
  const [ref, isVisible] = useScrollObserver<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 relative bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-zinc-100 relative inline-block">
              ABOUT ME
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-purple-600"></span>
            </h2>

            <p className="text-lg text-zinc-300 mb-6">
              I'm a passionate Full Stack Developer with a unique blend of
              technical expertise and creative vision. My approach combines
              cutting-edge technologies with artistic design principles to
              create digital experiences that stand out.
            </p>

            <p className="text-lg text-zinc-300 mb-6">
              With a strong foundation in both frontend and backend development,
              I bridge the gap between visual aesthetics and functional
              engineering. My work is focused on creating applications that are
              not only technically robust but also visually compelling and
              intuitive to use.
            </p>

            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <div className="flex items-center bg-zinc-800 px-4 py-3 rounded-lg">
                <i className="fas fa-code text-purple-600 mr-3 text-xl"></i>
                <div>
                  <h3 className="font-medium text-zinc-200">Clean Code</h3>
                  <p className="text-sm text-zinc-400">
                    Elegant, efficient, maintainable
                  </p>
                </div>
              </div>

              <div className="flex items-center bg-zinc-800 px-4 py-3 rounded-lg">
                <i className="fas fa-paint-brush text-purple-600 mr-3 text-xl"></i>
                <div>
                  <h3 className="font-medium text-zinc-200">Creative Design</h3>
                  <p className="text-sm text-zinc-400">
                    Innovative, distinctive interfaces
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border border-zinc-700 rounded-lg z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border border-zinc-700 rounded-lg z-0"></div>

            {/* Main image with metallic border effect */}
            <div className="metallic-border">
              <img
                src="https://uploaddeimagens.com.br/images/004/897/058/full/Design_sem_nome.png?1746726024"
                alt="Developer portrait"
                className="w-[800px] h-[800px] object-cover object-top rounded-lg"
              />
            </div>

            {/* Experience badges */}
            <div className="flex flex-wrap gap-3 mt-6">
              <div className="bg-zinc-800 px-3 py-1 rounded-full text-sm font-mono text-zinc-300">
                5+ Years Experience
              </div>
              <div className="bg-zinc-800 px-3 py-1 rounded-full text-sm font-mono text-zinc-300">
                100+ Projects
              </div>
              <div className="bg-zinc-800 px-3 py-1 rounded-full text-sm font-mono text-zinc-300">
                Global Clients
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
