import React from 'react';
import { useHistory } from 'react-router';
import logo from "./logo_.png"


const Registrarse = () => {
    const history = useHistory();

    const iniciarSesion = () => {
        history.push("/Login");
    }

    return(
        <section className="register">
            <div className="register__logo">
                <a href="/"><img src={logo}></img></a>
            </div>

            <form className="register__form">
                <input
                    type="text"
                    placeholder="Nombre"
                    className="input-principal"
                />
                <input
                    type="text"
                    placeholder="Apellidos"
                    className="input-principal"
                />
                <input
                    type="text"
                    placeholder="email"
                    className="input-principal"
                />
                <input
                    type="text"
                    placeholder="Número telefónico"
                    className="input-principal"
                />
                <input
                    type="pawword"
                    placeholder="Password"
                    className="input-principal"
                />
                <select className="register__form-selec input-principal">
                    <option>Admin</option>
                    <option>Brigadista</option>
                </select>
                <button className="btn-principal" onClick={iniciarSesion}>Iniciar Sesión</button>
                <button className="btn-principal">Registrarse</button>
            </form>
        </section>
    )
}

export default Registrarse;