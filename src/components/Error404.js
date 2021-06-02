import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import error404 from "./img/404.png";
import "../App.css";

const Error404 = () => {
  return (
    <div className="fondo text-center">
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <img src={error404} alt="Imagen de error 404" className="img-fluid" />
            <div>
              <a href="/">
                <Button className="my-5" variant="outline-primary">
                  Volver al Inicio
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Error404;
