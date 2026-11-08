// client/src/sections/Skills.tsx
import { SectionHeading } from '../components/SectionHeading';
import { skillsData } from '../data/skills';
import { Terminal, Layout, Cpu, CheckCircle2 } from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
    'Frontend Development': Layout,
    'Backend & APIs': Cpu,
    'Tools & Workflows': Terminal,
};

export const Skills = () => {
    return (
        <section id="skills" className="py-20 md:py-28 border-t border-zinc-800/80">
            <SectionHeading
                badge="Technical Competencies"
                title="Tools & Core Capabilities"
                subtitle="A granular breakdown of languages, modern libraries, database systems, and delivery workflows."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillsData.map((category) => {
                    const IconComponent = categoryIcons[category.title] || Layout;

                    return (
                        <div
                            key={category.title}
                            className="p-6 sm:p-7 rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_0_30px_rgba(16,185,129,0.06)]"
                        >
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

                            <div>
                                <div className="flex items-center gap-3.5 mb-6">
                                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm">
                                        <IconComponent className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white tracking-tight">
                                            {category.title}
                                        </h3>
                                        <span className="text-[11px] font-mono text-zinc-500">
                                            Production Ready
                                        </span>
                                    </div>
                                </div>

                                <ul className="space-y-3">
                                    {category.skills.map((skill) => (
                                        <li
                                            key={skill.name}
                                            className="flex items-center justify-between py-1.5 px-3 rounded-lg bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 transition-colors group/item"
                                        >
                                            <div className="flex items-center gap-2.5">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                                <span className="text-zinc-300 text-sm font-medium group-hover/item:text-white transition-colors">
                                                    {skill.name}
                                                </span>
                                            </div>
                                            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                                                Active
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-8 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-500">
                                <span>{category.skills.length} Core Modules</span>
                                <span className="text-emerald-400/90 font-medium">Verified In Projects</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
