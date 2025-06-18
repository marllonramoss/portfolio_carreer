import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollObserver } from "@/hooks/use-scroll-observer";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { PatternFormat, NumberFormatValues } from "react-number-format";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

const phoneFormats = {
  BR: {
    format: "(##) #####-####",
    placeholder: "(11) 99999-9999"
  },
  INTL: {
    format: "+# (###) ###-####",
    placeholder: "+1 (555) 555-5555"
  }
};

const contactMethods = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: "fab fa-whatsapp",
    inputType: "tel",
    inputLabel: "WhatsApp Number"
  },
  {
    id: "email",
    label: "Email",
    icon: "fas fa-envelope",
    inputType: "email",
    placeholder: "your@email.com",
    inputLabel: "Email Address",
    mask: null
  }
];

const ContactSection = () => {
  const [ref, isVisible] = useScrollObserver<HTMLDivElement>({ threshold: 0.1 });
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedMethod, setSelectedMethod] = useState(contactMethods[0].id);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [phoneFormat, setPhoneFormat] = useState<'BR' | 'INTL'>(language === 'pt-BR' ? 'BR' : 'INTL');
  const [formData, setFormData] = useState({
    contactInfo: "",
    name: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentMethod = contactMethods.find(method => method.id === selectedMethod);

  const handleMethodSelect = (methodId: string) => {
    setSelectedMethod(methodId);
    setIsDropdownOpen(false);
    setFormData(prev => ({ ...prev, contactInfo: "" }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const togglePhoneFormat = () => {
    setPhoneFormat(prev => prev === 'BR' ? 'INTL' : 'BR');
    setFormData(prev => ({ ...prev, contactInfo: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.contactInfo || !formData.name || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill all required fields.",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const requestData = {
        method: selectedMethod,
        contactInfo: selectedMethod === 'whatsapp' ? formData.contactInfo.replace(/[^+\d]/g, '') : formData.contactInfo,
        name: formData.name,
        message: formData.message
      };

      // Enviar dados para o webhook do n8n
      const response = await apiRequest('POST', '/api/contact', requestData);

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "I'll get back to you as soon as possible.",
          variant: "default"
        });

        // Limpar formulário
        setFormData({
          contactInfo: "",
          name: "",
          message: ""
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-grain">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-zinc-100 relative inline-block">
                  {t.contact.title}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-purple-600"></span>
                </h2>
                
                <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
                  {t.contact.subtitle}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-center text-center">
                  <a href="mailto:contatomarllonramos@gmail.com" className="group">
                    <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-zinc-700 transition-colors">
                      <i className="fas fa-envelope text-purple-600 text-2xl"></i>
                    </div>
                  </a>
                  <span className="text-zinc-400 text-sm mb-2">{t.contact.email.label}</span>
                  <a href="mailto:contatomarllonramos@gmail.com" className="text-zinc-100 hover:text-purple-600 transition-colors">contatomarllonramos@gmail.com</a>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <a href="https://wa.me/5521989399832" target="_blank" rel="noopener noreferrer" className="group">
                    <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-zinc-700 transition-colors">
                      <i className="fab fa-whatsapp text-purple-600 text-2xl"></i>
                    </div>
                  </a>
                  <span className="text-zinc-400 text-sm mb-2">{t.contact.whatsapp.label}</span>
                  <a href="https://wa.me/5521989399832" className="text-zinc-100 hover:text-purple-600 transition-colors">+55 (21) 98939-9832</a>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-4">
                    <i className="fas fa-map-marker-alt text-purple-600 text-2xl"></i>
                  </div>
                  <span className="text-zinc-400 text-sm mb-2">{t.contact.location.label}</span>
                  <div className="flex items-center gap-2 justify-center">
                    <span className="text-zinc-100">{t.contact.location.basedIn}</span>
                    <img src="https://flagcdn.com/br.svg" alt="Brazil flag" className="w-5 h-4 inline-block" />
                  </div>
                  <span className="block text-sm text-zinc-400">{t.contact.location.available}</span>
                </div>
              </div>
              
              <div className="flex justify-center space-x-6">
                <a href="https://github.com/marllonramoss" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors">
                  <i className="fab fa-github text-zinc-300 text-xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/marllonramos" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors">
                  <i className="fab fa-linkedin-in text-zinc-300 text-xl"></i>
                </a>
                <a href="https://wa.me/5521989399832" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors">
                  <i className="fab fa-whatsapp text-zinc-300 text-xl"></i>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
