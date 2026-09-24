import { motion } from 'framer-motion';
import { ExternalLink, Lock } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card p-6 group flex flex-col h-full hover:border-accent-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-accent-500/5"
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <h3 className="text-lg font-bold dark:text-white text-slate-900 leading-snug group-hover:text-accent-400 transition-colors duration-200">
          {project.title}
        </h3>
        {project.isPrivate && (
          <span className="flex items-center gap-1 px-2 py-0.5 rounded text-xs dark:bg-slate-700 dark:text-slate-400 bg-slate-100 text-slate-500 whitespace-nowrap shrink-0">
            <Lock size={11} />
            Private
          </span>
        )}
      </div>

      <p className="text-sm dark:text-slate-400 text-slate-600 leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      <ul className="space-y-1.5 mb-5">
        {project.highlights.slice(0, 3).map((h) => (
          <li
            key={h}
            className="flex items-start gap-2 text-sm dark:text-slate-300 text-slate-700"
          >
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
            {h}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-auto pt-4 border-t dark:border-white/5 border-slate-100">
        {project.githubUrl && !project.isPrivate ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-github-${project.id}`}
            className="btn-secondary text-sm py-2 px-4"
          >
            <GithubIcon size={15} />
            GitHub
          </a>
        ) : (
          <span className="flex items-center gap-1.5 text-xs dark:text-slate-500 text-slate-400">
            <Lock size={13} />
            Private / Not publicly available
          </span>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-live-${project.id}`}
            className="btn-primary text-sm py-2 px-4"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
