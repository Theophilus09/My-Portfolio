// client/src/sections/Projects.tsx
import { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import { type ProjectCategory } from '../types';

const CATEGORIES: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects', value: 'All' },
    { label: 'Full-Stack', value: 'Full-Stack' },
    { label: 'Frontend', value: 'Frontend' },
    { label: 'Open Source', value: 'Open Source' },
];

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

    const filteredProjects =
        activeCategory === 'All'
            ? projectsData
            : projectsData.filter((project) => project.category === activeCategory);

    return (
        <section id="projects" className="py-20 md:py-28 border-t border-zinc-800/80">
            <SectionHeading
                badge="Featured Work"
                title="Recruiter-First Project Showcase"
                subtitle="Production web applications and responsive systems architected with TypeScript, React, and decoupled backend services."
            />

            {/* Filter Tabs with animated / sleek active pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                <div className="inline-flex p-1.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-md">
                    {CATEGORIES.map((cat) => {
                        const count =
                            cat.value === 'All'
                                ? projectsData.length
                                : projectsData.filter((p) => p.category === cat.value).length;

                        const isActive = activeCategory === cat.value;

                        return (
                            <button
                                key={cat.value}
                                onClick={() => setActiveCategory(cat.value)}
                                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${isActive
                                    ? 'bg-emerald-500 text-zinc-950 font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                                    }`}
                            >
                                <span>{cat.label}</span>
                                <span
                                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${isActive
                                        ? 'bg-zinc-950 text-emerald-400'
                                        : 'bg-zinc-800 text-zinc-400'
                                        }`}
                                >
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {/* Bottom Callout */}
            <div className="mt-14 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 text-center max-w-xl mx-auto">
                <p className="text-xs sm:text-sm text-zinc-400">
                    Looking for a specific architecture or custom full-stack demo?
                </p>
                <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 mt-2 transition-colors"
                >
                    Let's discuss your requirements ↗
                </a>
            </div>
        </section>
    );
};
