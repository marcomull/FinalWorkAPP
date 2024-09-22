import React from 'react';
import { Link } from 'react-router-dom';
import '../Stylesheet/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Navigator/Navigator';

export default function SpareParts() {
    return (
        <div>
            <header>
                <h1 className="titulo">Transportes la libertad<span>Agency</span></h1>
            </header>
            <NavigationBar>

            </NavigationBar>

            <div className="container d-flex justify-content-center align-items-center">
                <div className="row text-center">
                    <h1>Almacen</h1>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <a className="btn btn-danger btn-sm" href="#">Exportar PDF</a>
                    </div>
                    <table className="table table-striped table-primary" border="1">
                        <thead>
                        <tr className="cell text-center">
                            <th className="cell text-center">ID</th>
                            <th className="cell text-center">Fecha</th>
                            <th className="cell text-center">Repuesto</th>
                            <th className="cell text-center">Cantidad</th>
                            <th className="cell text-center">Acciones</th>
                        </tr>
                        </thead>
                        <tbody className="table-group-divider">
                        {[1, 2].map(id => (
                            <tr key={id}>
                                <td className="cell text-center">{id}</td>
                                <td className="cell text-center">{id === 1 ? '2024-05-01' : '2024-05-02'}</td>
                                <td className="cell text-center">{id === 1 ? 'Repuesto A, Repuesto B' : 'Repuesto C'}</td>
                                <td className="cell text-center">{id === 1 ? '2024-05-03' : '2024-05-04'}</td>
                                <td className="cell text-center">
                                    <a className="btn btn-success me-2" href="#">Finalizar</a>
                                    <Link className="btn btn-success" to="/addRequestStore">Solicitar</Link>
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