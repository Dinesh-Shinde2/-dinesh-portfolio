import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

interface TimelineItem {
  type: 'work' | 'education';
  role: string;
  organization: string;
  duration: string;
  description: string[];
}

const timelineData: TimelineItem[] = [
  {
    type: 'education',
    role: 'Master of Computer Applications (MCA)',
    organization: 'Gujarat Technological University (GTU) Affiliated Institute',
    duration: '2024 - Present',
    description: [
      'Focusing on Advanced Software Engineering, Cloud Architectures, and Database Systems.',
      'Integrating modern software paradigms into QA pipelines and automation setups.',
    ]
  },
  {
    type: 'work',
    role: 'QA Engineer / Automation Tester',
    organization: 'Software Testing & Automation Projects',
    duration: '2024 - Present',
    description: [
      'Functional Testing: Built complete test plans, executed regression, smoke, and system testing for multi-page web applications.',
      'API Validation: Automated endpoint assertions, schema checks, and state validations using Postman and Javascript scripts.',
      'Playwright Automation: Created a cross-browser End-to-End automation framework using TypeScript and Page Object Model (POM).',
      'Database Testing: Scripted transactional checks and CRUD validation rules in PostgreSQL and MySQL via pgAdmin.',
      'Bug Reporting & Lifecycle: Drafted high-quality issue reports in Jira, providing screen captures, network traces, and stack logs.',
    ]
  },
  {
    type: 'education',
    role: 'Bachelor of Computer Applications (BCA)',
    organization: 'Veer Narmad South Gujarat University (VNSGU)',
    duration: '2021 - 2024',
    description: [
      'Graduated with a solid foundation in programming, database structures, web design, and systems analysis.',
      'Developed academic projects using PHP, MySQL, HTML, and CSS, incorporating standard CRUD operations.',
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50/50 dark:bg-dark-bg/30">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-primary-500 font-bold mb-2">My Journey</span>
          <h2 className="section-title">Experience & Education</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line (desktop only) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 -translate-x-[1px]" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-stretch ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge/Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-[18px] md:-translate-x-1/2 z-10 flex items-center justify-center">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shadow border ${
                      item.type === 'work'
                        ? 'bg-primary-600 border-primary-500 text-white'
                        : 'bg-secondary-600 border-secondary-500 text-white'
                    }`}>
                      {item.type === 'work' ? (
                        <Briefcase className="w-4 h-4" />
                      ) : (
                        <GraduationCap className="w-4 h-4" />
                      )}
                    </div>
                  </div>

                  {/* Card Section */}
                  <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${
                    isEven ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="glass-card rounded-2xl p-6 border border-slate-200/50 dark:border-slate-800/80 hover:shadow-2xl transition-all"
                    >
                      {/* Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center space-x-1">
                          <Calendar className="w-3.5 h-3.5 text-primary-500" />
                          <span>{item.duration}</span>
                        </span>
                        <span className={`text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded ${
                          item.type === 'work'
                            ? 'text-primary-600 bg-primary-500/10'
                            : 'text-secondary-600 bg-secondary-500/10'
                        }`}>
                          {item.type}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                        {item.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-primary-500 mt-1 mb-4">
                        {item.organization}
                      </h4>

                      {/* Bullet points */}
                      <ul className="space-y-2.5">
                        {item.description.map((point, pIndex) => (
                          <li key={pIndex} className="text-xs md:text-sm text-slate-600 dark:text-slate-400 flex items-start space-x-2">
                            <ArrowRight className="w-4 h-4 text-secondary-500 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                  
                  {/* Empty Spacer Column for layout alignment */}
                  <div className="hidden md:block w-[10%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
