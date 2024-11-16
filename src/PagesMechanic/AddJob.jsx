import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import '../Stylesheet/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Navigator/Navigator';
import { useUser } from '../Navigator/UserContext';


export default function AddJob() {

    const { user } = useUser(); // Obtener el usuario actual del contexto
    const { id } = useParams();

    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Mes con 2 dígitos
        const day = String(today.getDate()).padStart(2, '0'); // Día con 2 dígitos
        return `${year}-${month}-${day}`; // Formato YYYY-MM-DD
    };
    
    const [formData, setFormData] = useState({
        idMaintenance: '',
        startMaintenance: getTodayDate(),
        //endMaintenance: '',
        idMechanic: user?.id || '' // Inicializar con el id del mecánico
    });
    const [maintenance, setMaintenance] = useState([]); // Estado para almacenar la lista de mantenimiento

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        // Obtener la lista de maintenimiento
        axios.get('http://localhost:8080/maintenance/mechanic')
            .then(response => {
                setMaintenance(response.data);
            })
            .catch(error => {
                console.error("Error al cargar la lista de mantenimiento", error);
            });
    }, [id]);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados:", formData); // Asegúrate de que el objeto es correcto

        axios.post('http://localhost:8080/maintenance/addJob', formData)

            .then(response => {
                console.log('Trabajo agregado exitosamente:', response.data);

            })
            .catch(error => {
                console.error("Error al agregar el trabajo de mantenimiento", error);
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
                    <h1>Agregar trabajo</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="mechanic" className="form-label">Mecánico</label>
                            <input
                                type="text"
                                className="form-control"
                                id="mechanic"
                                name="mechanic"
                                value={`${user?.id} - ${user?.email}`}
                                readOnly
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="idMaintenance" className="form-label">Mantenimiento</label>
                            <select
                                className="form-select"
                                id="idMaintenance"
                                name="idMaintenance"
                                value={formData.idMaintenance || ""}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Selecciona un mantenimiento</option>
                                {maintenance.map((maintenance) => (
                                    <option key={maintenance.idMaintenance} value={maintenance.idMaintenance}>
                                        {maintenance.idMaintenance} - {maintenance.model} - {maintenance.plate} - {maintenance.maintenancePlan}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="startMaintenance" className="form-label">Fecha de comienzo</label>
                            <input type="date"
                                className="form-control"
                                id="startMaintenance"
                                name="startMaintenance"
                                value={formData.startMaintenance}
                                onChange={handleChange}
                                required />
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