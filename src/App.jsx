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
      <div className="min-h-screen bg-stone-50 font-sans antialiased flex flex-col">
        <Navbar />
        
        <main className="flex-grow flex flex-col items-center w-full">
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

        <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 mt-auto border-t-[6px] border-pink-600">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="font-serif text-2xl text-white mb-2 tracking-widest">AURA <span className="font-sans text-lg text-pink-500">SPA</span></h3>
            <p className="text-sm text-gray-500">© 2024 Todos los derechos reservados. Desarrollado con React.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;