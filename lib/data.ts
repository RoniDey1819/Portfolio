import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'ronidey1819@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Roni, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/RoniDey1819' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/ronidey1819' },
];

export const MY_STACK = {
    languages: [
        {
            name: 'Java',
            icon: '/logo/java.png',
        },
        {
            name: 'Python',
            icon: '/logo/python.png',
        },
        {
            name: 'JavaScript (ES6+)',
            icon: '/logo/js.png',
        },
        {
            name: 'GO',
            icon: '/logo/js.png',
        },
        {
            name: 'C',
            icon: '/logo/js.png',
        },
    ],
    frameworks: [
        {
            name: 'React.js',
            icon: '/logo/react.png',
        },
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'PyTorch',
            icon: '/logo/js.png',
        },
        {
            name: 'Pandas',
            icon: '/logo/js.png',
        },
        {
            name: 'NumPy',
            icon: '/logo/js.png',
        },
        {
            name: 'TensorFlow',
            icon: '/logo/js.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'GitHub',
            icon: '/logo/git.png',
        },
        {
            name: 'Linux',
            icon: '/logo/aws.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'Prisma',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Postman',
            icon: '/logo/mongodb.svg',
        },
    ],
    competencies: [
        {
            name: 'Transactrion and Query Optimization',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Session and Cookies',
            icon: '/logo/nest.svg',
        },
        {
            name: 'JWT',
            icon: '/logo/nest.svg',
        },
        {
            name: 'REST APIs',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Authentication',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Data Modeling',
            icon: '/logo/nest.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Microservices E-Commerce Platform',
        slug: 'microservices-ecommerce',
        year: '2024',
        description: `Designed and implemented backend services for product, order, and authentication workflows. Built and consumed RESTful APIs following clean architecture and coding standards. Debugged and optimized service interactions for performance and scalability. Applied secure API practices and structured database interactions.`,
        techStack: [
            'Java',
            'Spring Boot',
            'REST APIs',
            'Docker',
            'Kubernetes',
        ],
        thumbnail: '/projects/thumbnail/mti-electronics.webp',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: [
            '/projects/images/mti-electronics-1.webp',
            '/projects/images/mti-electronics-2.webp',
        ],
    },
    {
        title: 'Sugam-Adhar Analytics',
        slug: 'sugam-adhar',
        year: '2023',
        description: `Developed a responsive frontend using React to display analytical dashboards. Integrated frontend with backend APIs to fetch and visualize processed data. Worked with structured datasets and optimized queries for efficient data retrieval. Collaborated with team members to align features with project requirements.`,
        techStack: [
            'React',
            'Python',
            'REST APIs',
            'SQL',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
        ],
    },
    {
        title: 'Potato Infection Detection',
        slug: 'potato-infection',
        year: '2023',
        description: `Built a React-based user interface for interacting with backend services. Designed REST APIs to handle data flow between frontend and backend. Focused on application responsiveness, reliability, and maintainability.`,
        techStack: [
            'React',
            'Python',
            'REST APIs',
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
        ],
    },
];

export const EDUCATION = [
    {
        degree: 'M.Sc. in Computer Science',
        institution: 'University of Calcutta',
        duration: '2024 - Present',
        details: '',
    },
    {
        degree: 'B.Sc. in Computer Science',
        institution: 'Asutosh College, University of Calcutta',
        duration: '2021 - 2024',
        details: 'CGPA: 8.09',
    },
];

export const CERTIFICATIONS = [
    {
        title: 'Oracle Cloud Infrastructure 2025 - Generative AI Professional',
        year: '2025',
        link: '#'
    },
    {
        title: 'Oracle Cloud Infrastructure 2025 - Foundations Associate',
        year: '2025',
        link: '#'
    },
    {
        title: 'Cisco Network Academy: Introduction to Data Science',
        year: '2025',
        link: '#'
    },
];

export const AWARDS = [
    'Dan Kohn Scholarship - CNCF',
    'Shubhra Kar LiFT Scholarship - The Linux Foundation',
    'Best Project Award - University of Calcutta',
];
