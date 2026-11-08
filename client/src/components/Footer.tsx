// client/src/components/Footer.tsx
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="border-t border-zinc-800/80 bg-[#09090b] py-12">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <a href="#home" className="text-lg font-bold text-white tracking-tight">
                        Theophilus<span className="text-emerald-500">.dev</span>
                    </a>
                    <p className="text-xs text-zinc-500 mt-1">
                        Frontend Developer • Building clean, performant web applications.
                    </p>
                </div>

                <div className="flex items-center gap-6 text-xs text-zinc-400">
                    <a href="#about" className="hover:text-white transition-colors">About</a>
                    <a href="#skills" className="hover:text-white transition-colors">Skills</a>
                    <a href="#experience" className="hover:text-white transition-colors">Experience</a>
                    <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                </div>

                <div className="flex items-center gap-4">
                    <p className="text-xs font-mono text-zinc-500">
                        © {currentYear} Theophilus Taiwo Ajibade
                    </p>
                    <button
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                        className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-all cursor-pointer"
                    >
                        <ArrowUp className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </footer>
    );
};