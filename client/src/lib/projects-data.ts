export interface Project {
  id: number;
  title: string;
  type: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  mainImage: string;
  videoUrl?: string;
  gallery: string[];
  technologies: string[];
  features: {
    title: string;
    items: string[];
  }[];
  repositoryUrl: string;
  liveUrl?: string;
  isSold?: boolean;
  isPrivateRepo?: boolean;
  isPrivateLive?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Gil imoveis",
    shortDescription: "Real estate platform that seamlessly connects people to their dream properties",
    longDescription: `Full-stack TypeScript app with React frontend and Express backend. Integrates n8n for workflow automation with WebSocket real-time updates, secure auth system, and responsive UI with Tailwind. Containerized with Docker for easy deployment`,
    type: "Web Application",
    category: "web",
    mainImage: "https://res.cloudinary.com/du55aj4g9/image/upload/t_Banner 16:9/v1750204006/MacBook_z8mlju.png",
    gallery: [
      "https://res.cloudinary.com/du55aj4g9/image/upload/v1750203268/11_owpdil.jpg",
      "https://res.cloudinary.com/du55aj4g9/image/upload/v1750203269/22_d7sypz.jpg",
      "https://res.cloudinary.com/du55aj4g9/image/upload/v1750203271/33_fjcelm.jpg",
      "https://res.cloudinary.com/du55aj4g9/image/upload/v1750203255/44_u1aoq7.jpg",
      "https://res.cloudinary.com/du55aj4g9/image/upload/v1750203263/55_wr03r3.jpg",
      "https://res.cloudinary.com/du55aj4g9/image/upload/v1750203256/66_arytpa.jpg",
      "https://res.cloudinary.com/du55aj4g9/image/upload/v1750203258/77_gtmooh.jpg",
      "https://res.cloudinary.com/du55aj4g9/image/upload/v1750203263/88_qf9ajz.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/your-video-id",
    technologies: ["React", "Express", "Vite", "Docker", "Tailwind", "N8N", "React Helmet"],
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
    ],
    repositoryUrl: "https://github.com/your-project-repo",
    liveUrl: "https://www.your-project-live.com",
    isSold: true,
    isPrivateRepo: true,
    isPrivateLive: false
  },
  {
    id: 2,
    title: "Suburbia Skateboard",
    shortDescription: "Imersive user experience.",
    longDescription: `Built on a robust React/Next.js foundation, the project implements a headless CMS architecture with Prismic, enabling flexible content management while maintaining high performance through hybrid rendering strategies.`,
    type: "Web Application",
    category: "web",
    mainImage: "https://res.cloudinary.com/du55aj4g9/image/upload/v1750196160/Elegant_Black_Laptop_Mockup_a18ih3.png",
    gallery: [
      "https://res.cloudinary.com/du55aj4g9/image/upload/v1750188085/1-hero_uy40dz.jpg",
      "https://res.cloudinary.com/du55aj4g9/image/upload/v1750187937/2-boards_gbdpzs.jpg",
      "https://res.cloudinary.com/du55aj4g9/image/upload/v1750187938/3-cards_eh9bbq.jpg",
      "https://res.cloudinary.com/du55aj4g9/image/upload/v1750187937/4-team_apon3o.jpg",
      "https://res.cloudinary.com/du55aj4g9/image/upload/v1750187937/5-video_ac8nlu.jpg",
      "https://res.cloudinary.com/du55aj4g9/image/upload/v1750187939/6-footer_ig7agz.jpg",
      "https://res.cloudinary.com/du55aj4g9/image/upload/v1750187936/7-loading_w6yr4i.jpg",
      "https://res.cloudinary.com/du55aj4g9/image/upload/v1750187937/8-build_gcunfo.jpg",
      
    ],
    videoUrl: "https://res.cloudinary.com/du55aj4g9/video/upload/v1750190314/0617_swjaze.mp4",
    technologies: ["Next.js", "Tailwind CSS", "GSAP", "R3F", "Prismic", "Slice Machine", "Matter.js"],
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
    ],
    repositoryUrl: "https://github.com/marllonramoss/Suburbia",
    liveUrl: "https://suburbia-skateboard-3d.netlify.app/"
  },
  {
    id: 3,
    title: "LAF ENERGY",
    shortDescription: "Landing page para empresa de energia solar, com foco em conversão e apresentação de serviços.",
    longDescription: `Design de uma landing page moderna para empresa de energia solar. O projeto foi desenvolvido no Figma, apresentando uma interface limpa e profissional que destaca os principais serviços e benefícios da empresa.

    O design prioriza a experiência do usuário e a clareza na comunicação, com seções bem definidas para serviços, benefícios e contato.`,
    type: "Design",
    category: "design",
    mainImage: "https://res.cloudinary.com/du55aj4g9/image/upload/v1750197353/11_eeogr2.jpg",
    gallery: [
      "https://res.cloudinary.com/du55aj4g9/image/upload/v1750197353/11_eeogr2.jpg",
      "https://res.cloudinary.com/du55aj4g9/image/upload/v1750198165/555_px7xhc.jpg",
      "https://res.cloudinary.com/du55aj4g9/image/upload/v1750197350/33_yi8mcc.jpg",
    ],
    videoUrl: "https://res.cloudinary.com/du55aj4g9/video/upload/v1750199155/14D1CF12-B846-40B9-90F1-CBB2F0CF5F0C_video_vnmnhe.mov",
    technologies: ["Figma", "UI/UX Design"],
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
    ],
    repositoryUrl: "https://github.com/marllonramoss/LAF-Energy",
    liveUrl: "https://laf-energy.netlify.app/",
    isSold: true,
    isPrivateRepo: true,
    isPrivateLive: true
  },
  // {
  //   id: 4,
  //   title: "Bitcent",
  //   shortDescription: "Landing page para empresa de energia solar, com foco em conversão e apresentação de serviços.",
  //   longDescription: `Design de uma landing page moderna para empresa de energia solar. O projeto foi desenvolvido no Figma, apresentando uma interface limpa e profissional que destaca os principais serviços e benefícios da empresa.

  //   O design prioriza a experiência do usuário e a clareza na comunicação, com seções bem definidas para serviços, benefícios e contato.`,
  //   type: "Design",
  //   category: "design",
  //   mainImage: "https://res.cloudinary.com/du55aj4g9/image/upload/v1750197353/11_eeogr2.jpg",
  //   gallery: [
  //     "https://res.cloudinary.com/du55aj4g9/image/upload/v1750197353/11_eeogr2.jpg",
  //     "https://res.cloudinary.com/du55aj4g9/image/upload/v1750198165/555_px7xhc.jpg",
  //     "https://res.cloudinary.com/du55aj4g9/image/upload/v1750197350/33_yi8mcc.jpg",
      
  //   ],
  //   videoUrl: "https://res.cloudinary.com/du55aj4g9/video/upload/v1750199155/14D1CF12-B846-40B9-90F1-CBB2F0CF5F0C_video_vnmnhe.mov",
  //   technologies: ["Figma", "UI/UX Design"],
  //   features: [
  //     {
  //       title: "Landing Page Design",
  //       items: [
  //         "Design moderno e responsivo",
  //         "Seção hero com chamada principal",
  //         "Seção de benefícios da energia solar",
  //         "Seção de serviços oferecidos",
  //         "Formulário de contato"
  //       ]
  //     }
  //   ],
  //   repositoryUrl: "https://github.com/marllonramoss/LAF-Energy",
  //   liveUrl: "https://laf-energy.netlify.app/"
  // },
  // {
  //   id: 5,
  //   title: "Barba Brutal",
  //   shortDescription: "Landing page para empresa de energia solar, com foco em conversão e apresentação de serviços.",
  //   longDescription: `Design de uma landing page moderna para empresa de energia solar. O projeto foi desenvolvido no Figma, apresentando uma interface limpa e profissional que destaca os principais serviços e benefícios da empresa.

  //   O design prioriza a experiência do usuário e a clareza na comunicação, com seções bem definidas para serviços, benefícios e contato.`,
  //   type: "Design",
  //   category: "design",
  //   mainImage: "https://res.cloudinary.com/du55aj4g9/image/upload/v1750197353/11_eeogr2.jpg",
  //   gallery: [
  //     "https://res.cloudinary.com/du55aj4g9/image/upload/v1750197353/11_eeogr2.jpg",
  //     "https://res.cloudinary.com/du55aj4g9/image/upload/v1750198165/555_px7xhc.jpg",
  //     "https://res.cloudinary.com/du55aj4g9/image/upload/v1750197350/33_yi8mcc.jpg",
      
  //   ],
  //   videoUrl: "https://res.cloudinary.com/du55aj4g9/video/upload/v1750199155/14D1CF12-B846-40B9-90F1-CBB2F0CF5F0C_video_vnmnhe.mov",
  //   technologies: ["Figma", "UI/UX Design"],
  //   features: [
  //     {
  //       title: "Landing Page Design",
  //       items: [
  //         "Design moderno e responsivo",
  //         "Seção hero com chamada principal",
  //         "Seção de benefícios da energia solar",
  //         "Seção de serviços oferecidos",
  //         "Formulário de contato"
  //       ]
  //     }
  //   ],
  //   repositoryUrl: "https://github.com/marllonramoss/LAF-Energy",
  //   liveUrl: "https://laf-energy.netlify.app/"
  // },
  // {
  //   id: 6,
  //   title: "Portfolio",
  //   shortDescription: "Landing page para empresa de energia solar, com foco em conversão e apresentação de serviços.",
  //   longDescription: `Design de uma landing page moderna para empresa de energia solar. O projeto foi desenvolvido no Figma, apresentando uma interface limpa e profissional que destaca os principais serviços e benefícios da empresa.

  //   O design prioriza a experiência do usuário e a clareza na comunicação, com seções bem definidas para serviços, benefícios e contato.`,
  //   type: "Design",
  //   category: "design",
  //   mainImage: "https://res.cloudinary.com/du55aj4g9/image/upload/v1750197353/11_eeogr2.jpg",
  //   gallery: [
  //     "https://res.cloudinary.com/du55aj4g9/image/upload/v1750197353/11_eeogr2.jpg",
  //     "https://res.cloudinary.com/du55aj4g9/image/upload/v1750198165/555_px7xhc.jpg",
  //     "https://res.cloudinary.com/du55aj4g9/image/upload/v1750197350/33_yi8mcc.jpg",
      
  //   ],
  //   videoUrl: "https://res.cloudinary.com/du55aj4g9/video/upload/v1750199155/14D1CF12-B846-40B9-90F1-CBB2F0CF5F0C_video_vnmnhe.mov",
  //   technologies: ["Figma", "UI/UX Design"],
  //   features: [
  //     {
  //       title: "Landing Page Design",
  //       items: [
  //         "Design moderno e responsivo",
  //         "Seção hero com chamada principal",
  //         "Seção de benefícios da energia solar",
  //         "Seção de serviços oferecidos",
  //         "Formulário de contato"
  //       ]
  //     }
  //   ],
  //   repositoryUrl: "https://github.com/marllonramoss/LAF-Energy",
  //   liveUrl: "https://laf-energy.netlify.app/"
  // },

];
