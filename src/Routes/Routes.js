import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MaintenanceSelection from "../PagesAdmin/MaintenanceSelection";
import EditRegister from "../PagesAdmin/EditRegister";
import AddRegister from "../PagesAdmin/AddRegister"
import MaintenanceSelectionMechanic from "../PagesMechanic/MaintenanceSelection";
import MaintenanceStartRequest from "../PagesMechanic/MaintenanceStart";
import AddRequest from "../PagesRequest/AddRequest";
import ListRequest from "../PagesRequest/ListRequest";
import RequestSend from "../PagesRequest/RequestSend";
import AddSparePart from "../PagesSparePart/AddSparePart";
import ListSpareParts from "../PagesSparePart/ListSpareParts";

import Login from "../PagesLogin/Login"
import Register from "../PagesLogin/Register"
import Index from "../PageIndex/Index";
import AddJob from "../PagesMechanic/AddJob";



function RoutesComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/IndexRegister" element={<Login />} />
                <Route path="/admin" element={<MaintenanceSelection />} />
                <Route path="/editRegister/:id" element={<EditRegister />} />
                <Route path="/addNew" element={<AddRegister />} />
                <Route path="/mecanico" element={<MaintenanceSelectionMechanic />} />
                <Route path="/maintenanceJob" element={<MaintenanceStartRequest/>}/>
                <Route path="/maintenanceStartRequest" element={<AddJob/>} />
                <Route path="/addRequest" element={<AddRequest/>} />
                <Route path="/logistica" element={<ListRequest/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/registrar" element={<Login/>} />
                <Route path="/MaintenanceSelection" element={<MaintenanceSelection/>}/>
                <Route path="/EditSelection" element={<MaintenanceSelection/>}/>
                <Route path="/deleteRegister" element={<MaintenanceSelection/>}/>

                <Route path="/RequestStart" element={<MaintenanceStartRequest/>}/>
                <Route path="/responderRequest" element={<ListRequest/>}/>
                <Route path="/requestSend" element={<RequestSend/>}/>

                <Route path="/listSpareParts" element={<ListSpareParts/>} />
                <Route path="/addSparePart" element={<AddSparePart/>}/>

                <Route path="/exit" element={<Index/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesComponent;
