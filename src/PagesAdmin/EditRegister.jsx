import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Stylesheet/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Navigator/Navigator';

export default function EditRegister() {
    
    return (
        <div>
            <header>
                <h1 className="titulo">Transportes la libertad<span>Agency</span></h1>
            </header>
            <NavigationBar>

            </NavigationBar>

            <div className="container">
                <div className="col-lg-12">
                    <h1>Editar Vehiculo</h1>
                    <form>
                        KILOMETRAJE: <br />
                        <input className="form-control" type="text" name="txtkilometraje"/><br />
                        PLACA: <br />
                        <input className="form-control" type="text" name="txtplaca"/><br />
                        MARCA: <br />
                        <input className="form-control" type="text" name="txtmarca"/><br />
                        MODELO: <br />
                        <input className="form-control" type="text" name="txtmodelo"/><br />
                        AÑO DE FABRICACION: <br />
                        <input className="form-control" type="date" name="txtañoFabricacion"/><br />
                        PLAN DE MANTENIMIENTO: <br />
                        <input className="form-control" type="text" name="txtplanMantenimiento"/><br />
                        <Link className="btn btn-success form-control" to="/EditSelection" name="accion">Editar mantenimiento</Link><br />
                    </form>
                </div>
            </div>
            
            <footer className="footer">
                <p>Todos los derechos reservados 2024</p>
            </footer>

        </div>
    );
}