import React from "react";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function DetalleNoticias() {
  const [noticia0, setNoticia0] = useState({});
  const URL = process.env.REACT_APP_API_URL+'/noticias';
  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const res = await fetch(URL);
    const resultado = await res.json();
    console.log(res);
    console.log(resultado[14]);
    setNoticia0(resultado[14]);
  };
return (
  <div className="d-flex justify-content center">
  <Row>
    <Col xs={12} md={10}>
    <div className="m-5 p-2">
  <h4>{noticia0.categoria}</h4>
  <h1>{noticia0.tituloNoticia}</h1>
  <p>
      <b>{noticia0.descripcionNoticia}</b>
  </p>
  <img 
  src={noticia0.imagen}
  alt="" className="img-fluid imgdetalle" 
  />
   <p className="my-3">
      {noticia0.cuerpoNoticia}
  </p>
  </div>
  </Col>
  <Col xs={12} md={2}>
  </Col>
  </Row>
  
  
</div>
  );
}