import React, { useContext, useState } from 'react';
import Error from '../error/Error';
import Header from '../layout/Header';
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';
import ValidateRegisterTree from '../../helpers/validateRegisterTree';
import Spinner from '../Spinner';
import { PrincipalContext } from '../../context';
import { useHistory } from 'react-router-dom';



const EditInfoTree = () => {
    const history = useHistory();
    const {dataModalEditInfoTree, setDataModalEditInfoTree} = useContext(PrincipalContext);
    const [error, setError] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const { 
        name, date, 
        placa, type, 
        root, tronco, 
        branch, leaf, 
        flowers, size, 
        age, ubication, 
        state, referenceUbication, 
        especie
    } = dataModalEditInfoTree;

    const setData = (e) => {
        setDataModalEditInfoTree({
            ...dataModalEditInfoTree,
            [e.target.name]: e.target.value
        })
    }

    console.log(dataModalEditInfoTree.age);

    // subiendo la imagen 
    // const onFileUpload = (e) => {
    //     fileObject.push(e.target.files);
    //     for(let i=0; i<fileObject[0].length; i++){
    //         fileArray.push(URL.createObjectURL(fileObject[0][i]));
    //     }
       
    //     if(fileArray.length > 5){
    //         Swal.fire({
    //             icon: 'error',
    //             title: '¡ERROR!',
    //             text: '!Solo se permiten 5 imágenes!',
    //             confirmButtonText: 'Aceptar'
    //         })
    //         setDataTree({
    //             ...dataTree,
    //             image: fileArray
    //         })
    //         return;
    //     }
    //     else{
    //         setError(false);
    //         setDataTree({
    //             ...dataTree,
    //             image: fileArray
    //         })
    //     }
    // }

    // enviando el formulario
    const sendFormData = async(e) => {
        e.preventDefault();
        const setOpacityContent = document.querySelector(".dashboard");
        let validateData = await ValidateRegisterTree(dataModalEditInfoTree);

        if(Object.keys(validateData).length === 0){
            setError(false);

            // if(!dataTree.image){
            //     Swal.fire({
            //         icon: 'error',
            //         title: '¡ERROR!',
            //         text: '!No has seleccionado ninguna imagen!',
            //         confirmButtonText: 'Aceptar'
            //     })

            //     return
            // }
            // else if(dataTree.image.length > 5){
            //     Swal.fire({
            //         icon: 'error',
            //         title: '¡ERROR!',
            //         text: '!Solo se permiten 5 imágenes!',
            //         confirmButtonText: 'Aceptar'
            //     })
                                
            //     return
            // }

            try{
                let requestDataBase = await clienteAxios.put('/tree/update-tree',dataModalEditInfoTree);
                console.log(requestDataBase);
                if(requestDataBase.data.description === dataModalEditInfoTree.name){
                    Swal.fire({
                        icon: 'error',
                        title: '¡ERROR!',
                        text: requestDataBase.data.message,
                        confirmButtonText: 'Aceptar'
                    })
                    return
                }

                if(requestDataBase.data.description === dataModalEditInfoTree.placa){
                    Swal.fire({
                        icon: 'error',
                        title: '¡ERROR!',
                        text: requestDataBase.data.message,
                        confirmButtonText: 'Aceptar'
                    })
                    return
                }
            }catch(error){
                console.log(error);
                return
            }
        }
        else{
            setError(validateData);
            return
        }
        setSpinner(true);
        setOpacityContent.classList.add("opacity");
        setTimeout(() => {
            setSpinner(false);
            setOpacityContent.classList.remove("opacity");
            Swal.fire({
                title: '¡Cambios Guardados con Éxito!',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                allowOutsideClick: false
            }).then(async(result) => {
                if(result.isConfirmed){
                    history.push('/dashboard-admin');
                }
            })
            // setTimeout(() => {
            //     history.push('/dashboard-admin');
            // },2000)
            console.log(dataModalEditInfoTree);
        },3000)
    }

    return(
        <section className="dashboard">
            <Header/>

            <h1 className="dashboard_title">Editar Registros de Árboles</h1>
            <section className="container-form">
                <form>
                    <div className="only-flex">
                        <div className="container-form__left">
                            <label>Nombre</label>
                            <input 
                                placeholder="Nombre"    
                                type="text" 
                                className="input-principal" 
                                name="name"
                                value={name}
                                onChange={setData}
                            />

                            {error ? <Error mensaje={error.name}/> : null}

                            <label>Fecha</label>
                            <input 
                                placeholder="Fecha" 
                                type="date" 
                                className="input-principal"
                                name="date"
                                value={date}
                                onChange={setData}
                            />

                            {error ? <Error mensaje={error.date}/> : null}

                            <label>Placa</label>
                            <input 
                                placeholder="Placa" 
                                type="text" 
                                className="input-principal" 
                                name="placa"
                                value={placa}
                                onChange={setData}
                            />

                            {error ? <Error mensaje={error.placa}/> : null}

                            <label>Tipo</label>
                            <input 
                                placeholder="Tipo" 
                                type="text" 
                                className="input-principal" 
                                name="type"
                                value={type}
                                onChange={setData}
                            />

                            {error ? <Error mensaje={error.type}/> : null}

                            <label>Raíz</label>
                            <input 
                                placeholder="Raíz" 
                                type="text" 
                                className="input-principal" 
                                name="root"
                                value={root}
                                onChange={setData}
                            />

                            {error ? <Error mensaje={error.root}/> : null}

                            <label>Tronco</label>
                            <input 
                                placeholder="Tronco" 
                                type="text" 
                                className="input-principal" 
                                name="tronco"
                                value={tronco}
                                onChange={setData}
                            />

                            {error ? <Error mensaje={error.tronco}/> : null}

                            <label>Rama</label>
                            <input 
                                placeholder="Rama" 
                                type="text" 
                                className="input-principal" 
                                name="branch"
                                value={branch}
                                onChange={setData}
                            />

                            {error ? <Error mensaje={error.branch}/> : null}

                            <label>Hojas</label>
                            <input 
                                placeholder="Hojas" 
                                type="text" 
                                className="input-principal" 
                                name="leaf"
                                value={leaf}
                                onChange={setData}
                            />

                            {error ? <Error mensaje={error.leaf}/> : null}

                        </div>
                    
                        <div className="container-form__right">
                            <label>Flores</label>
                            <input 
                                placeholder="Flores" 
                                type="text" 
                                className="input-principal"
                                name="flowers" 
                                value={flowers}
                                onChange={setData}
                            />

                            {error ? <Error mensaje={error.flowers}/> : null}

                            <label>Tamaño</label>
                            <input 
                                placeholder="Tamaño" 
                                type="text" 
                                className="input-principal" 
                                name="size"
                                value={size}
                                onChange={setData}
                            />

                            {error ? <Error mensaje={error.size}/> : null}

                            <label>Edad</label>
                            <input 
                                placeholder="Edad" 
                                type="text" 
                                className="input-principal"
                                name="age"
                                value={age}
                                onChange={setData}
                            />

                            {error ? <Error mensaje={error.age}/> : null}

                            <label>Ubicación</label>
                            <input 
                                placeholder="Ubicación" 
                                type="text" 
                                className="input-principal" 
                                name="ubication"
                                value={ubication}
                                onChange={setData}
                            />

                            {error ? <Error mensaje={error.ubication}/> : null}

                            <label>Estado del árbol</label>
                            <input 
                                placeholder="Estado" 
                                type="text" 
                                className="input-principal" 
                                name="state"
                                value={state}
                                onChange={setData}
                            />

                            {error ? <Error mensaje={error.state}/> : null}

                            <label>Referencia de Ubicación</label>
                            <input 
                                placeholder="Referencia" 
                                type="text" 
                                className="input-principal" 
                                name="referenceUbication"
                                value={referenceUbication}
                                onChange={setData}
                            />

                            {error ? <Error mensaje={error.referenceUbication}/> : null}

                            {/* <label>Imagénes</label>
                            <input 
                                type="file" 
                                className="input-principal" 
                                onChange={onFileUpload}
                                multiple
                                accept="image/*"
                                id="resetValue"
                            /> */}

                            <label>Especie</label>
                            <input 
                                placeholder="Especie" 
                                type="text" 
                                className="input-principal" 
                                name="especie"
                                value={especie}
                                onChange={setData}
                            />

                            {error ? <Error mensaje={error.especie}/> : null}

                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn-principal btn"
                        onClick={sendFormData}
                    >Guardar Cambios</button>
                </form>
            </section>
            {spinner ? <Spinner/> : null}
        </section>
    )
}


export default EditInfoTree;