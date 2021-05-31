import React,{useState, useEffect} from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Swal from "sweetalert2";

const EditarNoticia = () => {
  const leerCategoria = (e) => {
    /*setCategoria.apply(e.target.value);*/
  };
  return (
    <Container>
      <Form className="my-5">
        <h1 className="my-4 fuentetitulos text-dark text-center">Editar Noticia</h1>
        <Form.Group>
          <Form.Label>Titulo de la noticia</Form.Label>
          <Form.Control
            className="my-3"
            type="text"
            placeholder="Titulo noticia"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            className="my-3"
            type="text"
            placeholder="Descripcion"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            className="my-3"
            type="text"
            placeholder="Cuerpo Noticia"
          ></Form.Control>
        </Form.Group>
        <h3 className="text-center mt-4">Categoria</h3>
        <div className="text-center my-4">
          <Form.Check
            inline
            Type="radio"
            label="Deportes"
            value="deportes"
            onChange={leerCategoria}
          ></Form.Check>
          <Form.Check
            inline
            Type="radio"
            label="Politica"
            value="politica"
            onChange={leerCategoria}
          ></Form.Check>
          <Form.Check
            inline
            Type="radio"
            label="Economia"
            value="economia"
            onChange={leerCategoria}
          ></Form.Check>
          <Form.Check
            inline
            Type="radio"
            label="Culturales"
            value="culturales"
            onChange={leerCategoria}
          ></Form.Check>
          <Form.Check
            inline
            Type="radio"
            label="Sociales"
            value="sociales"
            onChange={leerCategoria}
          ></Form.Check>
          <Form.Check
            inline
            Type="radio"
            label="Policiales"
            value="policiales"
            onChange={leerCategoria}
          ></Form.Check>
          <Form.Check
            inline
            Type="radio"
            label="Cientifica"
            value="cientifica"
            onChange={leerCategoria}
          ></Form.Check>
        </div>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
        {/*error === true ? (
          <Alert variant="danger" className="my-5">
            Faltan cargar datos obligatorios
          </Alert>
        ) : null*/}
      </Form>
    </Container>
  );
};

export default EditarNoticia;
