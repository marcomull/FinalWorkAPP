import React, { useEffect, useState } from 'react';
import '../Stylesheet/style.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Navigator/Navigator';
import axios from 'axios';

export default function SpareParts() {

    const [requestData, setRequestData] = useState([]);

    // Fetch request data from the backend
    useEffect(() => {
        const fetchRequestData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/sparePart/listSparePart');
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
            <NavigationBar>

            </NavigationBar>

            <div className="container d-flex justify-content-center align-items-center">
                <div className="row text-center">
                    <h1>Almacen</h1>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <div className="col-lg-2">
                            <Link className="btn btn-primary w-100 mx-2" to="/addSparePart">Agregar repuesto</Link>
                        </div>
                        <div className="col-lg-2">
                            <button className="btn btn-danger w-100 mx-2" type="submit">Exportar Excel</button>
                        </div>
                    </div>
                    <table className="table table-striped table-primary" border="1">
                        <thead>
                            <tr className="cell text-center">
                                <th className="cell text-center">ID</th>
                                <th className="cell text-center">Repuesto</th>
                                <th className="cell text-center">Stock</th>
                                <th className="cell text-center">Precio</th>
                                <th className="cell text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requestData.length > 0 ? (
                                requestData.map((request, index) => (
                                    <tr key={index}>
                                        <td className="cell text-center">{request.idSparePart}</td>
                                        <td className="cell text-center">{request.sparePart}</td>
                                        <td className="cell text-center">{request.stock}</td>
                                        <td className="cell text-center">{request.price}</td>
                                        <td className="cell text-center">
                                            <Link className="btn btn-warning mx-2" to="/editSparePart">Editar</Link>
                                            <Link className="btn btn-danger btn-sm mx-1" to="/deleteSparePart">Eliminar</Link>
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