import React from "react";
import PropTypes from "prop-types";

import "./card.css";

function Card({ imageSource, title, precio, categoria }) {
    return (
        <div className="card text-center bg-light animate__animated animate__fadeInUp">
            <div className="overflow">
                <img src={imageSource} alt="a wallpaper" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h2 className="card-title">{title}</h2>
                <p className="card-text text-secondary">
                    Tipo: {categoria}
                </p>
                <h4> Precio: {precio}</h4>
                <a href="/" className="btn btn-outline-secondary border-0"
                    rel="noreferrer">Comprar</a>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    precio: PropTypes.string,
    categoria: PropTypes.string,
    imageSource: PropTypes.string
};

export default Card;