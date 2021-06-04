import React, { useContext } from 'react';
import { PrincipalContext } from '../../context';
import { tittleTable } from '../constants';


const ModalAdmin = () => {
    let opacity_body = document.querySelector(".dashboard");
    const {dataModalAdmin, setModalAdmin} = useContext(PrincipalContext);


    const closeTableAdmin = () => {
        opacity_body.classList.remove("opacity");
        setModalAdmin(false);
    }

    return(
        <section className="modal-admin">
            <div className="table-wrapper-info">
                <div className="btn-close">
                    <button onClick={closeTableAdmin}>Cerrar Tabla<i className="fas fa-times"></i></button>
                </div>

                <table className="fl__table-info">
                    <thead>
                    {tittleTable && tittleTable.map((title, index) => (
                        <tr key={index}>
                            <th>{title.title}</th>
                            <td>{dataModalAdmin[title.id]}</td> 
                        </tr>
                    ))}
                    </thead>
                </table>
            </div>
        </section>
    );
}


export default ModalAdmin;