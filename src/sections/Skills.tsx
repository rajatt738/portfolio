import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { skillCategories } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="section-padding dark:bg-dark-800 bg-white">
      <div className="section-container">
        <SectionHeading
          label="Skills"
          title="Technical Expertise"
          description="Technologies and tools I use to build production-quality software."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
              className="card p-6 hover:border-accent-500/30 transition-all duration-300"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 dark:text-accent-400 text-accent-600">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIndex * 0.05 + skillIndex * 0.04 }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
