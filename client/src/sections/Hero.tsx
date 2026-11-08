// client/src/sections/Hero.tsx
import { useState } from 'react';
import { ArrowDown, Mail, FileDown, Sparkles, Wand2, Coffee } from 'lucide-react';
import {
    GithubIcon,
    LinkedinIcon,
    XIcon,
    WhatsappIcon,
    TelegramIcon,
    InstagramIcon,
} from '../components/Icons';
import { resumeUrl, socials } from '../data';

export const Hero = () => {
    const [imageError, setImageError] = useState(false);
    const [coffeeCount, setCoffeeCount] = useState(1);
    const [isBumping, setIsBumping] = useState(false);

    const handleFeedCoffee = () => {
        setCoffeeCount((prev) => prev + 1);
        setIsBumping(true);
        setTimeout(() => setIsBumping(false), 300);
    };

    const socialChannels = [
        { name: 'GitHub', url: socials.github, icon: GithubIcon },
        { name: 'LinkedIn', url: socials.linkedin, icon: LinkedinIcon },
        { name: 'X / Twitter', url: socials.twitter, icon: XIcon },
        { name: 'WhatsApp', url: socials.whatsapp, icon: WhatsappIcon },
        { name: 'Telegram', url: socials.telegram, icon: TelegramIcon },
        { name: 'Instagram', url: socials.instagram, icon: InstagramIcon },
    ];

    return (
        <section
            id="home"
            className="relative pt-28 pb-20 md:pt-36 md:pb-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16"
        >
            {/* Ambient Lighting Gradients (Electric Violet & Neon Cyan) */}
            <div className="absolute top-12 left-1/3 -translate-x-1/2 w-[550px] h-[350px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
            <div className="absolute top-36 right-10 w-[400px] h-[300px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />

            {/* Left Column: Frontend Positioning & Value Proposition */}
            <div className="flex-1 text-center lg:text-left space-y-7">
                {/* Status Pill: Pulsing Live Indicator */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:border-cyan-400/50 transition-colors">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                    </span>
                    <span className="font-mono tracking-tight font-semibold text-cyan-300">Available for Frontend Roles</span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-zinc-400">Remote / Worldwide</span>
                </div>

                {/* Primary Headline */}
                <div className="space-y-3">
                    <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-400 font-semibold flex items-center justify-center lg:justify-start gap-2">
                        <Wand2 className="w-4 h-4 text-cyan-400" />
                        <span>Theophilus Taiwo Ajibade • Frontend Developer</span>
                    </h2>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                        Crafting Intuitive, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-300 to-sky-400">
                            High-Performance
                        </span> <br />
                        Frontend Experiences.
                    </h1>
                </div>

                {/* Subtitle / Bio (Strictly Frontend & UI Engineering) */}
                <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                    Specializing in responsive web architectures, interactive UI systems, and dynamic micro-interactions. Dedicated to building accessible, pixel-perfect digital experiences powered by modern <span className="text-zinc-200 font-medium">React, Next.js, TypeScript, and Tailwind CSS</span>.
                </p>

                {/* Quick Action CTAs */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1">
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-bold text-sm transition-all shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_35px_rgba(34,211,238,0.45)] active:scale-95 group cursor-pointer"
                    >
                        <span>View Featured Work</span>
                        <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform text-cyan-200" />
                    </a>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#121520] hover:bg-violet-950/40 text-zinc-200 hover:text-white border border-violet-500/20 hover:border-cyan-400/40 font-semibold text-sm transition-all active:scale-95 shadow-sm"
                    >
                        <Mail className="w-4 h-4 text-cyan-400" />
                        <span>Contact Me</span>
                    </a>

                    {/* Downloadable Resume / CV button */}
                    <a
                        href={resumeUrl}
                        download="Theophilus_Taiwo_Ajibade_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-zinc-300 hover:text-white hover:bg-violet-950/40 bg-[#121520] border border-violet-500/20 hover:border-cyan-400/50 text-sm font-semibold transition-all active:scale-95 shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                        title="Download Theophilus Taiwo Ajibade CV (PDF)"
                    >
                        <FileDown className="w-4 h-4 text-cyan-400" />
                        <span>Download CV</span>
                    </a>
                </div>

                {/* Socials & Interactive Coffee Widget */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
                    <div className="flex flex-wrap items-center justify-center gap-2.5 text-zinc-400">
                        <span className="text-xs uppercase tracking-wider font-mono text-zinc-500 font-medium mr-1">
                            Socials:
                        </span>

                        {socialChannels.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <a
                                    key={item.name}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.name}
                                    className="group relative p-2.5 rounded-xl bg-[#121520] hover:bg-violet-950/40 border border-violet-500/20 hover:border-cyan-400/50 text-zinc-400 hover:text-cyan-300 transition-all hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                                >
                                    <IconComponent className="w-4 h-4" />
                                    <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#121520] text-[10px] font-mono text-cyan-300 rounded border border-violet-500/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md z-30">
                                        {item.name}
                                    </span>
                                </a>
                            );
                        })}
                    </div>

                    {/* Whimsical Interactive Widget: Coffee Fuel Counter */}
                    <button
                        onClick={handleFeedCoffee}
                        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121520] border border-cyan-400/30 hover:border-cyan-400 text-xs font-mono text-cyan-300 hover:bg-cyan-500/10 transition-all cursor-pointer shadow-[0_0_15px_rgba(34,211,238,0.15)] ${
                            isBumping ? 'scale-110 ring-2 ring-cyan-400' : ''
                        }`}
                        title="Click to boost energy!"
                    >
                        <Coffee className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
                        <span>Fueled by <strong>{coffeeCount}</strong> ☕</span>
                        <span className="text-[10px] text-zinc-500">(click me)</span>
                    </button>
                </div>
            </div>

            {/* Right Column: Circular Profile Photo with Interactive Orbit Ring */}
            <div className="relative shrink-0 flex items-center justify-center my-6 lg:my-0">
                {/* Outer Spinning Orbit Ring 1 (Violet Gradient Dashed Ring) */}
                <div className="absolute w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96 rounded-full border border-dashed border-violet-500/40 animate-spin-slow pointer-events-none" />

                {/* Orbit Ring 2 (Counter-spinning Cyan Accents) */}
                <div className="absolute w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] rounded-full border border-cyan-400/20 animate-spin-reverse-slow pointer-events-none" />

                {/* Subtle Ambient Radial Aura */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-600/30 via-indigo-500/20 to-cyan-400/30 blur-2xl opacity-70" />

                {/* Perfectly Circular Avatar */}
                <div className="relative rounded-full aspect-square w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 overflow-hidden ring-4 ring-violet-500/40 shadow-[0_0_50px_rgba(139,92,246,0.35)] bg-[#121520] p-1.5 z-10 group">
                    <div className="w-full h-full rounded-full overflow-hidden relative bg-[#0B0D13] flex items-center justify-center">
                        {!imageError ? (
                            <img
                                src="/images/Profile.png.JPG"
                                alt="Theophilus Taiwo Ajibade - Frontend Developer"
                                onError={() => setImageError(true)}
                                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                            />
                        ) : (
                            <div className="flex flex-col items-center justify-center text-center p-6 space-y-2">
                                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-cyan-300 font-mono tracking-wider">
                                    TA
                                </span>
                                <span className="text-xs text-zinc-400 font-mono">
                                    Frontend Dev
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Floating Whimsical Micro-Badge 1: Top-Right */}
                <div className="absolute -top-3 -right-2 sm:right-2 z-20 px-3.5 py-1.5 rounded-full bg-[#121520]/90 backdrop-blur-md border border-violet-500/40 text-xs font-mono text-zinc-200 shadow-[0_0_20px_rgba(139,92,246,0.3)] animate-float flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                    <span>⚡ React & TypeScript</span>
                </div>

                {/* Floating Whimsical Micro-Badge 2: Bottom-Left */}
                <div className="absolute -bottom-3 -left-2 sm:left-2 z-20 px-3.5 py-1.5 rounded-full bg-[#121520]/90 backdrop-blur-md border border-cyan-400/40 text-xs font-mono text-zinc-200 shadow-[0_0_20px_rgba(34,211,238,0.25)] flex items-center gap-1.5">
                    <span>🎨 Pixel Perfectionist</span>
                </div>

                {/* Floating Status Dot / Chip: Bottom-Right */}
                <div className="absolute top-1/2 -left-6 lg:-left-10 -translate-y-1/2 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121520]/90 backdrop-blur-md border border-violet-500/30 text-[11px] font-mono text-zinc-300 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>🚀 Lagos / Remote</span>
                </div>
            </div>
        </section>
    );
};
