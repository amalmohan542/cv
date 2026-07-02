// Project: resume-builder
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Amal Mohan Koottungal",
  initials: "AMK",
  location: "Hamburg, Germany",
  locationLink: "https://maps.app.goo.gl/VrBN7SmhCeSvxjdR6",
  about:
    "Software Engineer (AI & Full-Stack) | MSc Data Science @ TUHH | Hackathon Grand Prize Winner",
  summary:
    "Software engineer with 3+ years building production web applications and AI-powered products. Grand Prize winner at Germany's largest AI hackathon (100+ teams). Experienced across React/Next.js/Vue frontends and Python/Node backends, with hands-on work in LLMs, RAG, and AI agents. MSc Data Science at TU Hamburg (expected Jul 2026). Google Cloud Associate Cloud Engineer certified. Based in Hamburg; fluent in English; German A1 (in progress); eligible to work in Germany.",
  avatarUrl: "https://avatars.githubusercontent.com/u/33391178?v=4",
  personalWebsiteUrl: "https://amalmohank.netlify.app/",
  contact: {
    email: "amalmohan542@gmail.com",
    tel: "+49 15560689937",
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
      start: "Oct 2024",
      end: "Expected 2027",
    },
    {
      school: "APJ Abdul Kalam Technological University",
      degree:
        "Bachelor of Technology in Computer Science and Engineering — Government Engineering College Palakkad",
      start: "2017",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Front Row Europe GmbH",
      link: "https://www.frontrowgroup.de/",
      badges: [],
      title: "Working Student",
      start: "Jun 2025",
      end: "Present",
      description:
        "Built Python automation tooling for device provisioning and configuration, reducing manual setup time for new hardware integrations. Designed and shipped an inventory tracking system with Python and SQL to monitor device lifecycles and improve troubleshooting efficiency. Own internal platform reliability through proactive monitoring, maintaining 99%+ uptime across the company's technical infrastructure.",
    },
    {
      company: "KeyValue Software Systems",
      link: "https://www.keyvalue.systems/",
      badges: [],
      title: "Software Engineer",
      start: "Jul 2021",
      end: "Sep 2024",
      description:
        "Built scalable web applications for production products including Typito (video editing), LummoShop (e-commerce), and asset/privacy management systems using React, Next.js, Vue.js, and TypeScript. Owned Typito's core video editing features—cropping, resizing, subtitles—driving a 15% increase in user retention. Led Agile sprint planning and backlog grooming across multiple projects, achieving 95% on-time delivery. Shipped features end-to-end from requirements through implementation and component testing.",
    },
    {
      company: "uniQin.ai",
      link: "https://uniqin.ai/",
      badges: [],
      title: "Software Developer Intern",
      start: "Apr 2021",
      end: "Jun 2021",
      description:
        "Built an AI-powered sales strategy platform with sales forecasting and inventory insights. Developed RESTful APIs with FastAPI and PostgreSQL; integrated Shopify webhooks to automate e-commerce data pipelines.",
    },
    {
      company: "Industrus Tech",
      link: "https://industrustech.in/",
      badges: [],
      title: "Web Development Intern",
      start: "May 2020",
      end: "Jun 2020",
      description:
        "Built the front-end for an e-commerce site for an electric scooter company using HTML, CSS, and JavaScript, with accessible navigation and a streamlined checkout flow.",
    },
  ],
  skills: [
    "TypeScript",
    "Python",
    "React/Next.js",
    "AI Agents/LLM/RAG",
    "Node.js/Express/Nest.js",
    "FastAPI",
    "JavaScript",
    "Vue.js/Nuxt.js",
    "Docker/Kubernetes",
    "GCP/AWS",
    "SQL/MongoDB",
    "Apache Kafka/Flink",
    "OpenAI API/Gemini",
    "Tailwind/Shadcn",
    "HTML5/CSS3/SCSS",
    "Git/GitHub",
    "Pandas/NumPy",
    "PyTorch/TensorFlow",
    "Java",
    "C/C++",
  ],
  projects: [
    {
      title: "Digital Shield App",
      year: "2026",
      techStack: [
        "Hackathon",
        "TypeScript",
        "OpenAI API",
        "AI Agents",
        "Next.js",
      ],
      description:
        "Grand Prize and Fan Favourite at Germany's largest AI hackathon (100+ teams, 400+ participants). Built an AI agent that intercepts elderly phone scams in real time using OpenAI APIs, scoring top marks in Product Viability and Technical Innovation.",
    },
    {
      title: "Next-Gen Laboratory Operating System (LabOS)",
      year: "2025",
      techStack: [
        "Academic Project",
        "TypeScript",
        "Next.js",
        "Supabase",
        "RBAC",
      ],
      description:
        "Led development of a scalable lab operations platform for German bio-lab workflows, digitizing Molecular Karyotyping. Automated order processing, dynamic PDF generation, and real-time sync. Shipped secure RBAC dashboards for sample submissions, shipment tracking, and multi-tier permissions.",
    },
    {
      title: "Radiation Tracking – Big Data Stream Processing",
      year: "2025",
      techStack: [
        "Academic Project",
        "Apache Kafka",
        "Apache Flink",
        "Docker",
        "Python",
      ],
      description:
        "Engineered a real-time data pipeline with Apache Kafka and Flink to process 29GB+ radiation data from the Safecast dataset. Built a Dockerized web app visualizing radiation levels on a map with dynamic filtering, threshold alerts, and aggregated data layers for performant UI rendering.",
    },
    {
      title: "Blockchain-based Decentralised Voting System",
      year: "2024",
      techStack: [
        "Academic Project",
        "Ethereum",
        "Smart Contracts",
        "Docker",
        "Full-Stack",
      ],
      description:
        "Built a decentralized voting platform with Ethereum smart contracts for secure authentication, one-vote enforcement, and transparent results while preserving voter anonymity. Shipped a full-stack Dockerized solution with separate voter and admin UIs.",
    },
    {
      title: "Hirely App",
      year: "2025",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Shadcn",
        "Firebase",
        "Gemini",
        "VAPI",
      ],
      description:
        "Built an AI interview prep platform with real-time voice mock interviews, instant feedback powered by Gemini, and a Next.js + Firebase stack.",
      link: {
        label: "Hirely App",
        href: "https://hirely-lovat.vercel.app",
      },
    },
    {
      title: "Price Optimization for Sellers",
      year: "2021",
      techStack: ["Internship Project", "Vue.js", "FastAPI", "PostgreSQL"],
      description:
        "Built during uniQin.ai internship: web app using Meta's Prophet algorithm to recommend optimal product pricing for revenue maximization.",
    },
    {
      title: "JobRadar App",
      year: "2023",
      techStack: ["Side Project", "JavaScript", "React Native", "RapidAPI"],
      description:
        "Job listings app for searching, exploring, and applying to opportunities across multiple platforms.",
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
        "React.js UI clone of Netflix with themoviedb API integration.",
      link: {
        label: "Netflix Clone",
        href: "https://clone-app-1999.netlify.app/",
      },
    },
  ],
} as const;
