import React from 'react';
import logo_cdmx from "./logo-png.png";
import { Route, Router, useHistory } from 'react-router';


const Home = () => {
    const history = useHistory();

    const IniciarSesion = () => {
        history.push("/Login");
    }


    return(
        <section className="home">
            <nav className="home__links">
                <div className="home__links-logo">
                    <img src={logo_cdmx} alt="logo"/>
                </div>
                <div className="home__links-link">
                    <a className="active">Inicio</a>
                    <a>A cerca de</a>
                    <a>Contacto</a>
                </div>
                <div className="home__links-buton">
                    <button className="register">Registrarse</button>
                    <button className="btn-principal" onClick={IniciarSesion}>Iniciar Sesión</button>
                </div>
            </nav>

            <div className="home__content">
                <section>
                    <h1 className="home__content_title">CDMX Tramites</h1>
                    <p>
                        Plataforma para el ciudadano el cual permite hacer
                        tramites como poda de árboles
                    </p>
                    <div className="home__content_buttons">
                        <button className="btn-principal get-service">Solcitar Servicio</button>
                        <button className="btn-principal get-near-zone">Zonas Cercanas</button>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Home;