"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './About.module.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { AboutModel } from './AboutModel';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className={styles.aboutSection} ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className={styles.gridContainer}
      >
        <motion.div variants={itemVariants} className={styles.modelContainer}>
          <Canvas>
            <OrbitControls enableZoom={false} enablePan={false} enableDamping enableRotate enabled />
            <ambientLight intensity={1} />
            <directionalLight position={[1, 2, 1]} intensity={2} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <AboutModel position={[0, 0, 0]} scale={1.5} />
          </Canvas>
        </motion.div>

        <motion.div variants={itemVariants} className={styles.contentContainer}>
          <div className={styles.textContainer}>
            <h2 className={styles.heading}>About Me</h2>
            <p className={styles.paragraph}>
              Hello, my name is Idriss Mrayah, Im a 25 years old passionate full stack web developer with a strong foundation in information technology and hands-on experience from a web development bootcamp.
              I thrive in fast-paced environments where problem-solving and adaptability are my strong keys, with a solid theoretical background combined with real-life experience, Im calm, poised, quick on my feet, proactive, and always eager to take initiative.
              What drives me is my continuous growth as in seeing my own progress fuels my ambition to push further and be a better version of myself. I associate myself with like-minded, focused professionals who value work ethic and innovation.
              And as in beyond web development, Im actively interested in the intersection of cybersecurity and technology, exploring how these fields can work together to create secure and scalable digital solutions. Im open to working on diverse projects, bringing my unique perspective to dynamic teams with industry expertise.
              Im excited to connect, learn, and contribute to impactful projects. Lets build something great together!
            </p>
          </div>

          <div className={styles.skillsGrid}>
            <div className={styles.skillBlock}>
              <h3 className={styles.skillHeading}>Soft Skills</h3>
              <p className={styles.skillText}>
                Problem Solving, Team Collaboration, Communication, Adaptability, Time Management, Critical Thinking, Creativity, Leadership, Resilience, Empathy, Flexibility
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About; 