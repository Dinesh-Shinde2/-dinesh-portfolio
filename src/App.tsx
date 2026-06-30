import { useTheme } from './hooks/useTheme';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { GitHubStats } from './components/GitHubStats';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen text-slate-800 bg-slate-50 dark:bg-dark-bg dark:text-slate-100 transition-colors duration-300">
      {/* Scroll indicator tracker */}
      <ScrollProgress />

      {/* Main navigation header */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main content body */}
      <main className="overflow-hidden">
        {/* Hero Banner with custom typing logic */}
        <Hero />

        {/* Professional summary & BCA/MCA stats */}
        <About />

        {/* Skills grid cards (Testing, Dev, Tools) */}
        <Skills />

        {/* Responsibilities timeline */}
        <Experience />

        {/* Projects filter showcase */}
        <Projects />

        {/* QA qualifications & credentials */}
        <Certifications />

        {/* GitHub commits/activity dashboard */}
        <GitHubStats />

        {/* Contact glass-form & info cards */}
        <Contact />
      </main>

      {/* Footer information bar */}
      <Footer />

      {/* Back to top float button */}
      <BackToTop />
    </div>
  );
}

export default App;
