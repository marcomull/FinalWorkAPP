import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const UserContext = createContext();

// Crear un provider para envolver la aplicación
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Estado para almacenar el usuario
    const [idRequest, setIdRequest] = useState(null); // Estado para almacenar el idRequest seleccionado

    return (
        <UserContext.Provider value={{ user, setUser, idRequest, setIdRequest }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook para usar el contexto más fácilmente
export const useUser = () => {
    return useContext(UserContext);
};
