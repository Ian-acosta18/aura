import React from 'react';

function Instalaciones() {
  const galeria = [
    { id: 1, titulo: 'Área de Spa y Relajación', img: '/imagen/spa_cama_lacer.jpg' },
    { id: 2, titulo: 'Cabina de Láser', img: '/imagen/spa_lacer_verde.jpg' },
    { id: 3, titulo: 'Estación de Uñas', img: '/imagen/spa_uñas_aura.jpg' },
    { id: 4, titulo: 'Área de Estilismo', img: '/imagen/spa_fondo_trabajo.jpg' },
    { id: 5, titulo: 'Recepción Principal', img: '/imagen/spa1.jpg' },
    { id: 6, titulo: 'Sala de Espera', img: '/imagen/spa2.jpg' },
  ];

  return (
    <div className="container mx-auto px-4 mt-10 mb-16 max-w-6xl animate-fade-in w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">Nuestras Instalaciones</h2>
        <p className="text-lg text-gray-500">Espacios diseñados para tu confort y paz interior</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galeria.map(item => (
          <div key={item.id} className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100">
            <div className="relative h-72 overflow-hidden bg-pink-50">
              <img 
                src={item.img} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={item.titulo} 
                onError={(e) => { e.target.onerror = null; e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.titulo)}&background=fce7f3&color=db2777&size=400`; }}
              />
            </div>
            <div className="p-6 text-center">
              <h5 className="font-bold text-xl text-gray-800">{item.titulo}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Instalaciones;