import React, { Fragment, useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';
import { PrincipalContext } from '../../context';
import Header from '../layout/Header';
import ModalAdmin from '../modals/ModalSeeInfoTrees';
import ModalEditInfoTress from '../modals/ModalEditInfoTrees';
import ModalImages from '../modals/ModalImages';
import Spinner from '../Spinner';
import { useHistory } from 'react-router';


const DashboardAdmin = () => {
    const history = useHistory();
    const [data,setData] = useState([]);
    const [spinner, setSpinner] = useState(false);
    let opacity_body = document.querySelector(".dashboard");
    const {
        setDataModalAdmin, modalAdmin, 
        setModalAdmin, modalImages, 
        setModalImages, setSaveImages,
        modalEditInfoTree, setModalInfoTree,
        dataModalEditInfoTree, setDataModalEditInfoTree,
    } = useContext(PrincipalContext);

    useEffect(() => {
        const requestDataBase = async () => {
            let requestTreeInfo = await clienteAxios.get('/tree/get-trees');
            setSpinner(true);
            
            setTimeout(() => {
                setData(requestTreeInfo.data);
                setSpinner(false);
            },2000)
            
            
        }
        
        requestDataBase();
        //eslint-disable-next-line
    },[])

    const handleSeeImageTree = (id, info) => {
        setSaveImages(info.image);
        opacity_body.classList.add("opacity");
        setModalImages(true);
    }

    const handleSeeMapTree = (id, info) => {
  
    }

    const handleEditInfoTree = (id, info) => {
        // setModalInfoTree(true);
        setDataModalEditInfoTree(info);
        // setDataModalAdmin(info);
        history.push('/edit-info');
    }

    const handleDeleteTree = async(id, info) => {
        console.log(info)
        console.log(id)
        Swal.fire({
            title: '¿Estás seguro que deseas aliminar el registro del árbol?',
            text: "¡No podrás deshacer esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        }).then(async(result) => {
            if(result.isConfirmed){
                opacity_body.classList.add("opacity");
                setSpinner(true);
                try{
                    let deleteInfoTreeDataBase = await clienteAxios.delete(`/tree/delete-trees/${id.$oid}`);
                    console.log(deleteInfoTreeDataBase);
                }catch (error) {
                    console.log(error);
                }
                setTimeout(() => {
                    Swal.fire({
                        title: '¡Registro Eliminado!',
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    })
                    setSpinner(false);
                    opacity_body.classList.remove("opacity");
                    setTimeout(() => window.location.reload(),1500);
                },2500)
            }
            else{
                return
            }
        })
    }

    const handleInfo = (id, info) => {
        opacity_body.classList.add("opacity");
        setDataModalAdmin(info);
        setModalAdmin(true);
    }

    return(
        <Fragment>
            {modalAdmin ? <ModalAdmin/> : null}
            {modalImages ? <ModalImages/> : null}
            {modalEditInfoTree ? <ModalEditInfoTress/> : null}
            
            <section className="dashboard">
                <Header/>

                <div className="dashboard__admin">
                    <div className="table-wrapper">
                        <h2>Árboles Registrados</h2>
                        
                        <div className="table-wrapper__filter-search">
                            <div className="table-wrapper__filter-search__select">
                                <select>
                                    <option>--Filtrar Búsqueda--</option>
                                    <option>Especie</option>
                                    <option>Edad</option>
                                    <option>Status</option>
                                    <option>Tamaño</option>
                                </select>
                            </div>
                            <div className="table-wrapper__filter-search__input">
                                <input
                                    placeholder="Buscar"
                                />
                            </div>
                        </div>

                        <table className="fl__table">
                            <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Detalles</th>
                                <th>Fecha de Registro</th>
                                <th>Imagénes</th>
                                <th>Mapa</th>
                                <th>Editar</th>
                                <th>Eliminar</th>

                            </tr>
                            </thead>
                            <tbody>
                            {data && data.map((info, index) => (
                                <tr key={index}>
                                    <td>{info.name}</td>
                                    <td><button className="fl__table-btn-see" onClick={() => handleInfo(info.id, info)}>Ver</button></td>
                                    <td>{info.date}</td>
                                    <td><button className="fl__table-btn-see" onClick={() => handleSeeImageTree(info._id, info)}>Ver imagénes</button></td>
                                    <td><button className="fl__table-btn-see" onClick={() => handleSeeMapTree(info._id, info)}>Ver mapa</button></td>
                                    <td><button className="fl__table-btn-see" onClick={() => handleEditInfoTree(info._id, info)}>Editar</button></td>
                                    <td><button className="fl__table-btn-see" onClick={() => handleDeleteTree(info._id, info)}>Eliminar</button></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                {spinner ? <Spinner/> : null}
            </section>
        </Fragment>
    );
}

export default DashboardAdmin;