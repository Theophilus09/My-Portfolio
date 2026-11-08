// client/src/sections/Hero.tsx
import { useState } from 'react';
import { ArrowDown, Mail, FileDown, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export const Hero = () => {
    const [imageError, setImageError] = useState(false);

    return (
        <section
            id="home"
            className="relative pt-28 pb-20 md:pt-36 md:pb-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16"
        >
            {/* Ambient Lighting Gradients (Vercel / Linear inspired) */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute top-40 right-10 w-[350px] h-[250px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

            {/* Left Column: Recruiter Signal Hub & Value Proposition */}
            <div className="flex-1 text-center lg:text-left space-y-7">
                {/* Status Pill: Pulsing Live Indicator */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:border-emerald-500/50 transition-colors">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="font-mono tracking-tight font-semibold">Available for Full-time & Remote Roles</span>
                </div>

                {/* Primary Headline & Craftsmanship Pitch */}
                <div className="space-y-3">
                    <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-400 font-semibold flex items-center justify-center lg:justify-start gap-2">
                        <Terminal className="w-4 h-4 text-emerald-400" />
                        <span>Theophilus Taiwo Ajibade</span>
                    </h2>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                        Frontend & Full-Stack <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-white">
                            Software Craftsman.
                        </span>
                    </h1>
                </div>

                {/* Value Proposition Statement */}
                <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                    Specializing in building responsive, high-performance web applications and scalable UI systems. Driven by clean component architecture, first-principles problem solving, and modern <span className="text-zinc-200 font-medium">React, TypeScript, and Node.js</span> ecosystems.
                </p>

                {/* Quick CTAs */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1">
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.45)] active:scale-95 group cursor-pointer"
                    >
                        <span>View Projects</span>
                        <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    </a>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 hover:border-zinc-700 font-semibold text-sm transition-all active:scale-95 shadow-sm"
                    >
                        <Mail className="w-4 h-4 text-emerald-400" />
                        <span>Contact Me</span>
                    </a>

                    <a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/90 border border-zinc-800/80 hover:border-zinc-700 text-sm font-medium transition-all"
                        title="Download Resume"
                    >
                        <FileDown className="w-4 h-4 text-zinc-400" />
                        <span>Resume</span>
                    </a>
                </div>

                {/* Quick Social & Recruiter Links */}
                <div className="flex items-center justify-center lg:justify-start gap-4 pt-3 text-zinc-400">
                    <span className="text-xs uppercase tracking-wider font-mono text-zinc-500 font-medium">
                        Quick Links:
                    </span>

                    <a
                        href="https://github.com/Theophilus09"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub Profile"
                        className="group relative p-2 rounded-lg bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800/80 hover:border-zinc-700 text-zinc-400 hover:text-white transition-all hover:-translate-y-0.5"
                    >
                        <GithubIcon className="w-4 h-4" />
                        <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-zinc-900 text-[10px] font-mono text-zinc-300 rounded border border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
                            GitHub
                        </span>
                    </a>

                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn Profile"
                        className="group relative p-2 rounded-lg bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800/80 hover:border-zinc-700 text-zinc-400 hover:text-white transition-all hover:-translate-y-0.5"
                    >
                        <LinkedinIcon className="w-4 h-4" />
                        <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-zinc-900 text-[10px] font-mono text-zinc-300 rounded border border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
                            LinkedIn
                        </span>
                    </a>

                    <a
                        href="mailto:ajibadetheophilus217@gmail.com"
                        aria-label="Direct Email"
                        className="group relative p-2 rounded-lg bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800/80 hover:border-zinc-700 text-zinc-400 hover:text-white transition-all hover:-translate-y-0.5"
                    >
                        <Mail className="w-4 h-4" />
                        <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-zinc-900 text-[10px] font-mono text-zinc-300 rounded border border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
                            Email
                        </span>
                    </a>
                </div>
            </div>

            {/* Right Column: Hero Visual Card with Ambient Aura */}
            <div className="relative group shrink-0">
                {/* Glowing border ring */}
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-emerald-500/30 via-teal-500/20 to-zinc-700/20 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />

                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden bg-zinc-900/90 border border-zinc-800/90 shadow-2xl backdrop-blur-md flex items-center justify-center p-2">
                    <div className="w-full h-full rounded-xl overflow-hidden relative bg-zinc-950 flex items-center justify-center">
                        {!imageError ? (
                            <img
                                src="/images/Profile.png.JPG"
                                alt="Theophilus Taiwo Ajibade"
                                onError={() => setImageError(true)}
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            />
                        ) : (
                            <div className="flex flex-col items-center justify-center text-center p-6 space-y-2">
                                <span className="text-5xl font-black text-emerald-400 font-mono tracking-wider">
                                    TA
                                </span>
                                <span className="text-xs text-zinc-500 font-mono">
                                    Frontend Developer
                                </span>
                            </div>
                        )}

                        {/* Floating Micro-Badge */}
                        <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 rounded-lg bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-300">
                            <span className="flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                                React & TypeScript
                            </span>
                            <span className="text-emerald-400 font-semibold">100% Fluid</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
