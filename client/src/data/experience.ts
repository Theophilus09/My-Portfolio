// client/src/data/experience.ts
import { type Experience } from '../types';

export const experienceData: Experience[] = [
    {
        id: 'codealpha',
        role: 'Web Development Intern',
        company: 'CodeAlpha',
        employmentType: 'Internship',
        period: 'May 2026 – Aug 2026',
        location: 'Remote',
        highlights: [
            'Developed responsive frontend web applications and interactive UI components using modern JavaScript frameworks.',
            'Collaborated on assigned development milestones, ensuring adherence to clean code standards and timely delivery.',
            'Refactored styles and layout structures to optimize responsiveness across mobile and desktop devices.',
        ],
        technologies: ['React.js', 'JavaScript', 'CSS3', 'Git', 'GitHub'],
    },
    {
        id: 'cest',
        role: 'Technical Intern',
        company: 'Centre for Emerging Skills Technology (CEST)',
        employmentType: 'Internship',
        period: 'Oct 2023 – Mar 2024',
        location: 'Ogbomoso, Nigeria',
        highlights: [
            'Assisted with technical support, system documentation, and web interface maintenance tasks.',
            'Supported digital processes and participated in practical software workflows.',
        ],
        technologies: ['Web Technologies', 'Technical Documentation', 'System Troubleshooting'],
    },
];