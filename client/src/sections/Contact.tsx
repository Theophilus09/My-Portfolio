// client/src/sections/Contact.tsx
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';
import { Mail, MapPin, Clock } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-20 border-t border-zinc-800/60">
            <SectionHeading
                badge="Get In Touch"
                title="Let's Discuss Opportunities"
                subtitle="Have a question, an open frontend role, or a project in mind? Reach out and I will respond as soon as possible."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Contact Information & Channels */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-6">
                        <h3 className="text-lg font-bold text-white tracking-tight">
                            Contact Details
                        </h3>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3 text-zinc-300">
                                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-zinc-500">Email Directly</p>
                                    <a
                                        href="mailto:ajibadetheophilus217@gmail.com"
                                        className="text-sm font-medium hover:text-emerald-400 transition-colors"
                                    >
                                        ajibadetheophilus217@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 text-zinc-300">
                                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-zinc-500">Location</p>
                                    <p className="text-sm font-medium">Lagos, Nigeria</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 text-zinc-300">
                                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                                    <Clock className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-zinc-500">Work Preference</p>
                                    <p className="text-sm font-medium">Available for Full-time & Remote Roles</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form Box */}
                <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};