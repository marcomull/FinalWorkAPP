import React from "react";
import MaintenanceStartRequest from "../PagesMechanic/MaintenanceStartRequest";
import MaintenanceSelection from "../PagesMechanic/MaintenanceSelection";
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