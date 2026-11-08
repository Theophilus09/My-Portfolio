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
                } max-w-2xl`}
        >
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                {badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
                {title}
            </h2>
            {subtitle && (
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
};