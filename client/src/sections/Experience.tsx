// client/src/sections/Experience.tsx
import { SectionHeading } from '../components/SectionHeading';
import { experienceData } from '../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience = () => {
    return (
        <section id="experience" className="py-20 md:py-28 border-t border-violet-500/15">
            <SectionHeading
                badge="Career Journey"
                title="Professional Experience"
                subtitle="Practical engineering roles and internships where I delivered responsive web interfaces, UI components, and collaborative frontend features."
            />

            {/* Vertical Timeline Container */}
            <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 before:absolute before:left-2.5 sm:before:left-3 before:top-4 before:bottom-4 before:w-px before:bg-gradient-to-b before:from-cyan-400 before:via-violet-600 before:to-[#0B0D13] space-y-10">
                {experienceData.map((item) => (
                    <div key={item.id} className="relative group">
                        {/* Glowing Timeline Node (Cyan / Violet) */}
                        <div className="absolute -left-6 sm:-left-8 top-6 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20 shadow-[0_0_15px_rgba(34,211,238,0.7)] group-hover:scale-125 transition-transform" />

                        {/* Experience Card */}
                        <div className="p-6 sm:p-8 rounded-2xl bg-[#121520]/70 backdrop-blur-md border border-violet-500/20 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group-hover:shadow-[0_0_35px_rgba(139,92,246,0.15)] shadow-lg">
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

                            {/* Header Info */}
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-1">
                                        <div className="p-2 rounded-xl bg-violet-500/10 text-cyan-300 border border-violet-500/20">
                                            <Briefcase className="w-4 h-4" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white tracking-tight">
                                            {item.role}
                                        </h3>
                                    </div>
                                    <p className="text-sm font-medium text-cyan-400">
                                        {item.company}
                                        <span className="text-zinc-600 mx-2">•</span>
                                        <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-[#0B0D13] border border-violet-500/20 text-zinc-400">
                                            {item.employmentType}
                                        </span>
                                    </p>
                                </div>

                                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0B0D13] border border-violet-500/20">
                                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                                        {item.period}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0B0D13] border border-violet-500/20">
                                        <MapPin className="w-3.5 h-3.5 text-violet-400" />
                                        {item.location}
                                    </span>
                                </div>
                            </div>

                            {/* Impact Highlights */}
                            <div className="space-y-3 mb-6">
                                {item.highlights.map((point, index) => (
                                    <div key={index} className="flex items-start gap-2.5 text-zinc-300 text-sm leading-relaxed">
                                        <CheckCircle2 className="w-4 h-4 text-cyan-400/90 shrink-0 mt-0.5" />
                                        <span>{point}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Tech Stack Pills */}
                            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-violet-500/15">
                                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider mr-1">
                                    Stack:
                                </span>
                                {item.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2.5 py-1 text-xs font-mono rounded-lg bg-[#0B0D13] border border-violet-500/20 text-zinc-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
