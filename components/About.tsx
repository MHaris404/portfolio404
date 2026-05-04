'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '@/data/portfolio-data';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary-500/30 rounded-2xl"></div>
                <div className="relative rounded-2xl overflow-hidden glass-morphism p-2">
                  <div className="w-full h-96 bg-gradient-to-br from-primary-600 to-accent rounded-xl flex items-center justify-center text-8xl font-bold text-white">
                    MH
                  </div>
                </div>
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -right-6 glass-morphism px-6 py-3 rounded-full"
                >
                  <p className="text-sm font-semibold gradient-text">5+ Years Experience</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold">I&apos;m {personalInfo.name}</h3>
              <p className="text-xl text-primary-500 font-semibold">{personalInfo.title}</p>
              
              {personalInfo.bio.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  className="text-gray-400 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}

              {/* Info Cards */}
              <div className="grid grid-cols-1 gap-4 pt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="glass-morphism p-4 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-primary-500 text-xl" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-white font-medium">{personalInfo.email}</p>
                      <p className="text-gray-400 text-sm">{personalInfo.alternateEmail}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="glass-morphism p-4 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-primary-500 text-xl" />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-white font-medium">{personalInfo.location.current}</p>
                      <p className="text-gray-400 text-sm">From {personalInfo.location.origin}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Resume Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <a
                  href={personalInfo.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Download Resume
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
