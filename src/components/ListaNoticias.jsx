import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Noticias from "./Noticias";


export default function ListaNoticias(props) {
  return (
    <Container>
      <h1 className="jumbotron text-center bg-info my-4 fuentetitulos">Lista de Noticias</h1>
      <Link to='/agregarNoticia'className='btn btn-outline-primary'><b>Agregar Noticia</b> </Link>
      <ListGroup className="my-3">
        {
        props.noticias.map( (objectNoticia)=> <Noticias objectNoticia={objectNoticia} key={objectNoticia._id} consultarAPI={props.consultarAPI}/>)
        }
      </ListGroup>
    </Container>
  );
}
