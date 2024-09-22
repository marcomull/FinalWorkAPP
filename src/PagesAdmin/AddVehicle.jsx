import React, { useState } from 'react';
import '../Stylesheet/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Navigator/Navigator';

export default function AddVehicle() {
    
    return (
        <div>
            <header>
                <h1 className="titulo">Transportes la libertad<span>Agency</span></h1>
            </header>
            <NavigationBar>

            </NavigationBar>

            <div className="container mt-5">
                <h2 className="text-center">Agregar registro</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label>Kilometraje:</label>
                            <input type="text" name="kilometraje" className="form-control"/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Modelo:</label>
                            <input type="text" name="modelo" className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label>Placa:</label>
                            <input type="text" name="placa" className="form-control"/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Año de fabricación:</label>
                            <input type="text" name="añoFabricacion" className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label>Marca:</label>
                            <input type="text" name="marca" className="form-control"/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Plan de mantenimiento:</label>
                            <input type="text" name="planMantenimiento" className="form-control"/>
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