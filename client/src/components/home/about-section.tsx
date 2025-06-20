import { motion } from "framer-motion";
import { useScrollObserver } from "@/hooks/use-scroll-observer";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

const AboutSection = () => {
  const [ref, isVisible] = useScrollObserver<HTMLDivElement>({
    threshold: 0.1,
  });
  
  const { language } = useLanguage();
  const t = translations[language];

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
              {t.about.title}
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-purple-600"></span>
            </h2>

            <p className="text-lg text-zinc-300 mb-6">
              {t.about.paragraph1}
            </p>

            <p className="text-lg text-zinc-300 mb-6">
              {t.about.paragraph2}
            </p>

            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <div className="flex items-center bg-zinc-800 px-4 py-3 rounded-lg">
                <i className="fas fa-code text-purple-600 mr-3 text-xl"></i>
                <div>
                  <h3 className="font-medium text-zinc-200">{t.about.cleanCode.title}</h3>
                  <p className="text-sm text-zinc-400">
                    {t.about.cleanCode.description}
                  </p>
                </div>
              </div>

              <a 
                href="https://drive.google.com/uc?export=download&id=1vxgtwBt4SFSXYsemEED8trqV3GRRp8Jg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors duration-300 group"
              >
                <i className="fas fa-download text-zinc-100 mr-3 text-xl group-hover:scale-110 transition-transform duration-300"></i>
                <span className="text-zinc-100 font-medium">Download CV</span>
              </a>
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
                src="https://res.cloudinary.com/du55aj4g9/image/upload/v1747492417/marllon_picture_real_jw9biq.jpg"
                alt="Developer portrait"
                className="w-full h-[400px] md:h-[600px] object-cover object-[center_15%] rounded-lg"
              />
            </div>

            {/* Experience badges */}
            <div className="flex flex-wrap gap-3 mt-6">
              <div className="bg-zinc-800 px-3 py-1 rounded-full text-sm font-mono text-zinc-300">
                {t.about.badges.experience}
              </div>
              <div className="bg-zinc-800 px-3 py-1 rounded-full text-sm font-mono text-zinc-300">
                {t.about.badges.role}
              </div>
              <div className="bg-zinc-800 px-3 py-1 rounded-full text-sm font-mono text-zinc-300">
                {t.about.badges.entrepreneur}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
