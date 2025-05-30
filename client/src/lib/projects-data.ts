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
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Dropshoes",
    shortDescription: "A B2C shoes dropshipping store with adm panel.",
    longDescription: `Dropshoes is a comprehensive B2C e-commerce platform specialized in dropshipping shoes. The platform features a robust administration panel that enables efficient management of products, orders, and customer relationships.

    The system includes advanced features such as automated inventory synchronization with suppliers, real-time order tracking, and a sophisticated analytics dashboard for business intelligence. The user interface is designed with a focus on conversion optimization and user experience, making it easy for customers to find and purchase their desired products.`,
    type: "Web Application",
    category: "web",
    mainImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    ],
    videoUrl: "https://www.youtube.com/embed/your-video-id",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
    features: [
      {
        title: "E-commerce Features",
        items: [
          "Advanced product filtering and search",
          "Secure payment processing",
          "Real-time inventory management",
          "Order tracking system"
        ]
      },
      {
        title: "Admin Panel",
        items: [
          "Comprehensive dashboard analytics",
          "Order management system",
          "Product catalog management",
          "Customer relationship tools"
        ]
      }
    ],
    repositoryUrl: "https://github.com/your-project-repo",
    liveUrl: "https://www.your-project-live.com"
  },
  {
    id: 2,
    title: "Gilson | Realtor",
    shortDescription: "Professional landing page for a high-end real estate agent.",
    longDescription: `A sophisticated landing page designed for a luxury real estate agent, featuring an elegant and modern design that reflects the premium nature of the properties being sold. The website incorporates advanced features to showcase properties and capture qualified leads.

    The platform includes virtual tour integration, detailed property listings, and a custom-built CRM integration for efficient lead management. The design emphasizes visual storytelling through high-quality imagery and smooth animations.`,
    type: "Lead Capture Landing Page",
    category: "web",
    mainImage: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa",
    gallery: [
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    ],
    videoUrl: "https://www.youtube.com/embed/your-video-id",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Supabase"],
    features: [
      {
        title: "Property Showcase",
        items: [
          "Virtual property tours",
          "High-resolution image galleries",
          "Interactive property maps",
          "Detailed property specifications"
        ]
      },
      {
        title: "Lead Generation",
        items: [
          "Smart contact forms",
          "Property inquiry system",
          "Newsletter subscription",
          "Automated lead qualification"
        ]
      }
    ],
    repositoryUrl: "https://github.com/your-project-repo",
    liveUrl: "https://www.your-project-live.com"
  },
  {
    id: 3,
    title: "INerd",
    shortDescription: "Modern e-commerce platform for tech enthusiasts.",
    longDescription: `INerd is a cutting-edge e-commerce platform designed specifically for technology enthusiasts. The platform offers a unique shopping experience with detailed product specifications, user reviews, and technical comparisons.

    The website features a modern, responsive design with advanced filtering options, real-time stock updates, and a sophisticated recommendation system based on user preferences and browsing history.`,
    type: "Web Application",
    category: "web",
    mainImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    ],
    videoUrl: "https://www.youtube.com/embed/your-video-id",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    features: [
      {
        title: "Shopping Experience",
        items: [
          "Advanced product filtering",
          "Real-time stock updates",
          "Product comparison tool",
          "Wishlist functionality"
        ]
      },
      {
        title: "User Features",
        items: [
          "User reviews and ratings",
          "Personalized recommendations",
          "Order tracking",
          "Technical specifications comparison"
        ]
      }
    ],
    repositoryUrl: "https://github.com/your-project-repo",
    liveUrl: "https://www.your-project-live.com"
  },
  {
    id: 4,
    title: "Kosai Digital",
    shortDescription: "Digital agency website with modern design and animations.",
    longDescription: `Kosai Digital is a corporate website for a digital agency that showcases their services, portfolio, and expertise. The website features stunning animations, interactive elements, and a modern design that reflects the agency's creative capabilities.

    The platform includes a dynamic portfolio showcase, detailed service descriptions, and an innovative contact system. The design emphasizes visual storytelling and user engagement through interactive elements and smooth transitions.`,
    type: "Corporate Landing Page",
    category: "web",
    mainImage: "https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6",
    gallery: [
      "https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
    ],
    videoUrl: "https://www.youtube.com/embed/your-video-id",
    technologies: ["Next.js", "Three.js", "GSAP", "Tailwind CSS"],
    features: [
      {
        title: "Interactive Elements",
        items: [
          "3D animations",
          "Parallax effects",
          "Custom cursor interactions",
          "Smooth page transitions"
        ]
      },
      {
        title: "Content Sections",
        items: [
          "Dynamic portfolio gallery",
          "Service showcases",
          "Team member profiles",
          "Interactive contact form"
        ]
      }
    ],
    repositoryUrl: "https://github.com/your-project-repo",
    liveUrl: "https://www.your-project-live.com"
  },
  {
    id: 5,
    title: "Fizzi 3D",
    shortDescription: "Interactive 3D product visualization platform.",
    longDescription: `Fizzi 3D is an innovative platform that enables users to visualize and customize products in 3D. The application provides real-time 3D rendering with customizable materials, colors, and configurations.

    The platform features advanced 3D modeling capabilities, intuitive controls for product manipulation, and high-quality rendering options. Users can explore products from any angle and customize various aspects of the design.`,
    type: "Web Application",
    category: "web",
    mainImage: "https://images.unsplash.com/photo-1616400619175-5beda3a17896",
    gallery: [
      "https://images.unsplash.com/photo-1616400619175-5beda3a17896",
      "https://images.unsplash.com/photo-1633899306328-c5e70574aaa3",
      "https://images.unsplash.com/photo-1633899306328-c5e70574aaa3"
    ],
    videoUrl: "https://www.youtube.com/embed/your-video-id",
    technologies: ["Three.js", "React", "WebGL", "Node.js"],
    features: [
      {
        title: "3D Visualization",
        items: [
          "Real-time 3D rendering",
          "Material customization",
          "Product configuration",
          "High-quality exports"
        ]
      },
      {
        title: "User Interface",
        items: [
          "Intuitive controls",
          "Custom view presets",
          "Measurement tools",
          "Sharing capabilities"
        ]
      }
    ],
    repositoryUrl: "https://github.com/your-project-repo",
    liveUrl: "https://www.your-project-live.com"
  },
  {
    id: 6,
    title: "Brutal Beard",
    shortDescription: "Premium men's grooming e-commerce platform.",
    longDescription: `Brutal Beard is a specialized e-commerce platform for premium men's grooming products. The website combines sophisticated design with powerful e-commerce functionality to deliver an exceptional shopping experience.

    The platform includes features such as a subscription service for regular products, detailed product information with usage guides, and a loyalty program. The design emphasizes brand storytelling and product education.`,
    type: "E-commerce",
    category: "web",
    mainImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
    gallery: [
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
      "https://images.unsplash.com/photo-1621607512214-68297480165e",
      "https://images.unsplash.com/photo-1621607512214-68297480165e"
    ],
    videoUrl: "https://www.youtube.com/embed/your-video-id",
    technologies: ["Shopify", "Next.js", "Tailwind CSS", "Node.js"],
    features: [
      {
        title: "Shopping Features",
        items: [
          "Subscription service",
          "Product bundles",
          "Loyalty program",
          "Gift cards"
        ]
      },
      {
        title: "Content",
        items: [
          "Product guides",
          "Blog articles",
          "Video tutorials",
          "Customer reviews"
        ]
      }
    ],
    repositoryUrl: "https://github.com/your-project-repo",
    liveUrl: "https://www.your-project-live.com"
  }
];
