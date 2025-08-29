"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, FaPython, FaJava, FaGitAlt, FaGithub, FaFigma ,FaBootstrap ,FaDiscord } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiFlask, SiAngular, SiPostman, SiCanva, SiTrello,SiExpress ,SiJinja  } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import styles from './Skills.module.css';

const technicalSkills = [
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'Bootstrap', icon: FaBootstrap }, // Assuming no specific Bootstrap icon in react-icons
  { name: 'JavaScript', icon: FaJsSquare },
  { name: 'React Js', icon: FaReact },
  { name: 'Node Js', icon: FaNodeJs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Angular', icon: SiAngular },
  { name: 'MySQL', icon: FaDatabase },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Flask', icon: SiFlask },
  { name: 'Python', icon: FaPython },
  { name: 'Java', icon: FaJava },
  { name: 'ExpressJs', icon: SiExpress }, // Assuming no specific ExpressJs icon
  { name: 'Next Js', icon: SiNextdotjs },
  { name: 'PostgreSQL', icon: SiPostgresql },
];

const tools = [
  { name: 'VScode', icon: VscVscode },
  { name: 'Postman', icon: SiPostman },
  { name: 'MongoDB Compass', icon: SiMongodb }, // Using MongoDB icon for Compass
  { name: 'Git', icon: FaGitAlt },
  { name: 'Canva', icon: SiCanva },
  { name: 'Figma', icon: FaFigma },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Discord', icon: FaDiscord  }, // Assuming no specific Discord icon
  { name: 'Trello', icon: SiTrello },
  { name: 'Jinja2', icon: SiJinja  }, // Assuming no specific Jinja2 icon
];

const languages = [
    { name: 'Arabic', proficiency: 'Native proficiency' },
    { name: 'English', proficiency: 'Advanced proficiency' },
    { name: 'French', proficiency: 'intermediate proficiency' },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className={styles.skillsSection}>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants} className={styles.heading}>
          Technical Skills & Tools
        </motion.h2>
        <motion.div variants={containerVariants} className={styles.gridContainer}>
          {technicalSkills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants} className={styles.skillItem}>
              {skill.icon ? <skill.icon className={styles.skillIcon} /> : <div className={styles.skillIconPlaceholder}></div>}{/* Render icon or placeholder */}
              <p className={styles.skillName}>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.h2 variants={itemVariants} className={styles.heading} style={{ marginTop: '2rem' }}>
          Tools
        </motion.h2>
        <motion.div variants={containerVariants} className={styles.gridContainer}>
          {tools.map((tool, index) => (
            <motion.div key={index} variants={itemVariants} className={styles.skillItem}>
              {tool.icon ? <tool.icon className={styles.skillIcon} /> : <div className={styles.skillIconPlaceholder}></div>}
              <p className={styles.skillName}>{tool.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.h2 variants={itemVariants} className={styles.heading} style={{ marginTop: '4rem' }}>
            Languages
        </motion.h2>
        <motion.div variants={containerVariants} className={styles.gridContainer}>
            {languages.map((lang, index) => (
                <motion.div key={index} variants={itemVariants} className={styles.skillItem}>
                    <p className={styles.skillName}>{lang.name}</p>
                    <p className={styles.skillText}>{lang.proficiency}</p>
                </motion.div>
            ))}
        </motion.div>

        {/* You can add a section for Hard Skills/Soft Skills if needed */}
        {/* You can add a section for Education and Certificates if needed */}

      </motion.div>
    </section>
  );
};

export default Skills; 