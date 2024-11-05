import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes/Routes';
import { UserProvider } from './Navigator/UserContext'; // Importa el hook del contexto
// Asegúrate de importar el UserProvider

ReactDOM.render(
    <React.StrictMode>
        <UserProvider> {/* Envolviendo Routes con UserProvider */}
            <Routes />
        </UserProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
