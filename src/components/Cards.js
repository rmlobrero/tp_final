import React from "react";
import Card from "./Card";
import { Container, ListGroup } from 'react-bootstrap'


import image1 from '../assets/BATCH.webp'
import image2 from '../assets/NINER.avif'
import image3 from '../assets/VERDE.webp'
import image4 from '../assets/DK.webp'

const cards = [
    {
        id: 1,
        title: "Batch Bicycles 27.5 ",
        image: image1,
        precio: "$15.000",
        categoria: "Lifestyle Bike"
    },
    {
        id: 2,
        title: "Niner 2020 ",
        image: image2,
        precio: "$20.000",
        categoria: "Ruta"
    },
    {
        id: 3,
        title: "Verde Vario 650B ",
        image: image3,
        precio: "$25.000",
        categoria: "Street"
    },
    {
        id: 4,
        title: "DK Helio 21",
        image: image4,
        precio: "$21.000",
        categoria: "BMX"
    }
];

function Cards() {
    return (
        <Container>
            <ListGroup>
                <div className="container d-flex justify-content-center align-items-center h-100">
                    <div className="row">
                        {cards.map(({ title, image, precio, id, categoria }) => (
                            <div className="col-md-4" key={id}>
                                <Card imageSource={image} title={title} precio={precio} categoria={categoria} />
                            </div>
                        ))}
                    </div>
                </div>
            </ListGroup>
        </Container>
    );
}

export default Cards;