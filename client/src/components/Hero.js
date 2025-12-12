import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaCode, FaLaptopCode, FaRocket, FaStar } from 'react-icons/fa';
import Typewriter from './Typewriter';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="hero" className="hero">
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.h1
            className="hero-name"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            Hi, I'm <Typewriter />
          </motion.h1>
          <motion.p className="hero-year" variants={itemVariants}>
            3rd Year Student
          </motion.p>
          <motion.p className="hero-description" variants={itemVariants}>
            B.Tech CSE Student at C.V. Raman Global University | Problem Solver | 
            <span className="highlight"> 400+ LeetCode Problems</span> | 
            <span className="highlight"> 1600+ Contest Rating</span>
          </motion.p>
          <motion.div className="hero-links" variants={itemVariants}>
            <motion.a
              href="https://www.linkedin.com/in/ashish-kumar-59a142290"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/LEYTHAN-X"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/ASHISHRX-250/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaCode />
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-illustration"
          variants={itemVariants}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <motion.div
              className="design-icon design-icon-1"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <FaLaptopCode />
            </motion.div>
            <motion.div
              className="design-icon design-icon-2"
              animate={{
                rotate: [360, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaRocket />
            </motion.div>
            <motion.div
              className="design-icon design-icon-3"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaStar />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

