"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import styles from "./Certificates.module.css";

const certificates = [
  {
    name: "Full Stack Web Development",
    issuer: "NEFEL EDUCATION",
    date: "2023",
    description: "Comprehensive training in modern web development technologies and best practices.",
    Logo: "/assets/nefel_education_logo.jpg"
  },
  {
    name: "Python Programming",
    issuer: "NEFEL EDUCATION",
    date: "2023",
    description: "Advanced Python programming concepts and practical applications.",
    Logo: "/assets/nefel_education_logo.jpg"
  },
  {
    name: "Java Development",
    issuer: "NEFEL EDUCATION",
    date: "2023",
    description: "Enterprise-level Java development with Spring Boot framework.",
    Logo: "/assets/nefel_education_logo.jpg"
  },
  {
    name: "MERN STACK",
    issuer: "CODING DOJO",
    date: "2024",
    description: "Comprehensive training in modern javascript web development technologies and best practices.",
    Logo: "/assets/codingdojo_logo.jpg"
  },
  {
    name: "MEAN STACK",
    issuer: "CODING DOJO",
    date: "2024",
    description: "Comprehensive training in modern typescript web development technologies and best practices.",
    Logo: "/assets/codingdojo_logo.jpg"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Certificates() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className={styles.certificatesSection} id="certificates">
      <div className={styles.container}>
        <h2 className={styles.heading}>Certificates</h2>
        <motion.div
          ref={ref}
          className={styles.gridContainer}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              className={styles.certificateCard}
              variants={itemVariants}
            >
              <div className={styles.logoContainer}>
                <Image
                  src={certificate.Logo || "/assets/Idriss's Links QR.png"}
                  alt={`${certificate.issuer} logo`}
                  fill
                  className={styles.logo}
                  sizes="(max-width: 768px) 80px, 100px"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/assets/Idriss's Links QR.png";
                  }}
                />
              </div>
              <div className={styles.certificateContent}>
                <h3 className={styles.certificateName}>{certificate.name}</h3>
                <p className={styles.issuer}>{certificate.issuer}</p>
                <p className={styles.date}>{certificate.date}</p>
                <p className={styles.description}>{certificate.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 