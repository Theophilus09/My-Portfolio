// client/src/components/ContactForm.tsx
import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';

interface FormState {
    name: string;
    email: string;
    subject: string;
    message: string;
    honeypot: string; // Anti-bot trap: hidden from humans, bots fill it out
}

export const ContactForm = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '',
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Bot detection check
        if (formData.honeypot) {
            setStatus('success'); // Silently drop spam without error
            return;
        }

        setStatus('loading');
        setErrorMessage('');

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/contact';

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong. Please try again later.');
            }

            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
        } catch (err) {
            setStatus('error');
            setErrorMessage(
                err instanceof Error ? err.message : 'Unable to connect to server. Please try again.'
            );
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot field (hidden offscreen and aria-hidden) */}
            <div className="hidden" aria-hidden="true">
                <label htmlFor="hp_field">Do not fill this out</label>
                <input
                    id="hp_field"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Input */}
                <div>
                    <label htmlFor="name" className="block text-xs font-mono text-zinc-400 mb-1.5 font-medium">
                        Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Johnson"
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0D13]/80 border border-violet-500/20 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none text-white placeholder-zinc-500 text-sm transition-all shadow-inner"
                    />
                </div>

                {/* Email Input */}
                <div>
                    <label htmlFor="email" className="block text-xs font-mono text-zinc-400 mb-1.5 font-medium">
                        Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0D13]/80 border border-violet-500/20 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none text-white placeholder-zinc-500 text-sm transition-all shadow-inner"
                    />
                </div>
            </div>

            {/* Subject Input */}
            <div>
                <label htmlFor="subject" className="block text-xs font-mono text-zinc-400 mb-1.5 font-medium">
                    Subject <span className="text-cyan-400">*</span>
                </label>
                <input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Frontend Developer Role / Web App Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0D13]/80 border border-violet-500/20 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none text-white placeholder-zinc-500 text-sm transition-all shadow-inner"
                />
            </div>

            {/* Message Textarea */}
            <div>
                <label htmlFor="message" className="block text-xs font-mono text-zinc-400 mb-1.5 font-medium">
                    Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your team, tech stack, or frontend goals..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0D13]/80 border border-violet-500/20 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none text-white placeholder-zinc-500 text-sm transition-all resize-none shadow-inner"
                />
            </div>

            {/* Feedback Messages */}
            {status === 'success' && (
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-start gap-3 text-cyan-300 text-sm animate-in fade-in duration-300">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-cyan-400" />
                    <div>
                        <strong className="block font-semibold">Message delivered successfully!</strong>
                        <span className="text-cyan-200/80 text-xs mt-0.5">
                            Thank you for reaching out. Your transmission was received and routed to my inbox via Resend. I will respond promptly.
                        </span>
                    </div>
                </div>
            )}

            {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-400 text-sm animate-in fade-in duration-300">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                        <strong className="block font-semibold">Submission failed</strong>
                        <span className="text-red-300/80 text-xs mt-0.5">{errorMessage}</span>
                    </div>
                </div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 disabled:opacity-50 text-white font-bold text-sm transition-all shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_35px_rgba(34,211,238,0.4)] active:scale-95 cursor-pointer disabled:cursor-not-allowed"
            >
                {status === 'loading' ? (
                    <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Dispatching message to server...</span>
                    </>
                ) : (
                    <>
                        <Sparkles className="w-4 h-4 text-cyan-200" />
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                    </>
                )}
            </button>
        </form>
    );
};
