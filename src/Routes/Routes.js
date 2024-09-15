import React from "react";
import MaintenanceStartRequest from "../PagesMechanic/MaintenanceStartRequest";
import MaintenanceSelection from "../PagesMechanic/MaintenanceSelection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReporTable from "../pageReportTable/ReporTable";
import ReparationRequest from "../pageReparationRequest/ReparationRequest";
import AddReparationRequest from "../pageAddReparationRequest/AddReparationRequest";


function RoutesComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" Component={MaintenanceSelection} />
                <Route exact path="/maintenanceStartRequest" Component={MaintenanceStartRequest} />
                <Route exact path="/reporttable" Component={ReporTable} />
                <Route exact path="/reparationrequest" Component={ReparationRequest} />
                <Route exact path="/addreparationrequest" Component={AddReparationRequest} />
                
            </Routes>
        </BrowserRouter>
    );
}
export default RoutesComponent;