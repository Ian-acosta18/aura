import React, { useState } from 'react';

function Reservaciones() {
  const [datos, setDatos] = useState({ nombre: '', telefono: '', fecha: '', servicio: '' });
  const [estado, setEstado] = useState({ tipo: '', mensaje: '' });

  const manejarEnvio = (e) => {
    e.preventDefault();
    if(!datos.nombre || !datos.telefono || !datos.fecha || !datos.servicio) {
      setEstado({ tipo: 'error', mensaje: 'Por favor completa todos los campos requeridos.' });
      setTimeout(() => setEstado({ tipo: '', mensaje: '' }), 4000);
      return;
    }
    setEstado({ tipo: 'exito', mensaje: `¡Cita solicitada con éxito, ${datos.nombre}! Nos comunicaremos al ${datos.telefono} para confirmarla.` });
    setDatos({ nombre: '', telefono: '', fecha: '', servicio: '' });
    setTimeout(() => setEstado({ tipo: '', mensaje: '' }), 6000);
  };

  return (
    <div className="container mx-auto px-4 mt-10 mb-16 max-w-2xl w-full animate-fade-in">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">Reserva tu Cita</h2>
        <p className="text-lg text-gray-500">Asegura tu espacio de relajación hoy mismo</p>
      </div>

      {estado.mensaje && (
        <div className={`p-5 mb-8 rounded-2xl flex items-start gap-4 ${estado.tipo === 'exito' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
          <i className={`text-2xl mt-0.5 ${estado.tipo === 'exito' ? 'ph-fill ph-check-circle text-green-500' : 'ph-fill ph-warning-circle text-red-500'}`}></i>
          <p className="font-medium">{estado.mensaje}</p>
        </div>
      )}

      <div className="bg-white shadow-xl rounded-3xl p-8 md:p-10 border border-gray-50">
        <form onSubmit={manejarEnvio} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo</label>
            <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none" value={datos.nombre} onChange={e => setDatos({...datos, nombre: e.target.value})} placeholder="Ej. Ana García" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Teléfono</label>
              <input type="tel" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none" value={datos.telefono} onChange={e => setDatos({...datos, telefono: e.target.value})} placeholder="Ej. 55 1234 5678" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Fecha Deseada</label>
              <input type="date" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none" value={datos.fecha} onChange={e => setDatos({...datos, fecha: e.target.value})} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Servicio de Interés</label>
            <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none" value={datos.servicio} onChange={e => setDatos({...datos, servicio: e.target.value})}>
              <option value="" disabled>Selecciona un servicio...</option>
              <option value="Masaje Relajante">Masaje Relajante</option>
              <option value="Facial">Tratamiento Facial</option>
              <option value="Manicura/Pedicura">Manicura y Pedicura</option>
              <option value="Depilacion">Depilación Láser</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all">
            Confirmar Reserva
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reservaciones;