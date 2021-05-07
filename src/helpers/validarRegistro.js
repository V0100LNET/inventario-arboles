export default function validarRegistro(valores){
    let errores = {};

    if(!valores.nombre){
        errores.nombre = "El nombre es obligatorio"
    }

    if(!valores.apellidos){
        errores.apellidos = "El apellido es obligatorio"
    }

    if(!valores.email){
        errores.email = "El Email es obligatorio";
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)){
        errores.email  = "Email no válido";
    }

    if(!valores.numeroTel){
        errores.numeroTel = "El número es obligatorio"
    }

    if(!valores.password){
        errores.password = "El password es obligatorio";
    }
    else if(valores.password.length < 6){
        errores.password = "El password debe ser de al menos 6 carácteres";
    }

    if(!valores.tipoUser){
        errores.tipoUser = "No has seleccionado tipo de usuario"
    }

    return errores;
}

