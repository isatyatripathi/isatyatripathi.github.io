import type { Portfolio } from "@/types/portfolio";

export const portfolio: Portfolio = {
  person: {
    name: "Satya Tripathi",
    shortName: "Satya",
    role: "Senior Staff Engineer · Engineering Leader",
    headline: "Building scalable systems. Leading high-impact teams.",
    location: "Hyderabad, India",
    email: "satya06.official@gmail.com",
    website: "https://isatyatripathi.github.io",
    availability: "Open to Engineering Manager and Senior Staff Engineer roles",
    summary: [
      "I architect and deliver resilient, scalable platforms for regulated, customer-facing environments. Over 10 years in software engineering, I have combined hands-on technical leadership with people management across distributed UK–India teams.",
      "My focus spans solution architecture, distributed systems, cloud modernization, release reliability, and responsible AI-assisted engineering. I care equally about sound technical decisions and creating the clarity, standards, and coaching that help engineers do their best work.",
    ],
    portrait: "/images/satya-portrait.webp",
    portraitAlt:
      "Satya Tripathi wearing a navy suit and white shirt against a purple-lit background",
  },
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/isatyatripathi/",
      icon: "fa-brands fa-linkedin-in",
    },
    {
      label: "GitHub",
      href: "https://github.com/isatyatripathi",
      icon: "fa-brands fa-github",
    },
    {
      label: "Email",
      href: "mailto:satya06.official@gmail.com",
      icon: "fa-regular fa-envelope",
    },
  ],
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Impact", href: "#impact" },
    { label: "Expertise", href: "#expertise" },
    { label: "Leadership", href: "#leadership" },
    { label: "Résumé", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ],
  metrics: [
    {
      value: "30+",
      label: "Production releases",
      detail: "Delivered with zero rollbacks",
      icon: "fa-solid fa-rocket",
    },
    {
      value: "89%",
      label: "Faster time-to-market",
      detail: "Through standardized release patterns",
      icon: "fa-regular fa-clock",
    },
    {
      value: "91%",
      label: "Lower production failure rate",
      detail: "Through shift-left quality engineering",
      icon: "fa-solid fa-shield-halved",
    },
    {
      value: "73%",
      label: "Customer happiness improvement",
      detail: "After a focused product UX uplift",
      icon: "fa-regular fa-face-smile",
    },
    {
      value: "9",
      label: "Engineers line-managed",
      detail: "Across graduate to senior levels",
      icon: "fa-solid fa-people-group",
    },
    {
      value: "10+",
      label: "Engineers mentored",
      detail: "Toward greater ownership and senior roles",
      icon: "fa-solid fa-user-check",
    },
  ],
  expertise: [
    {
      title: "Engineering Leadership",
      icon: "fa-solid fa-people-group",
      description:
        "Growing capable teams while aligning technical execution with customer and business outcomes.",
      skills: [
        "Engineering Management",
        "Line & People Management",
        "Mentoring & Coaching",
        "Cross-Team Design Reviews",
        "Stakeholder Management",
        "Agile Delivery",
      ],
    },
    {
      title: "Architecture & Practices",
      icon: "fa-solid fa-sitemap",
      description:
        "Designing evolvable systems and engineering practices for reliability, scale, and maintainability.",
      skills: [
        "Solution Architecture",
        "Microservices",
        "Distributed Systems",
        "Event-Driven Architecture",
        "REST APIs",
        "System Design",
        "CI/CD",
        "Shift-Left Testing",
        "Test Automation",
        "Cloud Migration",
      ],
    },
    {
      title: "Technology",
      icon: "fa-solid fa-code",
      description:
        "A modern .NET-centered stack for customer-facing web platforms and backend services.",
      skills: [
        "C#",
        ".NET 8/10",
        "ASP.NET Core",
        "React",
        "Entity Framework Core",
        "SQL Server",
        "xUnit",
        "Docker",
      ],
    },
    {
      title: "Cloud Platforms",
      icon: "fa-solid fa-cloud",
      description:
        "Modernizing workloads across AWS and Azure with secure, event-driven delivery patterns.",
      skills: [
        "AWS Step Functions",
        "AWS Glue",
        "AWS Lambda",
        "Amazon S3",
        "EventBridge",
        "IAM",
        "Cross-account architecture",
        "Azure App Service",
        "Azure Functions",
        "Azure SQL",
      ],
    },
    {
      title: "AI-Assisted Engineering",
      icon: "fa-solid fa-wand-magic-sparkles",
      description:
        "Applying AI to development and review workflows with practical governance for regulated environments.",
      skills: [
        "Claude",
        "GitHub Copilot",
        "Prompt Engineering",
        "Code Review Assistance",
        "Test Generation",
        "Usage Governance",
        "Guardrails",
      ],
    },
  ],
  impacts: [
    {
      eyebrow: "Release excellence",
      title: "Made delivery faster without trading away reliability",
      summary:
        "I standardized architecture and release patterns, strengthened automated unit, load, and performance testing, and embedded quality controls earlier in the delivery lifecycle.",
      result:
        "30+ production releases with zero rollbacks, 89% lower release time-to-market, and a 91% reduction in production failures.",
      capabilities: ["CI/CD", "Shift-left testing", "Architecture standards"],
      icon: "fa-solid fa-gauge-high",
    },
    {
      eyebrow: "Cloud modernization",
      title: "Designed secure event-driven paths away from legacy workloads",
      summary:
        "I led solution design for legacy-to-cloud modernization across AWS and Azure, including idempotent event-driven pipelines and secure cross-account, cross-region delivery.",
      result:
        "A documented, reviewable modernization approach designed for scalability, reliability, maintainability, and operational control.",
      capabilities: ["AWS", "Azure", "Event-driven architecture"],
      icon: "fa-solid fa-cloud-arrow-up",
    },
    {
      eyebrow: "Customer experience",
      title: "Connected platform engineering to a better product experience",
      summary:
        "I resolved technical performance and scalability issues while improving the visual and interaction quality of a business-critical progressive web application.",
      result: "A 73% improvement in the Customer Happiness Index.",
      capabilities: ["React", "Performance", "Product UX"],
      icon: "fa-regular fa-face-smile-beam",
    },
    {
      eyebrow: "People & AI leadership",
      title: "Raised engineering capability through coaching and responsible AI adoption",
      summary:
        "I line-manage a distributed team, mentor engineers across teams, and introduced AI-assisted development, review, and test generation with clear governance guardrails.",
      result:
        "9 engineers directly supported, 10+ mentored, and responsible AI practices established for a regulated platform.",
      capabilities: ["People management", "Mentoring", "AI governance"],
      icon: "fa-solid fa-users-gear",
    },
  ],
  experience: [
    {
      company: "Experian",
      role: "Senior Staff Engineer",
      start: "Sep 2024",
      end: "Present",
      location: "Hyderabad, India · UK–India team",
      summary:
        "Leading solution architecture, technical direction, cloud modernization, and people development for regulated customer-facing services.",
      achievements: [
        "Line-manage and coach 9 engineers from graduate to senior levels while mentoring 10+ engineers across teams.",
        "Own architecture and technical direction for digital identity, fraud, and scoring-platform modernization initiatives, including cross-team reviews and engineering standards.",
        "Lead event-driven modernization across AWS and Azure, with secure, idempotent delivery patterns across accounts and regions.",
        "Drive responsible use of Claude and GitHub Copilot for development, code review, and test generation through documented governance guardrails.",
      ],
      skills: ["Solution Architecture", "AWS", "Azure", ".NET", "People Leadership"],
      current: true,
    },
    {
      company: "Experian",
      role: "Senior Software Engineer",
      start: "Jul 2021",
      end: "Sep 2024",
      location: "Hyderabad, India",
      summary:
        "Delivered and modernized a high-volume customer-facing platform using .NET, React, microservices, and automated quality engineering.",
      achievements: [
        "Delivered 32 consecutive production releases with zero rollbacks.",
        "Reduced release time-to-market by 89% by standardizing and documenting solution architecture and release patterns.",
        "Reduced production failures by 91% through automated unit, load, and performance test suites.",
        "Improved the Customer Happiness Index by 73% through a focused progressive-web-app UX uplift.",
      ],
      skills: [".NET 6/8", "React", "Microservices", "xUnit", "CI/CD"],
    },
    {
      company: "Experian",
      role: "Software Engineer",
      start: "Apr 2020",
      end: "Jul 2021",
      location: "Hyderabad, India",
      summary:
        "Built features and APIs for high-volume customer-facing web applications and progressed to Senior Software Engineer within 15 months.",
      achievements: [
        "Developed features with C#, .NET Core, and React in an Agile product team.",
        "Contributed to REST APIs, xUnit test coverage, and CI/CD-based releases.",
      ],
      skills: ["C#", ".NET Core", "React", "REST APIs", "xUnit"],
    },
    {
      company: "Infosys · Financial-services client",
      role: "System Engineer",
      start: "Jul 2018",
      end: "Apr 2020",
      location: "Hyderabad, India",
      summary:
        "Built and deployed cloud-hosted .NET services for a high-volume financial-services environment.",
      achievements: [
        "Developed loosely coupled microservices using 12-factor methodology and dependency injection.",
        "Designed a fully automated CI/CD lifecycle to improve delivery speed and deployment reliability.",
        "Deployed .NET Core applications to Azure PaaS and contributed to performance optimization under load.",
      ],
      skills: [".NET Core", "Azure PaaS", "Microservices", "EF Core", "SQL Server"],
    },
    {
      company: "Independent Consulting",
      role: "Freelance Software Engineer",
      start: "Feb 2016",
      end: "May 2018",
      location: "Noida, India",
      summary:
        "Translated operational needs into a tailored internal management portal for a travel business.",
      achievements: [
        "Built front-end and back-end modules using Angular and ASP.NET MVC.",
        "Centralized operational tracking and improved visibility across core business workflows.",
      ],
      skills: ["Angular", "ASP.NET MVC", "Full-stack delivery"],
    },
  ],
  leadershipPrinciples: [
    {
      title: "Create clarity before increasing velocity",
      description:
        "I use architecture reviews, explicit standards, and dependency management to help teams move quickly with fewer surprises.",
      icon: "fa-regular fa-compass",
    },
    {
      title: "Treat reliability as a product feature",
      description:
        "Quality controls, test automation, performance validation, and release discipline belong inside the delivery process—not after it.",
      icon: "fa-solid fa-shield",
    },
    {
      title: "Grow people through meaningful ownership",
      description:
        "Coaching is most effective when engineers gain context, decision-making space, and a clear path toward greater technical responsibility.",
      icon: "fa-solid fa-seedling",
    },
    {
      title: "Adopt AI with intent and guardrails",
      description:
        "AI should improve engineering judgment and throughput while respecting security, quality, and governance obligations.",
      icon: "fa-solid fa-brain",
    },
  ],
  recognition: [
    {
      title: "3 Experian Product Hackathons",
      detail: "Won for innovative and robust product solutions.",
      icon: "fa-solid fa-trophy",
    },
    {
      title: "8 Experian Spot Awards",
      detail: "Recognized for cross-functional delivery and collaboration.",
      icon: "fa-solid fa-award",
    },
    {
      title: "Senior leadership recognition",
      detail: "Recognized by the CPO and CTO for technical leadership and mission-critical delivery.",
      icon: "fa-solid fa-star",
    },
    {
      title: "4× Infosys Insta Award + Rising Star",
      detail: "Recognized for delivery excellence and organizational contributions.",
      icon: "fa-solid fa-medal",
    },
  ],
  education: {
    degree: "B.Tech, Computer Science & Engineering",
    specialization: "Specialization in Cloud Computing",
    institution: "Galgotias University",
    years: "2014–2018",
  },
  certifications: [
    "Microsoft Certified: Azure Developer Associate (AZ-204)",
    "Microsoft Certified: Azure Fundamentals (AZ-900)",
    "Harvard ManageMentor Leading with Generative AI",
    "Infosys Certified Agile Developer",
    "Public & Hybrid IaaS Cloud with OpenStack",
  ],
  publication: {
    title: "Study on Secured Framework for Cloud-Based Online Banking",
    publisher: "IEEE publication",
  },
  resume: {
    path: "/resume/Satya-Tripathi-Resume.pdf",
    filename: "Satya-Tripathi-Resume.pdf",
    description:
      "A concise overview of my 10-year engineering journey, architecture impact, people leadership, and cloud modernization work.",
  },
};
