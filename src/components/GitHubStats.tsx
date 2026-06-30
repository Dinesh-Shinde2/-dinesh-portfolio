import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Star, Code2, Flame, GitCommit, GitFork } from 'lucide-react';

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Generates a mock grid of contributions for the past 24 weeks (for screen spacing)
const generateMockContributions = () => {
  const intensities = [0, 0, 0, 1, 2, 0, 1, 3, 2, 0, 4, 1, 2, 0, 3, 0, 0, 1, 2, 3, 1, 0, 2, 4];
  const grid = [];
  
  // 7 days a week, 24 columns (weeks)
  for (let day = 0; day < 7; day++) {
    const row = [];
    for (let col = 0; col < 32; col++) {
      // Create pseudorandom seed
      const valIndex = (day * 3 + col * 7) % intensities.length;
      row.push(intensities[valIndex]);
    }
    grid.push(row);
  }
  return grid;
};

const contributionGrid = generateMockContributions();

const getIntensityClass = (level: number) => {
  switch (level) {
    case 1: return 'bg-emerald-800/30 dark:bg-emerald-950/40 border-emerald-500/20';
    case 2: return 'bg-emerald-600/50 dark:bg-emerald-800/60 border-emerald-500/30';
    case 3: return 'bg-emerald-500 dark:bg-emerald-600 border-emerald-400/40';
    case 4: return 'bg-emerald-400 dark:bg-emerald-400 border-emerald-300/50';
    default: return 'bg-slate-100 dark:bg-slate-800/50 border-slate-200/20 dark:border-slate-800/30';
  }
};

const topLanguages = [
  { name: 'TypeScript', percentage: 45, color: 'bg-blue-500' },
  { name: 'JavaScript', percentage: 30, color: 'bg-yellow-500' },
  { name: 'Python', percentage: 15, color: 'bg-sky-500' },
  { name: 'SQL', percentage: 10, color: 'bg-orange-500' }
];

export const GitHubStats = () => {
  return (
    <section id="github" className="py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-primary-500 font-bold mb-2">Open Source</span>
          <h2 className="section-title">GitHub Statistics</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full" />
        </div>

        {/* GitHub Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Contribution Heatmap Card (Full Width on mobile, 8-columns on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 glass-card rounded-2xl p-6 border border-slate-200/50 dark:border-slate-800/80 flex flex-col justify-between"
          >
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200/50 dark:border-slate-800/50 mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-display text-slate-900 dark:text-white">
                    Contributions
                  </h3>
                  <a
                    href="https://github.com/dineshshinde"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-primary-500 hover:underline"
                  >
                    github.com/dineshshinde
                  </a>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xl font-extrabold text-slate-800 dark:text-white">
                  384
                </span>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wide">
                  Commits past year
                </p>
              </div>
            </div>

            {/* Simulated Grid Box */}
            <div className="overflow-x-auto pb-4">
              <div className="flex flex-col space-y-1.5 min-w-[500px]">
                {contributionGrid.map((row, rIdx) => (
                  <div key={rIdx} className="flex space-x-1.5 justify-between">
                    {row.map((level, cIdx) => (
                      <div
                        key={cIdx}
                        className={`w-3.5 h-3.5 rounded border transition-all hover:scale-125 cursor-pointer ${getIntensityClass(
                          level
                        )}`}
                        title={`${level * 2} commits on this day`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Heatmap Legend */}
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-200/40 dark:border-slate-800/60 mt-4">
              <span>Stable development cycles</span>
              <div className="flex items-center space-x-1">
                <span>Less</span>
                <div className="w-3.5 h-3.5 rounded bg-slate-100 dark:bg-slate-800" />
                <div className="w-3.5 h-3.5 rounded bg-emerald-800/30" />
                <div className="w-3.5 h-3.5 rounded bg-emerald-600/50" />
                <div className="w-3.5 h-3.5 rounded bg-emerald-500" />
                <div className="w-3.5 h-3.5 rounded bg-emerald-400" />
                <span>More</span>
              </div>
            </div>
          </motion.div>

          {/* Languages & Activity Card (4-columns on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 glass-card rounded-2xl p-6 border border-slate-200/50 dark:border-slate-800/80 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-2 pb-4 border-b border-slate-200/50 dark:border-slate-800/50">
                <Code2 className="w-5 h-5 text-secondary-500" />
                <h3 className="text-base font-bold font-display text-slate-900 dark:text-white">
                  Top Languages
                </h3>
              </div>

              {/* Progress language list */}
              <div className="space-y-4">
                {topLanguages.map((lang) => (
                  <div key={lang.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-700 dark:text-slate-300">{lang.name}</span>
                      <span className="text-slate-500 dark:text-slate-400">{lang.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className={`h-full ${lang.color} rounded-full`} style={{ width: `${lang.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick stats badges */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-200/40 dark:border-slate-800/60 mt-6">
              <div className="flex items-center space-x-2">
                <Flame className="w-4 h-4 text-orange-500" />
                <div className="text-[10px]">
                  <span className="font-extrabold text-slate-800 dark:text-white block">12 Days</span>
                  <span className="text-slate-400 dark:text-slate-500">Current Streak</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <GitCommit className="w-4 h-4 text-primary-500" />
                <div className="text-[10px]">
                  <span className="font-extrabold text-slate-800 dark:text-white block">14 Repos</span>
                  <span className="text-slate-400 dark:text-slate-500">Total Code bases</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Repositories Highlights */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full mx-auto mt-2">
            
            {/* Repo 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/40 dark:border-slate-850 dark:border-slate-800/60 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-primary-500">
                    <GitBranch className="w-4 h-4" />
                    <span className="font-bold font-display text-sm text-slate-900 dark:text-white">
                      playwright-qa-framework
                    </span>
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50">
                    Public
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Advanced test runner structure utilizing Page Object Models (POM), setup reporters, and GitHub Actions orchestration.
                </p>
              </div>
              
              <div className="flex items-center space-x-4 text-[10px] text-slate-500 dark:text-slate-400 font-semibold pt-4 mt-2">
                <span className="flex items-center space-x-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
                  <span>TypeScript</span>
                </span>
                <span className="flex items-center space-x-0.5">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>14</span>
                </span>
                <span className="flex items-center space-x-0.5">
                  <GitFork className="w-3.5 h-3.5 text-slate-400" />
                  <span>4</span>
                </span>
              </div>
            </motion.div>

            {/* Repo 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/40 dark:border-slate-850 dark:border-slate-800/60 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-secondary-500">
                    <GitBranch className="w-4 h-4" />
                    <span className="font-bold font-display text-sm text-slate-900 dark:text-white">
                      api-validation-suite
                    </span>
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50">
                    Public
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Postman automated validation scripts, Newman configurations, environmental setups, and schemas verifications.
                </p>
              </div>

              <div className="flex items-center space-x-4 text-[10px] text-slate-500 dark:text-slate-400 font-semibold pt-4 mt-2">
                <span className="flex items-center space-x-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block" />
                  <span>JavaScript</span>
                </span>
                <span className="flex items-center space-x-0.5">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>8</span>
                </span>
                <span className="flex items-center space-x-0.5">
                  <GitFork className="w-3.5 h-3.5 text-slate-400" />
                  <span>2</span>
                </span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
