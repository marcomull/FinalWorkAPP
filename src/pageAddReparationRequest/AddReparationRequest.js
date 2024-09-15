
import React, { useState } from 'react';
import './AddReparationRequest.css';

function AddReparationRequest() {
  const [formData, setFormData] = useState({
    fecha: '',
    cantidad: '',
    repuesto: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Solicitud enviada:', formData);
  };

return (
    <div className="container">
      <header>
        <h1>Transportes La Libertad</h1>
        <nav>
          <button>Inicio</button>
          <button>Admin</button>
          <button>Mecánico</button>
          <button className="active">Almacén</button>
          <button>Registrar</button>
          <button>Salir</button>
        </nav>
      </header>
      <section className="form-section">
        <h2>Agregar Solicitud</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Fecha:</label>
            <input 
              type="date" 
              name="fecha" 
              value={formData.fecha} 
              onChange={handleChange} 
            />
          </div>
          <div className="input-group">
            <label>Cantidad:</label>
            <input 
              type="number" 
              name="cantidad" 
              value={formData.cantidad} 
              onChange={handleChange} 
            />
          </div>
          <div className="input-group">
            <label>Repuesto:</label>
            <input 
              type="text" 
              name="repuesto" 
              value={formData.repuesto} 
              onChange={handleChange} 
            />
          </div>
          <button type="submit" className="submit-btn">Solicitar</button>
        </form>
      </section>
    </div>
  );}
  export default AddReparationRequest