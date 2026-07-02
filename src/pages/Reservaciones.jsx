import React, { useState } from 'react';

function Reservaciones() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState('');
  const [servicioSeleccionado, setServicioSeleccionado] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');

  const manejarReserva = (e) => {
    e.preventDefault();

    if (!nombre || !telefono || !servicioSeleccionado || !fecha) {
      alert("Por favor completa todos los campos para agendar tu cita.");
      return;
    }

    // Simulamos el envío a una base de datos
    console.log("Reserva capturada:", { nombre, telefono, fecha, servicioSeleccionado });

    setMensajeExito(`¡Listo ${nombre}! Tu solicitud para ${servicioSeleccionado} el día ${fecha} ha sido registrada. Te llamaremos al ${telefono} para confirmar.`);

    // Limpiar formulario
    setNombre('');
    setTelefono('');
    setFecha('');
    setServicioSeleccionado('');

    setTimeout(() => setMensajeExito(''), 6000);
  };

  return (
    <div className="container animate-fade-in" style={{ maxWidth: '640px' }}>
      <div className="text-center mb-4 mt-4">
        <h2 className="text-brand">Agendar una Cita</h2>
        <p className="text-muted mt-2">Déjanos tus datos y nos pondremos en contacto contigo.</p>
      </div>

      {mensajeExito && (
        <div className="alert alert-success shadow-sm" role="alert">
          {mensajeExito}
        </div>
      )}

      <form onSubmit={manejarReserva} className="formulario">
        <div className="row g-3 mb-1">
          <div className="col-md-6 form-grupo">
            <label htmlFor="nombre">Nombre Completo</label>
            <input
              id="nombre"
              type="text"
              placeholder="Ej. Ana López"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="col-md-6 form-grupo">
            <label htmlFor="telefono">Teléfono</label>
            <input
              id="telefono"
              type="tel"
              placeholder="Ej. 55-1234-5678"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
        </div>

        <div className="form-grupo">
          <label htmlFor="fecha">Fecha Deseada</label>
          <input
            id="fecha"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="form-grupo">
          <label htmlFor="servicio">Servicio de Interés</label>
          <select
            id="servicio"
            value={servicioSeleccionado}
            onChange={(e) => setServicioSeleccionado(e.target.value)}
          >
            <option value="" disabled>Selecciona un servicio...</option>
            <option value="Masaje Relajante">Masaje Relajante</option>
            <option value="Tratamiento Facial">Tratamiento Facial</option>
            <option value="Manicura y Pedicura">Manicura y Pedicura</option>
            <option value="Depilación Láser">Depilación Láser</option>
            <option value="Aromaterapia">Aromaterapia Integral</option>
          </select>
        </div>

        <button type="submit" className="btn-submit">
          Confirmar Solicitud
        </button>
      </form>
    </div>
  );
}

export default Reservaciones;
