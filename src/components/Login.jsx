import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import Swal from "sweetalert2";
import  {Link, withRouter} from 'react-router-dom';

const Login = (props) => {
  const [mail, setMail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(false);
  const  URL = process.env.REACT_APP_API_URL

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mail.trim() !== "" && contrasena.trim() !== "") {
      const login = {
        mail,
        contrasena,
      };
      try {
        const cabecera = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(login),
        };
        const response = await fetch(`${URL}/login`, cabecera);
        console.log(response);
        console.log(response.body);
        if (response.ok) {
        localStorage.setItem('auth','true')
        window.location.replace('/lista');
        }else {
              setError(true);
        
        };

      } catch (error) {
        Swal.fire(
          "Ocurrio un error",
          "Intentelo nuevamente en unos minutos",
          "error"
        );
      }
    } 
    
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form className="my-4" onSubmit={handleSubmit}>
            <h1 className="text-center fuentetitulos text-dark mb-4">
              {" "}
              Iniciar Sesion{" "}
            </h1>
            <Form.Group controlId="formBasicEmail">
              <Form.Label> Email </Form.Label>
              <Form.Control
                type="email"
                placeholder="juanperez@gmail.com"
                required
                onChange={(e) => setMail(e.target.value)}
                value={mail}
                name="mail"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label> Contraseña </Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                required
                name="contrasena"
                onChange={(e) => setContrasena(e.target.value)}/>
            </Form.Group>
            <Form.Group>
            <Link to='/recuperarcontrasena' className="my-3"> Olvido su contraseña ? </Link>
            </Form.Group>
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
            {error === true ? (
          <Alert variant="danger" className="my-5">
            El usuario no es correcto
          </Alert>
        ) : null}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(Login);
