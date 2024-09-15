import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheet/style.css'; 

export default function Register() {
    
    return (
        <div>
            <header>
                <h1 className="titulo">Transportes la libertad<span>Agency</span></h1>
            </header>
            <nav className="nav-principal" style={{ backgroundColor: '#b9fdfd' }}>
            <a className="enlace" href="">Inicio</a>
                <a className="enlace" href="">Administrador</a>
                <a className="enlace" href="">Mecanico</a>
                <a className="enlace" href="">Almacen</a>
                <a className="enlace" href="">Registrar</a>
                <a className="enlace" href="">Salir</a>
            </nav>
            <div className="container">
                <div className="col-lg-12">
                    <h1>Registrar</h1>
                    <form >
                        Cargo: <br />
                        <select className="form-control" name="cargo" >
                            <option value="Administrador">Administrador</option>
                            <option value="Mecanico">Mecánico</option>
                            <option value="Logistica">Logística</option>
                        </select><br />
                        Correo: <br />
                        <input className="form-control" type="text" name="correo" /><br />
                        Contraseña: <br />
                        <input className="form-control" type="password" name="password" /><br />
                        <input type="hidden" name="accion" value="RegistrarUsuario" />
                        <input className="btn btn-success form-control" type="submit" value="Registrar" />
                    </form>
                </div>
            </div>
            <footer className="footer">
                <p>Todos los derechos reservados 2024</p>
            </footer>
        </div>
    );
}
