import React, { useState } from "react";
import { Container, Form, Button, Alert} from "react-bootstrap";
import Swal from 'sweetalert2';

const AgregarNoticia = (props) => {
    //titulo, descripcion, cuerpo de la nota,
    const [tituloNoticia, setTituloNoticia] = useState("");
    const [descripcionNoticia, setDescripcionNoticia] = useState("");
    const [cuerpoNoticia, setCuerpoNoticia] = useState("");
    const [categoria, setCategoria] = useState("");
    const [error, setError] = useState(false);

    const URL = process.env.REACT_APP_API_URL;

    const leerCategoria = (e) => {
        setCategoria.apply(e.target.value);
    };
    const handleSubmit = async (e) =>{
        e.preventDefault();

        if (
            tituloNoticia.trim() !== "" &&
            descripcionNoticia !== "" &&
            cuerpoNoticia !== "" &&
            categoria !== ""
        ){
            setError(false);

            const noticia ={
                tituloNoticia,
                descripcionNoticia,
                cuerpoNoticia,
                categoria,

            };
            try {
                const cabecera = {
                    method: "POST",
                    headers : {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(noticia),
                };
                const response = await fetch (URL, cabecera);
                if(response.status === 201) {
                    Swal.fire(
                        'Noticia agregada',
                        'La noticia se cargo correctamente',
                        'success'
                      )
                      e.target.reset();
                      props.consultarAPI();
                }
            } catch (error){
                Swal.fire(
                    'Ocurrio un error',
                    'Intentelo nuevamente en unos minutos',
                    'error'
                  )
            }
        } else{
            setError(true);
        }
    };
    return (
      <Container>
          <Form className="my-5" onSubmit={handleSubmit}>
              <h1 className="my-5">Agregar nueva noticia</h1>
              <Form.Group>
                  <Form.Label>Titulo de la noticia</Form.Label>
                  <Form.Control
                  className='my-3'
                      type="text"
                      placeholder="Titulo noticia"
                      onChange={(e) => setTituloNoticia(e.target.value)}
                  ></Form.Control>
              </Form.Group>
              <Form.Group>
                  <Form.Control
                  className='my-3'
                  type="text"
                  placeholder="Descripcion"
                  onChange={(e) => setDescripcionNoticia(e.target.value)}
                  ></Form.Control>
              </Form.Group>
              <Form.Group>
                  <Form.Control
                  className='my-3'
                  type="text" 
                  placeholder="Cuerpo Noticia"                 
                  onChange={(e) => setCuerpoNoticia(e.target.value)}
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
              <Button variant="danger" type="submit" className="w-100">
          Guardar
        </Button>
        {error === true ? (
          <Alert variant="danger" className="my-5">
            Faltan cargar datos obligatorios
          </Alert>
        ) : null}
          </Form>
      </Container>
    );
};

export default AgregarNoticia;