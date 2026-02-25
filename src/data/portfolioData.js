// ============================================================
// PORTFOLIO DATA — Single Source of Truth
// ============================================================
// To scale your portfolio, simply add new objects to any array.
// No backend, no database — just edit this file and redeploy.
// ============================================================

// ─── PERSONAL INFO ──────────────────────────────────────────
export const personalInfo = {
    name: "Roni Dey",
    greeting: "नमस्ते, I'm",
    university: "University of Calcutta",
    interests: "DevOps, Gen AI, Web Technologies",
    email: "ronidey1819@gmail.com",
    resumePath: "/images/Resume.pdf",
    profileImage: "profile.jpg", // located in src/assets/
    socials: {
        linkedin: "https://linkedin.com/in/ronidey1819",
        github: "https://github.com/RoniDey1819",
        twitter: "https://x.com/ronidey1819",
        instagram: "https://instagram.com/ronii.dey",
    },
};

// ─── SKILLS ─────────────────────────────────────────────────
// icon names reference react-icons identifiers
export const skills = [
    { name: "Java", iconLib: "fa", iconName: "FaJava" },
    { name: "JavaScript", iconLib: "si", iconName: "SiJavascript" },
    { name: "Node.js", iconLib: "fa", iconName: "FaNodeJs" },
    { name: "Express", iconLib: "si", iconName: "SiExpress" },
    { name: "Linux", iconLib: "fa", iconName: "FaLinux" },
    { name: "Git", iconLib: "fa", iconName: "FaGitAlt" },
    { name: "C", iconLib: "si", iconName: "SiC" },
    { name: "React", iconLib: "fa", iconName: "FaReact" },
    { name: "Docker", iconLib: "fa", iconName: "FaDocker" },
    { name: "Kubernetes", iconLib: "si", iconName: "SiKubernetes" },
    { name: "SQL", iconLib: "si", iconName: "SiMysql" },
];

export const extraSkills = [
    "REST APIs",
    "System Design",
    "Agile",
    "Problem Solving",
    "Team Leadership",
];

// ─── CERTIFICATIONS ─────────────────────────────────────────
// Add new certifications by appending objects to this array.
// Images go in public/images/certifications/
export const certifications = [
    {
        id: 1,
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        issueDate: "2024-01-15",
        credentialId: "AWS-SA-2024-001",
        credentialUrl: "https://aws.amazon.com/certification/",
        imageUrl: "/images/certifications/cert1.png",
    },
    {
        id: 2,
        title: "Google Cloud Professional",
        issuer: "Google Cloud",
        issueDate: "2023-11-20",
        credentialId: "GCP-PRO-2023-456",
        credentialUrl: "https://cloud.google.com/certification",
        imageUrl: "/images/certifications/cert2.png",
    },
    // ↓ ADD NEW CERTIFICATIONS HERE ↓
    // {
    //   id: 3,
    //   title: "Your New Certification",
    //   issuer: "Issuing Organization",
    //   issueDate: "YYYY-MM-DD",
    //   credentialId: "CERT-ID",
    //   credentialUrl: "https://...",
    //   imageUrl: "/images/certifications/cert3.png",
    // },
];

// ─── PROJECTS ───────────────────────────────────────────────
// status: "completed" | "current"
// Images go in public/images/projects/
export const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description:
            "A modern, responsive portfolio website built with React and Vite. Features include dark/light mode, smooth animations, and a dynamic project showcase.",
        imageUrl: "/images/projects/pimg1.png",
        projectUrl: "https://github.com/RoniDey1819/portfolio",
        status: "completed",
        technologies: ["React", "Vite", "CSS3", "JavaScript"],
    },
    {
        id: 2,
        title: "E-commerce Platform",
        description:
            "Full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.",
        imageUrl: "/images/projects/pimg2.png",
        projectUrl: "https://github.com/RoniDey1819/ecommerce",
        status: "completed",
        technologies: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
    },
    {
        id: 3,
        title: "AI Chatbot Assistant",
        description:
            "Intelligent chatbot powered by OpenAI API with context-aware responses, conversation history, and multi-language support.",
        imageUrl: "/images/projects/pimg3.png",
        projectUrl: "https://github.com/RoniDey1819/chatbot",
        status: "current",
        technologies: ["Python", "OpenAI API", "Flask", "React"],
    },
    // ↓ ADD NEW PROJECTS HERE ↓
    // {
    //   id: 4,
    //   title: "New Project",
    //   description: "Description...",
    //   imageUrl: "/images/projects/pimg4.png",
    //   projectUrl: "https://github.com/...",
    //   status: "completed",
    //   technologies: ["Tech1", "Tech2"],
    // },
];

// ─── PAPERS & BLOGS ─────────────────────────────────────────
export const papers = [
    {
        id: 1,
        title: "Optimizing Neural Networks for Edge Devices",
        abstract:
            "A comprehensive study on reducing the computational load of deep learning models for IoT devices without significant accuracy loss. We propose novel pruning techniques and quantization methods.",
        paperUrl: "https://arxiv.org/example1",
        publicationDate: "2024-03-15",
        authors: ["Roni Dey", "Co-Author Name"],
        journal: "Journal of Machine Learning Research",
        doi: "10.1234/jmlr.2024.001",
    },
    {
        id: 2,
        title: "Blockchain in Supply Chain Management",
        abstract:
            "Analyzing the impact of decentralized ledgers on transparency and efficiency in global logistics. This paper presents a framework for implementing blockchain solutions in enterprise supply chains.",
        paperUrl: "https://arxiv.org/example2",
        publicationDate: "2023-11-20",
        authors: ["Roni Dey"],
        journal: "International Journal of Blockchain Technology",
        doi: "10.1234/ijbt.2023.042",
    },
    // ↓ ADD NEW PAPERS HERE ↓
    // {
    //   id: 3,
    //   title: "New Paper Title",
    //   abstract: "Abstract...",
    //   paperUrl: "https://...",
    //   publicationDate: "YYYY-MM-DD",
    //   authors: ["Author 1"],
    //   journal: "Journal Name",
    //   doi: "10.xxx/...",
    // },
];

// ─── EXPERIENCE / TIMELINE (Future Use) ─────────────────────
// Uncomment and populate when you're ready to add an Experience section.
// export const experience = [
//   {
//     id: 1,
//     role: "Software Engineer Intern",
//     company: "Company Name",
//     startDate: "2024-06",
//     endDate: "2024-08",
//     description: "What you did...",
//     technologies: ["React", "Node.js"],
//   },
// ];

// ─── EDUCATION (Future Use) ─────────────────────────────────
// export const education = [
//   {
//     id: 1,
//     degree: "B.Sc. Computer Science",
//     institution: "University of Calcutta",
//     startYear: 2021,
//     endYear: 2024,
//     description: "Major in Computer Science",
//   },
// ];
