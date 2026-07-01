import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const getLinkClass = (path) => location.pathname === path ? "nav-link active font-weight-bold" : "nav-link";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand text-danger font-weight-bold" to="/">AURA BEAUTY & SPA</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className={getLinkClass('/')} to="/">Inicio</Link></li>
            <li className="nav-item"><Link className={getLinkClass('/instalaciones')} to="/instalaciones">Instalaciones</Link></li>
            <li className="nav-item"><Link className={getLinkClass('/servicios')} to="/servicios">Servicios</Link></li>
            <li className="nav-item"><Link className={getLinkClass('/productos')} to="/productos">Productos</Link></li>
            <li className="nav-item"><Link className={getLinkClass('/reservaciones')} to="/reservaciones" className="btn btn-danger">Reservar</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;