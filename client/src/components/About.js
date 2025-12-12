import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
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
    <section id="about" className="about">
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          About Me
        </motion.h2>
        <motion.div className="about-content" variants={itemVariants}>
          <div className="about-card">
            <div className="about-intro">
              <p className="about-text">
                I'm <span className="highlight">Ashish Kumar</span>, a passionate software engineering 
                enthusiast currently in my <span className="highlight">3rd year</span>. I have a deep love for solving complex problems 
                and turning ideas into reality through code. My journey in technology started with curiosity 
                and has evolved into a dedicated pursuit of excellence in software development.
              </p>
            </div>
            
            <div className="about-education">
              <h3 className="about-subtitle">Education</h3>
              <div className="education-card">
                <div className="education-header">
                  <h4 className="education-degree">B.Tech in Computer Science & Engineering</h4>
                  <span className="education-cgpa">CGPA: 8.61/10</span>
                </div>
                <p className="education-institution">C.V. Raman Global University, Bhubaneswar, Odisha</p>
                <p className="education-duration">Aug. 2023 – May 2027</p>
                <p className="education-achievement">Ranked in top 15% of the program</p>
              </div>
            </div>

            <div className="about-achievements">
              <h3 className="about-subtitle">Key Achievements</h3>
              <div className="achievement-grid">
                <div className="achievement-item">
                  <div className="achievement-number">400+</div>
                  <div className="achievement-label">LeetCode Problems Solved</div>
                </div>
                <div className="achievement-item">
                  <div className="achievement-number">1600+</div>
                  <div className="achievement-label">Contest Rating</div>
                </div>
                <div className="achievement-item">
                  <div className="achievement-number">8th</div>
                  <div className="achievement-label">National Hackathon Position</div>
                </div>
                <div className="achievement-item">
                  <div className="achievement-number">Top 5%</div>
                  <div className="achievement-label">IIT Bhubaneswar Finalist</div>
                </div>
              </div>
            </div>

            <div className="about-passion">
              <h3 className="about-subtitle">My Passion</h3>
              <p className="about-text">
                Beyond coding, I'm passionate about building real-world applications that make a 
                difference. I've worked on various projects using modern technologies like <span className="highlight">MERN Stack</span>, 
                <span className="highlight"> React</span>, and <span className="highlight">Refine</span>, always focusing 
                on creating efficient, scalable, and user-friendly solutions.
              </p>
              <p className="about-text">
                I believe in continuous learning and staying updated with the latest technologies. 
                My experience includes full-stack development, API integration, cloud deployment, and 
                version control. I'm always eager to take on new challenges and contribute to 
                innovative projects.
              </p>
            </div>

            <div className="about-goals">
              <h3 className="about-subtitle">Goals & Vision</h3>
              <p className="about-text">
                My goal is to become a proficient software engineer who can build impactful solutions 
                and contribute to the tech community. I'm constantly working on improving my problem-solving 
                skills, learning new technologies, and building projects that showcase my abilities.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

