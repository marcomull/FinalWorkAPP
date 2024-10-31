import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Stylesheet/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Navigator/Navigator';

export default function AddRegister() {

    const [formData, setFormData] = useState({
        vehicleId: '',          
        administratorId: '',     
        typeMaintenanceId: '',  
        failureReportId: '',    
        dateMaintenance: '',
        descriptions: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

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
                            <input type="text" className="form-control" id="vehicleId" name="vehicleId" value={formData.vehicleId} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="administratorId" className="form-label">Administrador</label>
                            <input type="text" className="form-control" id="administratorId" name="administratorId" value={formData.administratorId} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="typeMaintenanceId" className="form-label">Tipo de Mantenimiento</label>
                            <input type="text" className="form-control" id="typeMaintenanceId" name="typeMaintenanceId" value={formData.typeMaintenanceId} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="failureReportId" className="form-label">Reporte de Fallo</label>
                            <input type="text" className="form-control" id="failureReportId" name="failureReportId" value={formData.failureReportId} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dateMaintenance" className="form-label">Fecha de Mantenimiento</label>
                            <input type="date" className="form-control" id="dateMaintenance" name="dateMaintenance" value={formData.dateMaintenance} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="descriptions" className="form-label">Descripción</label>
                            <textarea className="form-control" id="descriptions" name="descriptions" value={formData.descriptions} onChange={handleChange} required />
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