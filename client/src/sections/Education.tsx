// client/src/sections/Education.tsx
import { SectionHeading } from '../components/SectionHeading';
import { educationData } from '../data/education';
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react';

export const Education = () => {
    return (
        <section id="education" className="py-20 md:py-28 border-t border-zinc-800/80">
            <SectionHeading
                badge="Academic Foundation"
                title="Education & Engineering Background"
                subtitle="Rigorous academic training combining analytical engineering problem-solving with software systems development."
            />

            <div className="max-w-3xl mx-auto space-y-6">
                {educationData.map((edu, index) => (
                    <div
                        key={index}
                        className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(16,185,129,0.06)]"
                    >
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                            <div className="flex items-start gap-3.5">
                                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                                    <GraduationCap className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white tracking-tight">
                                        {edu.course}
                                    </h3>
                                    <p className="text-emerald-400 font-medium text-sm mt-0.5">
                                        {edu.qualification}
                                    </p>
                                    <p className="text-zinc-400 text-sm mt-1">
                                        {edu.institution}
                                    </p>
                                    <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300">
                                        <Award className="w-3.5 h-3.5 text-emerald-400" />
                                        <span>Engineering Discipline</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex sm:flex-col items-center sm:items-end gap-2 text-xs font-mono text-zinc-400 shrink-0">
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800">
                                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                                    {edu.period}
                                </span>
                                <span className="inline-flex items-center gap-1 text-[11px] text-zinc-500">
                                    <MapPin className="w-3 h-3" />
                                    Ogbomoso, Nigeria
                                </span>
                            </div>
                        </div>

                        {/* Engineering Capstone Project Highlight */}
                        <div className="mt-6 pt-5 border-t border-zinc-800/80 flex items-start gap-3 text-xs text-zinc-300 bg-zinc-950/40 p-4 rounded-xl border border-zinc-900">
                            <BookOpen className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                                <strong className="text-white font-semibold">Engineering Capstone:</strong>
                                <span className="text-zinc-400 ml-1.5">
                                    Development of a Hybrid Power System; Integrating Solar and Wind Energy with dynamic load modeling and hardware circuit testing.
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
