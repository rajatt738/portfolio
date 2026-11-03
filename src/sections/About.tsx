import { motion } from 'framer-motion';
import { Code2, Smartphone, Server, Brain } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const highlights = [
  {
    icon: <Code2 size={20} className="text-accent-400" />,
    label: 'Frontend Development',
    desc: 'Building responsive, performant web UIs with React.js and TypeScript.',
  },
  {
    icon: <Smartphone size={20} className="text-violet-400" />,
    label: 'Mobile Development',
    desc: 'Cross-platform mobile apps with React Native sharing logic across platforms.',
  },
  {
    icon: <Server size={20} className="text-emerald-400" />,
    label: 'Backend & APIs',
    desc: 'REST API development with Node.js, Express.js, and Spring Boot.',
  },
  {
    icon: <Brain size={20} className="text-amber-400" />,
    label: 'Generative AI',
    desc: 'Familiar with LLMs, RAG, AI Agents, Prompt Engineering, and LLM Orchestration.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding dark:bg-dark-800 bg-white">
      <div className="section-container">
        <SectionHeading
          label="About Me"
          title="Who I Am"
          description="A passionate software engineer focused on building production-quality applications."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-base dark:text-slate-300 text-slate-700 leading-relaxed"
          >
            <p>
              I'm <strong className="dark:text-white text-slate-900">Rajat Kasaudhan</strong>, a Software Development Engineer based in Noida, India. I have hands-on experience building and maintaining production-grade web and mobile applications at{' '}
              <strong className="dark:text-white text-slate-900">4 Way Technologies Inc.</strong> as an SDE-1.
            </p>
            <p>
              My day-to-day work involved developing <strong className="dark:text-white text-slate-900">15+ production features</strong> for <em>ChatReal</em> — an AI-powered chat platform — working across the <strong className="dark:text-white text-slate-900">React.js</strong> web client and <strong className="dark:text-white text-slate-900">React Native</strong> mobile app. I've shipped real-time messaging, payment flows, authentication, and 3D avatar customization, while monitoring production health via <strong className="dark:text-white text-slate-900">Sentry</strong> and <strong className="dark:text-white text-slate-900">Axiom</strong>.
            </p>
            <p>
              My backend experience includes building RESTful APIs with <strong className="dark:text-white text-slate-900">Node.js / Express.js</strong> and <strong className="dark:text-white text-slate-900">Spring Boot (Java)</strong>, working with <strong className="dark:text-white text-slate-900">MySQL, PostgreSQL, MongoDB, and TypeSense</strong>, and implementing <strong className="dark:text-white text-slate-900">JWT & RBAC</strong> authentication. I'm also familiar with <strong className="dark:text-white text-slate-900">Generative AI</strong> — LLMs, RAG pipelines, AI Agents, and Prompt Engineering.
            </p>
            <p>
              I'm a B.Tech graduate in Computer Science &amp; Engineering from <strong className="dark:text-white text-slate-900">Galgotias University</strong> (2022–2026) with a strong foundation in data structures, algorithms, and object-oriented design. <strong className="dark:text-white text-slate-900">Immediate Joiner.</strong>
            </p>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                className="card p-5 hover:border-accent-500/30 transition-all duration-300"
              >
                <div className="mb-3 w-10 h-10 rounded-xl dark:bg-dark-600 bg-slate-100 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold dark:text-white text-slate-900 mb-1.5 text-sm">
                  {item.label}
                </h3>
                <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
