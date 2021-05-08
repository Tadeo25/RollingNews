import React from "react";
import { Container, Carousel, Card, Row, Col, Button } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel'
// import Card from 'react-bootstrap/Card'
import destacado1 from "./img/vacunas_principal.jpg";
import destacado2 from "./img/estacionDeServicio_principal.jpg";
import "../App.css";

const Inicio = () => {
  return (

<section className='fondo'>
                 <Container>
           
             <Row>
        <Col xs={12} md={1}>
                 </Col>
        <Col xs={12} md={7}>
          
            <Card.Img className="rounded efectocard"src={destacado2}
                alt="Imagen noticia principal"/>
              
            
            <Card.Body className="shadow bgcard colortext rounded border">
              <Card.Title className="font-weight-bold fuentetitulos"><h4>Titulo Noticia 1</h4> </Card.Title>
            </Card.Body>
          
        </Col>
        <Col xs={12} md={4}>
          <h3>ACA VA LA PUBLICIDAD</h3>
        </Col> 
        
        <Col xs={12} md={4}>
        <Card.Img className="rounded border-bottom mt-4"src={destacado1}
                alt="Imagen noticia principal"/>
              
            
            <Card.Body className="shadow bgcard colortext rounded border">
              <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
            </Card.Body>
                 </Col>

        <Col xs={12} md={4}>
        <Card.Img className="rounded border-bottom mt-4"src={destacado1}
                alt="Imagen noticia principal"/>
              
            
            <Card.Body className="shadow bgcard colortext rounded border">
              <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
            </Card.Body>
        </Col>

        <Col xs={12} md={4}>
        <Card.Img className="rounded border-bottom mt-4"src={destacado1}
                alt="Imagen noticia principal"/>
              
            
            <Card.Body className="shadow bgcard colortext rounded border">
              <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
            </Card.Body>
        </Col>
        
      </Row>
      <hr></hr>
      <h1 className='fuentetitulos'>Deportes</h1>
        <hr></hr>
        <Row>
    <Col xs={12} md={6}>
      
    <Row className='no-gutters'>
  <Col md={6} lg={6}  >
  <Card.Img variant="top" src={destacado2} />
  </Col>
  <Col>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
      </Card.Body>
  </Col>
  </Row>
        </Col>

        <Col xs={12} md={6}>
      
    <Row className='no-gutters'>
  <Col md={6} lg={6}  >
  <Card.Img variant="top" src={destacado2} />
  </Col>
  <Col>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
      </Card.Body>
  </Col>
  </Row>
        </Col>
    </Row>
    </Container>
    
    </section>
  );
};

export default Inicio;
