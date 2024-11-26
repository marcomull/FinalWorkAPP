import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import '../Stylesheet/style.css';
import axios from 'axios';
import { useUser } from '../Navigator/UserContext'; // Importa el hook del contexto

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Administrador');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 
    const { setUser } = useUser(); // Obtén la función para establecer el usuario

    const handleLogin = (e) => {
        e.preventDefault();
        const url = `http://localhost:8080/login/${role === 'Administrador' ? 'administrator' : role === 'Mecanico' ? 'mechanic' : 'logistics'}`;

        axios.post(url, null, {
            params: { email, password },
        })
        .then(response => {
            console.log('Inicio de sesión exitoso:', response.data);
            setError('');

            // Establece el usuario en el contexto
            setUser({ id: response.data.id, email, rol: role });

            if (role === 'Administrador') {
                navigate('/MaintenanceSelection');
            } else if (role === 'Mecanico') {
                navigate('/mecanico'); 
            } else if (role === 'Logistica') {
                navigate('/logistica'); 
            }
        })
        .catch(error => {
            setError('Credenciales incorrectas. Intenta de nuevo.');
        });
    };


    return (
        <div>
            <header>
                <h1 className="titulo">Transportes la libertad<span>Agency</span></h1>
            </header>

            <nav className="nav-principal align-items-center" style={{ backgroundColor: '#b9fdfd' }}>
                <Link className="enlace" to="/">Inicio</Link>
                <Link className="enlace" to="/registrar">Registrar</Link>
            </nav>

            <div className="container">
                <div className="col-lg-12">
                    <h1>Iniciar Sesion</h1>
                    <form onSubmit={handleLogin}>
                        Cargo: <br />
                        <select
                            className="form-control"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}>
                            <option value="Administrador">Administrador</option>
                            <option value="Mecanico">Mecánico</option>
                            <option value="Logistica">Logística</option>
                        </select><br />
                        Correo: <br />
                        <input
                            className="form-control"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        /><br />
                        Contraseña: <br />
                        <input
                            className="form-control"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        /><br />
                        <button className="btn btn-success form-control" type="submit">Ingresar usuario</button>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <br />
                        <Link className="btn btn-success form-control" to="/register">Registrar</Link><br />
                    </form>
                </div>
            </div>

            <footer className="footer">
                <p>Todos los derechos reservados 2024</p>
            </footer>
        </div>
    );
};

export default Login;
