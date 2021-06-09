import React, { useContext } from 'react';
import clienteAxios from '../../config/axios';
import { PrincipalContext } from '../../context';
import { tittleTable } from '../constants';
import Header from '../layout/Header';


const ModalEditInfoTress = () => {
    const {
        setModalInfoTree, dataModalEditInfoTree,
        dataModalAdmin
    } = useContext(PrincipalContext);
    let dataTree = [];

    

    // const requestDataBase = async() => {
    //     try{
    //         let requestDataBaseToUpdate = await clienteAxios.put(`/tree/update-tree/${dataModalEditInfoTree.$oid}`)
    //     }catch(error) {
    //         console.log(error);
    //     }
    // }

    // requestDataBase();


    return(
        <section className="modal-admin">
            <Header/>
        </section>
    )
}


export default ModalEditInfoTress;