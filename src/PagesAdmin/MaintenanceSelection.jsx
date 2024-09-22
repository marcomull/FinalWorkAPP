import React from 'react';
import { Link } from 'react-router-dom';
import '../Stylesheet/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Navigator/Navigator';

export default function MaintenanceSelection() {
    return (
        <div>
            <header>
                <h1 className="titulo">Transportes la libertad<span>Agency</span></h1>
            </header>
            <NavigationBar>

            </NavigationBar>

            <div class="container d-flex justify-content-center align-items-center">
                <div class="row text-center">
                    <h1>Administrador</h1>
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <Link className="btn btn-success mx-2" to="/addRegister">Agregar Nuevo</Link>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <form id="exportForm" action="ControladorAdministrador" method="POST">
                            <input type="hidden" name="accion" value="exportarExcel"></input>
                            <button class="btn btn-danger btn-sm" type="submit">Exportar Excel</button>
                        </form>
                    </div>
                    <table class="table table-striped table-primary" border="1">
                        <thead>
                            <tr class="cell text-center">
                                <th class="cell text-center">ID</th>
                                <th class="cell text-center">Kilometraje</th>
                                <th class="cell text-center">Placa</th>
                                <th class="cell text-center">Marca</th>
                                <th class="cell text-center">Modelo</th>
                                <th class="cell text-center">Año fabricacion</th>
                                <th class="cell text-center">Plan de mantenimiento</th>
                                <th class="cell text-center">Tipo de mantenimiento</th>
                                <th class="cell text-center">Reporte de falla</th>
                                <th class="cell text-center">Fecha programada</th>
                                <th class="cell text-center">Descripcion</th>
                                <th class="cell text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {[1, 2].map(id => (
                                <tr key={id}>
                                    <td className="cell text-center">{id}</td>
                                    <td className="cell text-center">{id === 1 ? '50000' : '60000'}</td>
                                    <td className="cell text-center">{id === 1 ? 'ABC123' : 'DEF456'}</td>
                                    <td className="cell text-center">{id === 1 ? 'Toyota' : 'Honda'}</td>
                                    <td className="cell text-center">{id === 1 ? 'Corolla' : 'Civic'}</td>
                                    <td className="cell text-center">{id === 1 ? '2018-01-01' : '2019-02-15'}</td>
                                    <td className="cell text-center">{id === 1 ? 'Mantenimiento Preventivo' : 'Mantenimiento Correctivo'}</td>
                                    <td className="cell text-center">{id === 1 ? 'Mantenimiento de Neumáticos' : 'Mantenimiento Mecánico'}</td>
                                    <td className="cell text-center">{id === 1 ? 'Problema con la presión de los neumáticos.' : 'Desgaste irregular de los neumáticos delanteros.'}</td>
                                    <td className="cell text-center">{id === 1 ? '2024-06-20' : '2024-06-21'}</td>
                                    <td className="cell text-center">{id === 1 ? 'Revisión y reemplazo de neumáticos, ajuste de presión y alineación.' : 'Inspección y reparación de componentes del motor y sistemas mecánicos.'}</td>
                                    <td className="cell text-center">
                                        <Link className="btn btn-warning mx-2" to="/editRegister">Editar</Link>
                                        <Link className="btn btn-danger mx-2" >Eliminar</Link>
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

