import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function RoutesComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" Component={MaintenanceSelection} />
                <Route exact path="/maintenanceStartRequest" Component={MaintenanceStartRequest} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesComponent;