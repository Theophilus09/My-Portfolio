// client/src/types/index.ts

export type ProjectCategory = 'All' | 'Full-Stack' | 'Frontend' | 'Open Source' | 'React' | 'JavaScript';

export interface Project {
    id: string;
    title: string;
    description: string;
    problemSolved?: string;
    category: ProjectCategory;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured?: boolean;
}

export interface SkillCategory {
    title: string;
    skills: {
        name: string;
        level?: 'Advanced' | 'Proficient' | 'Working Knowledge';
    }[];
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    employmentType: 'Full-time' | 'Internship' | 'Contract' | 'Open Source';
    period: string;
    location: string;
    highlights: string[];
    technologies: string[];
}

export interface Education {
    institution: string;
    qualification: string;
    course: string;
    period: string;
    honors?: string;
    capstone?: string;
}
