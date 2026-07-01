import React from 'react';

function Instalaciones() {
  // Enlazado con las imágenes reales de tu repositorio Laravel
  const galeria = [
    { id: 1, titulo: 'Área de Spa y Relajación', img: '/imagen/spa_cama_lacer.jpg' },
    { id: 2, titulo: 'Cabina de Láser', img: '/imagen/spa_lacer_verde.jpg' },
    { id: 3, titulo: 'Estación de Uñas', img: '/imagen/spa_uñas_aura.jpg' },
    { id: 4, titulo: 'Área de Estilismo', img: '/imagen/spa_fondo_trabajo.jpg' },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Nuestras Instalaciones</h2>
      <p className="text-center text-muted mb-5">Conoce los espacios diseñados especialmente para tu confort</p>
      
      <div className="row">
        {galeria.map(item => (
          <div key={item.id} className="col-md-6 mb-4">
            <div className="card shadow-sm border-0 h-100">
              <img src={item.img} className="card-img-top" alt={item.titulo} style={{height: '250px', objectFit: 'cover'}} />
              <div className="card-body bg-light text-center">
                <h5 className="card-title m-0 text-dark">{item.titulo}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Instalaciones;