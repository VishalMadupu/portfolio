export const siteConfig = {
  name: "Vishal Madupu",
  role: "Full Stack Developer",
  location: "Hyderabad, India",
  email: "Vishalreddy354@gmail.com",
  phone: "+91 9553852963",
  shortBio:
    "I design and ship product-focused web experiences with React, Next.js, Python, and scalable frontend systems.",
  availability: "Building production systems at ISCS Technologies",
  resumeUrl:
    "https://drive.google.com/file/d/1ZvQZzsuoazS5mB4WIobu889e2GEyM5hK/view?usp=sharing",
  linkedinUrl: "https://www.linkedin.com/in/vishalreddy4500/",
  githubUrl: "https://github.com/VishalMadupu",
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Systems", href: "#systems" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "2+", label: "Years building web products" },
  { value: "4", label: "Production platforms launched" },
  { value: "10+", label: "Core tools used across frontend and backend" },
];

export const highlights = [
  {
    title: "Product-minded execution",
    description:
      "I care about the final experience, not just the ticket. That means clearer UX, faster interfaces, and fewer rough edges in production.",
  },
  {
    title: "Frontend systems with depth",
    description:
      "From reusable component libraries to responsive layouts and Storybook workflows, I build UI that teams can actually maintain.",
  },
  {
    title: "Comfortable across the stack",
    description:
      "I work across React, Next.js, FastAPI, automation flows, Docker-based environments, and the integration layers between them.",
  },
];

export const focusAreas = [
  "Responsive interface engineering",
  "Component architecture and design systems",
  "Monorepo and multi-app product development",
  "Workflow automation and internal tools",
  "API integration and full stack delivery",
];

export const projects = [
  {
    title: "BusyBrain.ai",
    eyebrow: "Design System + Monorepo",
    summary:
      "Helped shape a monorepo-based product environment with reusable frontend primitives, documentation workflows, and responsive UI patterns.",
    outcome:
      "Reduced duplication by turning repeated UI patterns into reusable components and documented flows through Storybook and Chromatic.",
    stack: ["React", "SCSS", "Bootstrap 5.3", "Storybook", "Chromatic"],
    highlights: [
      "Built reusable components such as buttons, search inputs, badges, and content primitives with flexible states.",
      "Improved multi-device layout behavior using responsive SCSS and Bootstrap utilities.",
      "Supported collaboration and review workflows through Storybook previews and component documentation.",
    ],
    liveUrl: "https://busybrains.ai/",
    accent: "from-[#f97316] via-[#fb923c] to-[#fed7aa]",
  },
  {
    title: "G-Nayana",
    eyebrow: "AI Workflow Platform",
    summary:
      "A chatbot and workflow automation platform that combines real-time interactions, file processing, and medical image analysis.",
    outcome:
      "Delivered a richer operational surface for complex workflows by pairing conversational UI with backend automation and validation logic.",
    stack: ["React", "Python", "FastAPI", "WebSockets", "OpenCV", "Docker"],
    highlights: [
      "Built real-time chatbot interfaces with responsive, animated interaction flows.",
      "Integrated file conversion and schema-driven form handling powered by AI-assisted recognition.",
      "Supported diabetic retinopathy analysis workflows with OpenCV and machine learning pipelines.",
    ],
    liveUrl: "https://g-nayana.in/",
    accent: "from-[#0891b2] via-[#22d3ee] to-[#cffafe]",
  },
  {
    title: "LMS Platform",
    eyebrow: "SSR + Marketing Portal",
    summary:
      "Contributed to a learning management platform structured as a monorepo with an SSR application and a separate web portal on the same domain.",
    outcome:
      "Improved environment consistency and deployment reliability while supporting auth, proxy behavior, and Azure-based delivery.",
    stack: ["Next.js", "Yarn Workspaces", "Azure", "Docker"],
    highlights: [
      "Worked across SSR and client-rendered surfaces while keeping the portal and LMS aligned.",
      "Resolved environment, compose, and network issues during development and deployment.",
      "Supported a single-domain flow where the web layer coordinated with LMS authentication.",
    ],
    liveUrl: "https://alphagroups.co.in",
    accent: "from-[#7c3aed] via-[#a78bfa] to-[#ede9fe]",
  },
  {
    title: "Mi-Ware",
    eyebrow: "Visual Orchestration Tool",
    summary:
      "Built a workflow orchestration experience inspired by middleware tools, centered around a custom drag-and-drop canvas.",
    outcome:
      "Made complex flow execution easier to understand through clear node interactions, validation, and execution visibility.",
    stack: ["React", "Custom Canvas", "REST APIs", "DAG Execution"],
    highlights: [
      "Implemented node-based orchestration for database, file, converter, and filter stages.",
      "Added minimap, runtime indicators, and hover controls for better usability in large flows.",
      "Connected the canvas to backend execution services to surface workflow runtime state.",
    ],
    liveUrl: "https://mi-ware.in/",
    accent: "from-[#16a34a] via-[#4ade80] to-[#dcfce7]",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    description: "Interfaces that feel polished, responsive, and maintainable.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "SASS", "Bootstrap"],
  },
  {
    title: "Backend",
    description: "Application logic, APIs, and workflow integrations.",
    skills: ["Python", "FastAPI", "WebSockets", "REST APIs", "Schema Validation"],
  },
  {
    title: "Tooling",
    description: "Processes that help teams ship faster without losing control.",
    skills: ["Git", "Docker", "Storybook", "Chromatic", "Azure", "Figma"],
  },
  {
    title: "Cloud & DevOps",
    description: "Production deployment, runtime management, and release workflows.",
    skills: ["AWS EC2", "Docker", "CI/CD", "Nginx", "PM2", "GitHub Actions"],
  },
  {
    title: "Ways of Working",
    description: "Delivery habits that improve execution quality.",
    skills: ["Responsive Design", "Component Reuse", "Monorepo Workflows", "Cross-team Collaboration"],
  },
];

export const specializations = [
  {
    title: "Cloud & DevOps Experience",
    label: "Deployment + Reliability",
    summary:
      "Production-focused deployment experience across cloud hosting, containerized services, runtime management, and delivery pipelines.",
    bullets: [
      {
        title: "AWS EC2 Deployments",
        description:
          "Deployed full stack applications to production with stable environments, domain setup, and repeatable release flows.",
      },
      {
        title: "Nginx + PM2",
        description:
          "Configured reverse proxies, process management, and production runtime behavior for reliable app delivery.",
      },
      {
        title: "Dockerized Services",
        description:
          "Packaged FastAPI and supporting services with container-first workflows for portable development and deployment.",
      },
      {
        title: "CI/CD Pipelines",
        description:
          "Automated build and deployment workflows with Git-based release practices and environment-aware delivery.",
      },
      {
        title: "Secrets & Config",
        description:
          "Managed environment variables and production configuration with attention to security and operational clarity.",
      },
      {
        title: "HTTPS & Reliability",
        description:
          "Handled SSL, domain mapping, and deployment troubleshooting to keep production systems accessible and secure.",
      },
    ],
    accent: "from-[#0f766e] via-[#14b8a6] to-[#99f6e4]",
  },
  {
    title: "Multi-Agent AI Systems",
    label: "Agent Coordination",
    summary:
      "I build coordinated AI workflows where a primary agent delegates tasks to specialized agents for planning, scheduling, and execution.",
    bullets: [
      {
        title: "Natural Language Control",
        description:
          "Users can trigger planning and execution flows through conversational inputs instead of rigid UI-only workflows.",
      },
      {
        title: "Specialized Agents",
        description:
          "Separate agents handle task management, scheduling, study planning, and workflow-specific decisions.",
      },
      {
        title: "Calendar Integrations",
        description:
          "Integrated scheduling logic with external calendar flows to support planning, reminders, and time-aware automation.",
      },
      {
        title: "Primary Coordinator Agent",
        description:
          "Interprets intent and routes actions across the system so execution stays consistent across tools and agents.",
      },
      {
        title: "Task Agent",
        description:
          "Breaks down work into action-oriented steps and manages execution flow for downstream operations.",
      },
      {
        title: "Calendar + Study Planner Agents",
        description:
          "Coordinate time, events, scheduling rules, and adaptive learning flows to recommend the next best action.",
      },
    ],
    accent: "from-[#7c3aed] via-[#a855f7] to-[#e9d5ff]",
  },
];

export const experiences = [
  {
    role: "Software Engineer",
    company: "ISCS Technologies Private Limited",
    period: "Apr 2025 - Present",
    summary:
      "Working on production web applications and internal platforms with an emphasis on scalable implementation and end-to-end delivery.",
    achievements: [
      "Build and maintain user-facing and internal applications using modern frontend and backend tooling.",
      "Collaborate with cross-functional teams on implementation details, delivery planning, and system improvements.",
      "Contribute to engineering quality through maintainable code, practical architecture choices, and iteration in production.",
    ],
  },
  {
    role: "Associate Developer",
    company: "BusyBrains",
    period: "Oct 2024 - Apr 2025",
    summary:
      "Focused on frontend implementation, reusable UI systems, and collaboration within a product development workflow.",
    achievements: [
      "Built and maintained features across frontend and backend surfaces as part of a collaborative development team.",
      "Improved consistency through reusable UI patterns and component-focused workflows.",
      "Worked within agile delivery cycles, contributing to planning, implementation, and refinement.",
    ],
  },
];

export const education = [
  {
    title: "Full Stack Developer Certification",
    institution: "ACE Web Academy, Hyderabad",
    period: "Mar 2023 - Aug 2023",
    note:
      "Focused on HTML5, CSS3, JavaScript, React, SASS, and practical web development workflows.",
  },
  {
    title: "B.Tech in Computer Science and Engineering",
    institution: "Malla Reddy Institute of Technology and Science",
    period: "2022",
    note: "Graduated with a CGPA of 6.28.",
  },
  {
    title: "Intermediate Education",
    institution: "Narayana Junior College, Hyderabad",
    period: "2018",
    note: "Completed higher secondary studies with a score of 77.2%.",
  },
  {
    title: "High School Education",
    institution: "Victory High School, Chandur",
    period: "2016",
    note: "Completed school education with a CGPA of 8.7.",
  },
];

export const contactCards = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: "tel:+919553852963",
  },
  {
    label: "Location",
    value: siteConfig.location,
  },
];
