import React from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import Logo4 from "../img/Logo4.gif";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navegacion = () => {
  return (
    <div>
      <Navbar expand="lg" variant="dark">
        <Navbar.Brand href="/">
          <Image src={Logo4} fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink exact={true} to="/" className="nav-link">
              Inicio
            </NavLink>
            <NavLink exact={true} to="/Seccion" className="nav-link">
              Actualidad
            </NavLink>
            <NavLink exact={true} to="espectaculos" className="nav-link">
              Espectaculos
            </NavLink>
            <NavLink exact={true} to="tecnologia" className="nav-link">
              Tecnologia
            </NavLink>
            <NavLink exact={true} to="deportes" className="nav-link">
              Deportes
            </NavLink>
            <NavDropdown title="Mas Noticias" id="basic-nav-dropdown">
              <NavLink exact={true} to="economia" className="dropdown-item">
                Economía
              </NavLink>
              <NavLink exact={true} to="politica" className="dropdown-item">
                Política
              </NavLink>
              <NavLink exact={true} to="salud" className="dropdown-item">
                Salud
              </NavLink>
              <NavLink exact={true} to="fotografia" className="dropdown-item">
                Fotografía
              </NavLink>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavLink exact={true} to="login" className="nav-link">
              Login
            </NavLink>
            <NavLink exact={true} to="suscripcion" className="nav-link">
              Suscripción <FontAwesomeIcon icon={faUser} />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navegacion;
