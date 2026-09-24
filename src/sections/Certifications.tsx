import { motion } from 'framer-motion';
import { BadgeCheck, Calendar, ExternalLink } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { certifications } from '@/data/portfolio';

const issuerColors: Record<string, string> = {
  Oracle:     'text-red-400',
  'Amazon Web Services (AWS)': 'text-amber-400',
  'Palo Alto Networks': 'text-blue-400',
  IBM:        'text-blue-500',
};

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding dark:bg-dark-900 bg-slate-50">
      <div className="section-container">
        <SectionHeading
          label="Certifications"
          title="Credentials & Courses"
          description="Professional certifications from leading technology organizations."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card p-5 hover:border-accent-500/30 transition-all duration-300 flex flex-col gap-3"
            >
              <BadgeCheck
                size={26}
                className={issuerColors[cert.issuer] ?? 'text-accent-400'}
              />
              <div>
                <h3 className="font-semibold dark:text-white text-slate-900 text-sm leading-snug">
                  {cert.name}
                </h3>
                <p className="text-xs dark:text-slate-400 text-slate-500 mt-1">
                  {cert.issuer}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-3 border-t dark:border-white/5 border-slate-100">
                {cert.date && (
                  <span className="flex items-center gap-1 text-xs dark:text-slate-500 text-slate-400">
                    <Calendar size={11} />
                    {cert.date}
                  </span>
                )}
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto flex items-center gap-1 text-xs text-accent-400 hover:text-accent-300"
                  >
                    Verify <ExternalLink size={11} />
                  </a>
                ) : (
                  <span className="ml-auto text-xs dark:text-slate-600 text-slate-400 italic">
                    No link available
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
