import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";


const Suscripcion = () => {
    return (
        
        <div className="fondo">
            <Container>
                <Row>
<Col xs={12} md={1}></Col>
<Col xs={12} md={9}>
<h1 className="fuentetitulos text-dark text-center my-4">Suscribite a RollingNews</h1>
<Form className="my-4">
<Form.Row>
    <Form.Group as={Col} controlId="nombre">
      <Form.Label>Nombre/s</Form.Label>
      <Form.Control type="text" placeholder="Juan" required />
    </Form.Group>

    <Form.Group as={Col} controlId="apellido">
      <Form.Label>Apellido/s</Form.Label>
      <Form.Control type="text" placeholder="Perez" required />
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="email">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="su dirección de mail" required />
    </Form.Group>

    <Form.Group as={Col} controlId="ciudad">
      <Form.Label>Ciudad</Form.Label>
      <Form.Control required/>
    </Form.Group>
  </Form.Row>
<Form.Group controlId="direccion">
      <Form.Label>Dirección</Form.Label>
      <Form.Control placeholder="Gral Paz 576" required />
    </Form.Group>
  <Form.Row>
        <Form.Group as={Col} controlId="telefono">
      <Form.Label>Teléfono</Form.Label>
      <Form.Control type="number" required />
    </Form.Group>

    <Form.Group as={Col} controlId="codigoPostal">
      <Form.Label>Código Postal</Form.Label>
      <Form.Control type="number" required/>
    </Form.Group>
  </Form.Row>

  <Form.Group id="checkbox">
    <Form.Check type="checkbox" label="Acepto los términos y condiciones de RollingNews" required />
  </Form.Group>

  <Button className="mb-5" variant="primary" type="submit">
    Suscribirme
  </Button>
</Form>
</Col>
                
 <Col xs={12} md={2}></Col>   
</Row>
<h2>aca va el footer</h2>
        </Container>

        </div>
        
    );
};

export default Suscripcion;