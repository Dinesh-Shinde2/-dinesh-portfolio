import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter, Code, Info, CheckCircle2, Server, Eye, X } from 'lucide-react';

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface Project {
  id: number;
  title: string;
  category: 'automation' | 'development';
  shortDesc: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  keyFeatures: string[];
  metrics?: string;
  previewColor: string; // Gradient color for CSS preview
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'QA Automation Framework using Playwright',
    category: 'automation',
    shortDesc: 'A complete End-to-End automation framework featuring cross-browser execution and detailed HTML reporting.',
    description: 'Designed a highly maintainable, scalable testing framework utilizing the Page Object Model (POM) and Playwright. The framework is geared for continuous regression testing and supports multi-device emulation, visual comparisons, and seamless CI/CD reporting hooks.',
    tags: ['Playwright', 'TypeScript', 'POM', 'HTML Reports', 'GitHub Actions'],
    github: 'https://github.com/dineshshinde/playwright-qa-framework',
    keyFeatures: [
      'Page Object Model (POM) pattern for high element locator maintainability.',
      'Parallelized cross-browser test suites (Chromium, Firefox, WebKit).',
      'Automated visual comparison tests and screenshot/video captures on failure.',
      'Custom HTML reports with embedded console traces and execution steps.',
      'Integration with GitHub Actions for automated regression runs on push.'
    ],
    metrics: '99.2% test stability | 60% execution speed reduction',
    previewColor: 'from-violet-600 to-indigo-600'
  },
  {
    id: 2,
    title: 'API Testing Framework',
    category: 'automation',
    shortDesc: 'Robust API validation framework using Postman Collections, JavaScript scripts, and Newman integrations.',
    description: 'Built a specialized REST API validation suite verifying schema compliance, response latency, and database persistence. Features automated test execution hooks, global environment setups, and security checks.',
    tags: ['Postman', 'JavaScript', 'Newman', 'API Testing', 'JSON Schema'],
    github: 'https://github.com/dineshshinde/api-validation-suite',
    keyFeatures: [
      'Pre-request and test scripts written in JavaScript for granular responses verification.',
      'JSON Schema validations checking schema consistency across 25+ endpoints.',
      'Flexible environment switching (Local, Staging, Production).',
      'Newman CLI integrations for headless API test execution in builds.',
      'Security payload check cases validating authentication token expires.'
    ],
    metrics: '25+ endpoints validated | 0% regression rate',
    previewColor: 'from-cyan-600 to-teal-600'
  },
  {
    id: 3,
    title: 'Blood Donation Management System',
    category: 'development',
    shortDesc: 'A PHP and MySQL CRUD web application to connect local voluntary blood donors with hospitals.',
    description: 'Developed an administrative portal and donor registration portal to optimize critical medical availability. Features responsive search lists, account security, and real-time stock logs.',
    tags: ['PHP', 'MySQL', 'HTML/CSS', 'Bootstrap', 'CRUD Operations'],
    github: 'https://github.com/dineshshinde/blood-donation-portal',
    keyFeatures: [
      'Secure registration and session control for donors and hospital staff.',
      'Granular database structure with optimized foreign keys and indexes.',
      'Advanced search filters allowing users to locate donors by blood group and city.',
      'Stock management module verifying blood unit expirations.',
      'Detailed log audit trails tracking hospital request completions.'
    ],
    metrics: '500+ simulated users supported | Secure DB queries',
    previewColor: 'from-emerald-600 to-teal-600'
  },
  {
    id: 4,
    title: 'Career Catalyst Institute Website',
    category: 'development',
    shortDesc: 'Modern responsive portal for student enrollments, course reviews, and career counseling.',
    description: 'Designed a React application integrated with a Python/PostgreSQL database to manage student curriculums, counselor calendars, and reviews.',
    tags: ['React', 'Python', 'PostgreSQL', 'Tailwind CSS', 'Responsive Design'],
    github: 'https://github.com/dineshshinde/career-catalyst',
    live: 'https://career-catalyst-demo.vercel.app',
    keyFeatures: [
      'Responsive design featuring custom mobile navigation and dashboard.',
      'State-managed course catalog filtration using context wrappers.',
      'Interactive student onboarding and course purchase workflows.',
      'Admin view verifying class schedules and pending counselor reviews.',
      'Optimized backend routes checking authorization payloads.'
    ],
    metrics: 'Perfect 100/100 Lighthouse performance | 100% responsive',
    previewColor: 'from-rose-600 to-orange-600'
  }
];

export const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'automation' | 'development'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-primary-500 font-bold mb-2">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full mb-6" />
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center items-center space-x-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center space-x-1.5 cursor-pointer border ${
              filter === 'all'
                ? 'bg-gradient-to-r from-primary-600 to-secondary-500 text-white border-transparent shadow'
                : 'bg-white dark:bg-dark-card text-slate-600 dark:text-slate-400 border-slate-200/50 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <Filter className="w-4 h-4" />
            <span>All Projects</span>
          </button>
          <button
            onClick={() => setFilter('automation')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center space-x-1.5 cursor-pointer border ${
              filter === 'automation'
                ? 'bg-gradient-to-r from-primary-600 to-secondary-500 text-white border-transparent shadow'
                : 'bg-white dark:bg-dark-card text-slate-600 dark:text-slate-400 border-slate-200/50 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <Code className="w-4 h-4" />
            <span>QA Automation</span>
          </button>
          <button
            onClick={() => setFilter('development')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center space-x-1.5 cursor-pointer border ${
              filter === 'development'
                ? 'bg-gradient-to-r from-primary-600 to-secondary-500 text-white border-transparent shadow'
                : 'bg-white dark:bg-dark-card text-slate-600 dark:text-slate-400 border-slate-200/50 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <Server className="w-4 h-4" />
            <span>Web Development</span>
          </button>
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-slate-200/40 dark:border-slate-800/60"
              >
                {/* Visual Header Placeholder */}
                <div className={`h-48 bg-gradient-to-br ${project.previewColor} relative flex items-center justify-center p-6 text-white overflow-hidden`}>
                  {/* Decorative mesh background */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent mix-blend-overlay" />
                  
                  {/* Interactive coding pattern */}
                  <div className="font-mono text-[10px] opacity-25 leading-relaxed absolute top-2 left-2 pointer-events-none">
                    {project.category === 'automation' ? (
                      <code>
                        {`describe('Test Suite', () => {\n  test('should pass', async ({ page }) => {\n    await page.goto('/');\n    await expect(page).toHaveTitle(/Dinesh/);\n  });\n});`}
                      </code>
                    ) : (
                      <code>
                        {`const App = () => {\n  return (\n    <div className="portfolio">\n      <h1>Dinesh Shinde</h1>\n    </div>\n  );\n};`}
                      </code>
                    )}
                  </div>

                  <h3 className="text-xl font-bold font-display text-center relative z-10 px-4 filter drop-shadow">
                    {project.title}
                  </h3>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1 space-y-4">
                  <p className="text-sm text-slate-600 dark:text-slate-400 flex-1 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-850 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-250 dark:border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics if present */}
                  {project.metrics && (
                    <div className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 inline-flex items-center space-x-1.5 self-start border border-emerald-500/15">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{project.metrics}</span>
                    </div>
                  )}

                  {/* Footer Actions */}
                  <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="p-1.5 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center space-x-1 text-xs cursor-pointer border border-slate-200/40 dark:border-slate-750"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Details</span>
                      </button>
                      
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded bg-primary-600 hover:bg-primary-700 text-white flex items-center space-x-1 text-xs border border-primary-500/10"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="relative bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl z-10 p-6 md:p-8 flex flex-col space-y-6"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-250 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 cursor-pointer border border-slate-200/50 dark:border-slate-700/50"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Banner */}
                <div className={`h-24 md:h-32 rounded-xl bg-gradient-to-r ${selectedProject.previewColor} flex items-center justify-center text-white text-center`}>
                  <h3 className="text-xl md:text-2xl font-bold font-display px-6">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-extrabold text-slate-400 dark:text-slate-500">
                      Project Description
                    </h4>
                    <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 mt-1.5 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Highlights/Key Features */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-extrabold text-slate-400 dark:text-slate-500 mb-2">
                      Key Highlights & Accomplishments
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.keyFeatures.map((feat, idx) => (
                        <li key={idx} className="text-xs md:text-sm text-slate-600 dark:text-slate-400 flex items-start space-x-2">
                          <span className="text-emerald-500 font-extrabold shrink-0 mt-0.5">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Details tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-250 dark:border-slate-750"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics if present */}
                  {selectedProject.metrics && (
                    <div className="p-3 bg-emerald-500/10 dark:bg-emerald-500/20 border-l-4 border-emerald-500 rounded-r-lg">
                      <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                        Performance Metrics: {selectedProject.metrics}
                      </span>
                    </div>
                  )}
                </div>

                {/* Footer links */}
                <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center justify-end space-x-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-950 dark:bg-slate-700 dark:hover:bg-slate-600 text-xs font-semibold"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Repository</span>
                  </a>
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 text-xs font-semibold"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Site</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
