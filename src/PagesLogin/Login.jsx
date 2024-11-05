import React, { useState } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../Stylesheet/style.css';
import NavigationBar from '../Navigator/Navigator';
import axios from 'axios';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Administrador'); 
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault(); 

        const url = `http://localhost:8080/login/${role === 'Administrador' ? 'administrator' : role === 'Mecanico' ? 'mechanic' : 'logistics'}`;

        axios.post(url, null, {
            params: {
                email: email,
                password: password,
            },
        })
        .then(response => {
            console.log('Inicio de sesión exitoso:', response.data);
        })
        .catch(error => {
            console.error('Error en el inicio de sesión:', error);
            setError('Credenciales incorrectas. Intenta de nuevo.');
        });
    };

    return (
        <div>
            <header>
                <h1 className="titulo">Transportes la libertad<span>Agency</span></h1>
            </header>
            <NavigationBar />

            <div className="container">
                <div className="col-lg-12">
                    <h1>Iniciar Sesion</h1>
                    <form onSubmit={handleLogin}> {/* Cambiar aquí */}
                        Cargo: <br />
                        <select className="form-control" name="txtCargoLogin" value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="Administrador">Administrador</option>
                            <option value="Mecanico">Mecánico</option>
                            <option value="Logistica">Logística</option>
                        </select><br />
                        Correo: <br />
                        <input className="form-control" type="text" name="txtCorreoLogin" value={email} onChange={(e) => setEmail(e.target.value)}/><br />
                        Contraseña: <br />
                        <input className="form-control" type="password" name="txtPasswordLogin" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                        <button className="btn btn-success form-control" type="submit">Ingresar usuario</button>
                        {error && <div className="alert alert-danger">{error}</div>} {/* Mensaje de error */}
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
}
