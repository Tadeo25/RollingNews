import React from "react";
import { Row, Col } from "react-bootstrap";

export default function DetalleNoticias() {

return (
  <div>
  <Row>
    <Col xs={12} md={10}>
    <div className="m-5 p-2">
  <h5>Seccion</h5>
  <h1>Titulo Noticia</h1>
  <p>
      lorem loremlorem ipsum dolor sit amet, consectetur lorem, sed diam lorem sed lorem
  </p>
  <img 
  src="https://www.viewsonic.com/skin/frontend/smartwave/viewsonic/images/category-pages/projector-home/4k_projectors/Ultra_HD.jpg" 
  alt="" className="img-fluid" 
  />
   <p>
      lorem loremlorem ipsum dolor sit amet, consectetur lorem, sed diam lorem sed lorem
  </p>
  </div>
  </Col>
  <Col xs={12} md={2}>
  </Col>
  </Row>
  
  
</div>
  );
}