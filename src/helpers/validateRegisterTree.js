export default async function ValidateRegisterTree(data){
    let errors = {};


    if(!data.name){
        errors.name = "campo obligatorio";
    }

    if(!data.date){
        errors.date = "campo obligatorio";
    }

    if(!data.placa){
        errors.placa = "campo obligatorio"
    }

    if(!data.type){
        errors.type = "campo obligatorio"
    }

    if(!data.root){
        errors.root = "campo obligatorio"
    }

    if(!data.tronco){
        errors.tronco = "campo obligatorio"
    }

    if(!data.branch){
        errors.branch = "campo obligatorio"
    }

    if(!data.leaf){
        errors.leaf = "campo obligatorio"
    }

    if(!data.flowers){
        errors.flowers = "campo obligatorio"
    }

    if(!data.size){
        errors.size = "campo obligatorio"
    }

    if(!data.age){
        errors.age = "campo obligatorio"
    }

    if(!data.ubication){
        errors.ubication = "campo obligatorio"
    }

    if(!data.state){
        errors.state = "campo obligatorio"
    }

    if(!data.referenceUbication){
        errors.referenceUbication = "campo obligatorio"
    }

    if(!data.especie){
        errors.especie = "campo obligatorio"
    }

    return errors
}



