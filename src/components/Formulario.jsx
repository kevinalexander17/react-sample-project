
import React, { useState } from 'react';
import '../styles/Formulario.css';


const Formulario = ({ onSubmit }) => {
  const [form, setForm] = useState({
    usuario: '',
    nombres: '',
    correo: '',
    dni: '',
    telefono: '',
    terminos: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.terminos) {
      alert('Debes aceptar los términos y condiciones.');
      return;
    }
    alert('Formulario enviado con éxito');
    onSubmit();
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Usuario:</label>
        <input
          type="text"
          name="usuario"
          value={form.usuario}
          onChange={handleChange}
          pattern="^[0-9]{1,3}c$"
          required
        />
      </div>
      <div className="form-group">
        <label>Nombres:</label>
        <input
          type="text"
          name="nombres"
          value={form.nombres}
          onChange={handleChange}
          pattern="^[A-Z]{3,100}$"
          required
        />
      </div>
      <div className="form-group">
        <label>Correo:</label>
        <input
          type="email"
          name="correo"
          value={form.correo}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>DNI:</label>
        <input
          type="text"
          name="dni"
          value={form.dni}
          onChange={handleChange}
          pattern="^\d{8}$"
          required
        />
      </div>
      <div className="form-group">
        <label>Teléfono:</label>
        <input
          type="text"
          name="telefono"
          value={form.telefono}
          onChange={handleChange}
          pattern="^(9\d{8}|[245]\d{6})$"
          required
        />
      </div>
      <div className="form-group">
        <div className="checkbox-container">
            <input
            type="checkbox"
            name="terminos"
            checked={form.terminos}
            onChange={handleChange}
            />
            <label>Acepto términos y condiciones</label>
        </div>
        </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
