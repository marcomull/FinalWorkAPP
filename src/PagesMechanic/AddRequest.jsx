import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import '../Stylesheet/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Navigator/Navigator';
import { useUser } from '../Navigator/UserContext';

export default function AddRequest() {

    const { user } = useUser(); // Obtener el usuario actual del contexto

    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Mes con 2 dígitos
        const day = String(today.getDate()).padStart(2, '0'); // Día con 2 dígitos
        return `${year}-${month}-${day}`; // Formato YYYY-MM-DD
    };

    const [formData, setFormData] = useState({
        idMechanic: user?.id || '', // Inicializar con el id del mecánico
        requestDate: getTodayDate(),
        description: '',
        state: 'Pendiente'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados:", formData); // Asegúrate de que el objeto es correcto

        axios.post('http://localhost:8080/request/addRequest', formData)
            .then(response => {
                console.log('Solicitud agregada exitosamente:', response.data);
                alert('¡Solicitud agregada exitosamente!');
            })
            .catch(error => {
                if (error.response) {
                    console.error("Error en la respuesta:", error.response.data);
                } else {
                    console.error("Error al comunicarse con el servidor:", error.message);
                }
                alert('Ocurrió un error al agregar la solicitud. Por favor, intenta nuevamente.');
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
                    <h1>Agregar Solicitud</h1>
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
                            <label htmlFor="requestDate" className="form-label">Fecha solicitud:</label>
                            <input type="date"
                                id="requestDate"
                                name="requestDate"
                                value={formData.requestDate || ""}
                                className="form-control"
                                onChange={handleChange}
                                required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description">Descripcion:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                name="description"
                                value={formData.description || ""}
                                onChange={handleChange}
                                required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="state">Estado:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="state"
                                name="state"
                                value={formData.state || ""}
                                onChange={handleChange}
                                readOnly />
                        </div>
                        <div className="text-center">
                            <Link className="btn btn-success" to="/RequestStart" onClick={handleSubmit}>Solicitar</Link>
                        </div>
                    </form>
                </div>
            </div>

            <footer className="footer text-center py-3">
                <p>Todos los derechos reservados 2024</p>
            </footer>
        </div>
    );
}