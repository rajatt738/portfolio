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
  tagline: 'Building scalable, user-focused applications.',
  roles: [
    'Software Development Engineer',
    'Full-Stack Developer',
    'React & React Native Developer',
  ],
  description:
    'SDE-1 at 4 Way Technologies Inc. with hands-on experience shipping production-level applications across frontend, mobile (React Native), and backend (Node.js / Spring Boot). I enjoy turning complex problems into clean, performant software.',
  email: 'rajatkasaudhan738@gmail.com',
  github: 'https://github.com/rajat738',
  linkedin: 'https://www.linkedin.com/in/rajat-kasaudhan-bb8934266/',
  resumePdf: '/resume.pdf',
};

// ─── Experience ───────────────────────────────────────────────────────────────
export const experiences: ExperienceItem[] = [
  {
    id: 'sde1-4way',
    company: '4 Way Technologies Inc.',
    role: 'Software Development Engineer 1',
    period: 'March 2026 – Present',
    location: 'Greater Noida, UP, India',
    type: 'full-time',
    bullets: [
      'Design and develop features for a production AI-powered chat platform used by real users, working across the React.js web client and React Native mobile app.',
      'Implement memory and context import flows, enabling users to bring prior conversation history into new sessions, improving continuity and user experience.',
      'Build and maintain async data synchronization mechanisms between the client and backend APIs, ensuring reliable state management across web and mobile.',
      'Identify and resolve UI bugs reported via Sentry and Axiom monitoring, maintaining production stability and improving reliability metrics.',
      'Integrate RESTful APIs for AI model responses, user authentication, and session management.',
      'Collaborate closely with backend engineers and the product team in an agile sprint workflow to deliver features on schedule.',
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
      'Joined as an SDE Intern and contributed to the frontend development of an AI chat application from day one.',
      'Built reusable React components adhering to the project\'s design system and component library conventions.',
      'Integrated frontend UI with backend REST APIs for authentication and messaging features.',
      'Participated in code reviews and incorporated feedback to improve code quality and consistency.',
      'Successfully demonstrated performance and impact, leading to conversion to full-time SDE-1 in March 2026.',
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
      'Developed and maintained frontend components using React.js for a fintech platform handling financial data.',
      'Built and integrated RESTful APIs using Node.js and Express.js for user authentication and financial data workflows.',
      'Implemented JWT-based authentication and session management for secure user flows.',
      'Worked with MySQL and PostgreSQL databases to design and query structured financial data.',
      'Contributed to full software development lifecycle from requirement analysis through deployment and testing.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'PostgreSQL', 'JWT', 'REST APIs', 'Git'],
  },
];

// ─── Skills ──────────────────────────────────────────────────────────────────
export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    category: 'Programming Languages',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    id: 'frontend',
    category: 'Frontend',
    skills: ['React.js', 'React Native', 'Tailwind CSS', 'Redux Toolkit', 'HTML5', 'CSS3'],
  },
  {
    id: 'backend',
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs', 'JWT Authentication'],
  },
  {
    id: 'databases',
    category: 'Databases',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    id: 'tools',
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Sentry', 'Axiom', 'Linux', 'AWS', 'Google Cloud'],
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
    githubUrl: 'https://github.com/rajat738',
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
      'A robust backend service implementing core banking operations — account management, fund transfers, transaction history, and balance inquiries — following REST principles. Uses Spring Data JPA for ORM, MySQL for persistence, and Spring Security for authentication.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'JPA / Hibernate', 'REST APIs', 'Spring Security'],
    categories: ['backend'],
    githubUrl: 'https://github.com/rajat738',
    highlights: [
      'RESTful API design with Spring Boot',
      'Account creation, fund transfers, and transaction history',
      'Spring Data JPA + MySQL persistence layer',
      'Spring Security for secured endpoints',
      'Clean service-repository architecture',
    ],
  },
  {
    id: 'ai-chat-platform',
    title: 'Production AI Chat Platform',
    description: 'Contributed to a production AI-powered chat application at 4 Way Technologies, building features across web (React.js) and mobile (React Native).',
    longDescription:
      'As an SDE-1, contributed to a production AI chat platform serving real users. Worked on memory/context import flows, async API synchronization, UI bug fixes, and new feature development across both the React.js web client and the React Native mobile app. Monitored production health using Sentry and Axiom.',
    technologies: ['React.js', 'React Native', 'TypeScript', 'Redux Toolkit', 'REST APIs', 'Sentry', 'Axiom'],
    categories: ['frontend', 'mobile'],
    isPrivate: true,
    highlights: [
      'Memory & context import flows for conversation continuity',
      'Async data synchronization between client and API',
      'Production bug fixes monitored via Sentry & Axiom',
      'Cross-platform: React.js web + React Native mobile',
      'Agile sprint-based delivery',
    ],
  },
  {
    id: 'bluestock-fintech',
    title: 'Bluestock Fintech Platform',
    description: 'Full-stack development contributions at Bluestock Fintech — React.js frontend, REST APIs, JWT authentication, and database integration.',
    longDescription:
      'During the internship at Bluestock Fintech, contributed to a financial data platform. Developed React.js UI components, built REST APIs with Node.js/Express.js, implemented JWT-based secure authentication flows, and designed relational database schemas in MySQL and PostgreSQL for financial data processing.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'PostgreSQL', 'JWT', 'REST APIs'],
    categories: ['fullstack', 'frontend', 'backend'],
    isPrivate: true,
    highlights: [
      'React.js frontend component development',
      'Node.js + Express.js REST API design',
      'JWT authentication & secure session management',
      'MySQL & PostgreSQL database integration',
      'Financial data processing workflows',
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
    cgpa: '7.2',
    location: 'Greater Noida, UP, India',
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
  location: 'Greater Noida, Uttar Pradesh, India',
  github: 'https://github.com/rajat738',
  linkedin: 'https://www.linkedin.com/in/rajat-kasaudhan-bb8934266/',
};
