import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import ThemeToggle from './ThemeToggle';
import { navItems, heroData } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';
import { scrollToSection } from '@/lib/utils';
import { cn } from '@/lib/utils';

const sectionIds = navItems.map((n) => n.href.replace('#', ''));

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'dark:bg-dark-900/90 bg-white/90 backdrop-blur-md shadow-lg dark:shadow-black/20'
            : 'bg-transparent'
        )}
      >
        <div className="section-container">
          <nav className="flex items-center justify-between h-16">
            <button
              onClick={() => handleNavClick('#home')}
              id="nav-logo"
              className="flex items-center gap-2 font-bold text-lg group"
              aria-label="Rajat Kasaudhan - Go to top"
            >
              <div className="w-8 h-8 rounded-lg bg-accent-600 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-accent-500/30 group-hover:scale-110 transition-transform">
                RK
              </div>
              <span className="dark:text-white text-slate-900 hidden sm:block group-hover:text-accent-400 transition-colors">
                Rajat Kasaudhan
              </span>
            </button>

            <ul className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <li key={item.href}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      id={`nav-${item.href.replace('#', '')}`}
                      className={cn(
                        'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                        isActive
                          ? 'text-accent-400 dark:bg-accent-500/10 bg-accent-50'
                          : 'dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-white/5 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      )}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2">
              <a
                href={heroData.github}
                target="_blank"
                rel="noopener noreferrer"
                id="nav-github"
                className="btn-icon hidden sm:inline-flex"
                aria-label="GitHub profile"
              >
                <GithubIcon size={17} />
              </a>
              <a
                href={heroData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="nav-linkedin"
                className="btn-icon hidden sm:inline-flex"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon size={17} />
              </a>
              <ThemeToggle />
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileOpen((o) => !o)}
                className="btn-icon md:hidden"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 dark:bg-dark-800/95 bg-white/95 backdrop-blur-md border-b dark:border-white/5 border-slate-200 shadow-xl md:hidden"
          >
            <div className="section-container py-4">
              <ul className="space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <li key={item.href}>
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className={cn(
                          'w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                          isActive
                            ? 'text-accent-400 dark:bg-accent-500/10 bg-accent-50'
                            : 'dark:text-slate-300 text-slate-700 dark:hover:bg-white/5 hover:bg-slate-50'
                        )}
                      >
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t dark:border-white/5 border-slate-200">
                <a
                  href={heroData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm py-2 px-4 flex-1 justify-center"
                >
                  <GithubIcon size={15} />
                  GitHub
                </a>
                <a
                  href={heroData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm py-2 px-4 flex-1 justify-center"
                >
                  <LinkedinIcon size={15} />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
