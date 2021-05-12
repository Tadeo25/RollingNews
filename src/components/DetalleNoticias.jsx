import React from "react";
import Navbar from "react-bootstrap/Navbar";
import {Nav, NavDropdown} from "react-bootstrap";

export default function DetalleNoticias() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="m-5 p-2 d-flex flex-column">
      <h5>Seccion</h5>
      <h1>Titulo Noticia</h1>
      <p>
          lorem loremlorem ipsum dolor sit amet, consectetur lorem, sed diam lorem sed lorem
      </p>
      <img 
      src="https://www.viewsonic.com/skin/frontend/smartwave/viewsonic/images/category-pages/projector-home/4k_projectors/Ultra_HD.jpg" 
      alt="" 
      />
       <p>
          lorem loremlorem ipsum dolor sit amet, consectetur lorem, sed diam lorem sed lorem
      </p>
      </div>
    </div>
  );
}
