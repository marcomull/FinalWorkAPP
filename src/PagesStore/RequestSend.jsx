import React from 'react';
import '../Stylesheet/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Navigator/Navigator';
import {Link} from 'react-router-dom';

export default function RequestSend() {
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
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">
                                Buscar
                            </button>
                        </form>
                        <a className="btn btn-danger btn-sm" href="">
                            Exportar PDF
                        </a>
                    </div>

                    <table className="table table-striped table-primary">
                        <thead>
                        <tr className="cell text-center">
                            <th>ID</th>
                            <th>Fecha</th>
                            <th>Repuesto</th>
                            <th>Mecanico</th>
                            <th>Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        {[1, 2, 3].map((id) => (
                            <tr key={id}>
                                <td className="cell text-center">{id}</td>
                                <td className="cell text-center">22/05/2024</td>
                                <td className="cell text-center">ABC123</td>
                                <td className="cell text-center">Anonimo</td>
                                <td className="cell text-center">
                                    <Link className="btn btn-primary" to="/spareParts">Solicitar</Link>
                                    <a className="btn btn-primary" href="/enviarRepuesto">Enviar Repuesto</a>
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
