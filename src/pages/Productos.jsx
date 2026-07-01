import React from 'react';

function Productos() {
  const catalogoProductos = [
    { id: 1, nombre: 'Aceite de Tamanu', desc: 'Regenerador celular natural para el rostro.', img: '/imagen/aceite_de_tamanu.jpg' },
    { id: 2, nombre: 'Colágeno en Emulsión', desc: 'Hidratación profunda y elasticidad.', img: '/imagen/colageno_en_emulsion.jpg' },
    { id: 3, nombre: 'Hair Refiller', desc: 'Tratamiento reconstructor capilar intenso.', img: '/imagen/hair_refiller.jpg' },
    { id: 4, nombre: 'Mascarilla Matiz', desc: 'Mantiene el color vibrante y brillante.', img: '/imagen/mascarilla_matiz.jpg' },
    { id: 5, nombre: 'Alasiante Temporal', desc: 'Cabello liso y sin frizz.', img: '/imagen/alasiante_temporal.jpg' },
    { id: 6, nombre: 'Bolso Casual MK', desc: 'Complementa tu estilo.', img: '/imagen/bolso_mk.jpg' },
  ];

  return (
    <div className="container mx-auto px-4 mt-10 mb-16 max-w-6xl animate-fade-in w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">Catálogo Exclusivo</h2>
        <p className="text-lg text-gray-500">Lleva la experiencia del spa a tu hogar</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {catalogoProductos.map(producto => (
          <div key={producto.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="h-64 bg-stone-100 flex items-center justify-center p-6 relative">
              <img 
                src={producto.img} 
                className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" 
                alt={producto.nombre} 
                onError={(e) => { e.target.onerror = null; e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(producto.nombre)}&background=e7e5e4&color=44403c&size=300`; }}
              />
            </div>
            <div className="p-6 text-center flex-grow flex flex-col justify-between">
              <div>
                <h5 className="font-bold text-xl text-gray-800 mb-2">{producto.nombre}</h5>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{producto.desc}</p>
              </div>
              <button className="w-full py-3 bg-pink-50 text-pink-600 font-bold rounded-xl hover:bg-pink-600 hover:text-white transition-colors duration-300">
                Consultar Disponibilidad
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;