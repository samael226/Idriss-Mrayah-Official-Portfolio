"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import styles from './Education.module.css';

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Higher Institute of Computer Science and Multimedia of Gabes",
    period: "2020 - 2024",
    location: "Gabes, Tunisia",
    description: "Focused on software development, database management, and web technologies.",
    logo: "/assets/images.png"
  },
  {
    degree: "Web Development Bootcamp",
    institution: "NEFEL EDUCATION",
    period: "2023",
    location: "Tunis, Tunisia",
    description: "Intensive training in full-stack web development, covering both frontend and backend technologies.",
    logo: "/assets/nefel_education_logo.jpg"
  },
  {
    degree: "Full Stack Web Development",
    institution: "CODING DOJO",
    period: "2024",
    location: "Tunis, Tunisia",
    description: "Intensive training in full-stack web development, covering both frontend and backend technologies.",
    logo: "/assets/codingdojo_logo.jpg"
  }
];

const Education = () => {
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
    <section id="education" className={styles.educationSection}>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={styles.container}
      >
        <motion.h2 variants={itemVariants} className={styles.heading}>
          Education
        </motion.h2>
        <div className={styles.timeline}>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={styles.educationItem}
              whileHover={{ scale: 1.02 }}
            >
              <div className={styles.educationContent}>
                <div className={styles.logoContainer}>
                  <Image
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    width={100}
                    height={100}
                    className={styles.logo}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/assets/placeholder.png'; // Fallback image
                    }}
                  />
                </div>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <h4 className={styles.institution}>{edu.institution}</h4>
                <p className={styles.period}>{edu.period}</p>
                <p className={styles.location}>{edu.location}</p>
                <p className={styles.description}>{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education; 