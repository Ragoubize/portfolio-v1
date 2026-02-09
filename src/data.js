import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap, FaPhp, FaLaravel, FaWordpress, FaGitAlt, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql, SiJavascript, SiAxios, SiPostman, SiSpringboot } from "react-icons/si";

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
  { name: "Java", icon: FaJava, color: "#007396" }, 
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" }, 
  { name: "SQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "WordPress", icon: FaWordpress, color: "#21759B" },
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
    skills: {
      title: "My Tech Stack"
    },
    about: {
      title: "About Me",
      p1: "I hold a Bachelor's degree (Licence) in Web & Mobile Development from the prestigious ENSET Mohammedia. My academic background provided the essential foundation for my career, instilling in me a strong sense of engineering discipline and architectural thinking.",
      p2: "Beyond code, I am defined by my organization, rigorous work ethic, and unwavering motivation. I don't just write software; I craft scalable solutions with a focus on clean code and high performance, always eager to tackle complex challenges."
    },
    projects: {
      title: "Featured Projects",
      viewProject: "View Project",
      code: "GitHub"
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's work together on your next big project",
      name: "Full Name",
      email: "Email Address",
      message: "Your Message",
      send: "Send Message",
      info: "Contact Information"
    }
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
    skills: {
      title: "Mes Compétences"
    },
    about: {
      title: "À Propos",
      p1: "Titulaire d'une Licence en Développement Web et Mobile de la prestigieuse ENSET Mohammedia, ma formation académique constitue le socle essentiel de mon expertise. Elle m'a inculqué une rigueur d'ingénierie et une vision architecturale solide.",
      p2: "Au-delà du code, je suis un développeur discipliné, organisé et hautement motivé. Je ne me contente pas de développer des applications ; je conçois des solutions évolutives en mettant l'accent sur le « Clean Code » et la performance, toujours prêt à relever des défis techniques complexes."
    },
    projects: {
      title: "Projets Récents",
      viewProject: "Voir le Projet",
      code: "GitHub"
    },
    contact: {
      title: "Contactez-moi",
      subtitle: "Travaillons ensemble sur votre prochain projet",
      name: "Nom complet",
      email: "Adresse Email",
      message: "Votre Message",
      send: "Envoyer",
      info: "Coordonnées"
    }
  }
};

export const projectsData = [
  {
    title: "Gestion de Devis (PFE)",
    desc: "Application web intelligente pour la gestion et le calcul automatique des devis.",
    tech: ["React", "Node.js", "MongoDB", "PDFKit"],
    image: "/project1.jpg" 
  },
  {
    title: "SGVCD Platform",
    desc: "Plateforme de gestion virtuelle des cours et documents scolaires.",
    tech: ["PHP", "MySQL", "JavaScript", "MVC"],
    image: "/project2.jpg"
  },
  {
    title: "Java Inventory App",
    desc: "Application de gestion de stock développée avec Java et Spring Boot.",
    tech: ["Java", "Spring Boot", "MySQL"],
    image: "/project3.jpg"
  }
];