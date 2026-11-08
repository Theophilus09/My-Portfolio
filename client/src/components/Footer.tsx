// client/src/components/Footer.tsx
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="border-t border-zinc-800/80 bg-zinc-950 py-12 relative overflow-hidden">
            {/* Subtle glow accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-emerald-500/5 blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                <div className="space-y-1 text-center md:text-left">
                    <a href="#home" className="text-lg font-bold text-white tracking-tight hover:text-emerald-400 transition-colors">
                        Theophilus<span className="text-emerald-400">.dev</span>
                    </a>
                    <p className="text-xs text-zinc-400">
                        Frontend & Full-Stack Software Craftsman • React, TypeScript & Scalable Systems.
                    </p>
                </div>

                <div className="flex items-center gap-5 text-xs text-zinc-400">
                    <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
                    <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
                    <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
                    <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
                    <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
                </div>

                <div className="flex items-center gap-4">
                    {/* Socials */}
                    <div className="flex items-center gap-2">
                        <a
                            href="https://github.com/Theophilus09"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub Profile"
                            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800/80 text-zinc-400 hover:text-white transition-all"
                        >
                            <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn Profile"
                            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800/80 text-zinc-400 hover:text-white transition-all"
                        >
                            <LinkedinIcon className="w-3.5 h-3.5" />
                        </a>
                        <a
                            href="mailto:ajibadetheophilus217@gmail.com"
                            aria-label="Direct Email"
                            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800/80 text-zinc-400 hover:text-white transition-all"
                        >
                            <Mail className="w-3.5 h-3.5" />
                        </a>
                    </div>

                    <button
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                        className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800/80 text-zinc-400 hover:text-white transition-all cursor-pointer hover:border-emerald-500/30"
                    >
                        <ArrowUp className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-8 pt-6 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
                <span>© {currentYear} Theophilus Taiwo Ajibade. All rights reserved.</span>
                <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Deployed on Vercel & Render
                </span>
            </div>
        </footer>
    );
};
