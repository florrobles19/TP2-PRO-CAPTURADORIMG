// src/components/RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    email: '',
    nombre: '',
    apellido: '',
    fechaRegistro: new Date().toISOString().split('T')[0]
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/register', formData);
      if (response.data.success) {
        alert('Registro exitoso');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('Error en el registro');
    }
  };

  return (
    <div className="container">     
  <form onSubmit={handleSubmit}>
  <h1>Formulario de Registro</h1>
    <div>
      <input
        type="text"
        name="id"
        id="id"
        placeholder="ID"
        value={formData.id}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <input
        type="text"
        name="nombre"
        id="nombre"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <input
        type="text"
        name="apellido"
        id="apellido"
        placeholder="Apellido"
        value={formData.apellido}
        onChange={handleChange}
        required
      />
    </div>
    <div style={{ display: 'none' }}>
      <input
        type="text"
        name="fechaRegistro"
        id="fechaRegistro"
        value={formData.fechaRegistro}
        readOnly
        placeholder="Fecha de Registro"
        display="none"
      />
    </div>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    <button type="submit">Registrar</button>
  </form>
</div>

  );
};

export default RegistrationForm;
