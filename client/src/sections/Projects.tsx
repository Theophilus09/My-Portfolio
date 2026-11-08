// client/src/sections/Projects.tsx
import { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import { type ProjectCategory } from '../types';

const CATEGORIES: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects', value: 'All' },
    { label: 'React', value: 'React' },
    { label: 'Web Apps', value: 'Web Apps' },
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
        <section id="projects" className="py-20 md:py-28 border-t border-violet-500/15">
            <SectionHeading
                badge="Featured Work"
                title="Frontend Applications & Interfaces"
                subtitle="Selected interactive web applications, responsive single-page products, and open-source contributions."
            />

            {/* Filter Tabs with animated violet / cyan active pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                <div className="inline-flex p-1.5 rounded-2xl bg-[#121520]/80 border border-violet-500/20 backdrop-blur-md shadow-lg">
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
                                    ? 'bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white font-bold shadow-[0_0_20px_rgba(139,92,246,0.35)]'
                                    : 'text-zinc-400 hover:text-white hover:bg-violet-500/10'
                                    }`}
                            >
                                <span>{cat.label}</span>
                                <span
                                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${isActive
                                        ? 'bg-[#0B0D13] text-cyan-300'
                                        : 'bg-[#0B0D13] text-zinc-400'
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
            <div className="mt-14 p-6 rounded-2xl bg-[#121520]/40 border border-violet-500/20 text-center max-w-xl mx-auto backdrop-blur-sm">
                <p className="text-xs sm:text-sm text-zinc-400">
                    Need a custom frontend interface, design system, or React component suite?
                </p>
                <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 mt-2 transition-colors"
                >
                    Let's discuss your project ↗
                </a>
            </div>
        </section>
    );
};
