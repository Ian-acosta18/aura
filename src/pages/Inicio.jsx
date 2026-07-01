import React from 'react';
import { useNavigate } from 'react-router-dom';

function Inicio() {
  const navigate = useNavigate();

  return (
    <div className="p-4 md:p-8 text-center animate-fade-in flex flex-col items-center justify-center min-h-[75vh] w-full">
      <div className="bg-white/80 backdrop-blur-md p-8 md:p-14 rounded-3xl shadow-2xl border border-white max-w-4xl w-full relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300"></div>
        
        <h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-6 pb-2">
          Aura Beauty & Spa
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
          Descubre tu mejor versión en nuestro santuario. Tratamientos exclusivos diseñados para revitalizar tu cuerpo y mente.
        </p>
        
        <button 
          onClick={() => navigate('/reservaciones')}
          className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all transform hover:-translate-y-1 text-lg flex items-center gap-2 mx-auto"
        >
          <i className="ph-fill ph-calendar-plus text-2xl"></i> Reserva tu Experiencia
        </button>
      </div>
    </div>
  );
}

export default Inicio;