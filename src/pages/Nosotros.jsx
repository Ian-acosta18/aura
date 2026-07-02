import React from 'react';

function Nosotros() {
  return (
    <div className="container mt-5 animate-fade-in">
      <h2 className="text-center text-brand mb-5">Sobre Nosotros</h2>
      <div className="card shadow-sm border-0 p-4 p-md-5">
        <p className="lead text-center mb-5">
          En <strong>Aura Beauty & Spa</strong>, nuestra filosofía es crear un espacio donde la belleza y el bienestar convergen. Con años de experiencia en el sector, nuestro equipo de profesionales está altamente capacitado para brindarte una experiencia inolvidable.
        </p>
        <div className="row text-center">
          <div className="col-md-6 mb-4">
            <h4 className="text-brand">Nuestra Misión</h4>
            <p className="text-muted">Proporcionar servicios de estética y relajación de la más alta calidad, utilizando productos vanguardistas para realzar la belleza natural de cada uno de nuestros clientes.</p>
          </div>
          <div className="col-md-6 mb-4">
            <h4 className="text-brand">Nuestra Visión</h4>
            <p className="text-muted">Ser reconocidos como el Spa líder en innovación, atención al cliente y confort, creando tendencias en el cuidado personal y bienestar integral.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;