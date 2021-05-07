import React, { useState } from 'react';
import { useHistory } from 'react-router';
import validarInicioSesion from '../../helpers/validarIniciarSesion';
import Error from '../error/Error';
import logo_cdmx from "./logo.png";


const Login = () => {
    const history = useHistory();
    const [error, guardarErrores] = useState(false);
    const [datos, guardarDatos] = useState({
        email: "",
        password: "",
        tipoUser: ""
    });

    const registrarse = () => {
        history.push("/registrarse");
    }

    const { email, password, tipoUser} = datos;

    const setData = (e) => {
        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        let validarDatos = validarInicioSesion(datos);

        if(Object.keys(validarDatos).length === 0){
            console.log("Datos enviados correctamente");
            guardarErrores(false);

            // guardarDatos({
            //     email: "",
            //     password: "",
            //     tipoUser: ""
            // })
            history.push("/dashboard-admin");
        }
        else{
            guardarErrores(validarDatos);
        }
        
        console.log(error);
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
                        onChange={setData}
                        name="email"
                        value={email}
                    />
                    {error ? <Error mensaje={error.email}/> : null}

                    <input 
                        className="input-principal"
                        type="password"
                        placeholder="Contraseña"
                        onChange={setData}
                        name="password"
                        value={password}
                    />
                    {error ? <Error mensaje={error.password}/> : null}

                    <select 
                        className="form_select input-principal"
                        name="tipoUser"
                        onChange={setData}
                        value={tipoUser}
                    >
                        <option>--Selecciona tipo de usuario--</option>
                        <option>Brigadista</option>
                        <option>Admin</option>
                    </select>
                    {error ? <Error mensaje={error.tipoUser}/> : null}
                    
                    <button className="iniciar-sesion btn-principal" onClick={submitForm}>Inciar Sesión</button>
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