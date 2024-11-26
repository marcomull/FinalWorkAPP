import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheet/style.css';
import NavigationBar from '../Navigator/Navigator';

export default function RequestSend() {
    return (
        <div>
            <header>
                <h1 className="titulo">Transportes la libertad<span>Agency</span></h1>
            </header>
            <NavigationBar>

            </NavigationBar>

            <div className="container">
                <div className="col-lg-12">
                    <h1>Responde solicitud</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="cantidad" className="form-label">Id Request:</label>
                            <input id="cantidad" className="form-control" type="text" name="cantidad" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cantidad" className="form-label">Id Repuesto:</label>
                            <input id="cantidad" className="form-control" type="text" name="cantidad" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="repuesto" className="form-label">Cantidad:</label>
                            <input id="repuesto" className="form-control" type="text" name="repuesto" />
                        </div>
                        <Link className="btn btn-success" to="/responderRequest">Responder Solicitud</Link>
                    </form>
                </div>
            </div>

            <footer className="footer">
                <p>Todos los derechos reservados 2024</p>
            </footer>
        </div>
    );
}