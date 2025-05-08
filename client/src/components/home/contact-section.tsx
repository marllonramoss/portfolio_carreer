import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollObserver } from "@/hooks/use-scroll-observer";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const ContactSection = () => {
  const [ref, isVisible] = useScrollObserver<HTMLDivElement>({ threshold: 0.1 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill all required fields.",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsSubmitting(true);
      await apiRequest("POST", "/api/contact", formData);
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or reach out via email directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-grain">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center" ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-zinc-100 relative inline-block">
                LET'S CONNECT
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-purple-600"></span>
              </h2>
              
              <p className="text-lg text-zinc-300 mb-8">
                Interested in working together? Let's discuss your project and see how I can help bring your vision to life.
              </p>
              
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mr-4">
                    <i className="fas fa-envelope text-purple-600"></i>
                  </div>
                  <div>
                    <span className="text-zinc-400 text-sm">Email</span>
                    <a href="mailto:contact@example.com" className="block text-zinc-100 hover:text-purple-600 transition-colors">contact@example.com</a>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mr-4">
                    <i className="fas fa-phone text-purple-600"></i>
                  </div>
                  <div>
                    <span className="text-zinc-400 text-sm">Phone</span>
                    <a href="tel:+1234567890" className="block text-zinc-100 hover:text-purple-600 transition-colors">+123 456 7890</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt text-purple-600"></i>
                  </div>
                  <div>
                    <span className="text-zinc-400 text-sm">Location</span>
                    <span className="block text-zinc-100">Available Worldwide (Remote)</span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors">
                  <i className="fab fa-github text-zinc-300"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors">
                  <i className="fab fa-linkedin-in text-zinc-300"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors">
                  <i className="fab fa-twitter text-zinc-300"></i>
                </a>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors">
                  <i className="fab fa-dribbble text-zinc-300"></i>
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form 
                onSubmit={handleSubmit}
                className="relative z-10 bg-zinc-900/80 backdrop-blur-sm p-8 rounded-xl border border-zinc-800"
              >
                <h3 className="text-xl font-display font-bold text-zinc-100 mb-6">Send a Message</h3>
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-purple-600 text-zinc-100" 
                    placeholder="Your name" 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-purple-600 text-zinc-100" 
                    placeholder="Your email" 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-zinc-400 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-purple-600 text-zinc-100" 
                    placeholder="Subject" 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-purple-600 text-zinc-100 resize-none" 
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-zinc-100 font-semibold rounded-lg hover-shine hover:shadow-xl transition duration-300 disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
