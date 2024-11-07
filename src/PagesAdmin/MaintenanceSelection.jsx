import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Stylesheet/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Navigator/Navigator';

export default function MaintenanceSelection() {
    const [maintenanceDetails, setMaintenanceDetails] = useState([]);
    const [searchType, setSearchType] = useState("maintenanceId"); // Valor inicial del tipo de búsqueda
    const [searchValue, setSearchValue] = useState(""); // Valor de la búsqueda
    const handleListAll = () => { fetchMaintenanceDetails(); }; // Recargar todos los mantenimientos

    useEffect(() => {
        fetchMaintenanceDetails();
    }, []);

    // Función para obtener todos los registros de mantenimiento
    const fetchMaintenanceDetails = () => {
        axios.get('http://localhost:8080/maintenance/administrator')
            .then(response => {
                setMaintenanceDetails(response.data);
            })
            .catch(error => {
                console.error("Error fetching maintenance data", error);
            });
    };

    // Función para manejar la eliminación
    function handleDelete(id) {
        if (window.confirm('¿Estás seguro de que deseas eliminar este mantenimiento?')) {
            axios.delete(`http://localhost:8080/maintenance/delete/${id}`)
                .then(response => {
                    alert('Mantenimiento eliminado exitosamente');
                    setMaintenanceDetails(maintenanceDetails.filter(item => item.idMaintenance !== id));
                })
                .catch(error => {
                    console.error('Error al eliminar el mantenimiento', error);
                    alert('Error al eliminar el mantenimiento');
                });
        }
    }

    // Función para manejar la búsqueda
    const handleSearch = async (e) => {
        e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario (recarga de página)
        try {
            const response = await axios.get(`http://localhost:8080/maintenance/search`, {
                params: { type: searchType, value: searchValue }
            });

            // Verifica si la respuesta contiene datos
            if (response.data.length === 0) {
                alert('No se encontraron resultados para la búsqueda');
                // Si no hay resultados, restablecer la lista de mantenimientos
                fetchMaintenanceDetails();
            } else {
                setMaintenanceDetails(response.data);
            }
        } catch (error) {
            console.error('Error performing search:', error);
            alert('Hubo un error al realizar la búsqueda');
            fetchMaintenanceDetails();
        }
    };


    return (
        <div>
            <header>
                <h1 className="titulo">Transportes la libertad<span>Agency</span></h1>
            </header>
            <NavigationBar />

            <div className="container d-flex justify-content-center align-items-center">
                <div className="row text-center">
                    <h1>Administrador</h1>
                    <div className="row mb-3">

                        <div className="col-lg-8">
                            <form className="d-flex" role="search" onSubmit={handleSearch}>
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Buscar"
                                    aria-label="Buscar"
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                />
                                <button className="btn btn-outline-success w-50 me-2" type="submit">Buscar</button>
                                <button className="btn btn-outline-success w-50 me-2" onClick={handleListAll}>Listar</button>
                                <select
                                    className="form-select me-2"
                                    aria-label="Seleccionar tipo de búsqueda"
                                    value={searchType}
                                    onChange={(e) => setSearchType(e.target.value)}
                                >
                                    <option value="maintenanceId">Id de Mantenimiento</option>
                                    <option value="failureReportId">Id de Reporte de Falla</option>
                                    <option value="vehicleId">Id de Vehículo</option>
                                    <option value="administratorId">Id de Administrador</option>
                                    <option value="typeMaintenanceId">Id de Tipo de Mantenimiento</option>
                                </select>
                            </form>
                        </div>

                        <div className="col-lg-2">
                            <Link className="btn btn-success w-100 mx-2" to="/addNew">Agregar Nuevo</Link>
                        </div>
                        <div className="col-lg-2">
                            <button className="btn btn-danger w-100 mx-2" type="submit">Exportar Excel</button>
                        </div>
                    </div>

                    <table className="table table-striped table-primary" border="1">
                        <thead>
                            <tr className="cell text-center">
                                <th className="cell text-center">ID</th>
                                <th className="cell text-center">Placa</th>
                                <th className="cell text-center">Marca</th>
                                <th className="cell text-center">Modelo</th>
                                <th className="cell text-center">Año de Fabricación</th>
                                <th className="cell text-center">Kilometraje</th>
                                <th className="cell text-center">Plan de Mantenimiento</th>
                                <th className="cell text-center">Tipo de Mantenimiento</th>
                                <th className="cell text-center">Descripción del Reporte</th>
                                <th className="cell text-center">Fecha de Mantenimiento</th>
                                <th className="cell text-center">Descripciones</th>
                                <th className="cell text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {maintenanceDetails.length > 0 ? (
                                maintenanceDetails.map((maintenance, index) => (
                                    <tr key={index}>
                                        <td>{maintenance.idMaintenance}</td>
                                        <td>{maintenance.plate}</td>
                                        <td>{maintenance.brand}</td>
                                        <td>{maintenance.model}</td>
                                        <td>{new Date(maintenance.yearManufacture).toLocaleDateString()}</td>
                                        <td>{maintenance.mileage}</td>
                                        <td>{maintenance.maintenancePlan}</td>
                                        <td>{maintenance.nameType}</td>
                                        <td>{maintenance.descriptionReport}</td>
                                        <td>{new Date(maintenance.dateMaintenance).toLocaleDateString()}</td>
                                        <td>{maintenance.descriptions}</td>
                                        <td className="cell text-center">
                                            <Link className="btn btn-warning mx-2" to={`/editRegister/${maintenance.idMaintenance}`}>Editar</Link>
                                            <Link className="btn btn-danger btn-sm mx-1" onClick={(e) => { e.preventDefault(); handleDelete(maintenance.idMaintenance); }}>  Eliminar </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="12">Cargando datos...</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
