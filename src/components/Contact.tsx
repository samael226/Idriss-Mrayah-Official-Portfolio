"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send email)
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

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
    <section id="contact" className={styles.contactSection}>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={styles.container}
      >
        <motion.h2 variants={itemVariants} className={styles.heading}>
          Get In Touch
        </motion.h2>

        <div className={styles.gridContainer}>
          {/* Linktree QR Code */}

          <motion.div variants={itemVariants} className={styles.contactInfo}>

          <h3 className={styles.contactInfoHeading}>My Socials</h3>

            <a href="https://linktr.ee/samael_id" target="_blank" rel="noopener noreferrer" className={styles.linktreeLink}>
              <Image
                src="/assets/Idriss's Links QR.png"
                alt="Linktree QR Code"
                width={250}
                height={250}
                className={styles.linktreeQR}
              />
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.form variants={itemVariants} className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={styles.textarea}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact; 