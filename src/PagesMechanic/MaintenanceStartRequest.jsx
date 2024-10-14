import React, { useEffect, useState } from 'react';
import '../Stylesheet/style.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Navigator/Navigator';
import axios from 'axios';

export default function MaintenanceStartRequest() {
    const [maintenanceData, setMaintenanceData] = useState([]);

    // Fetch maintenance data from the backend
    useEffect(() => {
        const fetchMaintenanceData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/maintenance/jobMechanic');
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
                    <h1>Solicitud y comienzo de reparación</h1>

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
                                {maintenanceData.length > 0 ? (
                                    maintenanceData.map((maintenance, index) => (
                                        <tr key={index}>
                                            <td>{maintenance.idJob}</td>
                                            <td>{new Date(maintenance.startMaintenance).toLocaleDateString()}</td>
                                            <td>{maintenance.sparePart}</td>
                                            <td>{new Date(maintenance.endMaintenance).toLocaleDateString()}</td>
                                            <td>
                                                <Link className="btn btn-success" to="">Finalizar</Link>
                                                <Link className="btn btn-success" to="/addRequest">Solicitar</Link>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5">Cargando datos...</td>
                                    </tr>
                                )}
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
