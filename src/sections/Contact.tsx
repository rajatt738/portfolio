import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import emailjs from '@emailjs/browser';
import SectionHeading from '@/components/SectionHeading';
import { contactInfo } from '@/data/portfolio';
import type { FormStatus } from '@/types';
import { cn } from '@/lib/utils';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const isEmailJsConfigured =
  !!SERVICE_ID && !!TEMPLATE_ID && !!PUBLIC_KEY &&
  !SERVICE_ID.includes('xxxxxxx') &&
  !TEMPLATE_ID.includes('xxxxxxx') &&
  !PUBLIC_KEY.includes('xxxxxxx');

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
}

function ContactInfoItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3 group">
      <div className="w-10 h-10 rounded-xl dark:bg-dark-600 bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-accent-500/20 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-xs dark:text-slate-500 text-slate-400 uppercase tracking-wider font-semibold mb-0.5">{label}</p>
        <p className="text-sm font-medium dark:text-slate-200 text-slate-800 group-hover:text-accent-400 transition-colors break-all">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<FormValues>({
    name: '', email: '', subject: '', message: '', honeypot: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const validate = () => {
    const e: Partial<Record<keyof FormValues, string>> = {};
    if (!values.name.trim())    e.name    = 'Name is required.';
    if (!values.email.trim())   e.email   = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = 'Enter a valid email address.';
    if (!values.subject.trim()) e.subject = 'Subject is required.';
    if (!values.message.trim()) e.message = 'Message is required.';
    else if (values.message.trim().length < 20) e.message = 'Message must be at least 20 characters.';
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name as keyof FormValues]) {
      setErrors((er) => ({ ...er, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (values.honeypot) return;

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    if (!isEmailJsConfigured) {
      setStatus('unconfigured');
      return;
    }

    setStatus('loading');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, { publicKey: PUBLIC_KEY });
      setStatus('success');
      setValues({ name: '', email: '', subject: '', message: '', honeypot: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding dark:bg-dark-800 bg-white">
      <div className="section-container">
        <SectionHeading
          label="Contact"
          title="Get In Touch"
          description="Have a project in mind or want to connect? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Let's talk</h3>
              <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">
                I'm currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hi — feel free to reach out.
              </p>
            </div>

            <div className="space-y-4">
              <ContactInfoItem icon={<Mail size={18} className="text-accent-400" />} label="Email" value={contactInfo.email} href={`mailto:${contactInfo.email}`} />
              <ContactInfoItem icon={<Phone size={18} className="text-emerald-400" />} label="Phone" value={contactInfo.phone} href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`} />
              <ContactInfoItem icon={<MapPin size={18} className="text-rose-400" />} label="Location" value={contactInfo.location} />
              <ContactInfoItem icon={<GithubIcon size={18} className="text-slate-400" />} label="GitHub" value="github.com/rajat738" href={contactInfo.github} />
              <ContactInfoItem icon={<LinkedinIcon size={18} className="text-blue-400" />} label="LinkedIn" value="linkedin.com/in/rajat-kasaudhan" href={contactInfo.linkedin} />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="card p-6 space-y-5">
              {/* Honeypot */}
              <input type="text" name="honeypot" value={values.honeypot} onChange={handleChange} style={{ display: 'none' }} aria-hidden="true" tabIndex={-1} autoComplete="off" />

              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium dark:text-slate-300 text-slate-700 mb-1.5">Name <span className="text-rose-400">*</span></label>
                <input id="contact-name" name="name" type="text" maxLength={100} value={values.name} onChange={handleChange} placeholder="Your full name" className={cn('input-field', errors.name && 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20')} aria-describedby={errors.name ? 'name-error' : undefined} />
                {errors.name && <p id="name-error" className="mt-1 text-xs text-rose-400">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium dark:text-slate-300 text-slate-700 mb-1.5">Email <span className="text-rose-400">*</span></label>
                <input id="contact-email" name="email" type="email" maxLength={200} value={values.email} onChange={handleChange} placeholder="you@example.com" className={cn('input-field', errors.email && 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20')} aria-describedby={errors.email ? 'email-error' : undefined} />
                {errors.email && <p id="email-error" className="mt-1 text-xs text-rose-400">{errors.email}</p>}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium dark:text-slate-300 text-slate-700 mb-1.5">Subject <span className="text-rose-400">*</span></label>
                <input id="contact-subject" name="subject" type="text" maxLength={150} value={values.subject} onChange={handleChange} placeholder="What's this about?" className={cn('input-field', errors.subject && 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20')} aria-describedby={errors.subject ? 'subject-error' : undefined} />
                {errors.subject && <p id="subject-error" className="mt-1 text-xs text-rose-400">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium dark:text-slate-300 text-slate-700 mb-1.5">Message <span className="text-rose-400">*</span></label>
                <textarea id="contact-message" name="message" rows={5} maxLength={2000} value={values.message} onChange={handleChange} placeholder="Tell me about your project or question..." className={cn('input-field resize-none', errors.message && 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20')} aria-describedby={errors.message ? 'message-error' : undefined} />
                <div className="flex justify-between items-center mt-1">
                  {errors.message ? <p id="message-error" className="text-xs text-rose-400">{errors.message}</p> : <span />}
                  <span className="text-xs dark:text-slate-500 text-slate-400">{values.message.length}/2000</span>
                </div>
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div className="flex items-start gap-2.5 p-3 rounded-xl dark:bg-emerald-500/10 bg-emerald-50 border dark:border-emerald-500/20 border-emerald-200">
                  <CheckCircle size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm dark:text-emerald-300 text-emerald-700">Message sent! I'll get back to you soon.</p>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-start gap-2.5 p-3 rounded-xl dark:bg-rose-500/10 bg-rose-50 border dark:border-rose-500/20 border-rose-200">
                  <AlertCircle size={18} className="text-rose-400 shrink-0 mt-0.5" />
                  <p className="text-sm dark:text-rose-300 text-rose-700">Something went wrong. <a href={`mailto:${contactInfo.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(values.message)}`} className="underline font-medium">Email me directly</a>.</p>
                </div>
              )}
              {status === 'unconfigured' && (
                <div className="flex items-start gap-2.5 p-3 rounded-xl dark:bg-amber-500/10 bg-amber-50 border dark:border-amber-500/20 border-amber-200">
                  <AlertCircle size={18} className="text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-sm dark:text-amber-300 text-amber-700">Email service not configured. <a href={`mailto:${contactInfo.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(values.message)}`} className="underline font-medium">Click here to email directly</a>.</p>
                </div>
              )}

              {/* Submit */}
              <button id="contact-submit" type="submit" disabled={status === 'loading'} className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                {status === 'loading' ? <><Loader2 size={17} className="animate-spin" />Sending…</> : <><Send size={17} />Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
