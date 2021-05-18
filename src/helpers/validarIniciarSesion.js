export default async function validarInicioSesion(valores){
    //valores viene del componente login el cual nos brinda todos lod atos digitados desde los inputs
    let errores = {};
    
    if(!valores.email){
        errores.email = "El correo no es válido";
    }

    if(!valores.password){
        errores.password = "La contraseña es incorrecta";
    }

    if(!valores.tipoUser){
        errores.tipoUser = "No has seleccionado tipo de usuario";
    }

    return errores;
}

