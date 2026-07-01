import React from 'react';

function Inicio() {
  return (
    <div className="p-8 text-center animate-fade-in flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-6">Bienvenido a Aura Beauty & Spa</h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Descubre tu mejor versión en nuestro santuario de belleza y relajación. 
        Ofrecemos tratamientos exclusivos diseñados para revitalizar tu cuerpo y mente, en un ambiente diseñado para tu paz interior.
      </p>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <div className="bg-pink-50 p-8 rounded-xl border border-pink-100 hover:shadow-md transition-shadow text-left">
          <div className="text-3xl mb-4">🌸</div>
          <h3 className="font-semibold text-pink-800 text-2xl mb-2">Relajación Total</h3>
          <p className="text-gray-600">Masajes terapéuticos, aromaterapia y circuitos de agua para liberar la tensión acumulada.</p>
        </div>
        <div className="bg-purple-50 p-8 rounded-xl border border-purple-100 hover:shadow-md transition-shadow text-left">
          <div className="text-3xl mb-4">✨</div>
          <h3 className="font-semibold text-purple-800 text-2xl mb-2">Cuidado Estético</h3>
          <p className="text-gray-600">Tratamientos faciales rejuvenecedores, limpieza profunda y cuidado corporal avanzado.</p>
        </div>
      </div>
    </div>
  );
}

export default Inicio;