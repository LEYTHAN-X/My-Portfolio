import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaDownload, FaAward, FaCalendarAlt, FaBuilding } from 'react-icons/fa';
import axios from 'axios';
import './ResumeCertificates.css';

const ResumeCertificates = () => {
  const [resumes, setResumes] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  // Default resume
  const defaultResume = {
    title: 'Ashish Kumar - Resume',
    fileUrl: 'https://acrobat.adobe.com/id/urn:aaid:sc:AP:1b96ca12-abc6-4666-8c92-1d43d961de72',
    description: 'My latest resume showcasing my education, projects, skills, and achievements.'
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await Promise.all([fetchResumes(), fetchCertificates()]);
      setLoading(false);
    };
    loadData();
  }, []);

  const fetchResumes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/resume');
      if (response.data && response.data.length > 0) {
        setResumes([response.data[0]]);
      }
    } catch (error) {
      console.error('Error fetching resume:', error);
      // Keep empty or handle error state
    }
  };

  const fetchCertificates = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/certificates');
      setCertificates(response.data);
    } catch (error) {
      console.error('Error fetching certificates:', error);
      setCertificates([]);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await Promise.all([fetchResumes(), fetchCertificates()]);
      setLoading(false);
    };
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <section id="resume-certificates" className="resume-certificates">
      <motion.div
        className="resume-certificates-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Resume & Certificates
        </motion.h2>

        {/* Resume Section */}
        <motion.div className="resume-section" variants={itemVariants}>
          <h3 className="subsection-title">
            <FaFilePdf className="section-icon" />
            Resume
          </h3>
          <div className="resume-grid">
            {loading ? (
              <div className="loading">Loading...</div>
            ) : resumes.length > 0 ? (
              <motion.div
                className="resume-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="resume-icon">
                  <FaFilePdf />
                </div>
                <h4 className="resume-title">{resumes[0].title}</h4>
                {resumes[0].description && (
                  <p className="resume-description">{resumes[0].description}</p>
                )}
                <a
                  href={resumes[0].fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-download-btn"
                >
                  <FaDownload /> View Resume
                </a>
              </motion.div>
            ) : (
              <motion.div
                className="resume-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="resume-icon">
                  <FaFilePdf />
                </div>
                <h4 className="resume-title">{defaultResume.title}</h4>
                <p className="resume-description">{defaultResume.description}</p>
                <a
                  href={defaultResume.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-download-btn"
                >
                  <FaDownload /> View Resume
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Certificates Section */}
        <motion.div className="certificates-section" variants={itemVariants}>
          <h3 className="subsection-title">
            <FaAward className="section-icon" />
            Certificates & Achievements
          </h3>
          <div className="certificates-grid">
            {loading ? (
              <div className="loading">Loading...</div>
            ) : certificates.length > 0 ? (
              certificates.map((certificate, index) => (
                <motion.div
                  key={index}
                  className="certificate-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10, rotate: 2 }}
                >
                  <div className="certificate-header">
                    <div className="certificate-icon">
                      <FaAward />
                    </div>
                    <div className="certificate-badge">Verified</div>
                  </div>
                  <h4 className="certificate-title">{certificate.title}</h4>
                  <div className="certificate-info">
                    <div className="certificate-issuer">
                      <FaBuilding /> {certificate.issuer}
                    </div>
                    <div className="certificate-date">
                      <FaCalendarAlt /> {new Date(certificate.issueDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                  {certificate.description && (
                    <p className="certificate-description">{certificate.description}</p>
                  )}
                  {certificate.skills && certificate.skills.length > 0 && (
                    <div className="certificate-skills">
                      {certificate.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-badge">{skill}</span>
                      ))}
                    </div>
                  )}
                  <a
                    href={certificate.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-view-btn"
                  >
                    View Certificate
                  </a>
                </motion.div>
              ))
            ) : (
              <div className="empty-state">
                <FaAward className="empty-icon" />
                <p>No certificates uploaded yet</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ResumeCertificates;

