import React from 'react';
import {Form,Button, Card, Container} from 'react-bootstrap';

const Login = () => {
    return ( 
      <Container className='my-5 '>
      <Card className='justify-content-center d-flex align-items-center'>
        <Form className='Form my-5'>
          <h3 className='text-center mb-3'>Iniciar Sesion</h3>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Ingrese su Email" />
  </Form.Group>
 
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Contraseña</Form.Label>
    <Form.Control type="password" placeholder="Contraseña"/>
  </Form.Group>
  <Form.Text className=""> Olvido su contraseña?
    </Form.Text>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Ingresar
  </Button>
</Form>
</Card>
</Container>
    );
};

export default Login;