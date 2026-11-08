// client/src/data/skills.ts
import { type SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
    {
        title: 'Frontend Architecture',
        skills: [
            { name: 'React.js' },
            { name: 'Next.js' },
            { name: 'TypeScript' },
            { name: 'JavaScript (ES6+)' },
            { name: 'Tailwind CSS' },
            { name: 'HTML5 & Modern CSS3' },
        ],
    },
    {
        title: 'Interactive UI & Design Systems',
        skills: [
            { name: 'Responsive Layout Systems' },
            { name: 'Component Reusability' },
            { name: 'State Management' },
            { name: 'Micro-Interactions' },
            { name: 'Web Accessibility (a11y)' },
            { name: 'CSS Animations & Transitions' },
        ],
    },
    {
        title: 'Tooling & Deployment',
        skills: [
            { name: 'Vite & Modern Bundlers' },
            { name: 'Git & GitHub Workflows' },
            { name: 'Vercel CI/CD' },
            { name: 'REST API Client Integration' },
            { name: 'VS Code & DevTools' },
            { name: 'ESLint & Code Standards' },
        ],
    },
];
