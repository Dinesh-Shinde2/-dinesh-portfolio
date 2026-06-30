import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ShieldCheck, Download } from 'lucide-react';

const titles = [
  'QA Engineer',
  'Automation Tester',
  'Manual Tester',
  'Playwright Specialist',
  'API Testing Expert'
];

export const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: any;
    const fullText = titles[titleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause at the end
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
          setTypingSpeed(150);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex, typingSpeed]);

  const scrollToSection = (id: string) => {
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
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary-500/10 dark:bg-secondary-500/5 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            {/* Status pill */}
            <div className="inline-flex items-center space-x-2 bg-primary-500/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 px-3.5 py-1.5 rounded-full text-xs font-semibold self-start border border-primary-500/15">
              <ShieldCheck className="w-4 h-4 animate-bounce" />
              <span>Available for Test Automation & QA Roles</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg md:text-xl font-medium text-slate-600 dark:text-slate-400 font-display">
                Hello, I am
              </h3>
              <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-slate-900 dark:text-white leading-tight">
                Dinesh Shinde
              </h1>
              <div className="h-12 flex items-center">
                <span className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent cursor-blink font-display">
                  {currentText}
                </span>
              </div>
            </div>

            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              QA Engineer specializing in Manual Testing, Automation Testing, API Testing, and Playwright Automation. Passionate about delivering high-quality software through efficient testing strategies.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-gradient cursor-pointer flex items-center space-x-2"
              >
                <span>View Projects</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-outline cursor-pointer"
              >
                <span>Contact Me</span>
              </button>
              <a
                href="/Dinesh_Shinde_Resume.txt"
                download="Dinesh_Shinde_Resume.txt"
                className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-950 text-white dark:bg-slate-700 dark:hover:bg-slate-600 px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer border border-slate-700 dark:border-slate-600"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>

          {/* Interactive QA Automation Simulation Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square glass-card rounded-2xl p-6 border border-slate-200/50 dark:border-slate-800/80 overflow-hidden flex flex-col justify-between">
              
              {/* Card Header (Simulated Browser/IDE top bar) */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/50 dark:border-slate-800/50">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="flex items-center space-x-2 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 px-2.5 py-1 rounded">
                  <Terminal className="w-3.5 h-3.5 text-primary-500" />
                  <span>playwright-runner.js</span>
                </div>
              </div>

              {/* Console logs */}
              <div className="flex-1 font-mono text-xs text-slate-600 dark:text-slate-300 py-4 overflow-y-auto space-y-2 flex flex-col justify-end">
                <div className="flex items-center space-x-2">
                  <span className="text-slate-400 dark:text-slate-600">[22:04:10]</span>
                  <span className="text-blue-500 font-semibold">INFO:</span>
                  <span>Launching Chromium browser...</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-slate-400 dark:text-slate-600">[22:04:11]</span>
                  <span className="text-purple-500 font-semibold">POM:</span>
                  <span>Navigating to LoginPage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-slate-400 dark:text-slate-600">[22:04:12]</span>
                  <span className="text-emerald-500 font-semibold">PASS:</span>
                  <span className="text-emerald-600 dark:text-emerald-400">✓ LoginPage loaded dynamically</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-slate-400 dark:text-slate-600">[22:04:13]</span>
                  <span className="text-blue-500 font-semibold">INFO:</span>
                  <span>Performing Database Assertions...</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-slate-400 dark:text-slate-600">[22:04:14]</span>
                  <span className="text-emerald-500 font-semibold">PASS:</span>
                  <span className="text-emerald-600 dark:text-emerald-400">✓ DB sync with pgAdmin successful</span>
                </div>
                <div className="flex items-center space-x-2 bg-emerald-500/10 dark:bg-emerald-500/20 border-l-2 border-emerald-500 p-1.5 rounded-r">
                  <span className="text-emerald-500 font-semibold">RESULT:</span>
                  <span className="text-slate-800 dark:text-slate-100 font-semibold">5 tests passed (100% green)</span>
                </div>
              </div>

              {/* Status bar */}
              <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center -space-x-1.5">
                    {/* Circle badges for testing tools */}
                    <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200/50 dark:border-slate-700 font-bold text-[9px] text-red-500 shadow-sm" title="Playwright">P</div>
                    <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200/50 dark:border-slate-700 font-bold text-[9px] text-green-500 shadow-sm" title="Selenium">Se</div>
                    <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200/50 dark:border-slate-700 font-bold text-[9px] text-orange-500 shadow-sm" title="Postman">Pm</div>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Tests Auto-Verified</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Running CI/CD</span>
                </div>
              </div>

              {/* Floating browser logos */}
              <motion.div
                className="absolute top-12 right-6 bg-white dark:bg-slate-800 p-2 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <span className="text-[10px] font-bold text-emerald-500">Playwright</span>
              </motion.div>
              <motion.div
                className="absolute bottom-20 left-6 bg-white dark:bg-slate-800 p-1.5 rounded-lg shadow-md border border-slate-100 dark:border-slate-700"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-[10px] font-bold text-orange-500">Postman API</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
