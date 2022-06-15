import React from 'react'
import PropTypes from "prop-types";

import './cards.css';

//le paso las propiedades de cada tarjeta
function Card({ imageSource, title, text, url }) {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="overflow">
                {/* le pasamos la imagen de cada card */}
                <img src={imageSource} alt="a wallpaper" className="card-img-top" />
            </div>
            <div className="card-body text-light">
                {/* titulo de cada card */}
                <h4 className="card-title">{title}</h4>
                {/* verifico que si no le asigno texto a mi card me ponga por defecto */}
                <p className="card-text text-secondary">
                    {text
                        ? text
                        : "Programacion Avanzada II - Primer Parcial"}
                </p>
                <a
                    // si no existe la url 
                    href={url ? url : "No existe URL!"}
                    // se abre una pestaña nueva
                    target="_blank" 
                    className="btn btn-outline-secondary border-0"
                    rel="noreferrer"
                >
                    LINK {title}
                </a>
            </div>
        </div>
    );
}

//propiedades requeridas
Card.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    url: PropTypes.string,
    imageSource: PropTypes.string
};
export default Card;