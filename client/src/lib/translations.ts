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
};

export const translations: Record<'pt-BR' | 'en-US', TranslationKeys> = {
  'en-US': {
    hero: {
      title: ['FULL STACK', 'DEVELOPER'],
      subtitle: 'Crafting digital experiences with a blend of technical precision and artistic vision',
      viewWorkButton: 'View My Work',
      connectButton: 'Let\'s Connect',
    },
    about: {
      title: 'ABOUT ME',
      paragraph1: 'I\'m a passionate Full Stack Developer with a unique blend of technical expertise and creative vision. My approach combines cutting-edge technologies with artistic design principles to create digital experiences that stand out.',
      paragraph2: 'With a strong foundation in both frontend and backend development, I bridge the gap between visual aesthetics and functional engineering. My work is focused on creating applications that are not only technically robust but also visually compelling and intuitive to use.',
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
  },
  'pt-BR': {
    hero: {
      title: ['DESENVOLVEDOR', 'FULL STACK'],
      subtitle: 'Criando experiências digitais com uma mistura de precisão técnica e visão artística',
      viewWorkButton: 'Ver Meu Trabalho',
      connectButton: 'Vamos Conectar',
    },
    about: {
      title: 'SOBRE MIM',
      paragraph1: 'Sou um Desenvolvedor Full Stack apaixonado com uma combinação única de expertise técnica e visão criativa. Minha abordagem combina tecnologias de ponta com princípios de design artístico para criar experiências digitais que se destacam.',
      paragraph2: 'Com uma base sólida tanto em desenvolvimento frontend quanto backend, faço a ponte entre estética visual e engenharia funcional. Meu trabalho é focado em criar aplicações que não são apenas tecnicamente robustas, mas também visualmente atraentes e intuitivas de usar.',
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
  },
}; 