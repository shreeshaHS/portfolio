import { Project, SkillCategory, Certification, EducationItem, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Shreesha',
  headline: 'MCA Graduate & Aspiring Software Developer',
  subHeadline: 'Building robust, modern software solutions with Python, Java, and Web Technologies.',
  bio: 'Motivated and hardworking Computer Science post-graduate pursuing Master of Computer Applications (MCA) with a strong foundation in software engineering, algorithmic problem solving, and modern web development. Experienced in real-world process management and eager to engineer scalable, high-impact digital solutions.',
  email: 'shreeshas095@gmail.com',
  phone: '+91 8147281923',
  github: 'https://github.com/shreeshaHS',
  location: 'Karnataka, India',
  availability: 'Available for Software Developer Opportunities',
  resumeUrl: '/Shreesha_Resume.pdf',
  avatarUrl: '/avatar.jpg',
  stats: [
    { label: 'Current Degree', value: 'MCA (2025-Now)' },
    { label: 'Core Projects Built', value: '3+' },
    { label: 'Verified Certifications', value: '3' },
    { label: 'Industry Supervisory Exp', value: '9 Mos' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'face-recognition-attendance',
    title: 'Face Recognition Attendance System',
    subtitle: 'Automated Biometric Verification & Tracking',
    category: 'AI & Vision',
    description: 'An automated biometric attendance management system built with facial recognition technology to eliminate proxy attendance, reduce manual ledger logging, and deliver tamper-proof verification.',
    problemStatement: 'Conventional manual and paper-based attendance systems are prone to human error, buddy punching, time wastage, and tedious administrative overhead.',
    solution: 'Engineered an intelligent computer vision pipeline in Python that captures video frames, extracts high-dimensional facial embeddings, matches them against registered user matrices in real-time, and records timestamped logs automatically.',
    keyFeatures: [
      'Real-time facial detection and identity classification',
      'Automated attendance logging with timestamp recording',
      'Minimization of proxy entries and administrative overhead',
      'High accuracy identification under varying ambient conditions'
    ],
    technologies: ['Python', 'OpenCV / Computer Vision', 'Facial Recognition', 'NumPy', 'Data Logging'],
    githubUrl: 'https://github.com/shreeshaHS',
    metrics: 'Automated verification pipeline with instant logging',
    accentColor: '#38bdf8',
    visualType: 'face-recognition'
  },
  {
    id: 'smartbuy-ecommerce',
    title: 'SmartBuy — E-Commerce Web Platform',
    subtitle: 'Modern Digital Storefront & Catalog Solution',
    category: 'Web Development',
    description: 'A comprehensive, user-centric e-commerce web platform designed for smooth product catalog browsing, real-time item inspection, and an intuitive purchasing flow.',
    problemStatement: 'Cluttered online storefronts create customer drop-off during browsing and checkout, needing clean interfaces, high performance, and friction-free navigation.',
    solution: 'Designed and implemented an engaging web interface focusing on modular layout, responsive product showcases, clear call-to-actions, and an accessible shopping flow.',
    keyFeatures: [
      'Interactive product catalog with categorized views and item details',
      'Responsive design adapting across desktop, tablet, and mobile screens',
      'Streamlined cart and checkout interface for seamless buying journey',
      'Clean visual hierarchy emphasizing product aesthetics and user ease'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Modern Web Standards'],
    githubUrl: 'https://github.com/shreeshaHS',
    metrics: 'Fully responsive interactive storefront',
    accentColor: '#818cf8',
    visualType: 'ecommerce'
  },
  {
    id: 'shelfiq-library',
    title: 'ShelfIQ — Library Management System',
    subtitle: 'Resource Tracking & Inventory Operations',
    category: 'System & Tools',
    description: 'A structured software application engineered to simplify library operations, catalog management, book lending, and member resource tracking with organized workflows.',
    problemStatement: 'Libraries face organizational chaos without a systematic record keeping system for stock audits, issue/return lifecycles, and member records.',
    solution: 'Developed an organized desktop and record management architecture to track book inventories, register borrow transactions, and monitor available assets with clean data separation.',
    keyFeatures: [
      'Comprehensive book cataloging with status indicators (Available / Issued)',
      'Member registration and borrowing history management',
      'Efficient resource tracking to prevent catalog discrepancies',
      'Structured record updates minimizing administrative manual work'
    ],
    technologies: ['Java', 'Object-Oriented Programming', 'Database Systems', 'Data Management'],
    githubUrl: 'https://github.com/shreeshaHS',
    metrics: 'End-to-end catalog and borrow tracking',
    accentColor: '#34d399',
    visualType: 'library'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Programming Languages',
    iconName: 'Code2',
    description: 'Core languages used for backend systems, algorithmic logic, and application development.',
    skills: [
      { name: 'Python', level: 'Core Expertise', tag: 'Data & AI Scripts' },
      { name: 'Java', level: 'Object-Oriented', tag: 'Enterprise & System' },
      { name: 'HTML5 / CSS3', level: 'Proficient', tag: 'Semantic & Responsive' },
      { name: 'JavaScript', level: 'Interactive UI', tag: 'Modern Frontend' }
    ]
  },
  {
    id: 'web-dev',
    name: 'Web & UI Engineering',
    iconName: 'Layout',
    description: 'Creating responsive, accessible, and intuitive user experiences.',
    skills: [
      { name: 'Responsive Web Design', level: 'Cross-Device', tag: 'Mobile-First' },
      { name: 'Modern CSS & Styling', level: 'Modern Layouts', tag: 'Flexbox & Grid' },
      { name: 'UI / UX Principles', level: 'User-Centric', tag: 'Visual Hierarchy' },
      { name: 'Client-Side Interactivity', level: 'Dynamic DOM', tag: 'Event Handling' }
    ]
  },
  {
    id: 'data-bi',
    name: 'Data & Analytics',
    iconName: 'BarChart3',
    description: 'Data reporting, visualization, and analytical reasoning.',
    skills: [
      { name: 'PowerBI', level: 'Reporting', tag: 'Dashboards & BI' },
      { name: 'Data Analytics', level: 'NASSCOM Certified', tag: 'Insights & Metrics' },
      { name: 'Natural Language Processing', level: 'NPTEL Certified', tag: 'Text & NLP' },
      { name: 'Cloud Computing', level: 'NPTEL Certified', tag: 'Cloud Concepts' }
    ]
  },
  {
    id: 'tools-enterprise',
    name: 'Tools & Enterprise Systems',
    iconName: 'Wrench',
    description: 'Practical business workflows, version control, and production tools.',
    skills: [
      { name: 'Git & GitHub', level: 'Version Control', tag: 'Collaboration' },
      { name: 'EwayBill System', level: 'Enterprise Operational', tag: 'Logistics & Compliance' },
      { name: 'MS Office Suite', level: 'Productivity', tag: 'Docs, Sheets & PPT' },
      { name: 'Computer Vision / OpenCV', level: 'Applied', tag: 'Face Tracking' }
    ]
  }
];

export const SOFT_SKILLS = [
  {
    title: 'Analytical Problem Solving',
    description: 'Deconstructing complex engineering problems into clean, testable, and systematic modules.'
  },
  {
    title: 'Effective Time Management',
    description: 'Prioritizing critical sprint deliverables with discipline honed through industrial supervision.'
  },
  {
    title: 'Cross-Functional Teamwork',
    description: 'Collaborating seamlessly with multidisciplinary teams, sharing ideas, and peer-reviewing.'
  },
  {
    title: 'Self-Motivated Continuous Learning',
    description: 'Quickly mastering emerging frameworks, cloud paradigms, and modern software paradigms.'
  },
  {
    title: 'Positive & Resilient Attitude',
    description: 'Approaching technical roadblocks with patience, constructive inquiry, and persistent curiosity.'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cloud-computing-nptel',
    title: 'Cloud Computing',
    issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
    category: 'Cloud Architecture & Infrastructure',
    platform: 'IIT / NPTEL Online Certification',
    description: 'Rigorous coursework covering distributed systems, virtualization, cloud service models (IaaS, PaaS, SaaS), cloud storage, and resource provisioning.',
    topics: ['Distributed Systems', 'Virtualization', 'Resource Scheduling', 'Cloud Security & Storage'],
    credentialBadge: 'NPTEL Verified',
    color: '#38bdf8'
  },
  {
    id: 'nlp-nptel',
    title: 'Natural Language Processing (NLP)',
    issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
    category: 'Artificial Intelligence & Linguistics',
    platform: 'IIT / NPTEL Online Certification',
    description: 'In-depth study of text preprocessing, tokenization, language models, syntactic parsing, semantic representations, and machine learning for textual data.',
    topics: ['Tokenization & Stemming', 'N-gram Models', 'Semantic Parsing', 'Sequence Modeling'],
    credentialBadge: 'NPTEL Verified',
    color: '#818cf8'
  },
  {
    id: 'data-analytics-nasscom',
    title: 'Data Analytics',
    issuer: 'NASSCOM (National Association of Software and Service Companies)',
    category: 'Data Science & Business Intelligence',
    platform: 'NASSCOM FutureSkills',
    description: 'Industry-standard training covering exploratory data analysis, business intelligence, data preparation, statistical reasoning, and actionable visualization.',
    topics: ['Exploratory Data Analysis', 'Data Cleaning', 'Statistical Modeling', 'Visualization Dashboards'],
    credentialBadge: 'NASSCOM Certified',
    color: '#34d399'
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'mca',
    degree: 'Master of Computer Application (MCA)',
    institution: 'Poornaprajna Institute of Management',
    period: '2025 – Present',
    location: 'Udupi / Mangalore, Karnataka',
    status: 'Currently Pursuing',
    highlights: [
      'Advanced computer applications, algorithmic data structures, and software engineering methodologies.',
      'Active research into distributed computing, modern full-stack web stacks, and artificial intelligence.',
      'Hands-on laboratory simulations and project architectural design.'
    ]
  },
  {
    id: 'bca',
    degree: 'Bachelor of Computer Application (BCA)',
    institution: 'Mangalore University',
    period: '2021 – 2024',
    location: 'Mangalore, Karnataka',
    status: 'Graduated',
    highlights: [
      'Comprehensive foundation in Object-Oriented Programming (Java, Python), Data Structures, and Relational Databases.',
      'Developed core academic projects in e-commerce web applications and biometric authentication systems.',
      'Graduated with strong technical aptitude and active participation in technical workshops.'
    ]
  },
  {
    id: 'pu',
    degree: 'Pre-University Course (PCMB)',
    institution: 'Govt PU College Brahmavara',
    period: '2012 – 2016',
    location: 'Brahmavara, Karnataka',
    status: 'Completed',
    highlights: [
      'Strong quantitative base in Physics, Chemistry, Mathematics, and Biology.',
      'Fostered foundational analytical thinking and mathematical reasoning.'
    ]
  }
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: 'production-supervisor',
    role: 'Production Supervisor',
    company: 'Navadurga Food Products Pvt Ltd',
    period: '2025',
    duration: '9 Months',
    responsibilities: [
      'Supervised day-to-day operations and production line workflow to maintain optimal output and minimize bottlenecks.',
      'Ensured strict compliance with regulatory quality standards and process documentation.',
      'Utilized enterprise logistical systems including EwayBill generation and inventory tracking sheets.',
      'Led shift workers with clear communication, accountability, shift scheduling, and conflict resolution.'
    ],
    impactNotes: [
      'Demonstrated high dependability, leadership under pressure, and process discipline.',
      'Honed time-management and team management skills directly transferable to agile software sprint cycles.'
    ]
  }
];
