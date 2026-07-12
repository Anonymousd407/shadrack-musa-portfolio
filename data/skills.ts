export type SkillGroup = {
  label: string;
  path: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    path: "~/skills/frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    label: "Backend",
    path: "~/skills/backend",
    items: ["Node.js", "Express", "Laravel", "PHP", "Python"],
  },
  {
    label: "Database",
    path: "~/skills/database",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    label: "Cyber Security",
    path: "~/skills/security",
    items: ["Penetration Testing", "Burp Suite", "Nmap", "Metasploit", "Wireshark", "TryHackMe", "Kali Linux"],
  },
  {
    label: "DevOps",
    path: "~/skills/devops",
    items: ["Git", "GitHub", "Docker", "Linux"],
  },
];
