import type {
  NavItem,
  HeroData,
  ExperienceItem,
  SkillCategory,
  Project,
  Education,
  Certification,
  ContactInfo,
} from '@/types';

// ─── Navigation ──────────────────────────────────────────────────────────────
export const navItems: NavItem[] = [
  { label: 'Home',        href: '#home' },
  { label: 'About',       href: '#about' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Projects',    href: '#projects' },
  { label: 'Education',   href: '#education' },
  { label: 'Contact',     href: '#contact' },
];

// ─── Hero ────────────────────────────────────────────────────────────────────
export const heroData: HeroData = {
  greeting: "Hi, I'm",
  name: 'Rajat Kasaudhan',
  tagline: 'Immediate Joiner | Building scalable, AI-powered applications.',
  roles: [
    'Software Development Engineer',
    'Full-Stack Developer',
    'React & React Native Developer',
  ],
  description:
    'SDE-1 at 4 Way Technologies Inc. with hands-on experience shipping production-level applications across frontend, mobile (React Native), and backend (Node.js / Spring Boot). Familiar with Generative AI, LLMs, RAG, and AI Agents. I enjoy turning complex problems into clean, performant software.',
  email: 'rajatkasaudhan738@gmail.com',
  github: 'https://github.com/rajatt738',
  linkedin: 'https://www.linkedin.com/in/rajat-kasaudhan-bb8934266/',
  resumePdf: '/resume.pdf',
};

// ─── Experience ───────────────────────────────────────────────────────────────
export const experiences: ExperienceItem[] = [
  {
    id: 'sde1-4way',
    company: '4 Way Technologies Inc.',
    role: 'Software Development Engineer 1',
    period: 'March 2026 – October 2026',
    location: 'Greater Noida, UP, India',
    type: 'full-time',
    bullets: [
      'Developed and delivered 15+ production features for ChatReal across React.js and React Native applications using TypeScript.',
      'Built interactive UI components and end-to-end workflows, integrating frontend features with REST APIs and backend services.',
      'Worked on core features involving real-time messaging, payments, authentication, and 3D avatar customization.',
      'Monitored production issues using Sentry and Axiom, investigated recurring errors, and resolved application failures.',
    ],
    technologies: ['React.js', 'React Native', 'TypeScript', 'Redux Toolkit', 'REST APIs', 'Sentry', 'Axiom', 'Git'],
  },
  {
    id: 'intern-4way',
    company: '4 Way Technologies Inc.',
    role: 'Software Development Engineer Intern',
    period: 'December 2025 – February 2026',
    location: 'Greater Noida, UP, India',
    type: 'internship',
    bullets: [
      'Contributed to web and mobile application development using React.js, React Native, and TypeScript.',
      'Integrated frontend components with backend APIs and collaborated on debugging, Git workflows, and code reviews.',
    ],
    technologies: ['React.js', 'React Native', 'TypeScript', 'REST APIs', 'Git'],
  },
  {
    id: 'intern-bluestock',
    company: 'Bluestock Fintech',
    role: 'Software Development Intern',
    period: 'June 2025 – August 2025',
    location: 'Remote',
    type: 'internship',
    bullets: [
      'Developed user onboarding and verification modules using React.js, Node.js, and Express.js.',
      'Built REST APIs with PostgreSQL and implemented JWT-based authentication.',
      'Developed a Python and Pandas pipeline to analyze financial statements and store insights in MySQL.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'PostgreSQL', 'JWT', 'REST APIs', 'Python', 'Pandas', 'Git'],
  },
];

// ─── Skills ──────────────────────────────────────────────────────────────────
export const skillCategories: SkillCategory[] = [
  {
    id: 'generative-ai',
    category: 'Generative AI',
    skills: ['LLMs', 'RAG', 'AI Agents', 'Prompt Engineering', 'Context Management', 'LLM Orchestration'],
  },
  {
    id: 'llm-models',
    category: 'LLM Models',
    skills: ['Google Gemini', 'Groq', 'Anthropic', 'OpenAI'],
  },
  {
    id: 'ai-ml',
    category: 'AI / ML',
    skills: ['Embeddings', 'Tokenization', 'Machine Learning', 'TensorFlow', 'NumPy', 'Pandas'],
  },
  {
    id: 'languages',
    category: 'Programming Languages',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'Streamlit'],
  },
  {
    id: 'frontend',
    category: 'Frontend',
    skills: ['React.js', 'React Native', 'Tailwind CSS', 'Redux Toolkit', 'HTML5', 'CSS3'],
  },
  {
    id: 'backend',
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs', 'JWT Authentication', 'RBAC', 'Socket.IO'],
  },
  {
    id: 'databases',
    category: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'TypeSense', 'Vector Search'],
  },
  {
    id: 'tools',
    category: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'Docker', 'CI/CD', 'Jira', 'Postman', 'Linux', 'Sentry', 'Axiom', 'Cloudflare'],
  },
  {
    id: 'fundamentals',
    category: 'CS Fundamentals',
    skills: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Operating Systems',
      'Computer Networks',
      'DBMS',
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 'talkio',
    title: 'TALKIO — Real-Time Chat App',
    description: 'A full-stack real-time chat application with private and group messaging, built on the MERN stack with Socket.IO.',
    longDescription:
      'TALKIO is a production-grade real-time messaging platform supporting one-to-one and group conversations. Built with the MERN stack, it uses Socket.IO for bi-directional, low-latency communication. JWT-based authentication secures user sessions, and the entire application is containerized with Docker for consistent deployments.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT', 'Docker', 'CSS'],
    categories: ['fullstack'],
    githubUrl: 'https://github.com/rajatt738',
    highlights: [
      'Real-time bi-directional messaging with Socket.IO',
      'Private (1-1) and group chat rooms',
      'JWT authentication & protected routes',
      'Dockerized for easy deployment',
      'MERN stack full-stack architecture',
    ],
  },
  {
    id: 'banking-api',
    title: 'Banking Management System API',
    description: 'A RESTful backend API for a banking management system built with Java, Spring Boot, MySQL, and JPA.',
    longDescription:
      'A robust backend service implementing core banking operations — account management, fund transfers, transaction history, and balance inquiries — following REST principles. Uses Spring Data JPA for ORM, MySQL for persistence, and Spring Security for authentication. Endpoints tested with Postman following the Controller-Service-Repository architecture.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'JPA / Hibernate', 'REST APIs', 'Spring Security'],
    categories: ['backend'],
    githubUrl: 'https://github.com/rajatt738',
    highlights: [
      'RESTful API design with Spring Boot',
      'Controller-Service-Repository architecture',
      'Account creation, fund transfers, and transaction history',
      'Spring Data JPA + MySQL persistence layer',
      'Tested with Postman',
    ],
  },
  {
    id: 'ai-chat-platform',
    title: 'Production AI Chat Platform (ChatReal)',
    description: 'Contributed 15+ features to a production AI-powered chat application at 4 Way Technologies, building across web (React.js) and mobile (React Native).',
    longDescription:
      'As an SDE-1, contributed 15+ production features to ChatReal — a live AI chat platform serving real users. Worked on real-time messaging, payments, authentication, and 3D avatar customization across both the React.js web client and React Native mobile app. Monitored production health using Sentry and Axiom.',
    technologies: ['React.js', 'React Native', 'TypeScript', 'Redux Toolkit', 'REST APIs', 'Sentry', 'Axiom'],
    categories: ['frontend', 'mobile'],
    isPrivate: true,
    highlights: [
      '15+ production features delivered for ChatReal',
      'Real-time messaging, payments & authentication flows',
      '3D avatar customization feature',
      'Cross-platform: React.js web + React Native mobile',
      'Production monitoring via Sentry & Axiom',
    ],
  },
  {
    id: 'bluestock-fintech',
    title: 'Bluestock Fintech Platform',
    description: 'Full-stack development at Bluestock Fintech — React.js frontend, REST APIs, JWT authentication, and a Python/Pandas financial data pipeline.',
    longDescription:
      'During the internship at Bluestock Fintech, developed user onboarding and verification modules using React.js, Node.js, and Express.js. Built REST APIs with PostgreSQL, implemented JWT authentication, and developed a Python/Pandas pipeline to analyze financial statements and store insights in MySQL.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'MySQL', 'JWT', 'REST APIs', 'Python', 'Pandas'],
    categories: ['fullstack', 'frontend', 'backend'],
    isPrivate: true,
    highlights: [
      'User onboarding & verification modules',
      'Node.js + Express.js REST API design',
      'JWT authentication & secure session management',
      'Python & Pandas financial data analysis pipeline',
      'PostgreSQL & MySQL database integration',
    ],
  },
];

// ─── Education ───────────────────────────────────────────────────────────────
export const educationList: Education[] = [
  {
    id: 'btech-gu',
    institution: 'Galgotias University',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering',
    period: '2022 – 2026',
    cgpa: '7.3',
    location: 'Greater Noida, UP, India',
  },
  {
    id: 'class-12',
    institution: 'UP Board',
    degree: 'Class XII (Science)',
    field: 'Science Stream',
    period: '2022',
    percentage: '73%',
    location: 'Uttar Pradesh, India',
  },
  {
    id: 'class-10',
    institution: 'UP Board',
    degree: 'Class X',
    field: '',
    period: '2020',
    percentage: '76%',
    location: 'Uttar Pradesh, India',
  },
];

// ─── Certifications ──────────────────────────────────────────────────────────
export const certifications: Certification[] = [
  {
    id: 'oracle-java',
    name: 'Oracle Java Foundations',
    issuer: 'Oracle',
    date: '2024',
  },
  {
    id: 'aws-data-engineering',
    name: 'AWS Academy Data Engineering',
    issuer: 'Amazon Web Services (AWS)',
    date: '2024',
  },
  {
    id: 'palo-alto-cloud',
    name: 'Palo Alto Networks Cloud Security',
    issuer: 'Palo Alto Networks',
    date: '2024',
  },
  {
    id: 'ibm-se',
    name: 'IBM Software Engineering',
    issuer: 'IBM',
    date: '2024',
  },
];

// ─── Contact ─────────────────────────────────────────────────────────────────
export const contactInfo: ContactInfo = {
  name: 'Rajat Kasaudhan',
  email: 'rajatkasaudhan738@gmail.com',
  phone: '+91-9450222755',
  location: 'Noida, Uttar Pradesh, India',
  github: 'https://github.com/rajatt738',
  linkedin: 'https://www.linkedin.com/in/rajat-kasaudhan-bb8934266/',
};
