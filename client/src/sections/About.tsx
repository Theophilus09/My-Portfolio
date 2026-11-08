// client/src/sections/About.tsx
import { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import {
    Code2,
    Layers,
    Cpu,
    Sparkles,
    Palette,
    ArrowUpRight,
    TerminalSquare,
    Zap,
    Flame
} from 'lucide-react';

export const About = () => {
    const [fpsMode, setFpsMode] = useState<'smooth' | 'ultra'>('smooth');

    const coreFocusAreas = [
        {
            title: 'Component Architecture',
            desc: 'Designing declarative, reusable component hierarchies with React, Next.js, and TypeScript for long-term scalability.',
            icon: Code2,
        },
        {
            title: 'Responsive & Fluid UI',
            desc: 'Crafting responsive layouts with Tailwind CSS, ensuring 100% fluid viewports, zero layout shift, and intuitive mobile ergonomics.',
            icon: Layers,
        },
        {
            title: 'Design Systems & Tokens',
            desc: 'Translating visual design languages into systematic UI tokens, strict accessibility standards (WCAG/a11y), and tactile micro-interactions.',
            icon: Palette,
        },
    ];

    const frontendSkills = ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vite'];
    const stylingSkills = ['Responsive Layouts', 'CSS3 / PostCSS', 'Micro-Interactions', 'Component Libraries', 'Accessibility (a11y)'];
    const toolingSkills = ['Git & GitHub', 'Vercel CI/CD', 'REST API Integration', 'VS Code & DevTools', 'ESLint / Prettier'];

    const keySignals = [
        {
            metric: 'Modern Frontend',
            label: 'Production React & Next.js SPAs deployed with fluid responsiveness',
            icon: Sparkles,
        },
        {
            metric: '100% Type-Safe',
            label: 'Strict TypeScript interfaces and defensive frontend validation',
            icon: Zap,
        },
        {
            metric: 'Design Systems',
            label: 'Consistent design tokens, custom hooks, and reusable primitives',
            icon: Palette,
        },
        {
            metric: 'First-Principles',
            label: 'Engineering discipline translating complex logic into elegant interfaces',
            icon: Cpu,
        },
    ];

    return (
        <section id="about" className="py-20 md:py-28 border-t border-violet-500/15 relative">
            {/* Ambient decorative glow */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

            <SectionHeading
                badge="About & Engineering Signals"
                title="Frontend Mindset & UI Craftsmanship"
                subtitle="A deep look into my approach to component architecture, interactive interfaces, and modern web engineering."
            />

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* Bento Card 1: Narrative & Engineering Craft (Col 7) */}
                <div className="lg:col-span-7 rounded-2xl bg-[#121520]/70 backdrop-blur-md border border-violet-500/20 p-6 sm:p-8 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group shadow-lg">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
                    
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2.5 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
                            <TerminalSquare className="w-4 h-4" />
                            <span>Engineering Philosophy</span>
                        </div>
                        {/* Whimsical interactive FPS pill */}
                        <button
                            onClick={() => setFpsMode(fpsMode === 'smooth' ? 'ultra' : 'smooth')}
                            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-violet-500/10 border border-violet-500/30 text-violet-300 hover:text-cyan-300 cursor-pointer transition-colors"
                            title="Toggle refresh mode"
                        >
                            <Flame className="w-3 h-3 text-amber-400" />
                            <span>{fpsMode === 'smooth' ? '60 FPS • Smooth' : '120 FPS • Ultra'}</span>
                        </button>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
                        Building responsive, accessible web interfaces where performance meets delightful design.
                    </h3>

                    <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                        <p>
                            I am a <strong className="text-white font-medium">Frontend Developer & UI Engineer</strong> passionate about crafting interactive, high-performance web experiences. With an engineering background, I approach user interfaces through structured decomposition: breaking complex requirements into deterministic, reusable React components.
                        </p>
                        <p>
                            My development workflow focuses on <span className="text-cyan-300 font-medium">clean component architecture</span>, intuitive micro-interactions, and zero layout shift. From handling client-side state transitions to polishing typography across viewports, I ensure every detail feels intentional.
                        </p>
                        <p className="text-zinc-400">
                            I thrive in the modern React and TypeScript ecosystem—leveraging Next.js for server-rendered speed and Tailwind CSS for rapid, maintainable design systems.
                        </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-violet-500/15 flex flex-wrap items-center gap-2.5">
                        <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Standards:</span>
                        {['Pixel-Perfect Layouts', 'Strict Accessibility (a11y)', 'State Normalization', 'Zero Layout Shift'].map((tag) => (
                            <span
                                key={tag}
                                className="px-2.5 py-1 text-xs font-mono rounded-lg bg-[#0B0D13] border border-violet-500/20 text-zinc-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bento Card 2: Key Signals & Metrics (Col 5) */}
                <div className="lg:col-span-5 rounded-2xl bg-[#121520]/70 backdrop-blur-md border border-violet-500/20 p-6 sm:p-8 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-lg">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
                    
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-violet-300 font-mono text-xs font-semibold uppercase tracking-wider">
                                Recruiter Signals
                            </span>
                            <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-400/30">
                                Verified Frontend
                            </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
                            {keySignals.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="p-3.5 rounded-xl bg-[#0B0D13]/70 border border-violet-500/15 hover:border-cyan-400/30 transition-all flex items-start gap-3.5 group/item"
                                    >
                                        <div className="p-2 rounded-lg bg-violet-500/10 text-cyan-300 group-hover/item:text-cyan-200 shrink-0 mt-0.5">
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

                    <div className="mt-6 pt-4 border-t border-violet-500/15 flex items-center justify-between text-xs font-mono text-zinc-400">
                        <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            Ready for Interviews
                        </span>
                        <a href="#contact" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 font-semibold transition-colors">
                            <span>Reach Out</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>

                {/* Bento Card 3: Core Focus Areas (Col 5) */}
                <div className="lg:col-span-5 rounded-2xl bg-[#121520]/70 backdrop-blur-md border border-violet-500/20 p-6 sm:p-8 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden shadow-lg">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
                    
                    <span className="text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider block mb-4">
                        Core UI Engineering Focus
                    </span>

                    <div className="space-y-4">
                        {coreFocusAreas.map((area, idx) => {
                            const Icon = area.icon;
                            return (
                                <div
                                    key={idx}
                                    className="p-4 rounded-xl bg-[#0B0D13]/60 border border-violet-500/15 hover:border-violet-500/30 transition-colors"
                                >
                                    <div className="flex items-center gap-2.5 mb-1.5">
                                        <div className="p-1.5 rounded-lg bg-violet-500/10 text-cyan-300">
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
                <div className="lg:col-span-7 rounded-2xl bg-[#121520]/70 backdrop-blur-md border border-violet-500/20 p-6 sm:p-8 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden shadow-lg">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
                    
                    <div className="flex items-center justify-between mb-5">
                        <span className="text-violet-300 font-mono text-xs font-semibold uppercase tracking-wider">
                            Frontend Stack Matrix
                        </span>
                        <span className="text-xs font-mono text-zinc-500">
                            Daily Production Arsenal
                        </span>
                    </div>

                    <div className="space-y-4">
                        {/* Core Frontend */}
                        <div>
                            <span className="text-xs font-mono text-zinc-400 mb-2 block font-medium">
                                Core Frameworks & TypeScript
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 text-xs font-mono font-medium rounded-xl bg-[#0B0D13] border border-violet-500/20 text-zinc-200 hover:border-cyan-400/40 hover:text-cyan-300 transition-all hover:shadow-[0_0_12px_rgba(34,211,238,0.2)]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Styling & Motion */}
                        <div>
                            <span className="text-xs font-mono text-zinc-400 mb-2 block font-medium">
                                Styling, Motion & Design Systems
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {stylingSkills.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 text-xs font-mono font-medium rounded-xl bg-[#0B0D13] border border-violet-500/20 text-zinc-200 hover:border-cyan-400/40 hover:text-cyan-300 transition-all hover:shadow-[0_0_12px_rgba(34,211,238,0.2)]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Tooling & APIs */}
                        <div>
                            <span className="text-xs font-mono text-zinc-400 mb-2 block font-medium">
                                Tooling & API Client Integration
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {toolingSkills.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 text-xs font-mono font-medium rounded-xl bg-[#0B0D13] border border-violet-500/20 text-zinc-200 hover:border-cyan-400/40 hover:text-cyan-300 transition-all hover:shadow-[0_0_12px_rgba(34,211,238,0.2)]"
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
