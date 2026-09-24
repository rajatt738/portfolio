import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/portfolio';
import type { ProjectCategory } from '@/types';
import { cn } from '@/lib/utils';

const filters: { label: string; value: ProjectCategory }[] = [
  { label: 'All',        value: 'all' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Frontend',   value: 'frontend' },
  { label: 'Backend',    value: 'backend' },
  { label: 'Mobile',     value: 'mobile' },
];

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory>('all');

  const filtered = projects.filter((p) =>
    active === 'all' ? true : p.categories.includes(active)
  );

  return (
    <section id="projects" className="section-padding dark:bg-dark-900 bg-slate-50">
      <div className="section-container">
        <SectionHeading
          label="Projects"
          title="What I've Built"
          description="A selection of projects from personal work and professional contributions."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label="Project filters">
          {filters.map((f) => (
            <button
              key={f.value}
              id={`filter-${f.value}`}
              onClick={() => setActive(f.value)}
              className={cn(
                'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200',
                active === f.value
                  ? 'bg-accent-600 text-white shadow-lg shadow-accent-500/20'
                  : 'dark:border-white/10 dark:text-slate-400 dark:hover:border-accent-500/40 dark:hover:text-accent-400 border border-slate-200 text-slate-600 hover:border-accent-400 hover:text-accent-600 bg-transparent'
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-center dark:text-slate-500 text-slate-400 py-12">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
