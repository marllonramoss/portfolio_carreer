export interface Project {
  id: number;
  type: string;
  category: string;
  mainImage: string;
  videoUrl?: string;
  gallery: string[];
  technologies: string[];
  repositoryUrl: string;
  liveUrl?: string;
  isSold?: boolean;
  isPrivateRepo?: boolean;
  isPrivateLive?: boolean;
  title: string;
  shortDescription: string;
}

export const projects: Project[] = [
  {
    id: 1,
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
    videoUrl: "https://res.cloudinary.com/du55aj4g9/video/upload/v1750205664/8DDC2024-AD78-4C2B-88E2-2AB51F3FCE94_video_l5qbsv.mp4",
    technologies: ["React", "Express", "Vite", "Docker", "Tailwind", "N8N", "React Helmet"],
    repositoryUrl: "https://github.com/your-project-repo",
    liveUrl: "https://www.your-project-live.com",
    isSold: true,
    isPrivateRepo: true,
    isPrivateLive: false,
    title: "Gil Imóveis",
    shortDescription: "A real estate platform with a detailed description and features like property display and user interface."
  },
  {
    id: 2,
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
    repositoryUrl: "https://github.com/marllonramoss/Suburbia",
    liveUrl: "https://suburbia-skateboard-3d.netlify.app/",
    title: "Suburbia Skateboard",
    shortDescription: "An immersive user experience with a headless CMS architecture and various features related to content management and performance."
  },
  {
    id: 3,
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
    repositoryUrl: "https://github.com/marllonramoss/LAF-Energy",
    liveUrl: "https://laf-energy.netlify.app/",
    isSold: true,
    isPrivateRepo: true,
    isPrivateLive: true,
    title: "LAF ENERGY",
    shortDescription: "A landing page for a solar energy company, focusing on conversion and service presentation."
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
