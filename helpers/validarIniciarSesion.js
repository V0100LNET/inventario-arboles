export default function validarIniciarSesion(valores){
    let errores = {};

    //validar email
    if(!valores.email){
        errores.email = "El Email es obligatorio";
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)){
        errores.email  = "Email no válido";
    }

    //validar el password del usuario
    if(valores.password){
        errores.password = "El password es obligatorio";
    }
    else if(valores.password.length < 6){
        errores.password = "El password debe ser de al menos 6 carácteres";
    }


    return errores;
}