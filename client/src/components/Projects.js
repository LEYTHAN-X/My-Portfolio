import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'International News App',
      date: 'Aug. 2024',
      description: 'Developed a responsive web app using React and NewsAPI, fetching over 100 real-time news articles daily across 7 categories (General, Sports, Technology, etc.). Designed dynamic UI with React Router, reducing navigation latency by 30% through seamless single-page transitions. Optimized API calls using React Hooks, improving data rendering speed by 25% for 10,000+ monthly users. Ensured 100% mobile responsiveness, supporting devices with screen sizes from 320px to 1920px.',
      tech: ['React', 'NewsAPI', 'JavaScript', 'React Router', 'React Hooks'],
      github: 'https://github.com/LEYTHAN-X/NewsToastsApp',
      live: null,
      features: ['100+ Daily Articles', '7 Categories', '30% Faster Navigation', '25% Improved Rendering', '100% Mobile Responsive']
    },
    {
      title: 'Note Nest',
      date: 'Mar. 2025',
      description: 'Built a secure MERN stack note-taking app, supporting 50+ users with CRUD operations and JWT authentication. Designed intuitive UI with React, implementing 5 protected routes, reducing unauthorized access incidents to 0%. Developed 8 backend APIs with Node.js and Express.js, handling 200+ daily requests with MongoDB. Improved UX with form validation and alerts, increasing user retention by 20% in testing. Reduced API response time by 15% through optimized MongoDB queries.',
      tech: ['MERN Stack', 'JWT', 'MongoDB', 'Node.js', 'Express.js', 'React'],
      github: 'https://github.com/LEYTHAN-X/Cloud-NoteNest',
      live: null,
      features: ['50+ Users', 'JWT Authentication', '8 Backend APIs', '15% Faster Response', '20% Higher Retention']
    },
    {
      title: 'Real-Time CRM Dashboard',
      description: 'A comprehensive CRM system for managing company employees, deals, and business operations. Built with Refine framework, MERN stack, and Ant Design for a professional, enterprise-grade interface. Features real-time updates, data visualization, advanced filtering, and role-based access control.',
      tech: ['Refine', 'MERN Stack', 'Ant Design', 'Real-time Updates', 'Data Visualization'],
      github: 'https://github.com/LEYTHAN-X/Real-Time-Refine_DashBoard',
      live: null,
      features: ['Real-time Updates', 'Data Visualization', 'Employee Management', 'Deal Tracking']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Projects
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card project-card-link"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="project-number">0{index + 1}</div>
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                {project.date && <span className="project-date">{project.date}</span>}
              </div>
              <p className="project-description">{project.description}</p>
              {project.features && (
                <div className="project-features">
                  <h4 className="features-title">Key Features:</h4>
                  <ul className="features-list">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="feature-item">
                        <span className="feature-bullet">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <span className="project-link">
                  <FaGithub /> View Code
                </span>
                {project.live && (
                  <span
                    className="project-link"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(project.live, '_blank');
                    }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

