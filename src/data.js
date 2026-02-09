import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap, FaPhp, FaLaravel, FaWordpress, FaGitAlt, FaGithub } from "react-icons/fa";
// 1. حيدنا SiCsharp من هنا حيت دارت المشكل
import { SiTailwindcss, SiMongodb, SiMysql, SiJavascript, SiAxios, SiPostman } from "react-icons/si";
// 2. زدنا هاد السطر الجديد باش نجيبو أيقونة C# من مكتبة أخرى
import { TbBrandCSharp } from "react-icons/tb";

export const skills = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Axios", icon: SiAxios, color: "#5A29E4" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "PHP", icon: FaPhp, color: "#777BB4" },
  { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
  { name: "SQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "WordPress", icon: FaWordpress, color: "#21759B" },
  { name: "C#", icon: TbBrandCSharp, color: "#239120" }, 
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "REST API", icon: SiPostman, color: "#FF6C37" },
];

export const content = {
  en: {
    nav: ["Home", "About", "Skills", "Projects", "Contact"],
    hero: {
      role: "Full Stack MERN Developer",
      h1: "Building Scalable",
      h2: "Modern Solutions",
      desc: "I transform complex requirements into seamless, high-performance web applications using the latest technologies.",
      btn1: "View My Work",
      btn2: "Download CV"
    },
  },
  fr: {
    nav: ["Accueil", "À propos", "Compétences", "Projets", "Contact"],
    hero: {
      role: "Développeur Full Stack MERN",
      h1: "Création de Solutions",
      h2: "Modernes & Évolutives",
      desc: "Je transforme des besoins complexes en applications web fluides et performantes en utilisant les dernières technologies.",
      btn1: "Voir mes travaux",
      btn2: "Télécharger CV"
    },
  }
};

content.en.about = {
  title: "About Me",
  p1: "I am a passionate Full Stack Developer with expertise in building modern web applications. I focus on writing clean, maintainable code and delivering exceptional user experiences.",
  p2: "With a background in MERN stack and C#, I enjoy solving complex problems and turning ideas into reality.",
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Happy Clients", value: "10+" }
  ]
};
content.en.projects = {
  title: "Featured Projects",
  viewProject: "View Project",
  code: "GitHub"
};
content.en.contact = {
  title: "Get In Touch",
  subtitle: "Let's work together on your next big project",
  name: "Full Name",
  email: "Email Address",
  message: "Your Message",
  send: "Send Message",
  info: "Contact Information"
};

// Update fr section
content.fr.about = {
  title: "À Propos",
  p1: "Je suis un développeur Full Stack passionné spécialisé dans la création d'applications web modernes. Je me concentre sur l'écriture de code propre et l'expérience utilisateur.",
  p2: "Avec une expertise en stack MERN et C#, j'aime résoudre des problèmes complexes et transformer des idées en réalité.",
  stats: [
    { label: "Années d'expérience", value: "2+" },
    { label: "Projets Terminés", value: "15+" },
    { label: "Clients Satisfaits", value: "10+" }
  ]
};
content.fr.projects = {
  title: "Projets Récents",
  viewProject: "Voir le Projet",
  code: "GitHub"
};
content.fr.contact = {
  title: "Contactez-moi",
  subtitle: "Travaillons ensemble sur votre prochain projet",
  name: "Nom complet",
  email: "Adresse Email",
  message: "Votre Message",
  send: "Envoyer",
  info: "Coordonnées"
};

// Zid list dyal l-projects hna (t9der tghiyerhom mn b3d)
export const projectsData = [
  {
    title: "E-Commerce Platform",
    desc: "A full MERN stack shop with payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Management System",
    desc: "Inventory and sales management system built with Laravel.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Portfolio 3D",
    desc: "Modern portfolio with Framer Motion and 3D elements.",
    tech: ["React", "Framer Motion", "Three.js"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop"
  }
];