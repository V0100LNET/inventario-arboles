import React, { useContext } from 'react';
import { PrincipalContext } from '../../context';


const ModalImages = () => {
    let opacity_body = document.querySelector(".dashboard");
    const {setModalImages, saveImages} = useContext(PrincipalContext);

    const toggle = () => {
        setModalImages(false);
        opacity_body.classList.remove("opacity");
    }

    return(
        <section className="container-modal-images">
            <h1 className="__tittle">Imagénes del árbol seleccionado</h1>
            <div className="form-group multi-preview">
                {saveImages && saveImages.map((index, url) => (
                    <img key={index} src={url} alt="..."/>
                ))}
            </div>
            <button 
                onClick={toggle}
                className="__btn-see-image"
            >Cerrar<i className="fas fa-times"></i></button>
        </section>
    )
}


export default ModalImages;