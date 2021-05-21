import validarInicioSesion from '../../helpers/validarIniciarSesion';
import React, { Fragment, useState } from 'react';
import clienteAxios from '../../config/axios';
import { useHistory } from 'react-router';
import logo_cdmx from "./logo.png";
import Error from '../error/Error';
import Spinner from '../Spinner';




const Login = () => {
    const history = useHistory();
    const [error, guardarErrores] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [datos, guardarDatos] = useState({
        email: "",
        password: "",
        typeUser: ""
    });


    const registrarse = () => {
        history.push("/registrarse");
    }

    const { email, password, typeUser} = datos;

    const setData = (e) => {
        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = async (e) => {
        e.preventDefault();
        const setOpacityContent = document.querySelector(".login");
        let validarDatos = await validarInicioSesion(datos);

        //si la variable datos esta vacia quiere decir que no hay ningun error en la peticion
        if(Object.keys(validarDatos).length === 0){
            console.log(datos);
            guardarErrores(false);
            setSpinner(true);
            setOpacityContent.classList.add("opacity");
            try {
                let respuestaBaseDatos = await clienteAxios.post('/auth/login',datos);
                console.log(respuestaBaseDatos);
                setTimeout(() => {
                    setSpinner(false);
                    setOpacityContent.classList.remove("opacity");
                    history.push("/dashboard-admin")
                }, 3000);
            } catch (error) {
                console.log(error);
            }
        }
        else{
            guardarErrores(validarDatos);
        }
    }

    return(
        <Fragment>
            <section className="login">
                <div className="login_left">
                    <a href="/"><img src={logo_cdmx} alt="logo"></img></a>
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
                            name="typeUser"
                            onChange={setData}
                            value={typeUser}
                        >
                            <option>--Selecciona tipo de usuario--</option>
                            <option>Brigadista</option>
                            <option>Admin</option>
                        </select>
                        {error ? <Error mensaje={error.typeUser}/> : null}
                        
                        <button className="iniciar-sesion btn-principal" onClick={submitForm}>Inciar Sesión</button>
                        <button className="register btn-principal" onClick={registrarse}>Registrarse</button>
                        <p>¿Olvidaste la contraseña?</p>
                    </form>
                </div>
                <div className="login_right"></div>
            </section>
            {spinner ? <Spinner/> : null}
        </Fragment>
    )
}

export default Login;