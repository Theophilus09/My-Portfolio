// client/src/components/navbar.tsx
import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, FileDown } from 'lucide-react';
import { resumeUrl } from '../data';

const NAV_ITEMS = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-[#0B0D13]/85 backdrop-blur-md border-b border-violet-500/20 shadow-2xl shadow-black/60'
                : 'bg-[#0B0D13]/40 backdrop-blur-sm border-b border-violet-500/10'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Brand Logo & Recruiter Status */}
                <div className="flex items-center gap-3">
                    <a
                        href="#home"
                        className="text-white font-bold text-lg tracking-tight hover:text-cyan-400 transition-colors flex items-center gap-1.5 group"
                    >
                        <Sparkles className="w-4 h-4 text-violet-400 group-hover:rotate-12 transition-transform" />
                        <span>Theophilus</span>
                        <span className="text-cyan-400 font-mono">.dev</span>
                    </a>
                    <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-zinc-400 bg-zinc-900/90 border border-violet-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        Frontend Dev
                    </span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1 bg-[#121520]/80 border border-violet-500/20 rounded-full px-3 py-1 backdrop-blur-md shadow-inner">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white rounded-full transition-colors hover:bg-violet-500/10 hover:text-cyan-300"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Action CTAs: Download CV & Contact */}
                <div className="hidden md:flex items-center gap-2.5">
                    <a
                        href={resumeUrl}
                        download="Theophilus_Taiwo_Ajibade_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#121520] hover:bg-violet-950/40 text-zinc-300 hover:text-white border border-violet-500/20 hover:border-cyan-400/40 text-xs font-medium transition-all"
                        title="Download CV (PDF)"
                    >
                        <FileDown className="w-3.5 h-3.5 text-cyan-400" />
                        <span>CV</span>
                    </a>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold text-xs transition-all duration-200 shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] active:scale-95"
                    >
                        <span>Let's Connect</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                </div>

                {/* Mobile Hamburger Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/60 border border-violet-500/20 transition-colors"
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Drawer Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#0B0D13]/95 backdrop-blur-2xl border-b border-violet-500/20 px-6 py-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-sm font-medium text-zinc-300 hover:text-cyan-400 transition-colors py-2 border-b border-zinc-900/80"
                        >
                            {item.label}
                        </a>
                    ))}
                    <div className="pt-3 flex flex-col gap-2.5">
                        <a
                            href={resumeUrl}
                            download="Theophilus_Taiwo_Ajibade_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#121520] border border-violet-500/30 text-zinc-200 text-sm font-medium hover:border-cyan-400/50 transition-all"
                        >
                            <FileDown className="w-4 h-4 text-cyan-400" />
                            <span>Download CV (PDF)</span>
                        </a>

                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                        >
                            <span>Let's Connect</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};
