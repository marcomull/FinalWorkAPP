import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheet/style.css';

export default function Login() {
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
                    <h1>Iniciar Sesion</h1>
                    <form action="ControladorLogin">
                        Cargo: <br />
                        <select className="form-control" name="txtCargoLogin">
                            <option value="Administrador">Administrador</option>
                            <option value="Mecanico">Mecánico</option>
                            <option value="Logistica">Logística</option>
                        </select><br />
                        Correo: <br />
                        <input className="form-control" type="text" name="txtCorreoLogin" /><br />
                        Contraseña: <br />
                        <input className="form-control" type="password" name="txtPasswordLogin" /><br />
                        <input className="btn btn-success form-control" type="submit" name="accion" value="IngresarUsuario" /><br />
                        <br />
                        <input className="btn btn-success form-control" type="submit" name="accion" value="RegistrarLogin" /><br />
                    </form>
                </div>
            </div>
            <footer className="footer">
                <p>Todos los derechos reservados 2024</p>
            </footer>
        </div>
    );
}
