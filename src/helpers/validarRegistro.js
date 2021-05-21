export default function validarRegistro(valores){
    let errores = {};

    if(!valores.name){
        errores.name = "El nombre es obligatorio"
    }

    if(!valores.lastName){
        errores.lastName = "El apellido es obligatorio"
    }

    if(!valores.email){
        errores.email = "El Email es obligatorio";
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)){
        errores.email  = "Email no válido";
    }

    if(!valores.number_tel){
        errores.number_tel = "El número es obligatorio"
    }

    if(!valores.password){
        errores.password = "El password es obligatorio";
    }
    else if(valores.password.length < 6){
        errores.password = "El password debe ser de al menos 6 carácteres";
    }

    if(!valores.typeUser){
        errores.typeUser = "No has seleccionado tipo de usuario"
    }

    return errores;
}

