import "./Banner.css";
import { Carousel } from 'react-bootstrap'

export default function Banner() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1570679334008-c97544c8695b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Nuestras Bicicletas</h3>
                        <p>Viaja con amigo y familia, disfruta cada momento</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Mountain Life</h3>
                        <p>Vive experiencias inolvidables con bicicletas de la mejor calidad</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Bicicleta de Ruta</h3>
                        <p>La mejores bicicletas para los largos viajes</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

