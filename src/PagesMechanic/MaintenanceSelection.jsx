import React from 'react';
import { Link } from 'react-router-dom';
import '../Stylesheet/style.css'; // Asegúrate de que la ruta sea correcta
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MaintenanceSelection() {
    return (
        <div>
            <header>
                <h1 className="titulo">
                    Transportes la libertad<span>Agency</span>
                </h1>
            </header>

            <nav className="nav-principal" style={{ backgroundColor: '#b9fdfd' }}>
                <a className="enlace" href="">Inicio</a>
                <a className="enlace" href="">Administrador</a>
                <a className="enlace" href="">Mecanico</a>
                <a className="enlace" href="">Almacen</a>
                <a className="enlace" href="">Registrar</a>
                <a className="enlace" href="">Salir</a>
            </nav>

            <div className="container d-flex justify-content-center align-items-center">
                <div className="row text-center">
                    <h1>Mecanico</h1>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <a className="btn btn-danger btn-sm" href="">Exportar PDF</a>
                    </div>
                    <table className="table table-striped table-primary">
                        <thead>
                        <tr className="cell text-center">
                            <th>ID</th>
                            <th>Kilometraje</th>
                            <th>Placa</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Año fabricacion</th>
                            <th>Plan de mantenimiento</th>
                            <th>Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        {[1, 2, 3].map(id => (
                            <tr key={id}>
                                <td className="cell text-center">{id}</td>
                                <td className="cell text-center">{id === 1 ? '120,000' : id === 2 ? '80,000' : '150,000'}</td>
                                <td className="cell text-center">{id === 1 ? 'ABC123' : id === 2 ? 'DEF456' : 'GHI789'}</td>
                                <td className="cell text-center">{id === 1 ? 'Toyota' : id === 2 ? 'Honda' : 'Ford'}</td>
                                <td className="cell text-center">{id === 1 ? 'Corolla' : id === 2 ? 'Civic' : 'Focus'}</td>
                                <td className="cell text-center">{id === 1 ? '2018' : id === 2 ? '2019' : '2017'}</td>
                                <td className="cell text-center">{id === 1 ? 'Plan A' : id === 2 ? 'Plan B' : 'Plan C'}</td>
                                <td className="cell text-center">
                                    <Link className="btn btn-primary" to="/maintenanceStartRequest">Seleccionar</Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <footer className="footer">
                <p>Todos los derechos reservados 2024</p>
            </footer>
        </div>
    );
}

