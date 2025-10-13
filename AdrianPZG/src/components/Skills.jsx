import React from 'react';

const Skills = () => {
  const skills = {
    frontend: [
      { name: 'React JS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Vue JS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Tailwind CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
      { name: 'CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'HTML', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    ],
    backend: [
      { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Node Js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express Js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: '.Net', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
      { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgresSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'SqlServer', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    ],
    devops: [
      { name: 'Google Cloud', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { name: 'GitHub Actions', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Prometheus', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
      { name: 'Grafana', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
    ],
    android: [
      { name: 'Kotlin', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
      { name: 'Swift', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
      { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'React Native', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    ],
    others: [
      { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'VsCode', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Postman', img: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
      { name: 'Power BI', img: 'https://www.vectorlogo.zone/logos/microsoft_powerbi/microsoft_powerbi-icon.svg' },
      { name: 'AndroidStudio', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
    ],
  };

  const categories = [
    { title: 'Frontend', key: 'frontend' },
    { title: 'Backend', key: 'backend' },
    { title: 'DevOps', key: 'devops' },
    { title: 'Android', key: 'android' },
    { title: 'Others', key: 'others' },
  ];

  return (
    <section id="habilidades" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">
        Here are some of the technologies I've worked with:
      </p>
      
      <div className="skills-grid-container">
        {categories.map((category) => (
          <div key={category.key} className="skill-category-card">
            <h3 className="category-title">{category.title}</h3>
            
            <div className="category-items-wrapper-list">
              {skills[category.key].map((skill, index) => (
                <div key={index} className="skill-item-row">
                  <img 
                    src={skill.img} 
                    alt={skill.name}
                    width="20"
                    height="20"
                    style={{ objectFit: 'contain' }}
                  />
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;