// client/src/sections/Hero.tsx
import { useState } from 'react';
import { ArrowRight, Mail, FileDown } from 'lucide-react';

export const Hero = () => {
    const [imageError, setImageError] = useState(false);

    return (
        <section
            id="home"
            className="relative pt-24 pb-20 md:pt-32 md:pb-28 flex flex-col-reverse md:flex-row items-center justify-between gap-12"
        >
            {/* Background radial gradient highlight */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Left Column: Intro Copy & CTAs */}
            <div className="flex-1 text-center md:text-left space-y-6">
                {/* Availability Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Available for Frontend & Full-Stack Opportunities
                </div>

                {/* Heading */}
                <div className="space-y-2">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                        Hi, I'm <span className="text-emerald-400">Theophilus Taiwo Ajibade</span>
                    </h1>
                    <p className="text-xl sm:text-2xl font-semibold text-zinc-300">
                        Frontend Developer
                    </p>
                </div>

                {/* Short Statement */}
                <p className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed">
                    I build fast, responsive, and accessible web applications using modern JavaScript frameworks.
                    Driven by clean architecture, intuitive UI design, and turning complex logic into seamless digital experiences.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-semibold text-sm transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
                    >
                        View My Projects
                        <ArrowRight className="w-4 h-4" />
                    </a>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 font-semibold text-sm transition-all active:scale-95"
                    >
                        <Mail className="w-4 h-4 text-emerald-400" />
                        Contact Me
                    </a>

                    <a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 border border-transparent hover:border-zinc-800 text-sm font-medium transition-all"
                        title="Download Résumé"
                    >
                        <FileDown className="w-4 h-4" />
                        <span>Résumé</span>
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center md:justify-start gap-5 pt-3 text-zinc-400">
                    <span className="text-xs uppercase tracking-wider font-mono text-zinc-500">Connect:</span>

                    {/* GitHub SVG */}
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub Profile"
                        className="hover:text-emerald-400 transition-colors p-1"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                    </a>

                    {/* LinkedIn SVG */}
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn Profile"
                        className="hover:text-emerald-400 transition-colors p-1"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Right Column: Profile Picture Card */}
            <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-700 opacity-25 blur-lg group-hover:opacity-40 transition duration-500" />

                <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden bg-zinc-900 border-2 border-zinc-800 shadow-2xl flex items-center justify-center">
                    {!imageError ? (
                        <img
                            src="/images/Profile.png.JPG"
                            alt="Theophilus Taiwo Ajibade"
                            onError={() => setImageError(true)}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center text-center p-6 space-y-2">
                            <span className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono tracking-wider">
                                TA
                            </span>
                            <span className="text-xs text-zinc-500 font-mono">
                                Frontend Dev
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};