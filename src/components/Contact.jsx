import React, { useState } from 'react';
import {
  Mail, Linkedin, Github, Copy, Check, ExternalLink, Send,
  LoaderCircle, ShieldCheck, AlertCircle, CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

export default function Contact({ onTriggerToast }) {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', website: '' });

  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      onTriggerToast?.('Email address copied.');
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      onTriggerToast?.('Please copy the email address manually.');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    // Honeypot: silently ignore automated submissions.
    if (form.website) {
      setStatus('success');
      return;
    }
    if (!FORMSPREE_ENDPOINT) {
      setStatus('error');
      setError('The contact form is not configured yet. Please use the email link while the owner completes the Formspree setup.');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          _replyto: form.email.trim(),
          _subject: `Portfolio enquiry: ${form.subject.trim()}`
        })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        const detail = result?.errors?.map((item) => item.message).filter(Boolean).join(' ');
        throw new Error(detail || 'Your message could not be sent. Please try again.');
      }
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '', website: '' });
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong. Please try again or email directly.');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="section-eyebrow inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono">
            <Mail className="w-3.5 h-3.5" /><span>LET'S START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight">
            Have an opportunity? <span className="text-electric-cyan">Let's connect.</span>
          </h2>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
            For AI/ML internships, collaborations, or project discussions, send a message and I'll get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start max-w-6xl mx-auto">
          <aside className="lg:col-span-5 space-y-4">
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div className="w-11 h-11 rounded-xl bg-electric-cyan/10 border border-electric-cyan/25 flex items-center justify-center text-electric-cyan">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-brand-muted mb-1">EMAIL ADDRESS</p>
                <a className="font-semibold break-all hover:text-electric-cyan transition-colors" href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={handleCopyEmail} className="secondary-button flex-1">
                  {copied ? <Check size={15} /> : <Copy size={15} />}{copied ? 'Copied' : 'Copy email'}
                </button>
                <a className="primary-button flex-1" href={`mailto:${personalInfo.email}`}><Send size={15} /> Email me</a>
              </div>
            </div>

            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="glass-card rounded-2xl p-5 flex items-center justify-between group hover:border-electric-purple/50 transition-colors">
              <span className="flex items-center gap-3"><Linkedin className="w-5 h-5 text-electric-purple" /><span><strong className="block text-sm">LinkedIn</strong><small className="text-brand-muted">Connect professionally</small></span></span>
              <ExternalLink size={16} className="text-brand-muted group-hover:text-electric-purple" />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="glass-card rounded-2xl p-5 flex items-center justify-between group hover:border-electric-cyan/50 transition-colors">
              <span className="flex items-center gap-3"><Github className="w-5 h-5 text-electric-cyan" /><span><strong className="block text-sm">GitHub</strong><small className="text-brand-muted">Explore my code</small></span></span>
              <ExternalLink size={16} className="text-brand-muted group-hover:text-electric-cyan" />
            </a>
            <p className="text-xs text-brand-muted flex items-start gap-2 px-1"><ShieldCheck size={15} className="text-emerald-400 shrink-0 mt-0.5" /> Your details are used only to respond to your enquiry.</p>
          </aside>

          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3 border-b border-navy-border pb-4 mb-6">
              <div><p className="font-semibold">Send a message</p><p className="text-xs text-brand-muted mt-1">Fields marked * are required.</p></div>
              <span className="text-xs text-brand-muted hidden sm:inline">Typically replies within 1–2 days</span>
            </div>

            {status === 'success' ? (
              <div role="status" className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
                <CheckCircle2 className="w-9 h-9 text-emerald-400 mx-auto mb-3" />
                <h3 className="font-semibold text-lg">Message sent successfully</h3>
                <p className="text-sm text-brand-muted mt-2">Thank you for reaching out. Your message has been submitted.</p>
                <button type="button" className="secondary-button mx-auto mt-5" onClick={() => setStatus('idle')}>Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="contact-website">Leave this field empty</label>
                  <input id="contact-website" name="website" tabIndex="-1" autoComplete="off" value={form.website} onChange={update} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="form-label">Full name *
                    <input required minLength="2" maxLength="100" name="name" value={form.name} onChange={update} autoComplete="name" placeholder="Your name" className="form-input" />
                  </label>
                  <label className="form-label">Email address *
                    <input required type="email" maxLength="160" name="email" value={form.email} onChange={update} autoComplete="email" placeholder="you@example.com" className="form-input" />
                  </label>
                </div>
                <label className="form-label">Subject *
                  <input required minLength="3" maxLength="140" name="subject" value={form.subject} onChange={update} placeholder="Internship opportunity / Collaboration" className="form-input" />
                </label>
                <label className="form-label">Message *
                  <textarea required minLength="10" maxLength="5000" rows="6" name="message" value={form.message} onChange={update} placeholder="Tell me a little about your opportunity or project..." className="form-input resize-y" />
                </label>

                {status === 'error' && <div role="alert" className="rounded-lg p-3 bg-red-500/10 border border-red-500/30 text-red-300 text-sm flex gap-2"><AlertCircle size={17} className="shrink-0 mt-0.5" />{error}</div>}

                <button type="submit" disabled={status === 'sending'} className="primary-button w-full sm:w-auto min-w-44 justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === 'sending' ? <><LoaderCircle size={17} className="animate-spin" /> Sending...</> : <><Send size={16} /> Send message</>}
                </button>
                {!FORMSPREE_ENDPOINT && <p className="text-xs text-amber-300/90">Email delivery setup required: add your Formspree endpoint as VITE_FORMSPREE_ENDPOINT in the project environment.</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
