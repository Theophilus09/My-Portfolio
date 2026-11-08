// client/src/sections/Education.tsx
import { SectionHeading } from '../components/SectionHeading';
import { educationData } from '../data/education';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export const Education = () => {
    return (
        <section id="education" className="py-20 border-t border-zinc-800/60">
            <SectionHeading
                badge="Academic Foundation"
                title="Education & Credentials"
                subtitle="Formal academic training combining analytical engineering problem-solving with software development principles."
            />

            <div className="max-w-3xl mx-auto space-y-6">
                {educationData.map((edu, index) => (
                    <div
                        key={index}
                        className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                            <div className="flex items-start gap-3.5">
                                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                                    <GraduationCap className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white tracking-tight">
                                        {edu.course}
                                    </h3>
                                    <p className="text-emerald-400 font-medium text-sm mt-0.5">
                                        {edu.qualification}
                                    </p>
                                    <p className="text-zinc-400 text-sm mt-1">
                                        {edu.institution}
                                    </p>
                                    <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-800/60 border border-zinc-700/50 text-xs font-mono text-zinc-300">
                                        <Award className="w-3.5 h-3.5 text-emerald-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="sm:text-right shrink-0">
                                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-zinc-800/80 text-zinc-400 border border-zinc-700/50">
                                    {edu.period}
                                </span>
                            </div>
                        </div>

                        {/* Engineering Project Note */}
                        <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-start gap-2.5 text-xs text-zinc-400">
                            <BookOpen className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>
                                <strong className="text-zinc-300">Engineering Capstone:</strong> Development of a Hybrid Power System; Integrating Solar and Wind Energy.
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};