// client/src/components/Footer.tsx
import { ArrowUp, Sparkles } from 'lucide-react';
import {
    GithubIcon,
    LinkedinIcon,
    XIcon,
    WhatsappIcon,
    TelegramIcon,
    InstagramIcon,
} from './Icons';
import { socials } from '../data';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const footerSocials = [
        { name: 'GitHub', url: socials.github, icon: GithubIcon },
        { name: 'LinkedIn', url: socials.linkedin, icon: LinkedinIcon },
        { name: 'X / Twitter', url: socials.twitter, icon: XIcon },
        { name: 'WhatsApp', url: socials.whatsapp, icon: WhatsappIcon },
        { name: 'Telegram', url: socials.telegram, icon: TelegramIcon },
        { name: 'Instagram', url: socials.instagram, icon: InstagramIcon },
    ];

    return (
        <footer className="border-t border-violet-500/15 bg-[#0B0D13] py-12 relative overflow-hidden">
            {/* Subtle violet/cyan ambient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-violet-600/10 via-cyan-500/10 to-transparent blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                <div className="space-y-1 text-center md:text-left">
                    <a href="#home" className="text-lg font-bold text-white tracking-tight hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-violet-400" />
                        <span>Theophilus</span>
                        <span className="text-cyan-400 font-mono">.dev</span>
                    </a>
                    <p className="text-xs text-zinc-400">
                        Frontend Developer & UI Engineer • Crafting intuitive, high-performance web experiences.
                    </p>
                </div>

                <div className="flex items-center gap-5 text-xs text-zinc-400">
                    <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
                    <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
                    <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
                    <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
                    <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
                    <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
                </div>

                <div className="flex items-center gap-4">
                    {/* Expanded Social Icons */}
                    <div className="flex items-center gap-1.5">
                        {footerSocials.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <a
                                    key={item.name}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.name}
                                    className="p-2 rounded-xl bg-[#121520] hover:bg-violet-950/40 border border-violet-500/20 text-zinc-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                                    title={item.name}
                                >
                                    <IconComponent className="w-3.5 h-3.5" />
                                </a>
                            );
                        })}
                    </div>

                    <button
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                        className="p-2 rounded-xl bg-[#121520] hover:bg-violet-950/40 border border-violet-500/20 text-zinc-400 hover:text-cyan-300 transition-all cursor-pointer hover:border-cyan-400/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                        title="Scroll to top"
                    >
                        <ArrowUp className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-8 pt-6 border-t border-violet-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
                <span>© {currentYear} Theophilus Taiwo Ajibade. All rights reserved.</span>
                <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                    Deployed on Vercel • React & TypeScript
                </span>
            </div>
        </footer>
    );
};
