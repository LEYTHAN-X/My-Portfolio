import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCode, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: 'National Level Hackathon',
      position: '8th Position',
      date: 'Jan. 2025',
      location: 'Hyderabad',
      icon: <FaTrophy />,
      description: 'Secured 8th place among 200+ teams in a 36-hour hackathon, developing a vehicle count system using YOLO, processing 1,000+ vehicles/hour. Optimized traffic flow by 15% in simulations through dynamic traffic light control. Presented to 10+ judges, earning praise for innovation and technical execution.',
      highlights: ['200+ Teams', '36-Hour Event', '1,000+ Vehicles/Hour', '15% Traffic Optimization']
    },
    {
      title: 'IIT Bhubaneswar - WebnD',
      position: 'Frontend Battle 2.0 Finalist',
      date: 'Jun. 2025',
      location: 'Bhubaneswar',
      icon: <FaMedal />,
      description: 'Finalist among 150+ participants in UI/UX competition, redesigning Insight App UI in 48 hours. Improved UI responsiveness by 40% using HTML, CSS, and JavaScript, supporting 5+ device types. Earned Certificate of Merit for top 5% performance in design and coding. Reduced UI load time by 20% through optimized CSS and JavaScript.',
      highlights: ['150+ Participants', 'Top 5% Performance', '40% Responsiveness', '20% Faster Load Time']
    },
    {
      title: 'LeetCode',
      position: '300+ Problems Solved',
      date: 'Ongoing',
      location: 'Online',
      icon: <FaCode />,
      description: 'Solved 300+ problems, including 100+ medium and 50+ hard problems, improving algorithm efficiency by 30% on average. Achieved a top 20% ranking in weekly coding contests among 10,000+ participants.',
      highlights: ['300+ Problems', '100+ Medium', '50+ Hard', 'Top 20% Ranking']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
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
    <section id="achievements" className="achievements">
      <motion.div
        className="achievements-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Achievements
        </motion.h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="achievement-icon-wrapper">
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-badge">{achievement.position}</div>
              </div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <div className="achievement-meta">
                <span className="achievement-date">
                  <FaCalendarAlt /> {achievement.date}
                </span>
                <span className="achievement-location">
                  <FaMapMarkerAlt /> {achievement.location}
                </span>
              </div>
              <p className="achievement-description">{achievement.description}</p>
              <div className="achievement-highlights">
                {achievement.highlights.map((highlight, highlightIndex) => (
                  <span key={highlightIndex} className="highlight-badge">{highlight}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;

