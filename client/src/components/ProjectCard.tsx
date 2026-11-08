// client/src/components/ProjectCard.tsx
import type { Project } from '../types';
import { ExternalLink, FolderGit2, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="flex flex-col justify-between rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 hover:border-emerald-500/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(16,185,129,0.12)] overflow-hidden">
            <div>
                {/* Aspect Ratio Preview Frame (Inspired by Linear / Vercel preview cards) */}
                <div className="relative aspect-[16/10] bg-zinc-950/80 border-b border-zinc-800/80 overflow-hidden flex flex-col justify-between p-4 group-hover:bg-zinc-950/60 transition-colors">
                    {/* Ambient subtle gradient behind preview */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-teal-500/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Window Controls / Header Bar */}
                    <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-700/60" />
                            <span className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-700/60" />
                            <span className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-700/60" />
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-zinc-900/90 text-zinc-400 border border-zinc-800">
                            {project.category}
                        </span>
                    </div>

                    {/* Center Wireframe / Visual Representation */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-2">
                        <div className="p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-emerald-400 mb-2 shadow-inner group-hover:scale-110 group-hover:border-emerald-500/40 transition-all duration-300">
                            <FolderGit2 className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono text-zinc-400 font-semibold tracking-wide">
                            {project.title}
                        </span>
                    </div>

                    {/* Footer bar of the preview */}
                    <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                        <span>Production Build</span>
                        <span className="text-emerald-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Active
                        </span>
                    </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-white tracking-tight mb-2.5 group-hover:text-emerald-400 transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                        {project.description}
                    </p>

                    {/* Problem Solved & Architectural Value */}
                    {project.problemSolved && (
                        <div className="mb-4 p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-xs text-zinc-300 leading-relaxed">
                            <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-semibold mb-1">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span>Problem Solved:</span>
                            </div>
                            <p className="text-zinc-400">{project.problemSolved}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Section: Tech Badges & Action Links */}
            <div className="px-6 pb-6 pt-0 space-y-4">
                {/* Tech Badges */}
                <div className="flex flex-wrap items-center gap-1.5">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-zinc-950 border border-zinc-800/80 text-zinc-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Distinct Action Buttons: Live Preview ↗ and Source Code ↗ */}
                <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-3">
                    {project.liveUrl ? (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] active:scale-95"
                        >
                            <span>Live Preview</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    ) : (
                        <span className="flex-1 inline-flex items-center justify-center px-3.5 py-2 rounded-lg bg-zinc-900/60 border border-zinc-800/60 text-zinc-500 text-xs font-mono">
                            Demo on Request
                        </span>
                    )}

                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-medium transition-all active:scale-95"
                            aria-label={`Source code for ${project.title}`}
                        >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>Source Code</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
