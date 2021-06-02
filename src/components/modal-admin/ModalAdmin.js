import React, { useContext } from 'react';
import { PrincipalContext } from '../../context';


const ModalAdmin = () => {
    const {dataModalAdmin, setModalAdmin} = useContext(PrincipalContext);

    const tittleTable = [
        {title: "Nombre",id:"name"},
        {title: "Fecha de Registro", id:"date"},
        {title: "Placa Grabada", id: "placa"},
        {title: "Tipo", id: "type"},
        {title: "Raíz", id: "root"},
        {title: "Tronco", id: "tronco"},
        {title: "Rama", id: "branch"},
        {title: "Hojas", id: "leaf"},
        {title: "Flores", id: "flowers"},
        {title: "Tamaño", id: "size"},
        {title: "Edad", id: "age"},
        {title: "Ubicación", id: "ubication"},
        {title: "Estado", id: "estado"},
        {title: "Referencias", id: "referenceUbication"},
        {title: "Imagenes", id: "images"},
        {title: "Especie", id: "especie"},
        {title: "Dictaminación", id: "dictaminacion"},
        {title: "Status", id: "status"}
    ]

    const closeTableAdmin = () => {
        const opacity_body = document.querySelector(".dashboard");
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