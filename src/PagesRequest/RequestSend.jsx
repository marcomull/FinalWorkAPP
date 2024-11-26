import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import '../Stylesheet/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Navigator/Navigator';
import { useUser } from '../Navigator/UserContext';

export default function RequestSend() {

    const { id } = useParams();
    const { idRequest } = useUser(); // Obtener la solicitud el id actual del contexto

    const [formData, setFormData] = useState({
        idRequest: idRequest || '',
        idSparePart: '',
        quantity: ''
    });
    const [sparePart, setSparePart] = useState([]); // Estado para almacenar la lista de repuestos
    const [request, setRequest] = useState([]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Function to finalize maintenance
    const stateComplete = async (id) => {
        try {
            const response = await axios.put(`http://localhost:8080/request/stateComplete/${id}`);
            console.log('Requeste complete:', response.data);
            // Optionally update state to reflect the change
            setRequest((prevData) =>
                prevData.map((request) =>
                    request.idRequest === id
                        ? { ...request, state: 'Completo' }
                        : request
                )
            );
        } catch (error) {
            console.error("Error completar maintenance", error);
        }
    };

    useEffect(() => {
        // Obtener la lista de repuestos
        axios.get('http://localhost:8080/sparePart/listSparePart')
            .then(response => {
                setSparePart(response.data);
            })
            .catch(error => {
                alert("Hubo un error al cargar la lista de repuestos. Inténtalo de nuevo.");
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/requestSparePart/addRequestSparePart', formData)
            .then(response => {
                alert("El repuesto fue enviado exitosamente."); // Alerta en caso de éxito
            })
            .catch(error => {
                alert("Hubo un problema al enviar el repuesto. Inténtalo de nuevo."); // Alerta en caso de error
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
                    <h1>Responde solicitud</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="idRequest" className="form-label">Id Request:</label>
                            <input
                                id="idRequest"
                                className="form-control"
                                type="text"
                                value={formData.idRequest}
                                name="idRequest"
                                readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="idSparePart" className="form-label">Id Repuesto:</label>
                            <select
                                id="idSparePart"
                                name="idSparePart"
                                type="text"
                                value={formData.idSparePart || ""}
                                className="form-control"
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
                        <div className="mb-3">
                            <label htmlFor="quantity" className="form-label">Cantidad:</label>
                            <input
                                id="quantity"
                                name="quantity"
                                type="number"
                                min="1"
                                step="1"
                                value={formData.quantity || ""}
                                className="form-control"
                                onChange={handleChange}
                                required />
                        </div>
                        <Link
                            className="btn btn-success"
                            to="/responderRequest"
                            onClick={(e) => {
                                e.preventDefault(); // Evita el comportamiento predeterminado del enlace.
                                handleSubmit(e); // Llama al envío del formulario primero.
                                stateComplete(formData.idRequest); // Cambia el estado a "Completo".
                            }}
                        >
                            Responder Solicitud
                        </Link>

                    </form>
                </div>
            </div>

            <footer className="footer">
                <p>Todos los derechos reservados 2024</p>
            </footer>
        </div>
    );
}