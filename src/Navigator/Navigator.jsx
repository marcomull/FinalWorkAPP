import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheet/style.css'; 

const NavigationBar = () => {
    return (
        <nav className="nav-principal" style={{ backgroundColor: '#b9fdfd' }}>
            <Link className="enlace" to="/">Inicio</Link>
            <Link className="enlace" to="/admin">Administrador</Link>
            <Link className="enlace" to="/mecanico">Mecánico</Link>
            <Link className="enlace" to="/logistica">Logística</Link>
            <Link className="enlace" to="/registrar">Registrar</Link>
            <Link className="enlace" to="/exit">Salir</Link>
        </nav>
    );
};

export default NavigationBar;
