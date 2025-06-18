type ProjectTranslation = {
  title: string;
  shortDescription: string;
  longDescription: string;
  features: {
    title: string;
    items: string[];
  }[];
};

type ProjectsTranslations = {
  [key: number]: ProjectTranslation;
};

export const projectsTranslations: Record<'pt-BR' | 'en-US', ProjectsTranslations> = {
  'en-US': {
    1: {
      title: "Gil imoveis",
      shortDescription: "Real estate platform that seamlessly connects people to their dream properties",
      longDescription: `Full-stack TypeScript app with React frontend and Express backend. Integrates n8n for workflow automation with WebSocket real-time updates, secure auth system, and responsive UI with Tailwind. Containerized with Docker for easy deployment`,
      features: [
        {
          title: "Property Display",
          items: [
            "Luxury properties showcase",
            "Affordable properties section",
            "Property comparison section",
            "Interactive property cards"
          ]
        },
        {
          title: "User Interface",
          items: [
            "Responsive navigation",
            "Hero section with main CTA",
            "About section",
            "Testimonials display",
            "Digital guide section",
            "Contact form",
            "Footer with links",
          ]
        },
        {
          title: "Technical Implementation",
          items: [
            "SEO optimization with React Helmet",
            "Responsive design",
            "Component-based architecture",
            "Testimonials display",
            "Digital guide section",
            "Contact form",
            "Footer with links",
          ]
        }
      ]
    },
    2: {
      title: "Suburbia Skateboard",
      shortDescription: "Imersive user experience.",
      longDescription: `Built on a robust React/Next.js foundation, the project implements a headless CMS architecture with Prismic, enabling flexible content management while maintaining high performance through hybrid rendering strategies.`,
      features: [
        {
          title: "Prismic-Driven Architecture",
          items: [
            "Complete content-first development approach",
            "Dynamic page structure controlled by Prismic",
            "Custom type definitions for all content models",
            "Real-time content updates without deployments",
            "Slice Machine integration for component-based content"
          ]
        },
        {
          title: "Advanced Animation System",
          items: [
            "SVG path animations with GSAP",
            "Scroll-triggered animations",
            "Complex motion paths and timelines",
            "Interactive SVG morphing",
            "Parallax effects and smooth transitions",
            "Physics-based animations with Matter.js"
          ]
        },
        {
          title: "3D Interactive Elements",
          items: [
            "Three.js scene management",
            "WebGL-powered 3D models",
            "Interactive 3D environments",
            "Custom shader implementations",
            "Performance-optimized 3D rendering"
          ]
        },
        {
          title: "Content Management Excellence",
          items: [
            "Structured content modeling",
            "Dynamic component composition",
            "Multi-language support",
            "Rich text editing capabilities",
            "Media asset optimization",
            "Custom field types and validations"
          ]
        },
        {
          title: "Performance & Optimization",
          items: [
            "Hybrid rendering strategies",
            "Image optimization pipeline",
            "Lazy loading implementation",
            "Code splitting and bundle optimization",
            "Caching strategies",
            "Asset preloading"
          ]
        },
        {
          title: "Developer Experience",
          items: [
            "Type-safe Prismic integration",
            "Automated content type generation",
            "Hot module replacement",
            "Development environment with Turbopack",
            "Comprehensive error handling",
            "Debugging tools integration"
          ]
        },
        {
          title: "UI/UX Innovations",
          items: [
            "Micro-interactions",
            "Gesture-based interactions",
            "Responsive design patterns",
            "Accessibility compliance",
            "Cross-browser compatibility",
            "Touch device optimization"
          ]
        },
        {
          title: "Deployment & Infrastructure",
          items: [
            "Netlify integration",
            "Automated preview deployments",
            "Environment-based configuration",
            "CDN optimization",
            "Build-time optimizations",
            "Error tracking and monitoring"
          ]
        }
      ]
    },
    3: {
      title: "LAF ENERGY",
      shortDescription: "Landing page para empresa de energia solar, com foco em conversão e apresentação de serviços.",
      longDescription: `Design de uma landing page moderna para empresa de energia solar. O projeto foi desenvolvido no Figma, apresentando uma interface limpa e profissional que destaca os principais serviços e benefícios da empresa.

      O design prioriza a experiência do usuário e a clareza na comunicação, com seções bem definidas para serviços, benefícios e contato.`,
      features: [
        {
          title: "Landing Page Design",
          items: [
            "Design moderno e responsivo",
            "Seção hero com chamada principal",
            "Seção de benefícios da energia solar",
            "Seção de serviços oferecidos",
            "Formulário de contato"
          ]
        }
      ]
    }
  },
  'pt-BR': {
    1: {
      title: "Gil imoveis",
      shortDescription: "Plataforma imobiliária que conecta pessoas aos seus imóveis dos sonhos",
      longDescription: `Aplicativo Full-stack em TypeScript com frontend em React e backend em Express. Integra n8n para automação de fluxos de trabalho com atualizações em tempo real via WebSocket, sistema de autenticação seguro e UI responsiva com Tailwind. Containerizado com Docker para fácil implantação`,
      features: [
        {
          title: "Exibição de Imóveis",
          items: [
            "Vitrine de imóveis de luxo",
            "Seção de imóveis acessíveis",
            "Seção de comparação de imóveis",
            "Cards interativos de imóveis"
          ]
        },
        {
          title: "Interface do Usuário",
          items: [
            "Navegação responsiva",
            "Seção hero com CTA principal",
            "Seção sobre",
            "Exibição de depoimentos",
            "Seção de guia digital",
            "Formulário de contato",
            "Rodapé com links",
          ]
        },
        {
          title: "Implementação Técnica",
          items: [
            "Otimização de SEO com React Helmet",
            "Design responsivo",
            "Arquitetura baseada em componentes",
            "Exibição de depoimentos",
            "Seção de guia digital",
            "Formulário de contato",
            "Rodapé com links",
          ]
        }
      ]
    },
    2: {
      title: "Suburbia Skateboard",
      shortDescription: "Experiência de usuário imersiva.",
      longDescription: `Construído sobre uma base robusta de React/Next.js, o projeto implementa uma arquitetura headless CMS com Prismic, permitindo gerenciamento flexível de conteúdo enquanto mantém alto desempenho através de estratégias de renderização híbrida.`,
      features: [
        {
          title: "Arquitetura Baseada em Prismic",
          items: [
            "Abordagem completa de desenvolvimento content-first",
            "Estrutura de página dinâmica controlada pelo Prismic",
            "Definições de tipos personalizados para todos os modelos de conteúdo",
            "Atualizações de conteúdo em tempo real sem deployments",
            "Integração com Slice Machine para conteúdo baseado em componentes"
          ]
        },
        {
          title: "Sistema Avançado de Animações",
          items: [
            "Animações de caminho SVG com GSAP",
            "Animações acionadas por scroll",
            "Caminhos de movimento e timelines complexos",
            "Morfagem interativa de SVG",
            "Efeitos parallax e transições suaves",
            "Animações baseadas em física com Matter.js"
          ]
        },
        {
          title: "Elementos 3D Interativos",
          items: [
            "Gerenciamento de cena Three.js",
            "Modelos 3D com WebGL",
            "Ambientes 3D interativos",
            "Implementações de shader personalizadas",
            "Renderização 3D otimizada para performance"
          ]
        },
        {
          title: "Excelência em Gestão de Conteúdo",
          items: [
            "Modelagem de conteúdo estruturada",
            "Composição dinâmica de componentes",
            "Suporte a múltiplos idiomas",
            "Capacidades de edição de texto rico",
            "Otimização de assets de mídia",
            "Tipos de campo personalizados e validações"
          ]
        },
        {
          title: "Performance & Otimização",
          items: [
            "Estratégias de renderização híbrida",
            "Pipeline de otimização de imagens",
            "Implementação de lazy loading",
            "Code splitting e otimização de bundle",
            "Estratégias de cache",
            "Pré-carregamento de assets"
          ]
        },
        {
          title: "Experiência do Desenvolvedor",
          items: [
            "Integração type-safe com Prismic",
            "Geração automatizada de tipos de conteúdo",
            "Hot module replacement",
            "Ambiente de desenvolvimento com Turbopack",
            "Tratamento abrangente de erros",
            "Integração de ferramentas de debug"
          ]
        },
        {
          title: "Inovações em UI/UX",
          items: [
            "Micro-interações",
            "Interações baseadas em gestos",
            "Padrões de design responsivo",
            "Conformidade com acessibilidade",
            "Compatibilidade cross-browser",
            "Otimização para dispositivos touch"
          ]
        },
        {
          title: "Deploy & Infraestrutura",
          items: [
            "Integração com Netlify",
            "Deployments de preview automatizados",
            "Configuração baseada em ambiente",
            "Otimização de CDN",
            "Otimizações em tempo de build",
            "Monitoramento e rastreamento de erros"
          ]
        }
      ]
    },
    3: {
      title: "LAF ENERGY",
      shortDescription: "Landing page para empresa de energia solar, com foco em conversão e apresentação de serviços.",
      longDescription: `Design de uma landing page moderna para empresa de energia solar. O projeto foi desenvolvido no Figma, apresentando uma interface limpa e profissional que destaca os principais serviços e benefícios da empresa.

      O design prioriza a experiência do usuário e a clareza na comunicação, com seções bem definidas para serviços, benefícios e contato.`,
      features: [
        {
          title: "Design da Landing Page",
          items: [
            "Design moderno e responsivo",
            "Seção hero com chamada principal",
            "Seção de benefícios da energia solar",
            "Seção de serviços oferecidos",
            "Formulário de contato"
          ]
        }
      ]
    }
  }
}; 