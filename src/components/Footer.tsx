import React from 'react';
import { Mail, Heart } from 'lucide-react';

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

const socialLinks = [
  { icon: <Mail className="w-5 h-5" />, href: 'mailto:dinesh.shinde.qa@gmail.com', label: 'Email' },
  { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/dinesh-shinde-qa', label: 'LinkedIn' },
  { icon: <Github className="w-5 h-5" />, href: 'https://github.com/dineshshinde', label: 'GitHub' }
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elRect = el.getBoundingClientRect().top;
      window.scrollTo({
        top: elRect - bodyRect - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex flex-col items-center space-y-8">
        
        {/* Brand/Logo */}
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold font-display text-white">
            Dinesh <span className="text-primary-400 font-light">Shinde</span>
          </h3>
          <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">
            QA Engineer & Test Automation Specialist
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold">
          {['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'github', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => handleNavClick(section)}
              className="hover:text-white transition-colors capitalize cursor-pointer"
            >
              {section}
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-primary-600 hover:text-white transition-all text-slate-400 shadow"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Bottom notes */}
        <div className="w-full max-w-4xl pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Dinesh Shinde. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Built with React + Vite + Tailwind</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 shrink-0" />
          </p>
        </div>

      </div>
    </footer>
  );
};
