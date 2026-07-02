import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Instalaciones from './pages/Instalaciones';
import Servicios from './pages/Servicios';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import Reservaciones from './pages/Reservaciones';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 bg-light">
        <Navbar />
        <main className="flex-fill pb-5">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/instalaciones" element={<Instalaciones />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/reservaciones" element={<Reservaciones />} />
          </Routes>
        </main>
        <footer className="footer-aura py-5 mt-auto">
          <div className="container text-center">
            <p className="footer-brand mb-3">Aura Beauty & Spa</p>
            <p className="mb-1">Av. Siempre Viva 123, Colonia Centro · +52 55 1234 5678</p>
            <p className="mb-0 small opacity-75">© 2024 Aura Beauty & Spa. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
