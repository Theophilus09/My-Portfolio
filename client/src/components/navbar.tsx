// client/src/components/Navbar.tsx
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
                ? 'bg-[#09090b]/85 backdrop-blur-md border-b border-zinc-800/80 shadow-lg'
                : 'bg-transparent border-b border-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Brand Logo */}
                <a
                    href="#home"
                    className="text-white font-bold text-lg tracking-tight hover:text-emerald-400 transition-colors"
                >
                    Theophilus<span className="text-emerald-500">.dev</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-7">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Action Button */}
                <div className="hidden md:flex items-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-semibold text-sm transition-all duration-200 shadow-sm"
                    >
                        Let's Talk
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>

                {/* Mobile Hamburger Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Drawer Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#09090b]/95 backdrop-blur-xl border-b border-zinc-800 px-6 py-6 space-y-4">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-base font-medium text-zinc-300 hover:text-emerald-400 transition-colors py-1"
                        >
                            {item.label}
                        </a>
                    ))}
                    <div className="pt-2">
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-emerald-500 text-zinc-950 font-semibold text-sm"
                        >
                            Let's Talk
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};