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
        <section id="skills" className="py-20 border-t border-zinc-800/60">
            <SectionHeading
                badge="Skills & Toolkit"
                title="Technologies I Work With"
                subtitle="A snapshot of the languages, libraries, databases, and developer tools in my daily workflow."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillsData.map((category) => {
                    const IconComponent = categoryIcons[category.title] || Layout;

                    return (
                        <div
                            key={category.title}
                            className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        <IconComponent className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white tracking-tight">
                                        {category.title}
                                    </h3>
                                </div>

                                <ul className="space-y-3">
                                    {category.skills.map((skill) => (
                                        <li
                                            key={skill.name}
                                            className="flex items-center gap-2.5 text-zinc-300 text-sm group"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500/70 group-hover:text-emerald-400 transition-colors shrink-0" />
                                            <span className="group-hover:text-white transition-colors">
                                                {skill.name}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-8 pt-4 border-t border-zinc-800/50 flex items-center justify-between text-xs font-mono text-zinc-500">
                                <span>{category.skills.length} Technologies</span>
                                <span className="text-emerald-500/80">Active</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};