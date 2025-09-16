import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";

function MenuHamburguesa() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menú</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#inicio">Inicio</Nav.Link>
                <Nav.Link href="#contacto">Contacto</Nav.Link>
                <Nav.Link href="#contacto">Tienda</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <h1 className="titulo">Bodega La Regalona</h1>
    </>
  );
}

export default MenuHamburguesa;
