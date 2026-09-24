import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, ArrowDown, ChevronRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { heroData } from '@/data/portfolio';
import { scrollToSection } from '@/lib/utils';

interface FadeUpProps {
  delay?: number;
}

function fadeUp({ delay = 0 }: FadeUpProps = {}) {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  };
}

function RoleCycler({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <span
      className="gradient-text font-bold"
      style={{
        display: 'inline-block',
        minWidth: '16ch',
        transition: 'opacity 0.4s ease',
        opacity: visible ? 1 : 0,
      }}
    >
      {roles[index]}
    </span>
  );
}

function Avatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative mx-auto md:mx-0 w-48 h-48 md:w-56 md:h-56 shrink-0"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-500 to-violet-500 blur-lg opacity-30 animate-pulse-slow" />
      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-accent-600 to-violet-600 flex items-center justify-center shadow-2xl shadow-accent-500/20 border-4 dark:border-dark-700 border-white">
        <span className="text-5xl md:text-6xl font-extrabold text-white select-none">RK</span>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden dark:bg-dark-900 bg-slate-50 pt-16"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-dark opacity-100" />
      </div>

      <div className="section-container relative z-10 py-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">
          {/* Left — Text */}
          <div className="flex-1 text-center md:text-left max-w-2xl">
            <motion.p
              {...fadeUp({ delay: 0 })}
              className="text-sm font-semibold tracking-widest uppercase mb-3 dark:text-accent-400 text-accent-600"
            >
              {heroData.greeting}&nbsp;
              <span className="dark:text-white text-slate-900">{heroData.name}</span>
            </motion.p>

            <motion.h1
              {...fadeUp({ delay: 0.1 })}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold dark:text-white text-slate-900 mb-4 leading-tight tracking-tight"
            >
              Software Engineer{' '}
              <span className="dark:text-slate-400 text-slate-500 text-3xl sm:text-4xl lg:text-5xl block mt-1 font-medium">
                {heroData.tagline}
              </span>
            </motion.h1>

            <motion.div
              {...fadeUp({ delay: 0.2 })}
              className="text-lg sm:text-xl mb-6 dark:text-slate-300 text-slate-700 font-medium"
            >
              <RoleCycler roles={heroData.roles} />
            </motion.div>

            <motion.p
              {...fadeUp({ delay: 0.3 })}
              className="text-base dark:text-slate-400 text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0"
            >
              {heroData.description}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              {...fadeUp({ delay: 0.4 })}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3"
            >
              <button
                id="hero-explore"
                onClick={() => scrollToSection('#projects')}
                className="btn-primary"
              >
                Explore My Work
                <ChevronRight size={18} />
              </button>

              <a
                id="hero-resume"
                href={heroData.resumePdf}
                download="Rajat_Kasaudhan_Resume.pdf"
                className="btn-secondary"
              >
                <Download size={17} />
                Download Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              {...fadeUp({ delay: 0.5 })}
              className="flex items-center justify-center md:justify-start gap-3 mt-6"
            >
              <a
                id="hero-github"
                href={heroData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                id="hero-linkedin"
                href={heroData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                id="hero-email"
                href={`mailto:${heroData.email}`}
                className="btn-icon"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right — Avatar */}
          <Avatar />
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1"
        >
          <span className="text-xs dark:text-slate-500 text-slate-400 tracking-widest uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={16} className="dark:text-slate-500 text-slate-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
