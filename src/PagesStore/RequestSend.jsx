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
                const response = await axios.get('http://localhost:8080/maintenance/jobLogistic');
                setRequestData(response.data); // Update state with the fetched data
            } catch (error) {
                console.error("Error fetching request data", error);
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
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
                            <button className="btn btn-outline-success" type="submit">
                                Buscar
                            </button>
                        </form>
                        <a className="btn btn-danger btn-sm" href="">
                            Exportar PDF
                        </a>
                    </div>

                    <table className="table table-striped table-primary">
                        <thead>
                            <tr className="cell text-center">
                                <th>ID</th>
                                <th>Fecha</th>
                                <th>Repuesto</th>
                                <th>Mecánico</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requestData.length > 0 ? (
                                requestData.map((request, index) => (
                                    <tr key={index}>
                                        <td className="cell text-center">{request.idSparePart}</td>
                                        <td className="cell text-center">{new Date (request.startMaintenance).toLocaleDateString()}</td>
                                        <td className="cell text-center">{request.sparePart}</td>
                                        <td className="cell text-center">{request.mechanic}</td>
                                        <td className="cell text-center">
                                            <Link className="btn btn-primary" to="/requestSend">Solicitar</Link>
                                            <Link className="btn btn-primary" to="/enviarRepuesto">Enviar Repuesto</Link>
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
                </div>
            </div>

            <footer className="footer">
                <p>Todos los derechos reservados 2024</p>
            </footer>
        </div>
    );
}
