import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddRequestStore from "../PagesStore/AddRequestStore";
import AddRegister from "../PagesAdmin/AddRegister";
import Index from "../PageIndex/Index";

function RoutesComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" Component={Index} />
                
            </Routes>
        </BrowserRouter>
    );
}
export default RoutesComponent;