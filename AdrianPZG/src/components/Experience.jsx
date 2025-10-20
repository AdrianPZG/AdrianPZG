import React, { useEffect, useRef, useState } from 'react';

const Experience = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const [lineHeight, setLineHeight] = useState(0);
    const itemRefs = useRef([]);
    const lineRef = useRef(null);

    const timelineEvents = [
        {
            date: 'July 2024 - Oct 2024',
            title: 'Developer Web',
            company: 'Brefh Asesores',
            logo: '/logos/brefh.png', // Agrega tu ruta de logo aquí
            description: 'Development of the website for the company "Brefh Asesores." During my involvement in this project, I worked as a front-end developer. I used tools such as React to create and layout the site',
            skills: ['ReactJS', 'Node.js', 'MongoDB', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'E2E Testing', 'Git']
        },
        {
            date: 'July 2024 - Oct 2024',
            title: 'Data Analyst',
            company: 'MoneyBack',
            logo: '/logos/moneyback.png',
            description: 'I served as a data analyst for the areas in which MoneyBack operates, managing the database, cleaning, comparing, and debugging data for better understanding and user control. I used everyday tools such as Excel, as well as Python with Pandas to work with complex tabular data, and Numpy for efficient numerical calculations with multidimensional arrays. To visualize this data, I used tools such as Power BI.',
            skills: ['Python', 'Power BI', 'Excel']
        },
        {
            date: 'July 2025 - Actually',
            title: 'Fullstack Developer',
            company: 'GTAC',
            logo: '/logos/gtac.png',
            description: 'Completed a React Native course, where I developed on apps that run on android and IOS, and on code. Gained hands-on experience in building cross-platform mobile applications, creating intuitive user interfaces, and integrating with backend services. Focused on optimizing performance and user experience on mobile devices.',
            skills: ['React Native', 'JavaScript', 'DevOPS', 'Docker', 'Python', 'Github Actions', 'Prometheus']
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            itemRefs.current.forEach((ref, index) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    const isVisible = rect.top < window.innerHeight * 0.8;
                    
                    if (isVisible && !visibleItems.includes(index)) {
                        setTimeout(() => {
                            setVisibleItems((prev) => [...prev, index]);
                        }, index * 200);
                    }
                }
            });

            // Actualizar altura de la línea
            if (lineRef.current) {
                const scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
                const maxHeight = lineRef.current.parentElement.offsetHeight;
                setLineHeight(Math.min(scrollPercentage * maxHeight * 1.5, maxHeight));
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Llamar una vez al inicio

        return () => window.removeEventListener('scroll', handleScroll);
    }, [visibleItems]);

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
                {/* Línea animada */}
                <div 
                    ref={lineRef}
                    className="timeline-line-animated" 
                    style={{ height: `${lineHeight}px` }}
                ></div>

                {timelineEvents.map((event, index) => (
                    <div
                        key={index}
                        ref={(el) => (itemRefs.current[index] = el)}
                        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${
                            visibleItems.includes(index) ? 'timeline-item-visible' : ''
                        }`}
                    >
                        <div className="timeline-dot">
                            {event.logo && (
                                <img 
                                    src={event.logo} 
                                    alt={event.company} 
                                    className="timeline-dot-logo" 
                                />
                            )}
                        </div>
                        <div className="timeline-content skill-category-card">
                            <div className="timeline-content-header">
                                <span className="timeline-date">{event.date}</span>
                                <div className="timeline-title-group">
                                    {event.logo && (
                                        <img 
                                            src={event.logo} 
                                            alt={event.company} 
                                            className="timeline-card-logo" 
                                        />
                                    )}
                                    <h3 className="timeline-title">{event.title}</h3>
                                </div>
                            </div>
                            <p className="timeline-company">{event.company}</p>
                            <p className="timeline-description">{event.description}</p>
                            <div className="timeline-skills category-items-wrapper-list">
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