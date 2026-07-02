import React from 'react';
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <div className="container animate-fade-in">
      <div className="hero-inicio">
        <div className="hero-imagen-decorativa">
          <img src="/imagen/spa1.jpg" alt="Interior del spa Aura Beauty & Spa" />
        </div>
        <div className="hero-contenido-inicio">
          <h1>Bienvenido a Aura Beauty & Spa</h1>
          <p>
            Descubre tu mejor versión en nuestro santuario de belleza y relajación.
            Ofrecemos tratamientos exclusivos diseñados para revitalizar tu cuerpo y
            mente, en un ambiente pensado para tu paz interior.
          </p>
          <Link to="/reservaciones" className="btn-inicio-reserva">
            Agenda tu Cita
          </Link>
        </div>
      </div>

      <div className="row g-4 mt-3 mb-5">
        <div className="col-md-6">
          <div className="feature-card">
            <div className="feature-icon">🌸</div>
            <h3 className="text-brand h4 mb-2">Relajación Total</h3>
            <p className="text-muted mb-0">
              Masajes terapéuticos, aromaterapia y circuitos de agua para liberar la
              tensión acumulada.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3 className="text-brand h4 mb-2">Cuidado Estético</h3>
            <p className="text-muted mb-0">
              Tratamientos faciales rejuvenecedores, limpieza profunda y cuidado
              corporal avanzado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
