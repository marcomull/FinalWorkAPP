import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../Stylesheet/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Navigator/Navigator';

export default function EditRegister() {
    const { id } = useParams();
    const [maintenanceData, setMaintenanceData] = useState({
        vehicleId: '',
        administratorId: '',
        typeMaintenanceId: '',
        failureReportId: '',
        dateMaintenance: '',
        descriptions: '',
    });
    const [vehicles, setVehicles] = useState([]); // Estado para almacenar la lista de vehículos
    const [typeMaintenance, setTypeMaintenance] = useState([]); // Estado para almacenar la lista de vehículos
    const [failureReport, setFailureReport] = useState([]); // Estado para almacenar la lista de failureReports
    const [administrator, setAdministrator] = useState([]); // Estado para almacenar la lista de administrator

    useEffect(() => {
        axios.get(`http://localhost:8080/maintenance/${id}`)
            .then(response => {
                const data = response.data;
                setMaintenanceData({
                    vehicleId: data.vehicleId || '',
                    administratorId: data.administratorId || '',
                    typeMaintenanceId: data.typeMaintenanceId || '',
                    failureReportId: data.failureReportId || '',
                    dateMaintenance: data.dateMaintenance || '',
                    descriptions: data.descriptions || '',
                });
                console.log("Datos de mantenimiento actualizados:", data);
            })
            .catch(error => {
                console.error("Error al cargar los datos de mantenimiento", error);
                alert("Error al cargar los datos de mantenimiento");
            });

        // Obtener la lista de vehículos
        axios.get('http://localhost:8080/vehicle/listVehicles')
            .then(response => {
                setVehicles(response.data);
            })
            .catch(error => {
                console.error("Error al cargar la lista de vehículos", error);
            });

        // Obtener la lista de tipo de mantenimiento
        axios.get('http://localhost:8080/typeMaintenance/listMaintenance')
            .then(response => {
                setTypeMaintenance(response.data);
            })
            .catch(error => {
                console.error("Error al cargar la lista de tipos de mantenimiento", error);
            });

        // Obtener la lista de reportes de fallos
        axios.get('http://localhost:8080/failureReport/listFailureReport')
            .then(response => {
                setFailureReport(response.data);
            })
            .catch(error => {
                console.error("Error al cargar la lista de reportes", error);
            });

        // Obtener la lista de administrador
        axios.get('http://localhost:8080/administrator/listAdministrator')
            .then(response => {
                setAdministrator(response.data);
            })
            .catch(error => {
                console.error("Error al cargar la lista de administrador", error);
            });
    }, [id]);

    const handleUpdate = (event) => {
        event.preventDefault();
        console.log(maintenanceData); // Verifica los datos antes de enviarlos

        axios.put(`http://localhost:8080/maintenance/update/${id}`, maintenanceData)
            .then(response => {
                console.log("Actualización exitosa", response.data);
            })
            .catch(error => {
                console.error("Error al actualizar los datos de mantenimiento", error);
            });
    };

    const handleChange = (e) => {
        setMaintenanceData({
            ...maintenanceData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <header>
                <h1 className="titulo">Transportes la libertad<span>Agency</span></h1>
            </header>
            <NavigationBar />

            <div className="container">
                <div className="col-lg-12">
                    <h1>Editar Registro de Mantenimiento</h1>
                    <form onSubmit={handleUpdate}>
                        {/* Vehículo */}
                        <div className="mb-3">
                            <label htmlFor="vehicleId" className="form-label">Vehículo</label>
                            <select
                                className="form-select"
                                id="vehicleId"
                                name="vehicleId"
                                value={maintenanceData.vehicleId || ""}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Selecciona un vehículo</option>
                                {vehicles.map((vehicle) => (
                                    <option key={vehicle.idVehicle} value={vehicle.idVehicle}>
                                        {vehicle.idVehicle} - {vehicle.brand} - {vehicle.model} - {vehicle.plate}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Administrador */}
                        <div className="mb-3">
                            <label htmlFor="administratorId" className="form-label">Administrador</label>
                            <select
                                className="form-select"
                                id="administratorId"
                                name="administratorId"
                                value={maintenanceData.administratorId || ""}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Selecciona un tipo de mantenimiento</option>
                                {administrator.map((administrator) => (
                                    <option key={administrator.id} value={administrator.id}>
                                        {administrator.id} - {administrator.email}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Tipo de mantenimiento */}
                        <div className="mb-3">
                            <label htmlFor="typeMaintenanceId" className="form-label">Tipo de mantenimiento</label>
                            <select
                                className="form-select"
                                id="typeMaintenanceId"
                                name="typeMaintenanceId"
                                value={maintenanceData.typeMaintenanceId || ""}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Selecciona un tipo de mantenimiento</option>
                                {typeMaintenance.map((type) => (
                                    <option key={type.idTypeMaintenance} value={type.idTypeMaintenance}>
                                        {type.nameType} - {type.description}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Reporte de fallo */}
                        <div className="mb-3">
                            <label htmlFor="failureReportId" className="form-label">Reporte de Fallo</label>
                            <select
                                className="form-select"
                                id="failureReportId"
                                name="failureReportId"
                                value={maintenanceData.failureReportId || ""}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Selecciona un reporte</option>
                                {failureReport.map((report) => (
                                    <option key={report.idFailureReport} value={report.idFailureReport}>
                                        {report.descriptionReport}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Fecha de mantenimiento */}
                        <div className="mb-3">
                            <label htmlFor="dateMaintenance" className="form-label">Fecha de Mantenimiento</label>
                            <input
                                type="date"
                                className="form-control"
                                id="dateMaintenance"
                                name="dateMaintenance"
                                value={maintenanceData.dateMaintenance ? new Date(maintenanceData.dateMaintenance).toISOString().split('T')[0] : ""}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Estado */}
                        <div className="mb-3">
                            <label htmlFor="descriptions" className="form-label">Estado</label>
                            <select
                                className="form-select"
                                id="descriptions"
                                name="descriptions"
                                value={maintenanceData.descriptions || ""}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Selecciona el estado</option>
                                <option value="Activo">Activo</option>
                                <option value="Inactivo">Inactivo</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-success form-control">Actualizar</button>
                    </form>
                </div>
            </div>

            <footer className="footer">
                <p>Todos los derechos reservados 2024</p>
            </footer>
        </div>
    );
}
