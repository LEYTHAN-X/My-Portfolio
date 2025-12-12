import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaCode, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      type: 'email',
      label: 'Email',
      value: 'sonidevi22299911@gmail.com',
      icon: <FaEnvelope />,
      url: 'mailto:sonidevi22299911@gmail.com'
    },
    {
      type: 'phone',
      label: 'Phone',
      value: '+91-6202229725',
      icon: <FaPhone />,
      url: 'tel:+916202229725'
    },
    {
      type: 'location',
      label: 'Location',
      value: 'Bhubaneswar, Odisha',
      icon: <FaMapMarkerAlt />,
      url: null
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/ashish-kumar-59a142290',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/LEYTHAN-X',
      color: '#ffffff'
    },
    {
      name: 'LeetCode',
      icon: <FaCode />,
      url: 'https://leetcode.com/u/ASHISHRX-250/',
      color: '#ffa116'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Get In Touch
        </motion.h2>
        <motion.p className="contact-subtitle" variants={itemVariants}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </motion.p>
        
        <motion.div className="contact-info-grid" variants={containerVariants}>
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="contact-info-item"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="contact-info-icon">{info.icon}</div>
              <div className="contact-info-content">
                <span className="contact-info-label">{info.label}</span>
                {info.url ? (
                  <a href={info.url} className="contact-info-value">{info.value}</a>
                ) : (
                  <span className="contact-info-value">{info.value}</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="contact-links" variants={containerVariants}>
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="contact-icon">{link.icon}</div>
              <span className="contact-name">{link.name}</span>
            </motion.a>
          ))}
        </motion.div>
        <motion.div className="footer" variants={itemVariants}>
          <p>© 2024 Ashish Kumar. All rights reserved.</p>
          <p>Built with React & MERN Stack</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;

