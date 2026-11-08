// client/src/sections/Experience.tsx
import { SectionHeading } from '../components/SectionHeading';
import { experienceData } from '../data/experience';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
    return (
        <section id="experience" className="py-20 border-t border-zinc-800/60">
            <SectionHeading
                badge="Career Journey"
                title="Experience & Practical Background"
                subtitle="Professional roles and internships where I applied structured problem-solving, UI implementation, and technical collaboration."
            />

            <div className="space-y-8 max-w-4xl mx-auto">
                {experienceData.map((item) => (
                    <div
                        key={item.id}
                        className="relative p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200"
                    >
                        {/* Header info */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                            <div>
                                <div className="flex items-center gap-2.5">
                                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                                        <Briefcase className="w-4 h-4" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white tracking-tight">
                                        {item.role}
                                    </h3>
                                </div>
                                <p className="text-emerald-400 font-medium text-sm mt-1">
                                    {item.company}
                                    <span className="text-zinc-600 mx-2">•</span>
                                    <span className="text-zinc-400 font-normal">
                                        {item.employmentType}
                                    </span>
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                                <span className="inline-flex items-center gap-1.5">
                                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                                    {item.period}
                                </span>
                                <span className="inline-flex items-center gap-1.5">
                                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                                    {item.location}
                                </span>
                            </div>
                        </div>

                        {/* Bullet points */}
                        <ul className="space-y-2.5 mb-6 text-zinc-300 text-sm leading-relaxed list-disc list-inside marker:text-emerald-500">
                            {item.highlights.map((point, index) => (
                                <li key={index} className="text-zinc-300">
                                    <span className="text-zinc-300">{point}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Tech badges */}
                        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-zinc-800/60">
                            <span className="text-xs font-mono text-zinc-500 mr-1">Stack:</span>
                            {item.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-800/70 text-zinc-300 border border-zinc-700/50"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};