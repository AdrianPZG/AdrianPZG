import React from 'react';


const Experience = () => {
    // This is where you would define your timeline events
    const timelineEvents = [
        {
            date: 'July 2024 - Oct 2024',
            title: 'Developer Web',
            company: 'Brefh Asesores',
            description: 'Development of the website for the company "Brefh Asesores." During my involvement in this project, I worked as a front-end developer. I used tools such as React to create and layout the site',
            skills: ['ReactJS', 'Node.js', 'MongoDB', 'HTML', 'CSS', 'JavaScript', 'TypeScript','E2E Testing', 'Git']
        },
        {
            date: 'July 2024 - Oct 2024',
            title: 'Data Analyst',
            company: 'MoneyBack',
            description: 'I served as a data analyst for the areas in which MoneyBack operates, managing the database, cleaning, comparing, and debugging data for better understanding and user control. I used everyday tools such as Excel, as well as Python with Pandas to work with complex tabular data, and Numpy for efficient numerical calculations with multidimensional arrays. To visualize this data, I used tools such as Power BI.',
            skills: ['Python', 'Power BI', 'Excel']
        },
        {
            date: 'July 2025 - Actually',
            title: 'Fullstack Developer',
            company: 'GTAC',
            description: 'Completed a React Native course, where I developed on apps that run on android and IOS, and on code. Gained hands-on experience in building cross-platform mobile applications, creating intuitive user interfaces, and integrating with backend services. Focused on optimizing performance and user experience on mobile devices.',
            skills: ['React Native', 'JavaScript', 'DevOPS', 'Docker', 'Python', 'Github ACtions', 'Prometheus']
        },
        
    ];

    return (
        <section id="experience" className='section-experience'>
            <div className='experience-header'>
                <h2 className='title-experience section-title'>Experience & Education</h2>
                <p className='subtitle-experience section-subtitle'>
                    I studied programming in high school. Since then, I've been improving my skills for the past five years, 
                    taking courses and recently working as a software developer. 
                    I'm currently continuing my studies in computer systems engineering.
                </p>
            </div>

            <div className="timeline-container">
                {timelineEvents.map((event, index) => (
                    <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="timeline-dot"></div>
                        <div className="timeline-content skill-category-card"> {}
                            <span className="timeline-date">{event.date}</span>
                            <h3 className="timeline-title">{event.title}</h3>
                            <p className="timeline-institution">{event.institution}</p>
                            <p className="timeline-description">{event.description}</p>
                            <div className="timeline-skills category-items-wrapper-list"> {}
                                {event.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-item-row skill-pill">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;