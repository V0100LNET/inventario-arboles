import React, { useEffect, useState } from 'react';
import clienteAxios from '../../config/axios';
// import { PrincipalContext } from '../../context';
import Header from '../layout/Header';
import Spinner from '../Spinner';


const DashboardAdmin = () => {
    const [data,setData] = useState({})
    const [spinner, setSpinner] = useState(false);
    // const {test, setTest} = useContext(PrincipalContext);

    useEffect(() => {
        const requestDataBase = async () => {
            let requestTreeInfo = await clienteAxios.get("http://localhost:5000/arboles");
            // console.log(requestTreeInfo.data); //array in console
            setData(requestTreeInfo.data);
            console.log(data);
            setSpinner(true);
            
            setTimeout(() => {
                setSpinner(false);
            },2000)
        }
        
        requestDataBase();
        //eslint-disable-next-line
    },[])


    return(
        <section className="dashboard">
            <Header/>

            <div className="dashboard__admin">
                <div className="table-wrapper">
                    <h2>Árboles Registrados</h2>
                    <table className="fl__table">
                        <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Dictaminación de Árboles</th>
                            <th>Detalles</th>
                            <th>Fecha</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>ARB33</td>
                            <td>Poda de árbol</td>
                            <td><button class="fl__table-btn-see">Ver</button></td>
                            <td>Fecha</td>
                            <td><button class="fl__table-button-status fl__table-button-status_pending">Pendiente</button></td>
                            </tr>
                        <tr>
                            <td>ARB34</td>
                            <td>Poda de árbol</td>
                            <td><button class="fl__table-btn-see">Ver</button></td>
                            <td>Fecha</td>
                            <td><button class="fl__table-button-status fl__table-button-status_success">Pendiente</button></td>
                        </tr>
                        <tr>
                            <td>ARB35</td>
                            <td>Poda de árbol</td>
                            <td><button class="fl__table-btn-see">Ver</button></td>
                            <td>Fecha</td>
                            <td><button class="fl__table-button-status fl__table-button-status_cancel">Pendiente</button></td>
                        </tr>
                        <tr>
                            <td>ARB36</td>
                            <td>Poda de árbol</td>
                            <td><button class="fl__table-btn-see">Ver</button></td>
                            <td>Fecha</td>
                            <td><button class="fl__table-button-status fl__table-button-status_success">Pendiente</button></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            {spinner ? <Spinner/> : null}
        </section>
    );
}

export default DashboardAdmin;