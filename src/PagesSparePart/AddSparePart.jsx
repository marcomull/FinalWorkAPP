import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import '../Stylesheet/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Navigator/Navigator';

export default function AddRequestStore() {

    const [formData, setFormData] = useState({
        sparePart: '',
        stock: '',
        price: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.sparePart || !formData.stock || !formData.price) {
            alert('Por favor, completa todos los campos antes de continuar.');
            return; 
        }

        axios.post('http://localhost:8080/sparePart/addSparePart', formData)
            .then(response => {
                alert('¡Repuesto agregado exitosamente!');
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
                    <h1>Agregar Solicitud</h1>
                    <form>
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
                        <Link
                            className={`btn btn-success ${(!formData.sparePart || !formData.stock || !formData.price) ? 'disabled' : ''}`}
                            to="/listSpareParts"
                            onClick={handleSubmit}
                        >
                            Agregar repuesto
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