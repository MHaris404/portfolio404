'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '@/data/portfolio-data';
import Image from 'next/image';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & <span className="gradient-text">Abilities</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent mx-auto mb-12"></div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 }
                }}
                className="card group cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center p-4 space-y-3">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    {skill.icon.startsWith('http') ? (
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={48}
                        height={48}
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                        {skill.name.substring(0, 2)}
                      </div>
                    )}
                  </div>
                  <p className="text-center text-sm font-medium text-gray-300 group-hover:text-primary-500 transition-colors">
                    {skill.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { number: '5+', label: 'Years Experience' },
              { number: '45+', label: 'Technologies' },
              { number: '50+', label: 'Projects Completed' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <motion.h3
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
