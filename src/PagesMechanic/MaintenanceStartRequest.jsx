import React from 'react';
import '../Stylesheet/style.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Navigator/Navigator';

export default function MaintenanceStartRequest() {
    return (
        <div>
            <header>
                <h1 className="titulo">Transportes la libertad<span>Agency</span></h1>
            </header>
            <NavigationBar>

            </NavigationBar>

            <div className="container d-flex justify-content-center align-items-center">
                <div className="row text-center">
                    <header>
                        <h1>Solicitud y comienzo de reparación</h1>
                    </header>

                    <section className="buttons">
                        <button type="button" className="btn btn-danger">Exportar PDF</button>
                        <br />
                    </section>

                    <section className="table-container">
                        <table className="table table-striped table-primary">
                            <thead>
                            <tr className="cell text-center">
                                <th>ID</th>
                                <th>Inicio de reparación</th>
                                <th>Repuestos</th>
                                <th>Fin de reparación</th>
                                <th>Opciones</th>
                            </tr>
                            </thead>
                            <tbody className="table-group-divider">
                            <tr>
                                <td className="cell text-center">1</td>
                                <td className="cell text-center">2024-05-01</td>
                                <td className="cell text-center">Repuesto A, Repuesto B</td>
                                <td className="cell text-center">2024-05-03</td>
                                <td className="cell text-center">
                                    <a className="btn btn-success" href="">Finalizar</a>
                                    <a className="btn btn-success" href="">Solicitar</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="cell text-center">2</td>
                                <td className="cell text-center">2024-05-02</td>
                                <td className="cell text-center">Repuesto C</td>
                                <td className="cell text-center">2024-05-04</td>
                                <td className="cell text-center">
                                    <a className="btn btn-success" href="">Finalizar</a>
                                    <a className="btn btn-success" href="">Solicitar</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            </div>

            <footer className="footer">
                <p>Todos los derechos reservados 2024</p>
            </footer>
        </div>
    );
}

