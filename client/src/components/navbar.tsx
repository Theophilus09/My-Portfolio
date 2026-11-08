// client/src/components/navbar.tsx
import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
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
                ? 'bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl shadow-black/40'
                : 'bg-zinc-950/40 backdrop-blur-sm border-b border-zinc-900/60'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Brand Logo & Recruiter Status */}
                <div className="flex items-center gap-3">
                    <a
                        href="#home"
                        className="text-white font-bold text-lg tracking-tight hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                    >
                        <span>Theophilus</span>
                        <span className="text-emerald-400 font-mono">.dev</span>
                    </a>
                    <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-zinc-400 bg-zinc-900/90 border border-zinc-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Online
                    </span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1 bg-zinc-900/50 border border-zinc-800/80 rounded-full px-3 py-1 backdrop-blur-sm">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white rounded-full transition-colors hover:bg-zinc-800/50"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Action CTA */}
                <div className="hidden md:flex items-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs transition-all duration-200 shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] active:scale-95"
                    >
                        <span>Let's Talk</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                </div>

                {/* Mobile Hamburger Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/60 border border-zinc-800/60 transition-colors"
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Drawer Menu */}
            {isOpen && (
                <div className="md:hidden bg-zinc-950/95 backdrop-blur-2xl border-b border-zinc-800/80 px-6 py-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-sm font-medium text-zinc-300 hover:text-emerald-400 transition-colors py-2 border-b border-zinc-900/80"
                        >
                            {item.label}
                        </a>
                    ))}
                    <div className="pt-3">
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition-all"
                        >
                            <span>Let's Talk</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};
