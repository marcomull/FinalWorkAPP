import React, { useEffect, useState } from 'react';
import '../Stylesheet/style.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Navigator/Navigator';
import axios from 'axios';

export default function RequestSend() {
    const [requestData, setRequestData] = useState([]);

    // Fetch request data from the backend
    useEffect(() => {
        const fetchRequestData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/request/listRequest');
                console.log(response.data); // Revisa la estructura de los datos aquí
                setRequestData(response.data); // Update state with the fetched data
            } catch (error) {
                console.error("Error fetching request data", error);
                alert("Error al cargar los datos. Intente nuevamente más tarde.");
            }
        };

        fetchRequestData();
    }, []);

    return (
        <div>
            <header>
                <h1 className="titulo">Transportes la libertad<span>Agency</span></h1>
            </header>
            <NavigationBar />

            <div className="container d-flex justify-content-center align-items-center">
                <div className="row text-center">
                    <h1>Almacén</h1>

                    <div className="row mb-3">
                        <div className="col-lg-4">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
                                <button className="btn btn-outline-success w-50 me-2" type="submit">
                                    Buscar
                                </button>
                            </form>
                        </div>
                        <div className="col-lg-2">
                            <Link className="btn btn-primary w-100 mx-2" to="/listSpareParts">Repuestos</Link>
                        </div>
                        <div className="col-lg-2">
                            <button className="btn btn-danger w-100 mx-2" type="submit">Exportar Excel</button>
                        </div>
                    </div>

                    <table className="table table-striped table-primary">
                        <thead>
                            <tr className="cell text-center">
                                <th>ID</th>
                                <th>Mecanico</th>
                                <th>Logistica</th>
                                <th>Fecha solicitud</th>
                                <th>Descripcion</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requestData.length > 0 ? (
                                requestData.map((request, index) => (
                                    <tr key={index}>
                                        <td className="cell text-center">{request.idRequest}</td>
                                        <td className="cell text-center">{request.mechanic}</td>
                                        <td className="cell text-center">{request.logistics || "No asignado"}</td>
                                        <td className="cell text-center">{new Date(request.requestDate).toLocaleDateString('es-ES', { timeZone: 'UTC' })}</td>
                                        <td className="cell text-center">{request.description}</td>
                                        <td className="cell text-center">{request.state}</td>
                                        <td className="cell text-center">
                                            <Link className="btn btn-primary" to="/requestSend">Enviar Repuesto</Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7">Cargando datos...</td>
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
