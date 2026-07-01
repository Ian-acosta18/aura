import React from 'react';

function Servicios() {
  const catalogo = [
    { nombre: 'Masaje Relajante', precio: '$850 MXN', desc: 'Terapia térmica para relajar músculos profundos.' },
    { nombre: 'Tratamiento Facial', precio: '$1,200 MXN', desc: 'Limpieza e hidratación con ácido hialurónico.' }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Servicios</h2>
      <div className="row">
        {catalogo.map((s, i) => (
          <div key={i} className="col-md-6">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="text-danger">{s.nombre}</h5>
                <p>{s.desc}</p>
                <span className="badge bg-danger">{s.precio}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Servicios;