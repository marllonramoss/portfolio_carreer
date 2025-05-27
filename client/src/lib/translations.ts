type TranslationKeys = {
  hero: {
    title: string[]; // Array para quebra de linha
    subtitle: string;
    viewWorkButton: string;
    connectButton: string;
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    cleanCode: {
      title: string;
      description: string;
    };
    creativeDesign: {
      title: string;
      description: string;
    };
    badges: {
      experience: string;
      role: string;
      entrepreneur: string;
    };
  };
  skills: {
    title: string;
    subtitle: string;
    frontend: string;
    backend: string;
    others: string;
    additionalExpertise: string;
  };
  nav: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: {
      label: string;
    };
    whatsapp: {
      label: string;
    };
    location: {
      label: string;
      basedIn: string;
      available: string;
    };
    form: {
      title: string;
      replyVia: string;
      whatsappLabel: string;
      emailLabel: string;
      nameLabel: string;
      namePlaceholder: string;
      messagePlaceholder: string;
      sendButton: string;
      sendingButton: string;
      responseTime: string;
    };
  };
};

export const translations: Record<'pt-BR' | 'en-US', TranslationKeys> = {
  'en-US': {
    hero: {
      title: ['FULL STACK', 'WEB DEVELOPER'],
      subtitle: 'Creating reliable, performant, and user-focused web applications with a complete tech stack.',
      viewWorkButton: 'View My Work',
      connectButton: 'Let\'s Connect',
    },
    about: {
      title: 'ABOUT ME',
      paragraph1: 'I have a degree in Software Engineering and work as a full stack web developer, with experience in both freelance and team-based projects. I build complete applications using Next.js, React, TypeScript, Tailwind CSS, Node.js, Prisma, and databases like PostgreSQL, MySQL, Firebase, and Supabase, focusing on performance, scalability, and clean architecture.',
      paragraph2: 'I also have strong skills in UI/UX, creating modern, accessible, and responsive interfaces. Im experienced with Docker, Nginx, CI/CD, n8n, system architecture, automated testing, authentication, and deployment. I work in agile teams using Git, following best practices for continuous delivery and code quality at every stage of development.',
      cleanCode: {
        title: 'Clean Code',
        description: 'Elegant, efficient, maintainable',
      },
      creativeDesign: {
        title: 'Creative Design',
        description: 'Innovative, distinctive interfaces',
      },
      badges: {
        experience: '3+ Years Experience',
        role: 'Software Engineer',
        entrepreneur: 'Entrepreneur',
      },
    },
    skills: {
      title: 'SKILLS & EXPERTISE',
      subtitle: 'My technical toolbox combines both frontend and backend technologies with a focus on modern, scalable solutions.',
      frontend: 'FRONTEND',
      backend: 'BACKEND',
      others: 'OTHERS',
      additionalExpertise: 'ADDITIONAL EXPERTISE',
    },
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    contact: {
      title: "LET'S CONNECT",
      subtitle: "Interested in working together? Let's discuss your project and see how I can help bring your vision to life.",
      email: {
        label: "Email",
      },
      whatsapp: {
        label: "WhatsApp",
      },
      location: {
        label: "Location",
        basedIn: "Based in Brazil",
        available: "Available Worldwide (Remote)",
      },
      form: {
        title: "Send Fast Message",
        replyVia: "I'll reply in a few seconds via",
        whatsappLabel: "WhatsApp Number",
        emailLabel: "Email Address",
        nameLabel: "Your name",
        namePlaceholder: "How should I call you?",
        messagePlaceholder: "Write a brief message and I'll get back to you ASAP!",
        sendButton: "Send Message",
        sendingButton: "Sending...",
        responseTime: "Average response time: < 5 minutes",
      },
    },
  },
  'pt-BR': {
    hero: {
      title: ['DESENVOLVEDOR', 'FULL STACK'],
      subtitle: 'Criando aplicações web confiáveis, performáticas e focadas no usuário, com uma stack completa.',
      viewWorkButton: 'Ver Meu Trabalho',
      connectButton: 'Vamos Conectar',
    },
    about: {
      title: 'SOBRE MIM',
      paragraph1: 'Sou formado em Engenharia de Software e atuo como desenvolvedor web full stack, com experiência em projetos freelancer e colaborativos. Trabalho com Next.js, React, TypeScript, Tailwind CSS, além de Node.js, Prisma, e bancos como PostgreSQL, MySQL, Firebase e Supabase, desenvolvendo aplicações completas com foco em performance, escalabilidade e manutenção.',
      paragraph2: 'Tenho domínio em UI/UX, criando interfaces modernas, acessíveis e responsivas. Também aplico conhecimentos em Docker, Nginx, CI/CD, n8n, arquitetura de sistemas, testes automatizados, autenticação e deploy. Participo de times ágeis com versionamento em Git, foco em entrega contínua e atenção à qualidade do código em todas as etapas do projeto.',
      cleanCode: {
        title: 'Código Limpo',
        description: 'Elegante, eficiente, manutenível',
      },
      creativeDesign: {
        title: 'Design Criativo',
        description: 'Interfaces inovadoras e distintas',
      },
      badges: {
        experience: '3+ Anos de Experiência',
        role: 'Engenheiro de Software',
        entrepreneur: 'Empreendedor',
      },
    },
    skills: {
      title: 'HABILIDADES & EXPERTISE',
      subtitle: 'Meu conjunto de ferramentas técnicas combina tecnologias frontend e backend com foco em soluções modernas e escaláveis.',
      frontend: 'FRONTEND',
      backend: 'BACKEND',
      others: 'OUTROS',
      additionalExpertise: 'EXPERTISE ADICIONAL',
    },
    nav: {
      about: 'Sobre',
      skills: 'Habilidades',
      projects: 'Projetos',
      contact: 'Contato',
    },
    contact: {
      title: "VAMOS CONECTAR",
      subtitle: "Interessado em trabalhar junto? Vamos discutir seu projeto e ver como posso ajudar a transformar sua visão em realidade.",
      email: {
        label: "Email",
      },
      whatsapp: {
        label: "WhatsApp",
      },
      location: {
        label: "Localização",
        basedIn: "Localizado no Brasil",
        available: "Disponível Mundialmente (Remoto)",
      },
      form: {
        title: "Enviar Mensagem Rápida",
        replyVia: "Responderei em segundos via",
        whatsappLabel: "Número do WhatsApp",
        emailLabel: "Endereço de Email",
        nameLabel: "Seu nome",
        namePlaceholder: "Como devo te chamar?",
        messagePlaceholder: "Escreva uma mensagem breve e retornarei o mais rápido possível!",
        sendButton: "Enviar Mensagem",
        sendingButton: "Enviando...",
        responseTime: "Tempo médio de resposta: < 5 minutos",
      },
    },
  },
}; 