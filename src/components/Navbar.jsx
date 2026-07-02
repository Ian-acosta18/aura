import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const getLinkClass = (path) =>
    location.pathname === path ? "nav-link active fw-bold" : "nav-link";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand navbar-brand-aura" to="/">
          AURA BEAUTY & SPA
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarAura"
          aria-controls="navbarAura"
          aria-expanded="false"
          aria-label="Abrir menú de navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarAura">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link className={getLinkClass('/')} to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className={getLinkClass('/nosotros')} to="/nosotros">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className={getLinkClass('/instalaciones')} to="/instalaciones">Instalaciones</Link>
            </li>
            <li className="nav-item">
              <Link className={getLinkClass('/servicios')} to="/servicios">Servicios</Link>
            </li>
            <li className="nav-item">
              <Link className={getLinkClass('/productos')} to="/productos">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className={getLinkClass('/contacto')} to="/contacto">Contacto</Link>
            </li>
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <Link className="btn btn-brand w-100" to="/reservaciones">Reservar</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
