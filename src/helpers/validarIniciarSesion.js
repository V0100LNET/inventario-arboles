export default async function validarInicioSesion(valores){
    //valores viene del componente login el cual nos brinda todos lod atos digitados desde los inputs
    let errores = {};
    
    if(!valores.email){
        errores.email = "El correo no es válido";
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)){
        errores.email  = "Email no válido";
    }

    if(!valores.password){
        errores.password = "La contraseña es incorrecta";
    }

    if(!valores.typeUser){
        errores.typeUser = "No has seleccionado tipo de usuario";
    }

    return errores;
}

