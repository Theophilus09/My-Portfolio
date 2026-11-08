// client/src/sections/Projects.tsx
import { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projects';

const CATEGORIES = ['All', 'React', 'JavaScript', 'Full-Stack', 'Frontend'] as const;

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState<string>('All');

    const filteredProjects =
        activeCategory === 'All'
            ? projectsData
            : projectsData.filter((project) => project.category === activeCategory);

    return (
        <section id="projects" className="py-20 border-t border-zinc-800/60">
            <SectionHeading
                badge="Featured Work"
                title="Projects & Applications"
                subtitle="Selected frontend and full-stack projects showcasing responsive interfaces, clean state logic, and modern workflows."
            />

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${activeCategory === cat
                            ? 'bg-emerald-500 text-zinc-950 font-semibold shadow-sm'
                            : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};