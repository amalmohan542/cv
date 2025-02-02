import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Amal Mohan K",
  initials: "AMK",
  location: "Kerala, India, IST",
  locationLink: "https://maps.app.goo.gl/jxXBKu7ZUkf2tYTy6",
  about:
    "Frontend  Engineer focused on building products with extra attention to detail",
  summary:
    "Dedicated frontend developer with a passion for creating captivating web experiences using React.js, Next.js and Vue.js. Bringing extensive expertise in e-commerce, online video editing, and AI-powered SaaS platforms. Proficient in JavaScript and TypeScript.",
  avatarUrl: "https://avatars.githubusercontent.com/u/33391178?v=4",
  personalWebsiteUrl: "https://amalmohank.netlify.app/",
  contact: {
    email: "amalmohan542@gmail.com",
    tel: "+91 9495861626",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/amalmohan542",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amalmohank/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Hamburg University of Technology, Germany",
      degree: "Master of Science in Data Science",
      start: "2024",
      end: "Present",
    },
    {
      school: "Government Engineering College Palakkad, Sreekrishnapuram, Kerala, India",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      start: "2017",
      end: "  2021",
    },
  ],
  work: [
    {
      company: "KeyValue Software Systems",
      link: "https://www.keyvalue.systems/",
      badges: [],
      title: "Software Engineer",
      logo: ParabolLogo,
      start: "Jul 2021",
      end: "Present",
      description:
        "Worked on developing scalable web applications using React.js, Next.js and Vue.js across diverse domains, including e-commerce, video editing, asset management, and Privacy Management Systems.",
    },
    {
      company: "uniQin.ai",
      link: "https://uniqin.ai/",
      badges: ["Remote"],
      title: "Software Engineer Intern",
      logo: ClevertechLogo,
      start: "Arp 2021",
      end: "June 2021",
      description:
        "Led an integral role in constructing a scalable, AI-powered sales strategy SaaS platform using Vue.js, PostgreSQL,  and FastAPI, fostering data-driven insights and customer success.",
    },
    {
      company: "Industrus Tech",
      link: "https://industrustech.in/",
      badges: [],
      title: "Web Development Intern",
      logo: JojoMobileLogo,
      start: "May 2020",
      end: "Jun 2020",
      description:
        "Mastered HTML, CSS, and JavaScript to build a modern, accessible e-commerce website for an electric scooter brand. Prioritized intuitive navigation, product clarity, and smooth checkout for optimal customer experience.",
    },
  ],
  skills: [
    "JavaScript",
    "Python",
    "TypeScript",
    "React/Next.js/ReactNative",
    "Tailwind/SCSS",
    "Node.js",
    "GraphQL",
  ],
  projects: [
    {
      title: "JobRadar App",
      year: "2023",
      techStack: ["Side Project", "JavaScript", "RectNative", "RapidAPI"],
      description:
        "A job listings app empowering users to efficiently search, explore, and apply for opportunities across various platforms.",
      logo: ConsultlyLogo,
      link: {
        label: "Github Repo",
        href: "https://github.com/amalmohan542/JobRadarApp",
      },
    },
    {
      title: "Netflix Clone",
      year: "2022",
      techStack: ["Side Project", "JavaScript", "React.js", "themoviedb API"],
      description:
        "Developed a Netflix clone using React.js and CSS, mimicking the popular streaming platform’s user interface.",
      logo: MonitoLogo,
      link: {
        label: "netflix-clone",
        href: "https://netflix-clone542.netlify.app/",
      },
    },
    {
      title: "Price Optimization for Sellers",
      year: "2021",
      techStack: ["Internship Project", "Vue.js", "FastApi", "PostgreSQL"],
      description:
        "A Web Application utilizing Meta’s Prophet forecasting algorithm to suggest optimal prices for products to maximize revenue. ",
      logo: JarockiMeLogo,
    },
  ],
} as const;
