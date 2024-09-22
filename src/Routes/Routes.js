import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddRequestStore from "../PagesStore/AddRequestStore";

function RoutesComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" Component={AddRequestStore} />
                
            </Routes>
        </BrowserRouter>
    );
}
export default RoutesComponent;