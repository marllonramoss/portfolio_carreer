import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import SkillsSection from "@/components/home/skills-section";
import ProjectsSection from "@/components/home/projects-section";
import ContactSection from "@/components/home/contact-section";
import { useEffect } from "react";
import { useVisitorType } from "@/hooks/use-visitor-type";
import VisitorTypeModal from "@/components/visitor-type-modal";

const Home = () => {
  const { showModal, setShowModal, onSubmit } = useVisitorType();

  // Initialize intersection observer for animation on scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe all elements with animation classes
    document.querySelectorAll('.fade-in-element, .fade-in-right, .fade-in-left').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <VisitorTypeModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={onSubmit}
      />
      <div className="bg-zinc-900 text-zinc-100 mobile-nav-container">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
