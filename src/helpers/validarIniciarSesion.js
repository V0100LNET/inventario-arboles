export default function validarInicioSesion(valores){
    let errores = {};


    if(valores.email === "yo_lata@hotmail.com"){
        console.log("email correcto")
    }
    else{
        console.log("email incorrecto");
        errores.email = "El email es incorrecto"
    }

    /**TODO: peticion a la bae de datos*/
    if(valores.password === "oswaldo04"){
        console.log("Password correcto")
    }
    else{
        errores.password = "El password es incorrecto";
    }

    //TODO: aqui podemos poner un push dependiendo de que user sea
    if(!valores.tipoUser){
        errores.tipoUser = "No has seleccionado tipo de usuario"
    }
    else if(valores.tipoUser === "Brigadista"){
        console.log("Brigadista");
    }
    else if(valores.tipoUser === "Admin"){
        console.log("Admin");
    }

    return errores;
}

