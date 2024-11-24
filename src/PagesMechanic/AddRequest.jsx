import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import '../Stylesheet/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Navigator/Navigator';
import { useUser } from '../Navigator/UserContext';

export default function AddRequest() {

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
        mechanic: user?.id || '', // Inicializar con el id del mecánico
        arrivalDate: getTodayDate(),
        sparePart: ''
    });

    const [sparePart, setSparePart] = useState([]); // Estado para almacenar la lista de mantenimiento

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        // Obtener la lista de maintenimiento
        axios.get('http://localhost:8080/sparePart/listSparePart')
            .then(response => {
                setSparePart(response.data);
            })
            .catch(error => {
                console.error("Error al cargar la lista de mantenimiento", error);
            });
    }, [id]);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados:", formData); // Asegúrate de que el objeto es correcto

        axios.post('http://localhost:8080/sparePart/addRequest', formData)

            .then(response => {
                console.log('Solicitud agregado exitosamente:', response.data);

            })
            .catch(error => {
                console.error("Error al agregar la solicitud de repuesto", error);
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
                            <label htmlFor="arrivalDate" className="form-label">Fecha solicitud:</label>
                            <input type="date"
                                id="arrivalDate"
                                name="arrivalDate"
                                value={formData.arrivalDate || ""}
                                className="form-control"
                                onChange={handleChange}
                                required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="sparePart">Repuesto:</label>
                            <select
                                className="form-select"
                                id="sparePart"
                                name="sparePart"
                                value={formData.sparePart || ""}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Selecciona un repuesto</option>
                                {sparePart.map((sparePart) => (
                                    <option key={sparePart.idSparePart} value={sparePart.idSparePart}>
                                        {sparePart.idSparePart} - {sparePart.sparePart}
                                    </option>
                                ))}
                            </select>
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