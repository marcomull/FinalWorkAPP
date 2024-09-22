import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MaintenanceSelection from "../PagesAdmin/MaintenanceSelection";
import EditRegister from "../PagesAdmin/EditRegister";
import AddRegister from "../PagesAdmin/AddRegister"
import Index from "../PageIndex/Index";

function RoutesComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/admin" element={<MaintenanceSelection />} />
                <Route path="/editRegister" element={<EditRegister />} />
                <Route path="/addRegister" element={<AddRegister />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesComponent;
