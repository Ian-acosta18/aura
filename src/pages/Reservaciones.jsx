import React, { useState } from 'react';

function Reservaciones() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState('');
  const [servicioSeleccionado, setServicioSeleccionado] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');

  const manejarReserva = (e) => {
    e.preventDefault(); 
    
    if(!nombre || !telefono || !servicioSeleccionado || !fecha) {
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
    <div className="p-8 max-w-2xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Agendar una Cita</h2>
        <p className="text-gray-500 mt-2">Déjanos tus datos y nos pondremos en contacto contigo.</p>
      </div>
      
      {mensajeExito && (
        <div className="bg-green-50 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded shadow-sm">
          <p className="font-medium">{mensajeExito}</p>
        </div>
      )}

      <form onSubmit={manejarReserva} className="bg-white shadow-md rounded-xl p-8 border border-gray-100">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre Completo</label>
            <input 
              id="nombre" type="text" placeholder="Ej. Ana López" 
              className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
              value={nombre} onChange={(e) => setNombre(e.target.value)} 
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">Teléfono</label>
            <input 
              id="telefono" type="tel" placeholder="Ej. 55-1234-5678" 
              className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
              value={telefono} onChange={(e) => setTelefono(e.target.value)} 
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fecha">Fecha Deseada</label>
          <input 
            id="fecha" type="date" 
            className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
            value={fecha} onChange={(e) => setFecha(e.target.value)} 
          />
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="servicio">Servicio de Interés</label>
          <select 
            id="servicio"
            className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent bg-white"
            value={servicioSeleccionado} onChange={(e) => setServicioSeleccionado(e.target.value)}
          >
            <option value="" disabled>Selecciona un servicio...</option>
            <option value="Masaje Relajante">Masaje Relajante</option>
            <option value="Tratamiento Facial">Tratamiento Facial</option>
            <option value="Manicura y Pedicura">Manicura y Pedicura</option>
            <option value="Depilación Láser">Depilación Láser</option>
            <option value="Aromaterapia">Aromaterapia Integral</option>
          </select>
        </div>

        <button 
          type="submit" 
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-md text-lg"
        >
          Confirmar Solicitud
        </button>
      </form>
    </div>
  );
}

export default Reservaciones;