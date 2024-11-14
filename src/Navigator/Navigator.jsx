// NavigationBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheet/style.css';
import { useUser } from '../Navigator/UserContext'; // Importa el hook del contexto

const NavigationBar = () => {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const { user } = useUser(); // Obtén la información del usuario

    return (
        <div className="nav-wrapper">
            <nav className="nav-principal align-items-center" style={{ backgroundColor: '#b9fdfd' }}>
                <Link className="enlace" to="/">Inicio</Link>
                <Link className="enlace" to="/admin">Administrador</Link>
                <Link className="enlace" to="/mecanico">Mecánico</Link>
                <Link className="enlace" to="/logistica">Logística</Link>
                <Link className="enlace" to="/registrar">Registrar</Link>
                
                <div className="user-menu-container">
                    <button 
                        className="user-menu-button d-flex align-items-center"
                        onClick={() => setShowUserMenu(!showUserMenu)}
                        style={{ 
                            background: 'transparent',
                            border: 'none',
                            padding: '8px',
                            cursor: 'pointer'
                        }}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none"  
                            viewBox="0 0 24 24" 
                            strokeWidth="1.5" 
                            stroke="currentColor" 
                            style={{ width: '24px', height: '24px' }}
                            className="me-2"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" 
                            />
                        </svg>
                        {/* Usa la información del usuario del contexto */}
                        <span>{user ? `${user.email} (${user.rol})` : 'Invitado'}</span>
                    </button>

                    {showUserMenu && (
                        <div className="position-absolute end-0 mt-2 py-2 bg-white rounded shadow-lg" 
                             style={{ 
                                 width: '220px', 
                                 zIndex: 1000,
                                 right: '10px'
                             }}>
                            <div className="px-4 py-2 border-bottom">
                                <div className="d-flex align-items-center">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth="1.5" 
                                        stroke="currentColor" 
                                        style={{ width: '24px', height: '24px' }}
                                        className="me-2"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" 
                                        />
                                    </svg>
                                    <div>
                                        {/* Muestra el correo y rol del usuario si existe */}
                                        <p className="mb-0 font-weight-bold">{user ? user.email : 'Invitado'}</p>
                                        <p className="mb-0 text-muted small">{user ? user.rol : 'Sin rol'}</p>
                                    </div>
                                </div>
                            </div>
                            <Link to="/logout" className="dropdown-item py-2 px-4 d-flex align-items-center">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth="1.5" 
                                    stroke="currentColor" 
                                    style={{ width: '20px', height: '20px' }}
                                    className="me-2"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" 
                                    />
                                </svg>
                                Cerrar sesión
                            </Link>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default NavigationBar;
