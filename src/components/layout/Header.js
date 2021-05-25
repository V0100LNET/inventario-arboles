import React, { useState } from 'react';
import logo_cdmx from "./logo-png.png";
import { useHistory } from 'react-router';
import Spinner from '../Spinner';

const Header = () => {
    const history = useHistory();
    const userName_storage = localStorage.getItem('nameUser');
    const [spinner, setSpinner] = useState(false);


    const iniciarSesion = () => {
        history.push("/Login");
    }

    const registrarUsuario = () => {
        history.push("/registrarse");
    }

    const showDashboardAdmin = () => {
        const typeUser = localStorage.getItem('typeUser');

        if(typeUser === "Admin"){
            history.push("/dashboard-admin");
        }
        else{
            history.push("/dashboard-brigadista");
        }
    }

    const closeSession = () => {
        const setOpacityContent = document.body;

        setOpacityContent.classList.add("opacity");
        setSpinner(true);
        localStorage.removeItem('nameUser');
        localStorage.removeItem('typeUser');
        setTimeout(() => {
            setSpinner(false);
            setOpacityContent.classList.remove("opacity");
            history.push("/");
        },2000)
    }

    return(
        <nav className="home__links">
            <div className="home__links-logo">
            <a href="/"><img src={logo_cdmx} alt="logo"></img></a>    
            </div>
            <div className="home__links-link">
                <a href="/#" className="active">Inicio</a>
                <a href="/acerca-de">A cerca de</a>
                <a href="/contacto">Contacto</a>
            </div>
            <div className="home__links-buton">
                {userName_storage === null 
                    ? (
                        <div>
                            <button className="register" onClick={registrarUsuario}>Registrarse</button>
                            <button className="btn-principal" onClick={iniciarSesion}>Iniciar Sesión</button>
                        </div>
                    )
                    : (
                        <div>
                            <button className="register" onClick={() => showDashboardAdmin()}>{`Buen día ${userName_storage}`}</button>
                            <button className="btn-principal" onClick={closeSession}>Cerrar Sesión</button>
                        </div>
                    )
                }
            </div>
            {spinner ? <Spinner/> : null}
        </nav>
    );
}


export default Header;