import React, {useState} from 'react';
import './App.css';
import FechaHora from './components/FechaHora';
import NombreEmpresa from './components/NombreEmpresa';
import Carrusel from './components/Carrusel';
import Formulario from './components/Formulario';
import RedesSociales from './components/RedesSociales';

const App = () => {
  const [formVisible, setFormVisible] = useState(true);
  return (
    <div className="app">
      <header className="app-header">
        <FechaHora/>
        <NombreEmpresa />
        <Carrusel />
      </header>
      {formVisible && <Formulario onSubmit={() => setFormVisible(false)} />}
      <footer className="app-footer">
        <RedesSociales />
      </footer>
    </div>
  );
}

export default App;
