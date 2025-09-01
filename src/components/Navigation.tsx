"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.navContainer}>
      <nav className={`${styles.nav} container mx-auto flex items-center`}>
        {/* Logo/Name on the left */}
        <div className={`${styles.logo} text-white text-xl font-bold`}>
          <Link href="#home" onClick={closeMenu}>
            Samael
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <ul className={styles.navList}>
          <li><Link href="#home" className={styles.navLink}>Home</Link></li>
          <li><Link href="#about" className={styles.navLink}>About</Link></li>
          <li><Link href="#projects" className={styles.navLink}>Projects</Link></li>
          <li><Link href="#skills" className={styles.navLink}>Skills</Link></li>
          <li><Link href="#contact" className={styles.navLink}>Contact</Link></li>
        </ul>

        {/* Hamburger Menu (will be on the right on small screens) */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={`${isOpen ? 'rotate-45 translate-y-0.4rem' : ''}`}></span>
          <span className={`${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`${isOpen ? '-rotate-45 translate-y--0.4rem' : ''}`}></span>
        </div>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileNav} ${isOpen ? styles.open : ''}`}>
          <ul className="flex flex-col items-center gap-6">
            <li><Link href="#home" className={styles.mobileNavLink} onClick={closeMenu}>Home</Link></li>
            <li><Link href="#about" className={styles.mobileNavLink} onClick={closeMenu}>About</Link></li>
            <li><Link href="#projects" className={styles.mobileNavLink} onClick={closeMenu}>Projects</Link></li>
            <li><Link href="#skills" className={styles.mobileNavLink} onClick={closeMenu}>Skills</Link></li>
            <li><Link href="#contact" className={styles.mobileNavLink} onClick={closeMenu}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation; 