import React, { useState } from 'react';
import { useHistory } from 'react-router';
import clienteAxios from '../../config/axios';
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

    const submitForm = async (e) => {
        e.preventDefault();
        let validarDatos = await validarInicioSesion(datos);

        //si la variable datos esta vacia quiere decir que no hay ningun error en la peticion
        if(Object.keys(validarDatos).length === 0){
            guardarErrores(false);
            console.log(datos.tipoUser.toLowerCase());

            try {
                let respuestaBaseDatos = await clienteAxios.get("http://localhost:5500/users");
                respuestaBaseDatos.data.map((dataDB) => {
                    //dashboard admin
                    if(datos.tipoUser.toLowerCase() === "admin"){
                        if(datos.email === dataDB.email && datos.password === dataDB.password && datos.tipoUser.toLowerCase() === dataDB.typeUser.toLowerCase()){
                            console.log("Todos los datos son correctos");
                            history.push("/dashboard-admin");
                        }
                    }
                    //dashboard brigadista
                    if(datos.tipoUser.toLowerCase() === "brigadista"){
                        if(datos.email === dataDB.email && datos.password === dataDB.password && datos.tipoUser.toLowerCase() === dataDB.typeUser.toLowerCase()){
                            console.log("Todos los datos son correctos");
                            history.push("/dashboard-brigadista");
                        }
                    }
                    
                });
            } catch (error) {
                console.log(error);
            }
        }
        else{
            guardarErrores(validarDatos);
        }
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
            <div className="login_right"></div>
        </section>
    )
}

export default Login;