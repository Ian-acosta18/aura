import React from 'react';
import { useNavigate } from 'react-router-dom';

function Servicios() {
  const navigate = useNavigate();
  const catalogo = [
    { id: 1, categoria: 'Spa', nombre: 'Masaje Relajante con Piedras', precio: '$850 MXN', desc: 'Terapia térmica para relajar músculos profundos y liberar tensión.' },
    { id: 2, categoria: 'Facial', nombre: 'Tratamiento Facial Anti-Edad', precio: '$1,200 MXN', desc: 'Limpieza profunda e hidratación con ácido hialurónico.' },
    { id: 3, categoria: 'Estética', nombre: 'Manicura y Pedicura Spa', precio: '$600 MXN', desc: 'Cuidado completo con exfoliación y esmaltado de larga duración.' },
    { id: 4, categoria: 'Láser', nombre: 'Depilación Definitiva', precio: '$950 MXN', desc: 'Sesión indolora con tecnología diodo de última generación.' }
  ];

  return (
    <div className="container mx-auto px-4 mt-10 mb-16 max-w-5xl animate-fade-in w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">Nuestros Servicios</h2>
        <p className="text-lg text-gray-500">Tratamientos diseñados para tu bienestar absoluto</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {catalogo.map((s) => (
          <div key={s.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-pink-200 transition-all flex flex-col relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-pink-50 text-pink-600 text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                {s.categoria}
             </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 pr-10">{s.nombre}</h3>
            <p className="text-gray-500 mb-6 flex-grow">{s.desc}</p>
            <div className="flex justify-between items-center pt-6 border-t border-gray-100">
              <span className="text-2xl font-black text-pink-600">{s.precio}</span>
              <button onClick={() => navigate('/reservaciones')} className="text-gray-900 font-bold hover:text-pink-600 transition-colors">
                Agendar <i className="ph-bold ph-arrow-right"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicios;