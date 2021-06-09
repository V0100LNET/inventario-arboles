import React from 'react';

import Header from './Header';


const Home = () => {

    return(
        <section className="home">
            <Header/>

            <div className="home__content">
                <section>
                    <h1 className="home__content_title">CDMX Trámites</h1>
                    <p>
                        Plataforma para el registro de árboles
                    </p>
                    <div className="home__content_buttons">
                        <button className="btn-principal get-service">Solcitar Servicio</button>
                        <button className="btn-principal get-near-zone">Zonas Cercanas</button>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Home;