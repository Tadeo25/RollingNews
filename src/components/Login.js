import React from 'react';
import {Form,Button,Container,Row,Col} from 'react-bootstrap';

const Login = () => {
  return ( 
    <Container>
      <Row>
        <Col md={{span:6,offset:3}}>
          <Form className='my-4'>
            <h1 className='text-center fuentetitulos text-dark mb-4'>Iniciar Sesion</h1>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su Email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña"/>
            </Form.Group>
            <Form.Text className=""> Olvido su contraseña?</Form.Text>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out"/>
            </Form.Group>
            <Button variant="primary" type="submit">Ingresar</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;