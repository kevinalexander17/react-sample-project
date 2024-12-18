import React, { useState, useEffect } from 'react';
import '../styles/NombreEmpresa.css';

const NombreEmpresa = () => {
  const [color, setColor] = useState('#000');

  useEffect(() => {
    const colors = Array.from({ length: 150 }, () => `#${Math.floor(Math.random() * 16777215).toString(16)}`);
    let index = 0;
    const interval = setInterval(() => {
      setColor(colors[index]);
      index = (index + 1) % colors.length;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h1 className="nombre-empresa" style={{ color }}>Los Intocables</h1>;
};

export default NombreEmpresa;
