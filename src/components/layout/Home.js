import React from 'react';
import logo_cdmx from "./logo-png.png";
import { useHistory } from 'react-router';


const Home = () => {
    const history = useHistory();

    const iniciarSesion = () => {
        history.push("/Login");
    }

    const registrarUsuario = () => {
        history.push("/registrarse");
    }


    return(
        <section className="home">
            <nav className="home__links">
                <div className="home__links-logo">
                    <img src={logo_cdmx} alt="logo"/>
                </div>
                <div className="home__links-link">
                    <a href="/#" className="active">Inicio</a>
                    <a href="/acerca-de">A cerca de</a>
                    <a href="/contacto">Contacto</a>
                </div>
                <div className="home__links-buton">
                    <button className="register" onClick={registrarUsuario}>Registrarse</button>
                    <button className="btn-principal" onClick={iniciarSesion}>Iniciar Sesión</button>
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