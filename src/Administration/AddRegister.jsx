import React, { useState } from 'react';
import '../Stylesheet/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AddRegister() {
    const [formData, setFormData] = useState({
        kilometraje: '',
        modelo: '',
        placa: '',
        añoFabricacion: '',
        marca: '',
        planMantenimiento: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado", formData);
        // Aquí puedes manejar el envío de datos, por ejemplo, enviarlos a un servidor
    };

    return (
        <div>
            <header>
                <h1 className="titulo">
                    Transportes la Libertad<span> Admin</span>
                </h1>
            </header>

            <nav className="nav-principal" style={{ backgroundColor: '#b9fdfd' }}>
                <a className="enlace" href="/">Inicio</a>
                <a className="enlace" href="/admin">Admin</a>
                <a className="enlace" href="/mecanico">Mecánico</a>
                <a className="enlace" href="/almacen">Almacén</a>
                <a className="enlace" href="/register">Registrar</a>
                <a className="enlace" href="/logout">Salir</a>
            </nav>

            <div className="container mt-5">
                <h2 className="text-center">Agregar registro</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label>Kilometraje:</label>
                            <input
                                type="text"
                                name="kilometraje"
                                className="form-control"
                                value={formData.kilometraje}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Modelo:</label>
                            <input
                                type="text"
                                name="modelo"
                                className="form-control"
                                value={formData.modelo}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label>Placa:</label>
                            <input
                                type="text"
                                name="placa"
                                className="form-control"
                                value={formData.placa}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Año de fabricación:</label>
                            <input
                                type="text"
                                name="añoFabricacion"
                                className="form-control"
                                value={formData.añoFabricacion}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label>Marca:</label>
                            <input
                                type="text"
                                name="marca"
                                className="form-control"
                                value={formData.marca}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Plan de mantenimiento:</label>
                            <input
                                type="text"
                                name="planMantenimiento"
                                className="form-control"
                                value={formData.planMantenimiento}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Crear registro</button>
                    </div>
                </form>
            </div>

            <footer className="footer mt-4">
                <p>Todos los derechos reservados 2024</p>
            </footer>
        </div>
    );
}