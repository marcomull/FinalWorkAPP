import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Stylesheet/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Navigator/Navigator';

export default function AddRegister() {

    const { id } = useParams();
    const [formData, setFormData] = useState({
        vehicleId: '',
        administratorId: '',
        typeMaintenanceId: '',
        failureReportId: '',
        dateMaintenance: '',
        descriptions: ''
    });
    const [vehicles, setVehicles] = useState([]); // Estado para almacenar la lista de vehículos
    const [typeMaintenance, setTypeMaintenance] = useState([]); // Estado para almacenar la lista de vehículos
    const [failureReport, setFailureReport] = useState([]); // Estado para almacenar la lista de failureReports
    const [administrator, setAdministrator] = useState([]); // Estado para almacenar la lista de administrator

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
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

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/maintenance/add', formData)
            .then(response => {
                console.log('Registro agregado exitosamente:', response.data);
            })
            .catch(error => {
                console.error("Error al agregar el registro de mantenimiento", error);
            });
    };

    return (
        <div>
            <header>
                <h1 className="titulo">Transportes la libertad<span>Agency</span></h1>
            </header>
            <NavigationBar>

            </NavigationBar>

            <div className="container">
                <div className="col-lg-12">
                    <h1>Agregar Vehiculo</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="vehicleId" className="form-label">Vehículo</label>
                            <select
                                className="form-select"
                                id="vehicleId"
                                name="vehicleId"
                                value={formData.vehicleId || ""}
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
                        <div className="mb-3">
                            <label htmlFor="administratorId" className="form-label">Administrador</label>
                            <select
                                className="form-select"
                                id="administratorId"
                                name="administratorId"
                                value={formData.administratorId || ""}
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
                        <div className="mb-3">
                            <label htmlFor="typeMaintenanceId" className="form-label">Tipo de Mantenimiento</label>
                            <select
                                className="form-select"
                                id="typeMaintenanceId"
                                name="typeMaintenanceId"
                                value={formData.typeMaintenanceId || ""}
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
                        <div className="mb-3">
                            <label htmlFor="failureReportId" className="form-label">Reporte de Fallo</label>
                            <select
                                className="form-select"
                                id="failureReportId"
                                name="failureReportId"
                                value={formData.failureReportId || ""}
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
                        <div className="mb-3">
                            <label htmlFor="dateMaintenance" className="form-label">Fecha de Mantenimiento</label>
                            <input type="date"
                                className="form-control"
                                id="dateMaintenance"
                                name="dateMaintenance"
                                value={formData.dateMaintenance}
                                onChange={handleChange}
                                required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="descriptions" className="form-label">Descripción</label>
                            <select
                                className="form-select"
                                id="descriptions"
                                name="descriptions"
                                value={formData.descriptions || ""}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Selecciona el estado</option>
                                <option value="Activo">Activo</option>
                                <option value="Inactivo">Inactivo</option>
                            </select>
                        </div>
                        <Link className="btn btn-primary" onClick={handleSubmit}> Agregar Registro </Link>
                    </form>
                </div>
            </div>

            <footer className="footer">
                <p>Todos los derechos reservados 2024</p>
            </footer>
        </div>
    );
}