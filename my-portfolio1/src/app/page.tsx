"use client";

import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
// import MinimalScene from '@/components/CyberpunkScene'; // Import the minimal 3D component
import styles from './page.module.css'; // Import CSS module

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
// Import your 3D model component if needed, e.g.,
import { Model } from '@/components/Model'; // Assuming you have a Model component and it's a named export

export default function Home() {
  return (
    <div className={styles.container}> {/* Apply container style */}
      {/* Trigger Tailwind to generate gradient classes: from-purple-400 to-pink-600 bg-gradient-to-r text-transparent bg-clip-text */}
      {/* The comment above was for Tailwind and is no longer needed with CSS Modules */}
      <Navigation />
      <main className={styles.mainContent}> {/* Use CSS module for main content style */}
        {/* Hero Section */}
        <section id="home" className={`${styles.heroSection} ${styles.heroWith3D}`}> {/* Add class for 3D layout */}
          {/* <MinimalScene />  */}
          {/* Add the minimal 3D scene component */}
          <Canvas className={styles.canvasSizer}> {/* Add canvas sizer class */}
             <OrbitControls enableZoom={false} enablePan enableDamping enableRotate enabled/>
             <ambientLight intensity={1} />
             <directionalLight position={[1, 2, 1]} intensity={2} />
             <pointLight position={[10, 10, 10]} intensity={1} />
             <Model position={[0, 0, 0]}/> {/* Add position prop */}
          </Canvas>          {/* Add the minimal 3D scene component */}
           <div className={styles.heroContent}> {/* Wrap text content */}
             <h1 className={styles.heroHeading}>Idriss Samael Mrayah</h1>
             <p className={styles.heroSubHeading}>Full Stack Developer | Python | JavaScript | Java | MERN | ANGULAR</p>
             <p className={styles.heroDescription}>Crafting digital experiences with modern technologies and creative solutions.</p>
           </div>
         </section>

         <About />
         <Education />
         <Certificates />
         <Projects />
         <Skills />
         <Contact />


       </main>
     </div>
   );
 };
