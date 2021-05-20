import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  validarNyA,
  validarEmail,
  validarCyD,
  validarTyCP,
  validarCheck,
} from "./common/helpers";

const Suscripcion = (props) => {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [mail, setMail] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState(0);
  const [cPostal, setCPostal] = useState(0);
  const [checkbox, setCheckbox] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("evento submit");
    if (
      validarNyA(nombres) &&
      validarNyA(apellidos) &&
      validarEmail(mail) &&
      validarCyD(ciudad) &&
      validarCyD(direccion) &&
      validarTyCP(telefono) &&
      validarTyCP(cPostal) &&
      validarCheck(checkbox) === true
    ) {
      console.log("mail correcto");
    } else {
      console.log("mail inválido");
    }
  };
  return (
    <div className="fondo">
      <Container>
        <Row>
          <Col xs={12} md={1}></Col>
          <Col xs={12} md={9}>
            <h1 className="fuentetitulos text-dark text-center my-4">
              Suscribite a RollingNews
            </h1>
            <Form className="my-4" onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Nombre/s</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Juan"
                    required
                    onChange={(e) => setNombres(e.target.value)}
                    value={nombres}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="apellido">
                  <Form.Label>Apellido/s</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Perez"
                    requiredb
                    onChange={(e) => setApellidos(e.target.value)}
                    value={apellidos}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="su dirección de mail"
                    required
                    onChange={(e) => setMail(e.target.value)}
                    value={mail}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="ciudad">
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control
                    required
                    onChange={(e) => setCiudad(e.target.value)}
                    value={ciudad}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group>
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  placeholder="Gral Paz 576"
                  required
                  onChange={(e) => setDireccion(e.target.value)}
                  value={direccion}
                />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    type="number"
                    required
                    onChange={(e) => setTelefono(e.target.value)}
                    value={telefono}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="codigoPostal">
                  <Form.Label>Código Postal</Form.Label>
                  <Form.Control
                    type="number"
                    required
                    onChange={(e) => setCPostal(e.target.value)}
                    value={cPostal}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group id="checkbox">
                <Form.Check
                  type="checkbox"
                  label="Acepto los términos y condiciones de RollingNews"
                  required
                  onChange={(e) => setCheckbox(e.target.checked)}
                  value={checkbox}
                />
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
