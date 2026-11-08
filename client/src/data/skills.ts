// client/src/data/skills.ts
import { type SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
    {
        title: 'Frontend Development',
        skills: [
            { name: 'HTML5' },
            { name: 'CSS3' },
            { name: 'JavaScript (ES6+)' },
            { name: 'TypeScript' },
            { name: 'React.js' },
            { name: 'Tailwind CSS' },
        ],
    },
    {
        title: 'Backend & APIs',
        skills: [
            { name: 'Node.js' },
            { name: 'Express.js' },
            { name: 'REST APIs' },
            { name: 'MongoDB Atlas' },
            { name: 'Supabase' },
        ],
    },
    {
        title: 'Tools & Workflows',
        skills: [
            { name: 'Git & GitHub' },
            { name: 'Vite' },
            { name: 'VS Code' },
            { name: 'Vercel & Render' },
            { name: 'ClickUp' },
        ],
    },
];