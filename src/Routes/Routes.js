import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MaintenanceSelection from "../PagesAdmin/MaintenanceSelection";
import EditRegister from "../PagesAdmin/EditRegister";
import AddRegister from "../PagesAdmin/AddRegister"
import MaintenanceSelectionMechanic from "../PagesMechanic/MaintenanceSelection";
import MaintenanceStartRequest from "../PagesMechanic/MaintenanceStartRequest";
import AddRequest from "../PagesMechanic/AddRequest";
import Index from "../PageIndex/Index";

function RoutesComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/admin" element={<MaintenanceSelection />} />
                <Route path="/editRegister" element={<EditRegister />} />
                <Route path="/addRegister" element={<AddRegister />} />
                <Route path="/mecanico" element={<MaintenanceSelectionMechanic />} />
                <Route path="/maintenanceStartRequest" element={<MaintenanceStartRequest/>} />
                <Route path="/addRequest" element={<AddRequest/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesComponent;
