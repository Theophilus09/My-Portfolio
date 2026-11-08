// client/src/sections/Contact.tsx
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';
import { Mail, MapPin, Clock, MessageSquareText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-28 border-t border-zinc-800/80 relative">
            {/* Ambient background glow */}
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

            <SectionHeading
                badge="Get In Touch"
                title="Let's Build Something Exceptional"
                subtitle="Whether you have an open engineering role, a product in need of clean frontend architecture, or want to say hello—my inbox is open."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Contact Information & Channels (Col 5) */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 space-y-6 relative overflow-hidden">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-white tracking-tight">
                                Contact Information
                            </h3>
                            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Available
                            </span>
                        </div>

                        <div className="space-y-4">
                            {/* Email */}
                            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Direct Email</p>
                                    <a
                                        href="mailto:ajibadetheophilus217@gmail.com"
                                        className="text-sm font-medium text-zinc-200 hover:text-emerald-400 transition-colors block truncate"
                                    >
                                        ajibadetheophilus217@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Location</p>
                                    <p className="text-sm font-medium text-zinc-200">Lagos, Nigeria (UTC+1)</p>
                                </div>
                            </div>

                            {/* Work Preference */}
                            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                                    <Clock className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Work Status</p>
                                    <p className="text-sm font-medium text-zinc-200">Full-time, Contract & Remote Worldwide</p>
                                </div>
                            </div>
                        </div>

                        {/* Direct Channels */}
                        <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                            <span className="text-xs font-mono text-zinc-500">Other Profiles:</span>
                            <div className="flex items-center gap-2">
                                <a
                                    href="https://github.com/Theophilus09"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="GitHub Profile"
                                    className="p-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-all"
                                >
                                    <GithubIcon className="w-4 h-4" />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="LinkedIn Profile"
                                    className="p-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-all"
                                >
                                    <LinkedinIcon className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Interactive Contact Form Box (Col 7) */}
                <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

                    <div className="flex items-center gap-2 mb-6 text-zinc-400 text-xs font-mono">
                        <MessageSquareText className="w-4 h-4 text-emerald-400" />
                        <span>Connected to Express/Resend Microservice</span>
                    </div>

                    <ContactForm />
                </div>
            </div>
        </section>
    );
};
