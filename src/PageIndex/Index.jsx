import React from 'react';
import '../Stylesheet/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Navigator/Navigator';

export default function Index() {
    return (
        <div>
            <header>
                <h1 className="titulo">Transportes la Libertad <span>Agency</span></h1>
            </header>
            <NavigationBar />

            <section className="hero">
                <div className="contenido-hero">
                    <h2 className="titulo">Optimización y Eficiencia en el Transporte</h2>
                    <p className="subtitulo">Garantizamos que tu carga llegue a tiempo y en perfectas condiciones, a través de un mantenimiento y logística de primera.</p>
                    <div className="ubicacion">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-map-pin"
                            width="44"
                            height="44"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#ffc107"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="12" cy="11" r="3" />
                            <path
                                d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
                            />
                        </svg>
                        <p className="ubi">Arequipa, Perú</p>
                    </div>
                    <a href="ControladorLogin?accion=IngresarLogin" className="boton">Registrarse</a>
                </div>
            </section>

            <main className="cotenedor">
                <h2 className="titulo-resaltado">Descripción</h2>
                <section className="servicios">
                    <section className="servicio">
                        <h3>Misión</h3>
                        <div className="iconos">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="64"
                                height="64"
                                viewBox="0 0 24 24"
                                fill="rgba(255, 255, 255, 1)"
                                style={{ transform: 'scaleX(-1)' }}
                            >
                                <path
                                    d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"
                                />
                                <path
                                    d="M9.293 9.293L5.586 13l3.707 3.707 1.414-1.414L8.414 13l2.293-2.293zm5.414 0-1.414 1.414L15.586 13l-2.293 2.293 1.414 1.414L18.414 13z"
                                />
                            </svg>
                        </div>
                        <p>Ser el principal proveedor de soluciones logísticas con excelencia operativa y tecnología de punta para las empresas líderes de los sectores de mayor desarrollo e impacto económico en el país.</p>
                    </section>

                    <section className="servicio">
                        <h3>Visión</h3>
                        <div className="iconos">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                viewBox="0 0 24 24"
                                fill="rgba(255, 255, 255, 1)"
                            >
                                <path
                                    d="M11.587 6.999H7.702a2 2 0 0 0-1.88 1.316l-3.76 10.342c-.133.365-.042.774.232 1.049l.293.293 6.422-6.422c-.001-.026-.008-.052-.008-.078a1.5 1.5 0 1 1 1.5 1.5c-.026 0-.052-.007-.078-.008l-6.422 6.422.293.293a.997.997 0 0 0 1.049.232l10.342-3.761a2 2 0 0 0 1.316-1.88v-3.885L19 10.414 13.586 5l-1.999 1.999zm8.353 2.062-5-5 2.12-2.121 5 5z"
                                />
                            </svg>
                        </div>
                        <p>Trabajamos comprometidos para el éxito y tranquilidad de nuestros clientes, y de productos especializados que aseguren la continuidad, seguridad y eficiencia de sus operaciones.</p>
                    </section>

                    <section className="servicio">
                        <h3>Valores</h3>
                        <div className="iconos">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                viewBox="0 0 24 24"
                                fill="rgba(255, 255, 255, 1)"
                            >
                                <path d="M4 8H2v12a2 2 0 0 0 2 2h12v-2H4z" />
                                <path
                                    d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-9 12V6l7 4z"
                                />
                            </svg>
                        </div>
                        <p>Garantizamos que tu carga llegue a tiempo y en perfectas condiciones, a través de un mantenimiento y logística de primera. Nos dedicamos a ofrecer soluciones integrales que incluyen mantenimiento preventivo.</p>
                    </section>
                </section>

                <h2 className="titulo-resaltado">Sedes</h2>
                <section className="clientes">
                    <section className="cliente">
                        <img src="/image/first-person.jpg" className="persona1" alt="Persona en Arequipa" />
                        <div className="nombrecliente">
                            <div className="cliente-info">
                                <h3 className="persona-nombre">Arequipa</h3>
                            </div>
                        </div>
                    </section>

                    <section className="cliente">
                        <img src="/image/second_person.jpg" className="persona1" alt="Persona en Cusco" />
                        <div className="nombrecliente">
                            <div className="cliente-info">
                                <h3 className="persona-nombre">Cusco</h3>
                            </div>
                        </div>
                    </section>

                    <section className="cliente">
                        <img src="/image/third_person.jpg" className="persona1" alt="Persona en Lima" />
                        <div className="nombrecliente">
                            <div className="cliente-info">
                                <h3 className="persona-nombre">Lima</h3>
                            </div>
                        </div>
                    </section>
                </section>
            </main>

            <footer className="footer">
                <p>Todos los derechos reservados 2024</p>
            </footer>
        </div>
    );
}
