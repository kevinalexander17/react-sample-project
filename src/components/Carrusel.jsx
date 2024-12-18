
import React, { useState, useEffect } from 'react';
import '../styles/Carrusel.css';


const Carrusel = () => {
  const images = [
    '/img/img01.jpg',
    '/img/img02.jpg',    
    '/img/img03.jpg',
    '/img/img04.jpg'
];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carrusel">
      <img src={images[index]} alt={`Carrusel ${index + 1}`} />
    </div>
  );
};

export default Carrusel;
