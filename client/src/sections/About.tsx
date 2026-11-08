// client/src/sections/About.tsx
import { SectionHeading } from '../components/SectionHeading';
import {
    Code2,
    Layers,
    Cpu,
    GitPullRequest,
    Globe2,
    ShieldCheck,
    Boxes,
    ArrowUpRight,
    TerminalSquare
} from 'lucide-react';

export const About = () => {
    const coreFocusAreas = [
        {
            title: 'Frontend Engineering',
            desc: 'Building responsive, deterministic Single Page Applications with React, TypeScript, and modern state architectures.',
            icon: Code2,
        },
        {
            title: 'Responsive Web Applications',
            desc: 'Engineering fluid layout systems with Tailwind CSS, ensuring 100% responsiveness and zero layout shift across viewports.',
            icon: Layers,
        },
        {
            title: 'Scalable UI Systems',
            desc: 'Crafting reusable component libraries, strict accessibility standards (a11y), and maintainable design tokens.',
            icon: Boxes,
        },
    ];

    const frontendSkills = ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript (ES6+)', 'Vite'];
    const backendSkills = ['Node.js', 'Express.js', 'REST APIs', 'MongoDB Atlas', 'Supabase', 'Resend API'];
    const toolingSkills = ['Git & GitHub', 'Vercel CI/CD', 'Render', 'ESLint', 'Postman', 'VS Code'];

    const keySignals = [
        {
            metric: 'Live Production',
            label: 'Web applications actively deployed on Vercel & Render',
            icon: Globe2,
        },
        {
            metric: '100% Type-Safe',
            label: 'End-to-end TypeScript interfaces and rigorous validation',
            icon: ShieldCheck,
        },
        {
            metric: 'Open Source',
            label: 'Active code contributor to community platforms & tools',
            icon: GitPullRequest,
        },
        {
            metric: 'First-Principles',
            label: 'Engineering discipline translating complex logic into clean code',
            icon: Cpu,
        },
    ];

    return (
        <section id="about" className="py-20 md:py-28 border-t border-zinc-800/80 relative">
            <SectionHeading
                badge="About & Signal Hub"
                title="Engineering Mindset & Technical Signals"
                subtitle="A recruiter-grade snapshot of my technical strengths, core disciplines, and architectural values."
            />

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* Bento Card 1: Narrative & Engineering Craft (Col 7) */}
                <div className="lg:col-span-7 rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 p-6 sm:p-8 hover:border-zinc-700/80 transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
                    
                    <div className="flex items-center gap-2.5 mb-4 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider">
                        <TerminalSquare className="w-4 h-4" />
                        <span>Background & Philosophy</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
                        Bridging rigorous engineering discipline with modern web architecture.
                    </h3>

                    <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                        <p>
                            I am a <strong className="text-white font-medium">Frontend & Full-Stack Developer</strong> driven by software craftsmanship. With an academic background in engineering, I treat web development as a system of interconnected, high-leverage parts: from deterministic client states to resilient microservices.
                        </p>
                        <p>
                            My approach centers on <span className="text-emerald-400 font-medium">clean code separation</span>, scalable component hierarchies, and sub-second rendering performance. Rather than assembling disparate snippets, I decompose complex UI challenges into modular, type-safe, and self-documenting codebases.
                        </p>
                        <p className="text-zinc-400">
                            Whether architecting high-conversion single page applications, integrating secure transactional email pipelines, or optimizing build bundles in Vite, I prioritize developer velocity and delightful user experience.
                        </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-zinc-800/80 flex flex-wrap items-center gap-3">
                        <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Practices:</span>
                        {['Clean Architecture', 'Accessible Semantic UI', 'State Normalization', 'Zero Layout Shifts'].map((tag) => (
                            <span
                                key={tag}
                                className="px-2.5 py-1 text-xs font-mono rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bento Card 2: Key Signals & Engineering Metrics (Col 5) */}
                <div className="lg:col-span-5 rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 p-6 sm:p-8 hover:border-zinc-700/80 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
                    
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider">
                                Recruiter Signals
                            </span>
                            <span className="text-[11px] font-mono text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                                Verified Highlights
                            </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
                            {keySignals.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 hover:border-emerald-500/30 transition-colors flex items-start gap-3.5"
                                    >
                                        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-white tracking-tight">
                                                {item.metric}
                                            </h4>
                                            <p className="text-xs text-zinc-400 mt-0.5 leading-snug">
                                                {item.label}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
                        <span>Status: Interview Ready</span>
                        <a href="#contact" className="text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 font-semibold">
                            <span>Request Interview</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>

                {/* Bento Card 3: Core Focus Areas (Col 5) */}
                <div className="lg:col-span-5 rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 p-6 sm:p-8 hover:border-zinc-700/80 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
                    
                    <span className="text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider block mb-4">
                        Core Engineering Focus
                    </span>

                    <div className="space-y-4">
                        {coreFocusAreas.map((area, idx) => {
                            const Icon = area.icon;
                            return (
                                <div
                                    key={idx}
                                    className="p-4 rounded-xl bg-zinc-950/50 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                                >
                                    <div className="flex items-center gap-2.5 mb-1.5">
                                        <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-400">
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <h4 className="text-sm font-bold text-white tracking-tight">
                                            {area.title}
                                        </h4>
                                    </div>
                                    <p className="text-xs text-zinc-400 leading-relaxed pl-8">
                                        {area.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bento Card 4: Tech Stack Matrix (Col 7) */}
                <div className="lg:col-span-7 rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 p-6 sm:p-8 hover:border-zinc-700/80 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
                    
                    <div className="flex items-center justify-between mb-5">
                        <span className="text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider">
                            Tech Stack Matrix
                        </span>
                        <span className="text-xs font-mono text-zinc-500">
                            Production Toolkit
                        </span>
                    </div>

                    <div className="space-y-4">
                        {/* Frontend Matrix */}
                        <div>
                            <span className="text-xs font-mono text-zinc-400 mb-2 block font-medium">
                                Frontend Ecosystem
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-200 hover:border-emerald-500/40 hover:text-emerald-400 transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Backend Matrix */}
                        <div>
                            <span className="text-xs font-mono text-zinc-400 mb-2 block font-medium">
                                Backend & Cloud APIs
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-200 hover:border-emerald-500/40 hover:text-emerald-400 transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Tools & DevOps */}
                        <div>
                            <span className="text-xs font-mono text-zinc-400 mb-2 block font-medium">
                                Tooling & Workflows
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {toolingSkills.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-200 hover:border-emerald-500/40 hover:text-emerald-400 transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
