import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Stylesheet/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Navigator/Navigator';
import axios from 'axios';

export default function MaintenanceSelection() {
    const [maintenanceData, setMaintenanceData] = useState([]);

    // Fetch maintenance data from the backend
    useEffect(() => {
        const fetchMaintenanceData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/maintenance/mechanic');
                setMaintenanceData(response.data); // Update state with the fetched data
            } catch (error) {
                console.error("Error fetching maintenance data", error);
            }
        };

        fetchMaintenanceData();
    }, []);

    return (
        <div>
            <header>
                <h1 className="titulo">Transportes la libertad<span>Agency</span></h1>
            </header>
            <NavigationBar />

            <div className="container d-flex justify-content-center align-items-center">
                <div className="row text-center">
                    <h1>Mecánico</h1>
                    <div className="row mb-3">
                        <div className="justify-content-between ">
                            <form className="d-flex" role="search">
                                <Link className="btn btn-primary w-25 me-2" to="/maintenanceJob">Mis trabajos</Link>
                                <Link className="btn btn-primary w-25 me-2" to="/maintenanceStartRequest">Seleccionar</Link>
                            </form>
                        </div>
                    </div>
                    <table className="table table-striped table-primary">
                        <thead>
                            <tr className="cell text-center">
                                <th>ID</th>
                                <th>Kilometraje</th>
                                <th>Placa</th>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Año fabricación</th>
                                <th>Plan de mantenimiento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {maintenanceData.length > 0 ? (
                                maintenanceData.map((maintenance, index) => (
                                    <tr key={index}>
                                        <td> {maintenance.idMaintenance}</td>
                                        <td> {maintenance.mileage}</td>
                                        <td>{maintenance.plate}</td>
                                        <td>{maintenance.brand}</td>
                                        <td>{maintenance.model}</td>
                                        <td>{new Date(maintenance.yearManufacture).toLocaleDateString()}</td>
                                        <td>{maintenance.maintenancePlan}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8">Cargando datos...</td>
                                </tr>
                            )}
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
