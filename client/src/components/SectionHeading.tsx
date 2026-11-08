// client/src/components/SectionHeading.tsx
interface SectionHeadingProps {
    badge: string;
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
}

export const SectionHeading = ({
    badge,
    title,
    subtitle,
    align = 'center',
}: SectionHeadingProps) => {
    return (
        <div
            className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto' : 'text-left'
                } max-w-3xl`}
        >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-3.5 text-xs font-mono font-medium tracking-wider uppercase text-cyan-400 bg-cyan-500/10 border border-cyan-400/30 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                {badge}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-zinc-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
};
