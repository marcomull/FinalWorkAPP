import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheet/style.css'; 

const NavigationBar = () => {
    return (
        <nav className="nav-principal" style={{ backgroundColor: '#b9fdfd' }}>
            <a className="enlace" href="#">Inicio</a>
            <a className="enlace" href="#">Administrador</a>
            <a className="enlace" href="#">Mecanico</a>
            <a className="enlace" href="#">Logistica</a>
            <a className="enlace" href="#">Registrar</a>
            <a className="enlace" href="#">Salir</a>
        </nav>
    );
};

export default NavigationBar;
