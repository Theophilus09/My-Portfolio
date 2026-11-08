// client/src/components/ProjectCard.tsx
import type { Project } from '../types';
import { ExternalLink, FolderGit2, CheckCircle2, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="flex flex-col justify-between rounded-2xl bg-[#121520]/70 backdrop-blur-md border border-violet-500/20 hover:border-cyan-400/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(139,92,246,0.2)] overflow-hidden shadow-lg">
            <div>
                {/* Aspect Ratio Preview Frame (Violet / Cyan Dual Tone) */}
                <div className="relative aspect-[16/10] bg-[#0B0D13]/90 border-b border-violet-500/15 overflow-hidden flex flex-col justify-between p-4 group-hover:bg-[#0B0D13]/70 transition-colors">
                    {/* Ambient subtle dual-tone gradient behind preview */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/15 via-transparent to-cyan-400/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Window Controls / Header Bar */}
                    <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-violet-500/40 border border-violet-400/60" />
                            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500/40 border border-indigo-400/60" />
                            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/40 border border-cyan-300/60" />
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#121520]/90 text-cyan-300 border border-violet-500/30">
                            {project.category}
                        </span>
                    </div>

                    {/* Center Wireframe / Visual Representation */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-2">
                        <div className="p-3 rounded-2xl bg-[#121520] border border-violet-500/30 text-cyan-400 mb-2 shadow-inner group-hover:scale-110 group-hover:border-cyan-400/50 transition-all duration-300">
                            <FolderGit2 className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono text-zinc-300 font-semibold tracking-wide flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-violet-400" />
                            {project.title}
                        </span>
                    </div>

                    {/* Footer bar of the preview */}
                    <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                        <span>Frontend Build</span>
                        <span className="text-cyan-400 flex items-center gap-1 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            Verified
                        </span>
                    </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-white tracking-tight mb-2.5 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                        {project.description}
                    </p>

                    {/* Problem Solved & Architectural Value */}
                    {project.problemSolved && (
                        <div className="mb-4 p-3.5 rounded-xl bg-[#0B0D13]/70 border border-violet-500/15 text-xs text-zinc-300 leading-relaxed">
                            <div className="flex items-center gap-1.5 text-cyan-300 font-mono font-semibold mb-1">
                                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                                <span>UX Impact:</span>
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
                            className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-[#0B0D13] border border-violet-500/20 text-zinc-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Distinct Action Buttons: Live Preview ↗ and Source Code ↗ */}
                <div className="pt-4 border-t border-violet-500/15 flex items-center gap-3">
                    {project.liveUrl ? (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-cyan-500 text-white font-bold text-xs transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)] active:scale-95"
                        >
                            <span>Live Preview</span>
                            <ExternalLink className="w-3.5 h-3.5 text-cyan-200" />
                        </a>
                    ) : (
                        <span className="flex-1 inline-flex items-center justify-center px-3.5 py-2.5 rounded-xl bg-[#0B0D13] border border-violet-500/15 text-zinc-500 text-xs font-mono">
                            Demo on Request
                        </span>
                    )}

                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#0B0D13] hover:bg-violet-950/40 border border-violet-500/20 text-zinc-300 hover:text-white text-xs font-medium transition-all active:scale-95 hover:border-cyan-400/30"
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
