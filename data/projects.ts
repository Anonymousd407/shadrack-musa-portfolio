export type Project = {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    slug: "a-health",
    name: "A-Health Platform",
    description: "Secure healthcare management system.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "wastesort-ai",
    name: "WasteSort AI",
    description: "AI-powered waste classification system.",
    tech: ["Python", "TensorFlow", "OpenCV"],
    githubUrl: "#",
  },
  {
    slug: "security-portfolio",
    name: "Security Portfolio",
    description: "Collection of TryHackMe writeups, security labs, CTF solutions, and SOC reports.",
    tech: ["TryHackMe", "CTF", "SOC"],
    tags: ["TryHackMe Writeups", "Security Labs", "CTF Solutions", "SOC Reports"],
    githubUrl: "#",
  },
  {
    slug: "password-manager",
    name: "Password Manager",
    description: "Secure password vault.",
    tech: ["Node.js", "Encryption"],
    githubUrl: "#",
  },
  {
    slug: "student-management-system",
    name: "Student Management System",
    description: "CRUD application for managing student records.",
    tech: ["PHP", "MySQL"],
    githubUrl: "#",
  },
];
