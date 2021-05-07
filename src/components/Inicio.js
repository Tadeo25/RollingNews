import React from "react";
import { Container, Carousel, Card, Row, Col } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel'
// import Card from 'react-bootstrap/Card'
import destacado1 from "./img/vacunas_principal.jpg";
import destacado2 from "./img/estacionDeServicio_principal.jpg";
import "../App.css";

const Inicio = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={1}>
          <h3>titulo</h3>
        </Col>
        <Col xs={12} md={7}>
          <Card className="shadow rounded">
            <Card.Header>
              <img
                className="d-block w-100 rounded"
                src={destacado1}
                alt="Imagen noticia principal"
              />
            </Card.Header>
            <Card.Body className="bg-primary text-light">
              <Card.Title>Titulo Noticia 1 </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <h3>titulo3</h3>
        </Col> 
        
        <Col xs={12} md={4}>
        <Card className="shadow mt-4">
            <Card.Header>
              <img
                className="d-block w-100"
                src={destacado1}
                alt="Imagen noticia principal"
              />
            </Card.Header>
            <Card.Body className="bg-primary text-light">
              <Card.Title>Titulo Noticia 1 </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
        <Card className="shadow mt-4">
            <Card.Header>
              <img
                className="d-block w-100"
                src={destacado1}
                alt="Imagen noticia principal"
              />
            </Card.Header>
            <Card.Body className="bgcard text-light">
              <Card.Title>Titulo Noticia 1 </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
        <Card className="shadow mt-4">
            <Card.Header>
              <img
                className="d-block w-100"
                src={destacado1}
                alt="Imagen noticia principal"
              />
            </Card.Header>
            <Card.Body className="bg-primary text-light">
              <Card.Title>Titulo Noticia 1 </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
    </Container>
  );
};

export default Inicio;
