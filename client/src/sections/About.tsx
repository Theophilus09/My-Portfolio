// client/src/sections/About.tsx
import { SectionHeading } from '../components/SectionHeading';
import { Code2, Compass, Layers, Sparkles } from 'lucide-react';

export const About = () => {
    const highlights = [
        {
            icon: Code2,
            title: 'Modern Frontend Architecture',
            description:
                'Crafting component-driven UIs with React, TypeScript, and Tailwind CSS focused on clean state management and responsive structure.',
        },
        {
            icon: Layers,
            title: 'Full-Stack Awareness',
            description:
                'Designing secure RESTful endpoints with Node.js and Express, connecting databases, and handling client-server workflows end-to-end.',
        },
        {
            icon: Compass,
            title: 'First-Principles Mindset',
            description:
                'Applying analytical mechanical problem-solving to software challenges—focusing on performance, reliability, and modular code.',
        },
        {
            icon: Sparkles,
            title: 'Continuous Growth',
            description:
                'Actively learning modern tooling, contributing to open-source initiatives, and collaborating with developer teams.',
        },
    ];

    return (
        <section id="about" className="py-20 border-t border-zinc-800/60">
            <SectionHeading
                badge="About Me"
                title="Engineering Clean & Scalable Web Solutions"
                subtitle="A look into my background, approach to frontend engineering, and what drives my work."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Narrative / Story Column */}
                <div className="lg:col-span-7 space-y-5 text-zinc-300 text-base leading-relaxed">
                    <p>
                        I am a <strong className="text-white font-medium">Frontend Developer</strong> dedicated to building fast, responsive, and intuitive web applications. My path into development is rooted in a natural passion for how complex systems operate and how software bridges the gap between ideas and real-world utility.
                    </p>
                    <p>
                        With a background in engineering, I approach code through structured decomposition: breaking large, intricate requirements into clean, reusable components. Whether styling a responsive interface down to individual viewports or connecting backend APIs, I prioritize readability, accessibility, and measurable user experience.
                    </p>
                    <p>
                        Currently, I focus on the modern TypeScript and React ecosystem, building full-stack projects, and refining practical frontend patterns. When I am not debugging components or architecting layouts, I engage with community initiatives and collaborate with peer developers on practical software products.
                    </p>
                </div>

                {/* Highlights Grid */}
                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                    {highlights.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={idx}
                                className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-emerald-500/40 transition-all duration-200"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-semibold text-white text-sm sm:text-base">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed pl-1">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};