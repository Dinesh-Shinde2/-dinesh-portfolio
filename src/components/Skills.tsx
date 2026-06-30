import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Code, Database, Wrench, Sparkles } from 'lucide-react';

interface Skill {
  name: string;
  level: number; // percentage
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Testing & QA',
    icon: <ShieldCheck className="w-5 h-5 text-primary-500" />,
    skills: [
      { name: 'Manual Testing', level: 95 },
      { name: 'Automation Testing', level: 90 },
      { name: 'Playwright', level: 90 },
      { name: 'API Testing (Postman)', level: 85 },
      { name: 'Selenium WebDriver', level: 75 },
      { name: 'Regression & Smoke Testing', level: 95 },
      { name: 'STLC / SDLC Frameworks', level: 90 },
      { name: 'Agile & Scrum Methodologies', level: 85 },
    ]
  },
  {
    title: 'Programming Languages',
    icon: <Code className="w-5 h-5 text-secondary-500" />,
    skills: [
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'SQL', level: 80 },
      { name: 'HTML & CSS', level: 85 },
    ]
  },
  {
    title: 'Databases',
    icon: <Database className="w-5 h-5 text-accent-emerald" />,
    skills: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 70 },
    ]
  },
  {
    title: 'Tools & Utilities',
    icon: <Wrench className="w-5 h-5 text-accent-amber" />,
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Jira', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'pgAdmin', level: 80 },
      { name: 'JMeter', level: 70 },
    ]
  }
];

export const Skills = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  
  const tabs = ['All', 'Testing & QA', 'Programming Languages', 'Databases', 'Tools & Utilities'];

  const filteredCategories = activeTab === 'All' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.title === activeTab);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-primary-500 font-bold mb-2">My Toolkit</span>
          <h2 className="section-title">Technical Skills</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full mb-6" />
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer border ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-500 text-white border-transparent shadow-md'
                  : 'bg-white dark:bg-dark-card text-slate-600 dark:text-slate-400 border-slate-200/50 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {tab === 'All' ? 'Show All' : tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => (
              <motion.div
                layout
                key={category.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-2xl p-6 md:p-8 flex flex-col space-y-6 hover:border-primary-500/20 dark:hover:border-primary-500/10 transition-colors"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 pb-4 border-b border-slate-200/40 dark:border-slate-800/60">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center shadow-sm">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold font-display text-slate-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skill List */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-sm font-semibold">
                        <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                        <span className="text-xs text-primary-500 dark:text-primary-400">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar Container */}
                      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Quality Mindset Tip */}
        <div className="mt-12 flex items-center justify-center space-x-2 text-slate-500 dark:text-slate-400 text-sm italic">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Equipped for both shifting left (developer testing) and shifting right (monitoring and validation).</span>
        </div>
      </div>
    </section>
  );
};
