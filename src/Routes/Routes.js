import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MaintenanceSelection from "../PagesAdmin/MaintenanceSelection";
import EditRegister from "../PagesAdmin/EditRegister";
import AddRegister from "../PagesAdmin/AddRegister"
import MaintenanceSelectionMechanic from "../PagesMechanic/MaintenanceSelection";
import MaintenanceStartRequest from "../PagesMechanic/MaintenanceStartRequest";
import AddRequest from "../PagesMechanic/AddRequest";
import RequestSend from "../PagesStore/RequestSend";
import SpareParts from "../PagesStore/SpareParts";
import AddRequestStore from "../PagesStore/AddRequestStore";
import Login from "../PagesLogin/Login"
import Register from "../PagesLogin/Register"
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
                <Route path="/logistica" element={<RequestSend/>} />
                <Route path="/requestSend" element={<SpareParts/>} />
                <Route path="/addRequestStore" element={<AddRequestStore/>}/>
                <Route path="/register" element={<Register/>} />
                <Route path="/registrar" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesComponent;
