import React, { useState } from 'react';
import { useHistory } from 'react-router';
import validarRegistro from '../../helpers/validarRegistro';
import Error from '../error/Error';
import logo from "./logo_.png"


const Registrarse = () => {
    const [error, guardarErrores] = useState(false);
    const [datos, guardarDatos] = useState({
        nombre: "",
        apellidos: "",
        email: "",
        numeroTel: "",
        password: "",
        tipoUser: ""
    });


    const history = useHistory();

    const { nombre, apellidos, email, numeroTel, password, tipoUser} = datos;

    const iniciarSesion = () => {
        history.push("/Login");
    }

    const setData = (e) => {
        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        let validarDatos = validarRegistro(datos);

        if(Object.keys(validarDatos).length === 0){
            console.log("Datos enviados correctamente");
            guardarDatos({
                nombre: "",
                apellidos: "",
                email: "",
                numeroTel: "",
                password: "",
                tipoUser: ""
            })
            guardarErrores(false);
        }
        else{
            guardarErrores(validarDatos);
        }
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
                    onChange={setData}
                    name="nombre"
                    value={nombre}
                />
                {error ? <Error mensaje={error.nombre}/> : null}
                
                <input
                    type="text"
                    placeholder="Apellidos"
                    className="input-principal"
                    onChange={setData}
                    name="apellidos"
                    value={apellidos}
                />
                {error ? <Error mensaje={error.apellidos}/> : null}

                <input
                    type="text"
                    placeholder="email"
                    className="input-principal"
                    onChange={setData}
                    name="email"
                    value={email}
                />
                {error ? <Error mensaje={error.email}/> : null}

                <input
                    type="text"
                    placeholder="Número telefónico"
                    className="input-principal"
                    onChange={setData}
                    name="numeroTel"
                    value={numeroTel}
                />
                {error ? <Error mensaje={error.numeroTel}/> : null}

                <input
                    type="password"
                    placeholder="Password"
                    className="input-principal"
                    onChange={setData}
                    name="password"
                    value={password}
                />
                {error ? <Error mensaje={error.password}/> : null}

                <select 
                    className="register__form-selec input-principal"
                    name="tipoUser"
                    onChange={setData}
                    value={tipoUser}
                >
                    <option>--Seleccione tipo de usuario--</option>
                    <option>Admin</option>
                    <option>Brigadista</option>
                </select>
                {error ? <Error mensaje={error.tipoUser}/> : null}

                <button className="btn-principal" onClick={submitForm}>Registrarse</button>
                <button className="btn-principal" onClick={iniciarSesion}>Iniciar Sesión</button>
            </form>
        </section>
    )
}

export default Registrarse;