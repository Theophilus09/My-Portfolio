// client/src/components/ContactForm.tsx
import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

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
            // In Phase 4, our Express backend will receive this at http://localhost:5000/api/contact
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
                    <label htmlFor="name" className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Your Name *
                    </label>
                    <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Johnson"
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                </div>

                {/* Email Input */}
                <div>
                    <label htmlFor="email" className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Your Email *
                    </label>
                    <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                </div>
            </div>

            {/* Subject Input */}
            <div>
                <label htmlFor="subject" className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Subject *
                </label>
                <input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Frontend Developer Role / Project Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                />
            </div>

            {/* Message Textarea */}
            <div>
                <label htmlFor="message" className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Message *
                </label>
                <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the role, project, or opportunity..."
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                />
            </div>

            {/* Feedback Messages */}
            {status === 'success' && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2.5 text-emerald-400 text-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Thank you! Your message has been sent successfully. I'll get back to you shortly.</span>
                </div>
            )}

            {status === 'error' && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2.5 text-red-400 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{errorMessage}</span>
                </div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-zinc-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 active:scale-95 cursor-pointer disabled:cursor-not-allowed"
            >
                {status === 'loading' ? (
                    <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                    </>
                ) : (
                    <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                    </>
                )}
            </button>
        </form>
    );
};