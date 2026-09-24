import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { contactInfo } from '@/data/portfolio';
import { scrollToSection } from '@/lib/utils';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="dark:bg-dark-800 bg-slate-50 border-t dark:border-white/5 border-slate-200">
      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-bold dark:text-white text-slate-900">
              Rajat Kasaudhan
            </span>
            <span className="text-sm dark:text-slate-500 text-slate-500">
              © {year} · All rights reserved
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-github"
              className="btn-icon"
              aria-label="GitHub"
            >
              <GithubIcon size={17} />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin"
              className="btn-icon"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={17} />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              id="footer-email"
              className="btn-icon"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
          </div>

          <button
            id="back-to-top"
            onClick={() => scrollToSection('#home')}
            className="btn-secondary text-sm py-2 px-4"
            aria-label="Back to top"
          >
            <ArrowUp size={15} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
