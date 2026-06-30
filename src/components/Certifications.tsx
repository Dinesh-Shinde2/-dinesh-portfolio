import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ShieldCheck, Terminal, Layers } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
  credentialId?: string;
  skillsVerified: string[];
}

const certificationsData: Certification[] = [
  {
    title: 'Playwright Web Automation & End-to-End Testing',
    issuer: 'Automation Testing Academy',
    date: 'Dec 2025',
    icon: <Terminal className="w-5 h-5 text-primary-500" />,
    credentialId: 'CRED-PW-9031B',
    skillsVerified: ['Playwright', 'Page Object Model', 'E2E Testing', 'Cross-browser Testing']
  },
  {
    title: 'REST API Automation & Validation Masterclass',
    issuer: 'Postman Community & Academy',
    date: 'Oct 2025',
    icon: <Layers className="w-5 h-5 text-secondary-500" />,
    credentialId: 'CRED-API-8874C',
    skillsVerified: ['Postman', 'Newman CLI', 'API assertions', 'JSON Schema validation']
  },
  {
    title: 'SQL and Database Testing Specialist',
    issuer: 'Database Validation Institute',
    date: 'Jul 2025',
    icon: <ShieldCheck className="w-5 h-5 text-accent-emerald" />,
    credentialId: 'CRED-SQL-6612A',
    skillsVerified: ['PostgreSQL', 'MySQL', 'Data Integrity', 'Transactional CRUD Validation']
  },
  {
    title: 'Agile & Scrum QA Lifecycle Foundation',
    issuer: 'Scrum Alliance & QA Labs',
    date: 'Mar 2025',
    icon: <Award className="w-5 h-5 text-accent-amber" />,
    credentialId: 'CRED-AG-5092Z',
    skillsVerified: ['Jira Management', 'STLC / SDLC', 'Sprint cycles', 'Smoke/Regression testing']
  }
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-50/50 dark:bg-dark-bg/30">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-primary-500 font-bold mb-2">Qualifications</span>
          <h2 className="section-title">Certifications</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full" />
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 border border-slate-200/40 dark:border-slate-800/60 flex items-start space-x-4 hover:shadow-xl hover:border-primary-500/25 transition-all group"
            >
              {/* Icon Container */}
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 group-hover:bg-primary-500/10 transition-colors flex items-center justify-center shadow-sm shrink-0">
                {cert.icon}
              </div>

              {/* Text content */}
              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm md:text-base font-bold font-display text-slate-800 dark:text-white leading-snug">
                    {cert.title}
                  </h3>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 shrink-0 mt-0.5 uppercase">
                    {cert.date}
                  </span>
                </div>
                
                <h4 className="text-xs font-semibold text-primary-500">
                  {cert.issuer}
                </h4>

                {cert.credentialId && (
                  <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                    ID: {cert.credentialId}
                  </p>
                )}

                {/* Verified Skills */}
                <div className="flex flex-wrap gap-1 pt-2">
                  {cert.skillsVerified.map((skill) => (
                    <span
                      key={skill}
                      className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center space-x-1"
                    >
                      <CheckCircle className="w-2.5 h-2.5 text-accent-emerald mr-0.5 shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
