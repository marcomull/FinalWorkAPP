import React, { useState } from 'react';
import './ReporTable.css'; 

const   ReporTable = () => {
  const [search, setSearch] = useState('');
  const [repuestos, setRepuestos] = useState([
    { id: 1, fecha: '2024-01-01', repuesto: 'Freno', cantidad: 2 },
    { id: 2, fecha: '2024-01-02', repuesto: 'Llanta', cantidad: 4 },
    { id: 3, fecha: '2024-01-03', repuesto: 'Motor', cantidad: 1 },
    { id: 4, fecha: '2024-01-04', repuesto: 'Aceite', cantidad: 5 },
  ]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleExportPDF = () => {
   
    alert('Exportar PDF no implementado');
  };

  const filteredRepuestos = repuestos.filter(
    (r) =>
      r.repuesto.toLowerCase().includes(search.toLowerCase()) ||
      r.fecha.includes(search)
  );

  return (
    <div className="container">
      <nav className="navbar">
        <button className="nav-button">Inicio</button>
        <button className="nav-button">Admin</button>
        <button className="nav-button">Mecánico</button>
        <button className="nav-button">Almacén</button>
        <button className="nav-button">Registrar</button>
        <button className="nav-button">Salir</button>
      </nav>

      <div className="search-container">
        <label htmlFor="buscar">Repuestos</label>
        <input
          type="text"
          id="buscar"
          value={search}
          onChange={handleSearch}
          placeholder="Buscar"
        />
        <button className="search-button">Buscar</button>
        <button className="pdf-button" onClick={handleExportPDF}>
          Exportar PDF
        </button>
      </div>

      <table className="repuestos-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Repuestos</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredRepuestos.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.fecha}</td>
              <td>{r.repuesto}</td>
              <td>{r.cantidad}</td>
              <td>
                <button className="solicitar-button">Solicitar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReporTable;