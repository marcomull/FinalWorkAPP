import React from 'react';
import '../Stylesheet/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Navigator/Navigator';

export default function AddRequest() {

    return (
        <div>
            <header>
                <h1 className="titulo">Transportes la libertad<span>Agency</span></h1>
            </header>
            <NavigationBar>

            </NavigationBar>

            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <h1 className="mb-4">Agregar Solicitud</h1>
                        <form>
                            <div className="form-group mb-3">
                                <label htmlFor="inicioReparacion">Inicio de reparación:</label>
                                <input
                                    id="inicioReparacion"
                                    className="form-control"
                                    type="date"
                                    name="txtInicioReparacion"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="repuesto">Repuesto:</label>
                                <select id="repuesto" className="form-control" name="txtRepuesto">
                                    <option value="repuesto1">Repuesto 1</option>
                                    <option value="repuesto2">Repuesto 2</option>
                                    <option value="repuesto3">Repuesto 3</option>
                                </select>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-success" type="submit">Solicitar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <footer className="footer text-center py-3">
                <p>Todos los derechos reservados 2024</p>
            </footer>
       </div>
);
}