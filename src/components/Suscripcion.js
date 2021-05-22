import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  validarNyA,
  validarEmail,
  validarCyD,
  validarTyCP,
  validarCheck,
} from "./common/helpers";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

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
      emailjs
        .sendForm(
          "service_zrczdis",
          "template_xcs5oks",
          e.target,
          "user_Hq5XxTd58WfUgtuXVURIr"
        )
        .then(
          (result) => {
            Swal.fire({
              title: "¡Gracias!",
              text: "Suscripción Realizada Correctamente",
              icon: "success",
              confirmButtonColor: "#007bff",
              confirmButtonText: "Entendido!",
            });
            console.log(result.status);
            if (result.status === 200) {
              setNombres("");
              setApellidos("");
              setMail("");
              setCiudad("");
              setDireccion("");
              setTelefono(0);
              setCPostal(0);
              setCheckbox(false);
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
      console.log("mail correcto");
    } else {
      console.log("mail inválido");
      Swal.fire({
        title: "Error",
        text: "Debe completar correctamente el formulario",
        icon: "error",
        confirmButtonColor: "#FF0040",
        confirmButtonText: "Aceptar",
      });
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
                    name="from_name"
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
                    name="from_surname"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="juanperez@gmail.com"
                    required
                    onChange={(e) => setMail(e.target.value)}
                    value={mail}
                    name="from_email"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="ciudad">
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control
                  type="text"
                  placeholder="S.M. de Tucumán"
                    required
                    onChange={(e) => setCiudad(e.target.value)}
                    value={ciudad}
                    name="from_city"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group>
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                type="text"
                  placeholder="Gral Paz 576"
                  required
                  onChange={(e) => setDireccion(e.target.value)}
                  value={direccion}
                  name="from_direction"
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
                    name="from_phone"
                  />
                  <Form.Text className="text-muted">
                    Sólo Números. Ej: 381123123
                  </Form.Text>
                </Form.Group>

                <Form.Group as={Col} controlId="codigoPostal">
                  <Form.Label>Código Postal</Form.Label>
                  <Form.Control
                    type="number"
                    required
                    onChange={(e) => setCPostal(e.target.value)}
                    value={cPostal}
                    name="from_zip"
                  />
                  <Form.Text className="text-muted">
                    Sólo Números. Ej: 4000
                  </Form.Text>
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

              <Button bsClass="colorbtn" className="mb-5" type="submit">
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
