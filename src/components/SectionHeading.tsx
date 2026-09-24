import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  label,
  title,
  description,
  className,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        'mb-16',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 dark:bg-accent-500/10 dark:text-accent-400 dark:border dark:border-accent-500/20 bg-accent-50 text-accent-700 border border-accent-200">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-slate-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg dark:text-slate-400 text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
