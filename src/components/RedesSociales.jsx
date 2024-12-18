import React from 'react';
import '../styles/RedesSociales.css';


const RedesSociales = () => {
  const redes = ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'];

  return (
    <div className="redes-sociales">
      {redes.map((red) => (
        <a
          key={red}
          href="#"
          className="red-enlace"
        >
          {red}
        </a>
      ))}
    </div>
  );
};

export default RedesSociales;
