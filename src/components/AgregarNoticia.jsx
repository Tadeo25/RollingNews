import React, { useState } from "react";
import { Container, Form, Button, Alert} from "react-bootstrap";
import Swal from 'sweetalert2';

const AgregarNoticia = (props) => {
    //titulo, descripcion, cuerpo de la nota,
    const [tituloNoticia, setTituloNoticia] = useState("");
    const [descripcionNoticia, setDescripcionNoticia] = useState("");
    const [cuerpoNoticia, setCuerpoNoticia] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagen, setImagen] = useState("");
    const [error, setError] = useState(false);

    const URL = process.env.REACT_APP_API_URL+"/noticias";

    const leerCategoria = (e) => {
        setCategoria(e.target.value);
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if (
            tituloNoticia.trim() !== "" &&
            descripcionNoticia !== "" &&
            cuerpoNoticia !== "" &&
            categoria !== "" &&
            imagen !== ""
        ){
            setError(false);

            const noticia ={
                tituloNoticia,
                descripcionNoticia,
                cuerpoNoticia,
                categoria,
                imagen,

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
              <h1 className="jumbotron text-center my-5 bg-success fuentetitulos">Agregar nueva noticia</h1>
              <Form.Group>
                  <Form.Label><b>Titulo de la noticia</b></Form.Label>
                  <Form.Control
                      type="text"
                      placeholder="Titulo noticia"
                      required
                      onChange={(e) => setTituloNoticia(e.target.value)}
                  ></Form.Control>
              </Form.Group>
              <Form.Group>
              <Form.Label><b>Descripcion</b></Form.Label>
                  <Form.Control
                  type="text"
                  placeholder="Descripcion"
                  required
                  onChange={(e) => setDescripcionNoticia(e.target.value)}
                  ></Form.Control>
              </Form.Group>
              <Form.Group>
              <Form.Label><b>Cuerpo de la noticia</b></Form.Label>
                  <Form.Control
                  type="text" 
                  placeholder="Cuerpo Noticia"  
                  required               
                  onChange={(e) => setCuerpoNoticia(e.target.value)}
                  as="textarea" rows={3}
                  ></Form.Control>
              </Form.Group>
              <Form.Group>
              <Form.Label><b>Link para una imagen</b></Form.Label>
                  <Form.Control
                  type="text" 
                  placeholder="Link de imagen"  
                  required               
                  onChange={(e) => setImagen(e.target.value)}
                  ></Form.Control>
              </Form.Group>
              <h3 className="text-center mt-4">Categoria</h3>
              <div className="text-center my-4" required>
                  <Form.Check
                  inline
                  type="radio"
                  label="Deportes"
                  name="categoria"
                  value="deportes"
                  onChange={leerCategoria}
                  ></Form.Check>
                  <Form.Check
                  inline
                  type="radio"
                  label="Politica"
                  name="categoria"
                  value="politica"
                  onChange={leerCategoria}
                  ></Form.Check>
                  <Form.Check
                  inline
                  type="radio"
                  label="Economia"
                  name="categoria"
                  value="economia"
                  onChange={leerCategoria}
                  ></Form.Check>
                  <Form.Check
                  inline
                  type="radio"
                  label="Culturales"
                  name="categoria"
                  value="culturales"
                  onChange={leerCategoria}
                  ></Form.Check>
                  <Form.Check
                  inline
                  type="radio"
                  label="Sociales"
                  name="categoria"
                  value="sociales"
                  onChange={leerCategoria}
                  ></Form.Check>
                  <Form.Check
                  inline
                  type="radio"
                  label="Policiales"
                  name="categoria"
                  value="policiales"
                  onChange={leerCategoria}
                  ></Form.Check>
                  <Form.Check
                  inline
                  type="radio"
                  label="Cientifica"
                  name="categoria"
                  value="cientifica"
                  onChange={leerCategoria}
                  ></Form.Check>
              </div>
              <Button variant="outline-info" type="submit" className="w-100">
                   <b> Guardar </b>
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