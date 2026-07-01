import React, { useState } from 'react';

function Contacto() {
  const [datos, setDatos] = useState({ nombre: '', correo: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();
    if(!datos.nombre || !datos.correo || !datos.mensaje) return alert("Completa todos los campos.");
    setEnviado(true);
    setDatos({ nombre: '', correo: '', mensaje: '' });
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Contáctanos</h2>
      <div className="row">
        <div className="col-md-5 mb-4">
          <div className="card shadow-sm border-0 bg-light h-100">
            <div className="card-body p-4">
              <h4 className="text-danger mb-4">Información de Contacto</h4>
              <p>📍 Av. Siempre Viva 123, Colonia Centro</p>
              <p>📞 +52 55 1234 5678</p>
              <p>✉️ contacto@aurabeautyspa.com</p>
              <p>🕒 Lunes a Sábado: 9:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
        <div className="col-md-7 mb-4">
          {enviado && <div className="alert alert-success">¡Mensaje enviado con éxito!</div>}
          <div className="card shadow-sm h-100">
            <div className="card-body p-4">
              <form onSubmit={manejarEnvio}>
                <div className="form-group mb-3">
                  <label>Nombre</label>
                  <input type="text" className="form-control" value={datos.nombre} onChange={e => setDatos({...datos, nombre: e.target.value})} />
                </div>
                <div className="form-group mb-3">
                  <label>Correo Electrónico</label>
                  <input type="email" className="form-control" value={datos.correo} onChange={e => setDatos({...datos, correo: e.target.value})} />
                </div>
                <div className="form-group mb-4">
                  <label>Mensaje</label>
                  <textarea rows="4" className="form-control" value={datos.mensaje} onChange={e => setDatos({...datos, mensaje: e.target.value})}></textarea>
                </div>
                <button type="submit" className="btn btn-dark w-100">Enviar Mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;