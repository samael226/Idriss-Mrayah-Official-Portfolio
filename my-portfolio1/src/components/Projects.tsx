"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Projects.module.css';

const projects = [
  {
    title: "Altivio",
    description: "A user-friendly web application which serves as a travel agency platform that can facilitate booking flights, hotels and car renting making the booking process easier and accessible.",
    image: "/assets/altivio-removebg-preview.png",
    tech: ["React Js", "Angular", "Typescript", "Html", "Css", "Bootstrap", "Js", "Node Js", "Express Js", "MongoDB", "Github", "Trello", "Canva", "SCSS", "FIGMA"],
    demoLink: "#",
    githubLink: "https://github.com/idriss-samael/Altivio",
  },
  {
    title: "Pulse Academy",
    description: "A user-friendly web application which serves as an educational platform that can facilitate communication between teachers and students providing diverse learning options and courses making the learning process easier and accessible.",
    image: "/assets/pulseAcademy.png",
    tech: ["Html", "Css", "Bootstrap", "Js", "Python", "Flask", "MySQL", "Github", "Trello", "Canva", "FIGMA"],
    demoLink: "#",
    githubLink: "https://github.com/idriss-samael/Pulse-Academy",
  },
  {
    title: "SkillSprint – Real-Time Hackathon Platform",
    description: "Full-stack web app for live coding competitions with team collaboration and AI-powered feedback.",
    image: "/assets/skillsprint.png",
    tech: ["Spring Boot (Java)", "Angular 19", "TypeScript", "SCSS", "Bootstrap", "Spring Security", "WebSocket", "Java 17", "MySQL", "Figma", "Trello", "Google Docs", "Canva"],
    demoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    githubLink: "https://github.com/idriss-samael/SkillSprint",
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={styles.container}
      >
        <motion.h2 variants={itemVariants} className={styles.heading} style={{marginTop: "2rem"}}>
          My Projects
        </motion.h2>

        <div className={styles.gridContainer}>
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className={styles.projectCard}>
              <div className={styles.projectImageContainer}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={400}
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techItem}>{tech}</span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  <Link href={project.demoLink} className={styles.projectLink}>Live Demo</Link>
                  <Link href={project.githubLink} className={styles.projectLink}>GitHub</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;