import React from 'react';


const ModalAdmin = () => {
    const tittleTable = [
        "Nombre",
        "Fecha de Registro",
        "Placa Grabada",
        "Tipo",
        "Raíz",
        "Tronco",
        "Rama",
        "Hojas",
        "Flores",
        "Tamaño",
        "Edad",
        "Ubicación",
        "Estado",
        "Referencias",
        "Imagenes",
        "Especie",
        "Dictaminación",
        "Status"
    ]

    return(
        <section className="modal-admin">
            <div className="table-wrapper-info">
                <div className="btn-close">
                    <button>Cerrar Tabla<i className="fas fa-times"></i></button>
                </div>

                <table className="fl__table-info">
                    <thead>
                        {tittleTable.map((title, index) => (
                            <tr key={index}>
                                <th>{title}</th>
                                <td>Ejemplo de los datos que iran en esta tabla</td> 
                            </tr>
                        ))}
                    </thead>
                </table>
            </div>
        </section>
    );
}


export default ModalAdmin;