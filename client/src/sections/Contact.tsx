// client/src/sections/Contact.tsx
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';
import { Mail, MapPin, Clock, MessageSquareText } from 'lucide-react';
import {
    GithubIcon,
    LinkedinIcon,
    XIcon,
    WhatsappIcon,
    TelegramIcon,
    InstagramIcon,
} from '../components/Icons';
import { socials } from '../data';

export const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-28 border-t border-violet-500/15 relative">
            {/* Ambient background glow */}
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

            <SectionHeading
                badge="Get In Touch"
                title="Let's Build Exceptional Web Experiences"
                subtitle="Whether you have an open frontend engineering role, a design system in need of realization, or want to collaborate—my inbox is open."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Contact Information & Channels (Col 5) */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="p-6 sm:p-8 rounded-2xl bg-[#121520]/70 backdrop-blur-md border border-violet-500/20 space-y-6 relative overflow-hidden shadow-lg">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-white tracking-tight">
                                Contact Information
                            </h3>
                            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-400/30">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                                Available
                            </span>
                        </div>

                        <div className="space-y-4">
                            {/* Email */}
                            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0B0D13]/70 border border-violet-500/15 hover:border-cyan-400/30 transition-colors">
                                <div className="p-2 rounded-lg bg-violet-500/10 text-cyan-300 shrink-0 mt-0.5">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Direct Email</p>
                                    <a
                                        href="mailto:ajibadetheophilus217@gmail.com"
                                        className="text-sm font-medium text-zinc-200 hover:text-cyan-300 transition-colors block truncate"
                                    >
                                        ajibadetheophilus217@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0B0D13]/70 border border-violet-500/15">
                                <div className="p-2 rounded-lg bg-violet-500/10 text-cyan-300 shrink-0 mt-0.5">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Location</p>
                                    <p className="text-sm font-medium text-zinc-200">Lagos, Nigeria (UTC+1)</p>
                                </div>
                            </div>

                            {/* Work Preference */}
                            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0B0D13]/70 border border-violet-500/15">
                                <div className="p-2 rounded-lg bg-violet-500/10 text-cyan-300 shrink-0 mt-0.5">
                                    <Clock className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Availability</p>
                                    <p className="text-sm font-medium text-zinc-200">Frontend Roles • Remote Worldwide</p>
                                </div>
                            </div>
                        </div>

                        {/* Direct Channels */}
                        <div className="pt-4 border-t border-violet-500/15 flex flex-wrap items-center justify-between gap-3">
                            <span className="text-xs font-mono text-zinc-500">Connect Online:</span>
                            <div className="flex items-center gap-1.5">
                                <a
                                    href={socials.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub Profile"
                                    className="p-2 rounded-xl bg-[#0B0D13] hover:bg-violet-950/40 border border-violet-500/20 text-zinc-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                                    title="GitHub"
                                >
                                    <GithubIcon className="w-4 h-4" />
                                </a>
                                <a
                                    href={socials.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn Profile"
                                    className="p-2 rounded-xl bg-[#0B0D13] hover:bg-violet-950/40 border border-violet-500/20 text-zinc-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                                    title="LinkedIn"
                                >
                                    <LinkedinIcon className="w-4 h-4" />
                                </a>
                                <a
                                    href={socials.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp"
                                    className="p-2 rounded-xl bg-[#0B0D13] hover:bg-violet-950/40 border border-violet-500/20 text-zinc-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                                    title="WhatsApp"
                                >
                                    <WhatsappIcon className="w-4 h-4" />
                                </a>
                                <a
                                    href={socials.telegram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Telegram"
                                    className="p-2 rounded-xl bg-[#0B0D13] hover:bg-violet-950/40 border border-violet-500/20 text-zinc-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                                    title="Telegram"
                                >
                                    <TelegramIcon className="w-4 h-4" />
                                </a>
                                <a
                                    href={socials.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="X / Twitter"
                                    className="p-2 rounded-xl bg-[#0B0D13] hover:bg-violet-950/40 border border-violet-500/20 text-zinc-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                                    title="X / Twitter"
                                >
                                    <XIcon className="w-4 h-4" />
                                </a>
                                <a
                                    href={socials.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="p-2 rounded-xl bg-[#0B0D13] hover:bg-violet-950/40 border border-violet-500/20 text-zinc-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                                    title="Instagram"
                                >
                                    <InstagramIcon className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Interactive Contact Form Box (Col 7) */}
                <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#121520]/70 backdrop-blur-md border border-violet-500/20 relative overflow-hidden shadow-lg">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

                    <div className="flex items-center gap-2 mb-6 text-zinc-400 text-xs font-mono">
                        <MessageSquareText className="w-4 h-4 text-cyan-400" />
                        <span>Connected to Express/Resend Microservice</span>
                    </div>

                    <ContactForm />
                </div>
            </div>
        </section>
    );
};
