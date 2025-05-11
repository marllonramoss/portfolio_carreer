export type ProjectType = {
  id: number;
  title: string;
  description: string;
  type: string;
  category: string;
  image: string;
  technologies: string[];
};

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Dropshoes",
    description: "A B2C shoes dropshipping store with adm panel.",
    type: "Web Application",
    category: "web",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["React", "D3.js", "Node.js"],
  },
  {
    id: 2,
    title: "Gilson | Realtor",
    description:
      "A mobile fitness application with custom animations and personalized workout plans.",
    type: "Lead Capture Landing Page",
    category: "web",
    image:
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["React Native", "Firebase", "GraphQL"],
  },
  {
    id: 3,
    title: "INerd",
    description:
      "A complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
    type: "Web Application",
    category: "web",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["Figma", "Next.js", "Tailwind"],
  },
  {
    id: 4,
    title: "Kosai Digital",
    description:
      "A collaborative task management platform with real-time updates and team workflow features.",
    type: "Corporate Landing Page",
    category: "web",
    image:
      "https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["Vue.js", "Node.js", "Socket.io"],
  },
  {
    id: 5,
    title: "Fizzi 3D",
    description:
      "An immersive travel planning app with interactive maps and personalized recommendations.",
    type: "Landing Page",
    category: "web",
    image:
      "https://images.unsplash.com/photo-1616400619175-5beda3a17896?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["Flutter", "Firebase", "Maps API"],
  },
  {
    id: 6,
    title: "Brutal Beard",
    description:
      "A comprehensive design system with components, guidelines, and documentation for scalable products.",
    type: "UI/UX Design",
    category: "web",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["Figma", "Storybook", "React"],
  },
];
