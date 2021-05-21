import validarRegistro from '../../helpers/validarRegistro';
import React, { Fragment, useState } from 'react';
import clienteAxios from '../../config/axios';
import { useHistory } from 'react-router';
import Error from '../error/Error';
import Spinner from '../Spinner';
import Swal from 'sweetalert2';
import logo from "./logo_.png"


const Registrarse = () => {
    const [error, guardarErrores] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [datos, guardarDatos] = useState({
        name: "",
        lastName: "",
        email: "",
        number_tel: "",
        password: "",
        typeUser: ""
    });


    const history = useHistory();

    const { name, lastName, email, number_tel, password, typeUser} = datos;

    const iniciarSesion = () => {
        history.push("/Login");
    }

    const setData = (e) => {
        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = async e => {
        e.preventDefault();
        let validarDatos = validarRegistro(datos);
        const setOpacityContent = document.querySelector(".register");

        // TODO: aqui falta la validacion cuando es admin o brigadista y dependiendo de eso, es 
        // como te llevara al dashboard correspondiente
        if(Object.keys(validarDatos).length === 0){
            console.log(datos);

            try {
                let respuestaBaseDatos = await clienteAxios.post('/auth/register',datos);
                console.log(respuestaBaseDatos);
                setSpinner(true);
                setOpacityContent.classList.add("opacity");
                console.log("Datos enviados correctamente");

                setTimeout(() => {
                    setSpinner(false)
                    Swal.fire({
                        title: '¡Registro Exitoso!',
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    });
                    guardarDatos({
                        name: "",
                        lastName: "",
                        email: "",
                        number_tel: "",
                        password: "",
                        typeUser: ""
                    })
                    setOpacityContent.classList.remove("opacity");
                }, 3000);
                guardarErrores(false);
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
            <section className="register">
                <div className="register__logo">
                    <a href="/"><img src={logo} alt="Logo de registro"></img></a>
                </div>
                
                <form className="register__form">
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="input-principal"
                        onChange={setData}
                        name="name"
                        value={name}
                        />
                    {error ? <Error mensaje={error.name}/> : null}
                    
                    <input
                        type="text"
                        placeholder="Apellidos"
                        className="input-principal"
                        onChange={setData}
                        name="lastName"
                        value={lastName}
                        />
                    {error ? <Error mensaje={error.lastName}/> : null}

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
                        name="number_tel"
                        value={number_tel}
                        />
                    {error ? <Error mensaje={error.number_tel}/> : null}

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
                        name="typeUser"
                        onChange={setData}
                        value={typeUser}
                        >
                        <option>--Seleccione tipo de usuario--</option>
                        <option>Admin</option>
                        <option>Brigadista</option>
                    </select>
                    {error ? <Error mensaje={error.typeUser}/> : null}

                    <button className="btn-principal" onClick={submitForm}>Registrarse</button>
                    <button className="btn-principal" onClick={iniciarSesion}>Iniciar Sesión</button>
                    

                </form>
            {spinner ? <Spinner/> : null}
            </section>
        </Fragment>
    )
}

export default Registrarse;