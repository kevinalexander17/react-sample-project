import React, { useState, useEffect } from "react";
import '../styles/FechaHora.css';

const FechaHora = () => {
    const [fechaHora, setFechaHora] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setFechaHora(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatFechaHora = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  return <div className="fecha-hora">{formatFechaHora(fechaHora)}</div>;
}

export default FechaHora;
