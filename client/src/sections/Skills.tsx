// client/src/sections/Skills.tsx
import { SectionHeading } from '../components/SectionHeading';
import { skillsData } from '../data/skills';
import { Terminal, Layout, CheckCircle2, Palette } from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
    'Frontend Architecture': Layout,
    'Interactive UI & Design Systems': Palette,
    'Tooling & Deployment': Terminal,
};

export const Skills = () => {
    return (
        <section id="skills" className="py-20 md:py-28 border-t border-violet-500/15">
            <SectionHeading
                badge="Frontend Toolkit"
                title="Specialized UI Capabilities"
                subtitle="A focused view of the frameworks, styling systems, and frontend build tools I leverage daily."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillsData.map((category) => {
                    const IconComponent = categoryIcons[category.title] || Layout;

                    return (
                        <div
                            key={category.title}
                            className="p-6 sm:p-7 rounded-2xl bg-[#121520]/70 backdrop-blur-md border border-violet-500/20 hover:border-cyan-400/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group shadow-lg hover:shadow-[0_0_35px_rgba(139,92,246,0.15)]"
                        >
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

                            <div>
                                <div className="flex items-center gap-3.5 mb-6">
                                    <div className="p-2.5 rounded-xl bg-violet-500/10 text-cyan-300 border border-violet-500/20 shadow-sm group-hover:scale-110 transition-transform">
                                        <IconComponent className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white tracking-tight">
                                            {category.title}
                                        </h3>
                                        <span className="text-[11px] font-mono text-zinc-400">
                                            Production Ready
                                        </span>
                                    </div>
                                </div>

                                <ul className="space-y-3">
                                    {category.skills.map((skill) => (
                                        <li
                                            key={skill.name}
                                            className="flex items-center justify-between py-2 px-3 rounded-xl bg-[#0B0D13]/70 border border-violet-500/10 hover:border-cyan-400/30 transition-all group/item"
                                        >
                                            <div className="flex items-center gap-2.5">
                                                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                                                <span className="text-zinc-300 text-sm font-medium group-hover/item:text-white transition-colors">
                                                    {skill.name}
                                                </span>
                                            </div>
                                            <span className="text-[10px] font-mono text-violet-400 uppercase tracking-wider">
                                                Active
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-8 pt-4 border-t border-violet-500/15 flex items-center justify-between text-xs font-mono text-zinc-500">
                                <span>{category.skills.length} Capabilities</span>
                                <span className="text-cyan-400 font-medium">100% Tested</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
