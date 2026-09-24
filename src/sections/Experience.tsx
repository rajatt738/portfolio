import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { experiences } from '@/data/portfolio';
import { cn } from '@/lib/utils';

export default function Experience() {
  return (
    <section id="experience" className="section-padding dark:bg-dark-900 bg-slate-50">
      <div className="section-container">
        <SectionHeading
          label="Experience"
          title="Work History"
          description="My professional journey building software for real users."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px dark:bg-white/8 bg-slate-200 hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-0 top-5 w-12 h-12 rounded-full dark:bg-dark-600 bg-white border-2 dark:border-accent-500/30 border-accent-400 items-center justify-center z-10 shadow-md">
                  <Briefcase size={18} className="text-accent-400" />
                </div>

                {/* Card */}
                <div className={cn(
                  'card p-6 hover:border-accent-500/30 transition-all duration-300',
                  exp.type === 'full-time' ? 'dark:bg-dark-700 bg-white' : 'dark:bg-dark-700/70 bg-white'
                )}>
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold dark:text-white text-slate-900">
                        {exp.role}
                      </h3>
                      <p className="text-accent-400 font-semibold text-sm mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span className={cn(
                        'px-2.5 py-0.5 rounded-full text-xs font-semibold',
                        exp.type === 'full-time'
                          ? 'dark:bg-emerald-500/10 dark:text-emerald-400 bg-emerald-50 text-emerald-700 border dark:border-emerald-500/20 border-emerald-200'
                          : 'dark:bg-amber-500/10 dark:text-amber-400 bg-amber-50 text-amber-700 border dark:border-amber-500/20 border-amber-200'
                      )}>
                        {exp.type === 'full-time' ? 'Full-time' : 'Internship'}
                      </span>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm dark:text-slate-400 text-slate-500 mb-5">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm dark:text-slate-300 text-slate-700">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
