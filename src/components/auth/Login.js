import React from 'react';
import { useHistory } from 'react-router';
import logo_cdmx from "./logo.png";


const Login = () => {
    const history = useHistory();

    const registrarse = () => {
        history.push("/registrarse");
    }

    return(
        <section className="login">
            <div className="login_left">
                <a href="/"><img src={logo_cdmx}></img></a>
                <form>
                    <h1>Iniciar Sesión</h1>
                    <input
                        className="input-principal" 
                        type="text"
                        placeholder="Correo"
                    />
                    <input 
                        className="input-principal"
                        type="password"
                        placeholder="Contraseña"
                    />
                    <select className="form_select input-principal">
                        <option>--Selecciona tipo de usuario--</option>
                        <option>Brigadista</option>
                        <option>Admin</option>
                    </select>
                    <button className="iniciar-sesion btn-principal">Inciar Sesión</button>
                    <button className="register btn-principal" onClick={registrarse}>Registrarse</button>
                    <p>¿Olvidaste la contraseña?</p>
                </form>
            </div>
            <div className="login_right">
                <img></img>
            </div>
        </section>
    )
}

export default Login;