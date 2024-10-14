import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Stylesheet/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Navigator/Navigator';

export default function MaintenanceSelection() {
    const [maintenanceDetails, setMaintenanceDetails] = useState([]);

    // Fetch data from the backend
    useEffect(() => {
        axios.get('http://localhost:8080/maintenance/administrator')  // Ajusta la URL según la configuración de tu backend
            .then(response => {
                setMaintenanceDetails(response.data);  // Actualiza el estado con los datos obtenidos
            })
            .catch(error => {
                console.error("Error fetching maintenance data", error);
            });
    }, []);  // El segundo argumento [] asegura que la llamada solo se haga una vez cuando se monta el componente

    return (
        <div>
            <header>
                <h1 className="titulo">Transportes la libertad<span>Agency</span></h1>
            </header>
            <NavigationBar />

            <div className="container d-flex justify-content-center align-items-center">
                <div className="row text-center">
                    <h1>Administrador</h1>
                    <div className="row mb-3">
                        <div className="col-lg-8">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                        <div className="col-lg-2">
                            <Link className="btn btn-success w-100 mx-2" to="/addRegister">Agregar Nuevo</Link>
                        </div>
                        <div className="col-lg-2">
                            <form id="exportForm" action="ControladorAdministrador" className='w-100' method="POST">
                                <input type="hidden" name="accion" value="exportarExcel" />
                                <button className="btn btn-danger btn-sm w-100" type="submit">Exportar Excel</button>
                            </form>
                        </div>
                    </div>

                    {/* Tabla para mostrar los datos */}
                    <table className="table table-striped table-primary" border="1">
                        <thead>
                            <tr className="cell text-center">
                                <th className="cell text-center">ID</th>
                                <th className="cell text-center">Placa</th>
                                <th className="cell text-center">Marca</th>
                                <th className="cell text-center">Modelo</th>
                                <th className="cell text-center">Año de Fabricación</th>
                                <th className="cell text-center">Kilometraje</th>
                                <th className="cell text-center">Plan de Mantenimiento</th>
                                <th className="cell text-center">Tipo de Mantenimiento</th>
                                <th className="cell text-center">Descripción del Reporte</th>
                                <th className="cell text-center">Fecha de Mantenimiento</th>
                                <th className="cell text-center">Descripciones</th>
                                <th className="cell text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {maintenanceDetails.length > 0 ? (
                                maintenanceDetails.map((maintenance, index) => (
                                    <tr key={index}>
                                        <td>{maintenance.idMaintenance}</td>
                                        <td>{maintenance.plate}</td>
                                        <td>{maintenance.brand}</td>
                                        <td>{maintenance.model}</td>
                                        <td>{new Date(maintenance.yearManufacture).toLocaleDateString()}</td>
                                        <td>{maintenance.mileage}</td>
                                        <td>{maintenance.maintenancePlan}</td>
                                        <td>{maintenance.nameType}</td>
                                        <td>{maintenance.descriptionReport}</td>
                                        <td>{new Date(maintenance.dateMaintenance).toLocaleDateString()}</td>
                                        <td>{maintenance.descriptions}</td>
                                        <td className="cell text-center">
                                        <Link className="btn btn-warning mx-2" to="/editRegister">Editar</Link>
                                        <Link className="btn btn-danger mx-2" >Eliminar</Link>
                                    </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="11">Cargando datos...</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}


