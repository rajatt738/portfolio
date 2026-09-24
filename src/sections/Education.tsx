import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { educationList } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="section-padding dark:bg-dark-800 bg-white">
      <div className="section-container">
        <SectionHeading
          label="Education"
          title="Academic Background"
        />

        <div className="max-w-2xl mx-auto space-y-6">
          {educationList.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-6 hover:border-accent-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="w-14 h-14 shrink-0 rounded-2xl dark:bg-dark-600 bg-slate-100 flex items-center justify-center">
                  <GraduationCap size={26} className="text-accent-400" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold dark:text-white text-slate-900">
                    {edu.institution}
                  </h3>
                  <p className="dark:text-accent-400 text-accent-600 font-semibold text-sm mt-0.5">
                    {edu.degree} — {edu.field}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-3 text-sm dark:text-slate-400 text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      {edu.location}
                    </span>
                  </div>

                  {edu.cgpa && (
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg dark:bg-dark-600 bg-slate-100">
                      <Award size={14} className="text-amber-400" />
                      <span className="text-sm font-medium dark:text-slate-300 text-slate-700">
                        CGPA: <strong className="dark:text-white text-slate-900">{edu.cgpa}</strong>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
