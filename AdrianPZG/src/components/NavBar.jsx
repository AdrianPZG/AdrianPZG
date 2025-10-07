// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">AdrianPZG</div>
                <ul>
                    <li><a href="#inicio">About</a></li>
                    <li><a href="#acerca-de">Skills</a></li>
                    <li><a href="#proyectos">Experience</a></li>
                    <li><a href="#contacto">Proyects</a></li>
                    <li><a href="#contacto">Contact</a></li>
                </ul>
                <a 
                href="https://github.com/AdrianPZG" target="_blank" rel="noopener noreferrer" className="button">GitHUb
                </a>
        </nav>
    );
};

export default Navbar;