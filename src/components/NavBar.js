import "./NavBar.css";
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>

      <Navbar bg="light" expand="lg">
        <Container >
          <Link className="Link" to="/"><img src={"logo.svg"} alt="logo" /></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Link className="Link" to="/producto">Productos</Link>
            <Link className="Link" to="/contacto">Contacto</Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

