import React, { Fragment, useContext, useEffect, useState } from 'react';
import clienteAxios from '../../config/axios';
import { PrincipalContext } from '../../context';
import Header from '../layout/Header';
import ModalAdmin from '../modal-admin/ModalAdmin';
import Spinner from '../Spinner';


const DashboardAdmin = () => {
    const [data,setData] = useState([])
    const [spinner, setSpinner] = useState(false);
    const {setDataModalAdmin, modalAdmin, setModalAdmin} = useContext(PrincipalContext);

    useEffect(() => {
        const requestDataBase = async () => {
            let requestTreeInfo = await clienteAxios.get("http://localhost:5000/arboles");
            setSpinner(true);
            
            setTimeout(() => {
		        setSpinner(false);
            },2000)

            setData(requestTreeInfo.data);
            
        }
        
        requestDataBase();
        //eslint-disable-next-line
    },[])

    const handleInfo = (id, info) => {
        const opacity_body = document.querySelector(".dashboard");
        opacity_body.classList.add("opacity");
        setDataModalAdmin(info);
        setModalAdmin(true);
    }

    return(
        <Fragment>
            {modalAdmin ? <ModalAdmin/> : null}

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
                                <th>Dictaminación</th>
                                <th>Detalles</th>
                                <th>Fecha de Registro</th>
                                <th>Status</th>
                                <th>Imagénes</th>
                                <th>Mapa</th>
                            </tr>
                            </thead>
                            <tbody>
                            {data && data.map((info, index) => (
                                <tr key={index}>
                                    <td>{info.name}</td>
                                    <td>{info.dictaminacion}</td>
                                    <td><button className="fl__table-btn-see" onClick={() => handleInfo(info.id, info)}>Ver</button></td>
                                    <td>{info.date}</td>
                                    <td><button className="fl__table-button-status fl__table-button-status_pending">{info.status}</button></td>
                                    <td><button>Ver imagénes</button></td>
                                    <td><button>Ver mapa</button></td>
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