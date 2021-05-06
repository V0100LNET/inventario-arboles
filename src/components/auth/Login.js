import React from 'react';
import logo_cdmx from "./logo.png";


const Login = () => {
    return(
        <section className="login">
            <div className="login_left">
                <img src={logo_cdmx}></img>
                <form>
                    <h1>Iniciar Sesión</h1>
                    <input
                        className="input-principal" 
                        type="text"
                        placeholder="Escribe tu CURP"
                    />
                    <input 
                        className="input-principal"
                        type="password"
                        placeholder="Contraseña"
                    />
                    <seclect>
                        <option>Brigadista</option>
                        <option>Admin</option>
                    </seclect>
                    <button className="iniciar-sesion btn-principal">Inciar Sesión</button>
                    <button className="register btn-principal">Registrarse</button>
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