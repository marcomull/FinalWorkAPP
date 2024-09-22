import React, { useState } from 'react';
import '../Stylesheet/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Navigator/Navigator';

export default function AddRegister() {
    
    return (
        <div>
            <header>
                <h1 className="titulo">Transportes la libertad<span>Agency</span></h1>
            </header>
            <NavigationBar>

            </NavigationBar>

            <div className="container">
                <div className="col-lg-12">
                    <h1>Agregar Vehiculo</h1>
                    <form>
                        Vehiculo: <br />
                        <input className="form-control" type="text" name="txtVehiculo"/><br />
                        Administrador: <br />
                        <input className="form-control" type="text" name="txtAdministrador"/><br />
                        Tipo de mantenimiento: <br />
                        <input className="form-control" type="text" name="txtTipo"/><br />
                        Reporte de falla: <br />
                        <input className="form-control" type="text" name="txtReporte"/><br />
                        Fecha programada: <br />
                        <input className="form-control" type="date" name="txtFecha"/><br />
                        Descripcion: <br />
                        <input className="form-control" type="text" name="txtDescripcion"/><br />
                        <input className="btn btn-success form-control" type="submit" name="accion" value="AgregarMantenimiento"/><br />
                    </form>
                </div>
            </div>

            <footer className="footer">
                <p>Todos los derechos reservados 2024</p>
            </footer>
        </div>
    );
}