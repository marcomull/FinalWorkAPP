import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheet/style.css';

export default function Register() {
    const [formData, setFormData] = useState({
        cargo: 'Administrador',
        correo: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Define la URL según el tipo de usuario
        let url;
        if (formData.cargo === 'Administrador') {
            url = 'http://localhost:8080/administrator/add';
        } else if (formData.cargo === 'Mecanico') {
            url = 'http://localhost:8080/mechanic/add';
        } else if (formData.cargo === 'Logistica') {
            url = 'http://localhost:8080/logistics/add';
        }

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: formData.correo, password: formData.password })
            });

            if (response.ok) {
                const result = await response.text();
                alert(`${formData.cargo} registrado exitosamente: ${result}`);
            } else {
                const error = await response.text();
                alert(`Error al registrar ${formData.cargo}: ${error}`);
            }
        } catch (err) {
            alert(`Error de red: ${err.message}`);
        }
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
                    <h1>Registrar</h1>
                    <form onSubmit={handleSubmit}>
                        Cargo: <br />
                        <select className="form-control" name="cargo" value={formData.cargo} onChange={handleChange}>
                            <option value="Administrador">Administrador</option>
                            <option value="Mecanico">Mecánico</option>
                            <option value="Logistica">Logística</option>
                        </select><br />
                        Correo: <br />
                        <input className="form-control" type="text" name="correo" value={formData.correo} onChange={handleChange} /><br />
                        Contraseña: <br />
                        <input className="form-control" type="password" name="password" value={formData.password} onChange={handleChange} /><br />
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
