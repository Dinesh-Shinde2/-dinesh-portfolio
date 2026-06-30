import { motion } from 'framer-motion';
import { BookOpen, MapPin, Target, Sparkles, Award } from 'lucide-react';

const personalDetails = [
  {
    icon: <BookOpen className="w-5 h-5 text-primary-500" />,
    label: 'Education',
    value: 'BCA Graduate, MCA Pursuing'
  },
  {
    icon: <MapPin className="w-5 h-5 text-secondary-500" />,
    label: 'Location',
    value: 'Surat, Gujarat, India'
  },
  {
    icon: <Target className="w-5 h-5 text-accent-emerald" />,
    label: 'Career Goal',
    value: 'QA & Test Automation Engineer'
  },
  {
    icon: <Award className="w-5 h-5 text-accent-amber" />,
    label: 'Focus Areas',
    value: 'Playwright, APIs, DB, CI/CD'
  }
];

const stats = [
  { label: 'Test Cases Scripted', value: '1,200+' },
  { label: 'Bugs Uncovered', value: '180+' },
  { label: 'Automation Coverage', value: '85%+' },
  { label: 'API Testing Assertions', value: '500+' }
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-dark-bg/30">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Section title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-primary-500 font-bold mb-2">Who I Am</span>
          <h2 className="section-title">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Detailed Narrative Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center space-x-2 text-slate-800 dark:text-white">
              <Sparkles className="w-5 h-5 text-primary-500" />
              <h3 className="text-xl font-bold font-display">Specializing in Software Quality Assurance</h3>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I am a results-driven QA Engineer with a background in Computer Applications (BCA) and currently expanding my technical knowledge through MCA. I possess a strong foundation in both <strong>Manual</strong> and <strong>Automation Testing</strong> methodologies. My current focus is building robust automation pipelines using <strong>Playwright</strong>, validating APIs via <strong>Postman</strong>, and performing deep database verifications.
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I view QA not just as finding defects, but as a critical mechanism to shape user experience and streamline release confidence. With deep knowledge of the Software Testing Life Cycle (STLC) and Agile principles, I design thorough test plans, automate repetitive workflows, and collaborate closely with developers to deliver production-ready software.
            </p>

            {/* Quick Details Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {personalDetails.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-xl bg-white dark:bg-dark-card border border-slate-200/40 dark:border-slate-800/60 shadow-sm"
                >
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center">
                    {detail.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {detail.label}
                    </h4>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                      {detail.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats Cards Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 text-center flex flex-col justify-center items-center hover:border-primary-500/30 transition-all duration-300 group"
              >
                <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-2 tracking-wide uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
            
            {/* QA mindset quote card */}
            <div className="col-span-2 p-5 rounded-2xl bg-gradient-to-r from-primary-600/10 to-secondary-600/10 dark:from-primary-950/20 dark:to-secondary-950/20 border border-primary-500/10 dark:border-primary-500/5 text-center mt-2">
              <p className="text-xs italic text-slate-500 dark:text-slate-400">
                "Quality is not an act, it is a habit. Fast execution, robust assertions, and stable pipelines are the benchmarks of modern QA."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
