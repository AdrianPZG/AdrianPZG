// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">AdrianPZG</div>
                <ul>
                    <li><a href="#hero-container">About</a></li>
                    <li><a href="#habilidades">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contacto">Proyects</a></li>
                    <li><a href="#contacto">Contact</a></li>
                </ul>
                <a 
                href="https://github.com/AdrianPZG" target="_blank" rel="noopener noreferrer" className="button">GitHub
                </a>
        </nav>
    );
};

export default Navbar;