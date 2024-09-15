import { useState } from "react";
import './ReparationRequest.css'; 
function ReparationRequest() {

  const [reparacion, setReparacion] = useState('');
  const [repuesto, setRepuesto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Reparación: ${reparacion}, Repuesto: ${repuesto}`);
    
  };
    return (
      <> //micodigo
    <div className="container">
      <nav className="navbar">
        <button className="nav-button">Inicio</button>
        <button className="nav-button">Admin</button>
        <button className="nav-button">Mecánico</button>
        <button className="nav-button">Almacén</button>
        <button className="nav-button">Registrar</button>
        <button className="nav-button">Salir</button>
      </nav>

      <div className="form-container">
        <h2>Agregar solicitud</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="reparacion">Inicio de reparación:</label>
            <input
              type="text"
              id="reparacion"
              value={reparacion}
              onChange={(e) => setReparacion(e.target.value)}
              placeholder="Fecha de inicio"
            />
          </div>

          <div className="form-group">
            <label htmlFor="repuesto">Repuesto:</label>
            <input
              type="text"
              id="repuesto"
              value={repuesto}
              onChange={(e) => setRepuesto(e.target.value)}
              placeholder="Repuesto necesario"
            />
          </div>

          <button type="submit" className="submit-button">Solicitar</button>
        </form>
      </div>
    </div>
      </>
    )
  }
  
  export default ReparationRequest