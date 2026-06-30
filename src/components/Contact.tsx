import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid';
    }

    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error as typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      
      // Trigger canvas-confetti blast
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b']
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/50 dark:bg-dark-bg/30">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-primary-500 font-bold mb-2">Get in Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* Contact details left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-xl font-bold font-display text-slate-800 dark:text-white mb-2">
              Let's Discuss Quality & Automation
            </h3>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              I am open to QA Engineering, Test Automation, and general software development roles. Reach out via email, social links, or submit the contact form, and I will get back to you within 24 hours.
            </p>

            {/* Info Cards */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/40 dark:border-slate-805 dark:border-slate-800/60 shadow-sm">
                <div className="p-3 rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider block">
                    Email
                  </span>
                  <a
                    href="mailto:dinesh.shinde.qa@gmail.com"
                    className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-primary-500 transition-colors"
                  >
                    dinesh.shinde.qa@gmail.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/40 dark:border-slate-805 dark:border-slate-800/60 shadow-sm">
                <div className="p-3 rounded-xl bg-secondary-500/10 text-secondary-600 dark:text-secondary-400">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider block">
                    LinkedIn
                  </span>
                  <a
                    href="https://linkedin.com/in/dinesh-shinde-qa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-secondary-500 transition-colors"
                  >
                    linkedin.com/in/dinesh-shinde-qa
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/40 dark:border-slate-805 dark:border-slate-800/60 shadow-sm">
                <div className="p-3 rounded-xl bg-slate-900 text-white dark:bg-slate-800 dark:text-slate-300">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider block">
                    GitHub
                  </span>
                  <a
                    href="https://github.com/dineshshinde"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-slate-400 transition-colors"
                  >
                    github.com/dineshshinde
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/40 dark:border-slate-850 dark:border-slate-800/60 shadow-sm">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider block">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Surat, Gujarat, India
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 w-full"
          >
            <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-200/50 dark:border-slate-800/80">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="inline-flex p-3 bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-500 rounded-full border border-emerald-500/20 mb-2">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm text-slate-650 dark:text-slate-450 max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out, Dinesh Shinde will get back to you shortly. A confetti blast has been fired to celebrate!
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-sm font-semibold text-primary-500 hover:text-primary-600 hover:underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-5">
                    {/* Name & Email Group */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border text-sm focus:outline-none transition-all ${
                            errors.name
                              ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                              : 'border-slate-200 dark:border-slate-800 focus:border-primary-500 focus:ring-1 focus:ring-primary-500'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-xs text-rose-500 font-semibold flex items-center space-x-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border text-sm focus:outline-none transition-all ${
                            errors.email
                              ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                              : 'border-slate-200 dark:border-slate-800 focus:border-primary-500 focus:ring-1 focus:ring-primary-500'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-rose-500 font-semibold flex items-center space-x-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project discussion, Job opening..."
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border text-sm focus:outline-none transition-all ${
                          errors.subject
                            ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-slate-200 dark:border-slate-800 focus:border-primary-500 focus:ring-1 focus:ring-primary-500'
                        }`}
                      />
                      {errors.subject && (
                        <p className="text-xs text-rose-500 font-semibold flex items-center space-x-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.subject}</span>
                        </p>
                      )}
                    </div>

                    {/* Message input */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border text-sm focus:outline-none transition-all resize-none ${
                          errors.message
                            ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-slate-200 dark:border-slate-800 focus:border-primary-500 focus:ring-1 focus:ring-primary-500'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-rose-500 font-semibold flex items-center space-x-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-gradient cursor-pointer flex items-center justify-center space-x-2 py-3.5 disabled:opacity-75 disabled:pointer-events-none mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          <span>Validating Credentials...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
