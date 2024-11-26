import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import '../Stylesheet/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Navigator/Navigator';

export default function UpdateRequestStore() {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        sparePart: '',
        stock: '',
        price: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/sparePart/${id}`)
            .then(response => {
                const data = response.data;
                setFormData({
                    sparePart: data.sparePart || '',
                    stock: data.stock || '',
                    price: data.price || '',
                });
            })
            .catch(error => {
                console.error("Error details:", error);

                alert("Error al cargar los datos de mantenimiento");
            });
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        if (!formData.sparePart || !formData.stock || !formData.price) {
            alert('Por favor, completa todos los campos antes de continuar.');
            return; 
        }

        axios.put(`http://localhost:8080/sparePart/updateSparePart/${id}` , formData)
            .then(response => {
                alert('¡Repuesto modificado exitosamente!');
            })
            .catch(error => {
                alert('Ocurrió un error al agregar el repuesto. Por favor, intenta nuevamente.');
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
                    <h1>Modificar repuesto</h1>
                    <form onSubmit={handleUpdate}>
                        <div className="mb-3">
                            <label htmlFor="sparePart" className="form-label">Repuesto:</label>
                            <input
                                id="sparePart"
                                className="form-control"
                                type="text"
                                name="sparePart"
                                value={formData.sparePart}
                                onChange={handleChange}
                                required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="stock" className="form-label">Stock:</label>
                            <input
                                id="stock"
                                className="form-control"
                                type="number"
                                name="stock"
                                value={formData.stock}
                                onChange={handleChange}
                                min="1"               
                                step="1"              
                                required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Precio:</label>
                            <input
                                id="price"
                                className="form-control"
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                min="0"               
                                step="0.01"         
                                required />
                        </div>
                        <button
                            className={`btn btn-success ${(!formData.sparePart || !formData.stock || !formData.price) ? 'disabled' : ''}`}
                            to="/listSpareParts"
                            type="submit"
                        >
                            Modificar repuesto
                        </button>
                    </form>
                </div>
            </div>

            <footer className="footer">
                <p>Todos los derechos reservados 2024</p>
            </footer>
        </div>
    );
}