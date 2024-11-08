import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambia la importación de 'react-dom' a 'react-dom/client'
import Routes from './Routes/Routes';
import { UserProvider } from './Navigator/UserContext'; // Importa el hook del contexto

// Crea el root usando createRoot
const root = ReactDOM.createRoot(document.getElementById('root')); 

root.render(
    <React.StrictMode>
        <UserProvider> {/* Envolviendo Routes con UserProvider */}
            <Routes />
        </UserProvider>
    </React.StrictMode>
);
