'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience } from '@/data/portfolio-data';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="section-padding bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent mx-auto mb-12"></div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent"></div>

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'md:direction-rtl'
                  }`}
                >
                  {/* Content */}
                  <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left md:col-start-2'}`}>
                    <div className="card hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent flex items-center justify-center">
                          <FaBriefcase className="text-white text-xl" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                          <p className="text-sm text-gray-400">{exp.type}</p>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-primary-500 mb-3">
                        {exp.position}
                      </h4>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-gray-400">
                          <FaCalendarAlt className="text-primary-500" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <FaMapMarkerAlt className="text-primary-500" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent border-4 border-background shadow-lg"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
