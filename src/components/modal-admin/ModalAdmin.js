import React from 'react';


const ModalAdmin = () => {
    return(
        <section className="modal-admin">
            <div className="table-wrapper-admin">
                <table className="fl__table-admin modal-admin__table">
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Fecha de Registro</th>
                        <th>Placa Grabada</th>
                        <th>Tipo</th>
                        <th>Raíz</th>
                        <th>Tronco</th>
                        <th>Rama</th>
                        <th>Hojas</th>
                        <th>Flores</th>
                        <th>Tamaño</th>
                        <th>Edad</th>
                        <th>Ubicación</th>
                        <th>Estado</th>
                        <th>Referencias</th>
                        <th>Imagenes</th>
                        <th>Especie</th>
                        <th>Dictaminación</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>ARB33</td>
                        <td>2021-05-19</td>
                        <td>ARB1234</td>
                        <td>PINO</td>
                        <td>SE PUEDE VER</td>
                        <td>30CM</td>
                        <td>CALIDAS</td>
                        <td>SECAS</td>
                        <td>COLOR MORADO</td>
                        <td>10M DE ALTURA</td>
                        <td>22 AÑOS</td>
                        <td>CALLE NUMERO 12</td>
                        <td>MALO</td>
                        <td>CERCA DE ALGO</td>
                        <td>VER IMAGENES</td>
                        <td>NOSE</td>
                        <td>PENDIENTE</td>
                        <td>VER EN EL MAPA</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </section>
    );
}


export default ModalAdmin;