// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">AdrianPZG</div>
                <ul>
                    <li><a href="#inicio">About</a></li>
                    <li><a href="#acerca-de">Skills</a></li>
                    <li><a href="#proyectos">Expirience</a></li>
                    <li><a href="#contacto">Proyects</a></li>
                    <li><a href="#contacto">Contact</a></li>
                </ul>
      {/* TODO: Aquí irá el botón para el cambio de tema oscuro/claro */}
        </nav>
    );
};

export default Navbar;