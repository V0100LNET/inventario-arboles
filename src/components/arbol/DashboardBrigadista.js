import React from 'react';
import Header from '../layout/Header';


const DashboardBrigadista = () => {
    const onFileUpload = (e) => {
        
    }
    return(
        <section className="dashboard">
            <Header/>

            <h1>Registro de árboles</h1>
            <section className="container-form">
                <form>
                    <div className="only-flex">
                        <div className="container-form__left">
                            <label>Nombre</label>
                            <input placeholder="Nombre" type="text" className="input-principal" />

                            <label>Fecha</label>
                            <input placeholder="Nombre" type="date" className="input-principal" />

                            <label>Placa</label>
                            <input placeholder="Fecha" type="text" className="input-principal" />

                            <label>Tipo</label>
                            <input placeholder="Nombre" type="text" className="input-principal" />

                            <label>Raíz</label>
                            <input placeholder="Raíz" type="text" className="input-principal" />

                            <label>Tronco</label>
                            <input placeholder="Tronco" type="text" className="input-principal" />

                            <label>Rama</label>
                            <input placeholder="Rama" type="text" className="input-principal" />

                            <label>Hojas</label>
                            <input placeholder="Hojas" type="text" className="input-principal" />
                        </div>
                    
                        <div className="container-form__right">
                            <label>Flores</label>
                            <input placeholder="Flores" type="text" className="input-principal" />

                            <label>Tamaño</label>
                            <input placeholder="Tamaño" type="text" className="input-principal" />

                            <label>Edad</label>
                            <input placeholder="Edad" type="text" className="input-principal" />

                            <label>Ubicación</label>
                            <input placeholder="Ubicación" type="text" className="input-principal" />

                            <label>Estado</label>
                            <input placeholder="Estado" type="text" className="input-principal" />

                            <label>Referencia de Ubicación</label>
                            <input placeholder="Referencia" type="text" className="input-principal" />

                            <label>Imagénes</label>
                            <input type="file" className="input-principal" onChange={onFileUpload}/>

                            <label>Especie</label>
                            <input placeholder="Especie" type="text" className="input-principal" />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn-principal btn"
                    >Enviar</button>
                </form>
            </section>
        </section>
    );
}

export default DashboardBrigadista;