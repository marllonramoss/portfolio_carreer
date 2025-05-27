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
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center" ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-zinc-100 relative inline-block">
                {t.contact.title}
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-purple-600"></span>
              </h2>
              
              <p className="text-lg text-zinc-300 mb-8">
                {t.contact.subtitle}
              </p>
              
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mr-4">
                    <i className="fas fa-envelope text-purple-600"></i>
                  </div>
                  <div>
                    <span className="text-zinc-400 text-sm">{t.contact.email.label}</span>
                    <a href="mailto:contatomarllonramos@gmail.com" className="block text-zinc-100 hover:text-purple-600 transition-colors">contatomarllonramos@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mr-4">
                    <i className="fab fa-whatsapp text-purple-600"></i>
                  </div>
                  <div>
                    <span className="text-zinc-400 text-sm">{t.contact.whatsapp.label}</span>
                    <a href="https://wa.me/5521989399832" className="block text-zinc-100 hover:text-purple-600 transition-colors">+55 (21) 98939-9832</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt text-purple-600"></i>
                  </div>
                  <div>
                    <span className="text-zinc-400 text-sm">{t.contact.location.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-100">{t.contact.location.basedIn}</span>
                      <img src="https://flagcdn.com/br.svg" alt="Brazil flag" className="w-5 h-4 inline-block" />
                    </div>
                    <span className="block text-sm text-zinc-400">{t.contact.location.available}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="https://github.com/marllonramoss" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors">
                  <i className="fab fa-github text-zinc-300"></i>
                </a>
                <a href="https://www.linkedin.com/in/marllonramos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors">
                  <i className="fab fa-linkedin-in text-zinc-300"></i>
                </a>
                <a href="https://wa.me/5521989399832" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors">
                  <i className="fab fa-whatsapp text-zinc-300"></i>
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
                <h3 className="text-xl font-display font-bold text-zinc-100 mb-6">{t.contact.form.title}</h3>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-zinc-400 mb-2">
                    {t.contact.form.replyVia}
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-left flex items-center justify-between text-zinc-100 focus:outline-none focus:border-purple-600"
                    >
                      <div className="flex items-center">
                        <i className={`${currentMethod?.icon} text-purple-600 mr-3`}></i>
                        {currentMethod?.label}
                      </div>
                      <i className={`fas fa-chevron-down transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
                    </button>
                    
                    {isDropdownOpen && (
                      <div className="absolute w-full mt-2 bg-zinc-800 border border-zinc-700 rounded-lg shadow-xl z-50">
                        {contactMethods.map(method => (
                          <button
                            key={method.id}
                            type="button"
                            onClick={() => handleMethodSelect(method.id)}
                            className="w-full px-4 py-3 flex items-center text-zinc-100 hover:bg-zinc-700 first:rounded-t-lg last:rounded-b-lg"
                          >
                            <i className={`${method.icon} text-purple-600 mr-3`}></i>
                            {method.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="contactInfo" className="block text-sm font-medium text-zinc-400 mb-2">
                    {currentMethod?.id === 'whatsapp' ? t.contact.form.whatsappLabel : t.contact.form.emailLabel}
                  </label>
                  {currentMethod?.id === 'whatsapp' ? (
                    <div className="relative">
                      <button
                        type="button"
                        onClick={togglePhoneFormat}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-1 hover:bg-zinc-700 rounded transition-colors z-10 flex items-center gap-1 group"
                        title={phoneFormat === 'BR' ? 'Switch to International format' : 'Mudar para formato brasileiro'}
                      >
                        <span className="text-lg">
                          {phoneFormat === 'BR' ? '🇧🇷' : '🌎'}
                        </span>
                        <i className="fas fa-chevron-down text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors"></i>
                      </button>
                      <PatternFormat
                        format={phoneFormats[phoneFormat].format}
                        value={formData.contactInfo}
                        onValueChange={(values: NumberFormatValues) => {
                          setFormData(prev => ({ ...prev, contactInfo: values.value }));
                        }}
                        className="w-full pl-16 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-purple-600 text-zinc-100"
                        placeholder={phoneFormats[phoneFormat].placeholder}
                        valueIsNumericString
                      />
                    </div>
                  ) :
                    <input 
                      type={currentMethod?.inputType}
                      id="contactInfo"
                      value={formData.contactInfo}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-purple-600 text-zinc-100"
                      placeholder={currentMethod?.placeholder}
                    />
                  }
                </div>

                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">{t.contact.form.nameLabel}</label>
                  <input 
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-purple-600 text-zinc-100"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Quick message</label>
                  <textarea 
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-purple-600 text-zinc-100 resize-none"
                    placeholder={t.contact.form.messagePlaceholder}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-zinc-100 font-semibold rounded-lg hover-shine hover:shadow-xl transition duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  <i className={`${currentMethod?.icon}`}></i>
                  {isSubmitting ? t.contact.form.sendingButton : t.contact.form.sendButton}
                </button>

                <p className="text-sm text-zinc-400 text-center mt-4">
                  {t.contact.form.responseTime}
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
