import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaDatabase,
  FaReact, FaNode, FaGitAlt, FaGithub, FaNpm
} from 'react-icons/fa';
import { 
  SiCplusplus, SiC, SiExpress, SiTailwindcss, SiMysql, SiVite, SiPnpm, SiVisualstudiocode 
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const getSkillIcon = (name) => {
    const iconMap = {
      'C': <SiC />,
      'C++': <SiCplusplus />,
      'Python': <FaPython />,
      'Java': <FaJava />,
      'JavaScript': <FaJs />,
      'HTML': <FaHtml5 />,
      'CSS': <FaCss3Alt />,
      'SQL': <FaDatabase />,
      'React.js': <FaReact />,
      'Node.js': <FaNode />,
      'Express.js': <SiExpress />,
      'Tailwind CSS': <SiTailwindcss />,
      'Git': <FaGitAlt />,
      'GitHub': <FaGithub />,
      'Vite': <SiVite />,
      'NPM': <FaNpm />,
      'PNPM': <SiPnpm />,
      'VS Code': <SiVisualstudiocode />,
      'MySQL': <SiMysql />,
    };
    return iconMap[name] || <FaCode />;
  };

  const languages = [
    { name: 'C', level: 85, icon: getSkillIcon('C') },
    { name: 'C++', level: 90, icon: getSkillIcon('C++') },
    { name: 'Python', level: 80, icon: getSkillIcon('Python') },
    { name: 'Java', level: 85, icon: getSkillIcon('Java') },
    { name: 'JavaScript', level: 90, icon: getSkillIcon('JavaScript') },
    { name: 'HTML', level: 95, icon: getSkillIcon('HTML') },
    { name: 'CSS', level: 95, icon: getSkillIcon('CSS') },
    { name: 'SQL', level: 80, icon: getSkillIcon('SQL') },
  ];

  const frameworks = [
    { name: 'React.js', level: 90, icon: getSkillIcon('React.js') },
    { name: 'Node.js', level: 85, icon: getSkillIcon('Node.js') },
    { name: 'Express.js', level: 85, icon: getSkillIcon('Express.js') },
    { name: 'Tailwind CSS', level: 80, icon: getSkillIcon('Tailwind CSS') },
  ];

  const tools = [
    { name: 'Git', level: 90, icon: getSkillIcon('Git') },
    { name: 'GitHub', level: 90, icon: getSkillIcon('GitHub') },
    { name: 'Vite', level: 85, icon: getSkillIcon('Vite') },
    { name: 'NPM', level: 85, icon: getSkillIcon('NPM') },
    { name: 'PNPM', level: 80, icon: getSkillIcon('PNPM') },
    { name: 'VS Code', level: 95, icon: getSkillIcon('VS Code') },
    { name: 'MySQL', level: 80, icon: getSkillIcon('MySQL') },
  ];

  const skills = [...languages, ...frameworks, ...tools];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.05
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
    <section id="skills" className="skills">
      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Skills
        </motion.h2>
        <motion.div className="skills-grid" variants={containerVariants}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="skill-icon-wrapper">
                <div className="skill-icon">{skill.icon}</div>
              </div>
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;

