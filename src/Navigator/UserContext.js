// UserContext.js
import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const UserContext = createContext();

// Crear un provider para envolver la aplicación
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Estado para almacenar el usuario

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook para usar el contexto más fácilmente
export const useUser = () => {
    return useContext(UserContext);
};
