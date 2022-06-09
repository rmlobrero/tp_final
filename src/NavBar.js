import "./NavBar.css";
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

function NavBar() {
  return (
    <>
      <Navbar bg="primaty" expand="lg">
        <Container>

          <Navbar.Brand href="/">React-Biker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="contact">Contacto</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="/producto/all">All</NavDropdown.Item>
                <NavDropdown.Item href="/producto/1">Mountain Bike</NavDropdown.Item>
                <NavDropdown.Item href="/producto/2">BMX</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar