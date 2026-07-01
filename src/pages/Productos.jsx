import React from 'react';

function Productos() {
  // Enlazado con las imágenes de productos reales de tu proyecto
  const catalogoProductos = [
    { id: 1, nombre: 'Aceite de Tamanu', desc: 'Regenerador celular natural para el rostro.', img: '/imagen/aceite_de_tamanu.jpg' },
    { id: 2, nombre: 'Colágeno en Emulsión', desc: 'Hidratación profunda y elasticidad.', img: '/imagen/colageno_en_emulsion.jpg' },
    { id: 3, nombre: 'Hair Refiller', desc: 'Tratamiento reconstructor capilar intenso.', img: '/imagen/hair_refiller.jpg' },
    { id: 4, nombre: 'Mascarilla Matiz', desc: 'Mantiene el color vibrante y brillante.', img: '/imagen/mascarilla_matiz.jpg' },
    { id: 5, nombre: 'Alasiante Temporal', desc: 'Cabello liso y sin frizz por más tiempo.', img: '/imagen/alasiante_temporal.jpg' },
    { id: 6, nombre: 'Bolso Casual MK', desc: 'Complementa tu estilo con elegancia.', img: '/imagen/bolso_mk.jpg' },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Catálogo de Productos</h2>
      <p className="text-center text-muted mb-5">Lleva la experiencia del spa a tu casa</p>

      <div className="row">
        {catalogoProductos.map(producto => (
          <div key={producto.id} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img src={producto.img} className="card-img-top p-3" alt={producto.nombre} style={{height: '220px', objectFit: 'contain', backgroundColor: '#f8f9fa'}} />
              <div className="card-body text-center border-top">
                <h5 className="card-title text-dark">{producto.nombre}</h5>
                <p className="card-text text-muted small">{producto.desc}</p>
                <button className="btn btn-outline-danger w-100 mt-2">Consultar en Recepción</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;