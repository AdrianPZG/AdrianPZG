// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
// Iconos importados para las tecnologías
import { FaReact, FaVuejs, FaHtml5, FaCss3Alt, FaNodeJs, FaJava, FaDocker, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiExpress, SiMysql, SiGraphql, SiTailwindcss, SiNextdotjs, SiKubernetes, 
  SiPrometheus, SiGrafana, SiGooglecloud, SiAndroid } from 'react-icons/si';
import { DiAndroid } from 'react-icons/di';
import { BsFillPatchCheckFill } from 'react-icons/bs';

// DATOS CONSOLIDADOS
const skillsData = [
  {
    category: 'Frontend',
    items: [
      { name: 'React JS', icon: FaReact, color: '#61DAFB' },
      { name: 'Vue JS', icon: FaVuejs, color: '#61fbbbff' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#1e63f7ff' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'CSS', icon: FaCss3Alt, color: '#19a5e6ff' },
      { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Python', icon: FaPython, color: '#d1cf37ff' },
      { name: 'Node Js', icon: FaNodeJs, color: '#339933' },
      { name: 'Express Js', icon: SiExpress, color: '#000000' },
      { name: 'Java', icon: FaJava, color: '#007396' },
      { name: '.Net ', icon: FaJava, color: '#007396' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'PostgresSQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMysql, color: '#4479A1' },
      { name: 'SqlServer', icon: SiMysql, color: '#4479A1' },
    ],
  },

  {
    category: 'DevOps',
    items: [
      { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
      { name: 'GitHub Actions', icon: FaGitAlt, color: '#2088FF' },
      { name: 'Docker', icon: FaDocker, color: '#0DB7ED' },
      { name: 'Prometheus', icon: SiPrometheus, color: '#E6522C' },
      { name: 'Grafana', icon: SiGrafana, color: '#F46800' },
    ],
  },
  {
    category: 'Android',
    items: [
      { name: 'Kotlin', icon: FaJava, color: '#007396' },
      { name: 'Swift', icon: FaJava, color: '#007396' },
      { name: 'Java', icon: FaJava, color: '#007396' },
      { name: 'React Native', icon: FaReact, color: '#61DAFB' },
    ],
  },
  {
    category: 'Others',
    items: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'GitHub', icon: FaGitAlt, color: '#F05032' },
      { name: 'VsCode', icon: FaGitAlt, color: '#F05032' },
      { name: 'VsCode', icon: FaGitAlt, color: '#F05032' },
      { name: 'Postman', icon: FaGitAlt, color: '#F05032' },
      { name: 'Power BI', icon: FaGitAlt, color: '#F05032' },
      { name: 'AndroidStudio', icon: FaGitAlt, color: '#F05032' },
    ],
  },
];

// Componente interno para cada ítem (con animación)
const SkillItem = ({ skill }) => {
  const IconComponent = skill.icon;
  return (
    <motion.div 
      className="skill-item-row"
      whileHover={{
        scale: 1.05,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <IconComponent 
        size={22}
        style={{ color: skill.color }}
      />
      <span className="skill-name">{skill.name}</span>
    </motion.div>
  );
};

const Skills = () => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };
  
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  };

  return (
    <section id="habilidades" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">Here are some of the technologies I've worked with:</p>
      
      <div className="skills-grid-container">
        {skillsData.map((categoryData) => (
          <div 
            key={categoryData.category} 
            className="skill-category-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <h3 className="category-title">{categoryData.category}</h3>
            
            <div className="category-items-wrapper-list">
              {categoryData.items.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;