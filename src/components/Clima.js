import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Clima = (props) => {
  return (
    <Container>
        <Row>
            <Col xs={12} md={1}>
                </Col>
                <Col xs={12} md={7} className="text-right">
                              <img
        src={`http://openweathermap.org/img/w/${props.icono}.png`}
        alt="icono clima"
      />   
                </Col>
                      
            <Col xs={12} md={4} className="text-right">


            <h4>San Miguel de Tucumán</h4>
      <h3>{props.temperatura} ºC</h3>
      <h5>S.T: {props.termica} ºC</h5>
      <h5>Húmedad: {props.humedad}%</h5>
            </Col>
        </Row>     
    </Container>
  );
};

export default Clima;
