// client/src/components/ProjectCard.tsx
import type { Project } from '../types';
import { ExternalLink, Folder } from 'lucide-react';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="flex flex-col justify-between p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-emerald-500/40 transition-all duration-300 group">
            <div>
                {/* Top Header: Category Tag & Action Links */}
                <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <Folder className="w-3.5 h-3.5" />
                        {project.category}
                    </span>

                    <div className="flex items-center gap-3">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`GitHub repo for ${project.title}`}
                                className="text-zinc-400 hover:text-white transition-colors p-1"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                </svg>
                            </a>
                        )}

                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Live demo for ${project.title}`}
                                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors p-1"
                            >
                                <span>Live Demo</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {project.description}
                </p>

                {/* Problem Solved Badge / Note */}
                {project.problemSolved && (
                    <div className="mb-4 p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/60 text-xs text-zinc-300">
                        <strong className="text-emerald-400 font-medium">Key Focus: </strong>
                        {project.problemSolved}
                    </div>
                )}
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-zinc-800/60">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-zinc-800/60 text-zinc-300 border border-zinc-700/40"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};