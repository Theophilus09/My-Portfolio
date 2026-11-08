// client/src/data/projects.ts
import { type Project } from '../types';

export const projectsData: Project[] = [
    {
        id: 'modernstore',
        title: 'ModernStore E-Commerce',
        description: 'A modern, responsive e-commerce web application featuring product browsing, category filtering, cart management, and interactive checkout flow.',
        problemSolved: 'Delivers a fast, seamless shopping experience with real-time cart state management and responsive layouts across all screen sizes.',
        category: 'React',
        tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'Responsive UI'],
        liveUrl: '', // Add your live demo link if available
        githubUrl: '', // Add your GitHub repo link
        featured: true,
    },
    {
        id: 'interactive-dashboard',
        title: 'Interactive Dashboard Web App',
        description: 'An interactive frontend dashboard built with dynamic data rendering, clean layout controls, and client-side interactions.',
        category: 'JavaScript',
        tags: ['JavaScript', 'HTML5', 'CSS3', 'DOM Manipulation'],
        liveUrl: 'https://shopping-web-sepia.vercel.app/',
        githubUrl: '',
        featured: true,
    },
    {
        id: 'todo-notes-fullstack',
        title: 'Full-Stack To-Do & Notes Platform',
        description: 'A complete full-stack productivity application with persistent task management, note-taking, and REST API integration.',
        problemSolved: 'Eliminates lost state by coupling a responsive React interface with persistent MongoDB Atlas storage via an Express backend.',
        category: 'Full-Stack',
        tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
        liveUrl: '', // Add live link
        githubUrl: '',
        featured: true,
    },
    {
        id: 'dry-c-web',
        title: 'Dry-C Responsive Platform',
        description: 'A responsive commercial web interface built to showcase structured layout design, clean visual hierarchy, and cross-device compatibility.',
        category: 'Frontend',
        tags: ['HTML5', 'CSS3', 'Responsive Design'],
        liveUrl: 'https://dry-c.vercel.app/',
        githubUrl: '',
        featured: false,
    },
    {
        id: 'zedu-chat-contribution',
        title: 'Zedu Chat Open Source Updates',
        description: 'Frontend codebase updates, component refactoring, and integration of responsive UI elements for the Zedu Chat platform.',
        category: 'Frontend',
        tags: ['React.js', 'TypeScript', 'Open Source', 'Git Workflow'],
        liveUrl: '',
        githubUrl: '',
        featured: false,
    },
];