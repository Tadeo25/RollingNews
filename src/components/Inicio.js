import React from 'react';
import {Container, Carousel, Card, Row, Col } from 'react-bootstrap'
// import Carousel from 'react-bootstrap/Carousel'
// import Card from 'react-bootstrap/Card'
 import destacado1 from './img/vacunas_principal.jpg'
 import destacado2 from './img/estacionDeServicio_principal.jpg'
 import '../App.css';

 
const Inicio = () => {
    return (
        <Container>
                        <Row>
                        <Col xs={12} md={2}>
                            <h3>titulo</h3>
                            </Col>
            <Col xs={12} md={6}>
            <Card className='shadow'>
                <Card.Body>
    <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={destacado1}
      alt="Primera Noticia"
    />
     <Card.Title className='bg-primary text-light'>Titulo Noticia 1 </Card.Title>
    
    
        </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={destacado2}
      alt="Second slide"
    />    
  </Carousel.Item>
 </Carousel>
   
  </Card.Body>
</Card>

    </Col>
    <Col xs={12} md={4}>
        <h3>titulo3</h3>
                            </Col>

            </Row>
          
        </Container>
    );
};

export default Inicio;