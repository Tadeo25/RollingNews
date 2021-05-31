import React from "react";
import { Button, ListGroup } from "react-bootstrap";

export default function Noticias(props) {
  return (
    <>
      <ListGroup.Item className="d-flex justify-content-between">
        <p>{props.objectNoticia.tituloNoticia}</p>
        <div>
          <Button variant="warning" className="mr-3">Editar</Button>
          <Button variant="danger">Eliminar</Button>
        </div>
      </ListGroup.Item>
    </>
  );
}
