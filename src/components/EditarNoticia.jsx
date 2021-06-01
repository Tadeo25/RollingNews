import React,{useState, useEffect, useRef} from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import {useParams,withRouter} from 'react-router-dom';
import Swal from "sweetalert2";
import {campoRequerido} from './common/helpers'

const EditarNoticia = (props) => {
  const[noticia,setNoticia]=useState({});
  const URL = process.env.REACT_APP_API_URL
  const {_id} = useParams();
  const tituloNoticiaRef=useRef("");
  const descripcionNoticiaRef=useRef("");
  const cuerpoNoticiaRef=useRef("");
  const[categoria,setCategoria] = useState("");
  const [error,setError]= useState(false);

  useEffect(()=>{
    consultarNoticia();

  },[]);
  const consultarNoticia = async()=>{
    try{
      const respuesta = await fetch(URL+'/'+_id)
      console.log(respuesta);
      if(respuesta.status=== 200){
        const noticiaEncontrada = await respuesta.json();
        setNoticia(noticiaEncontrada)
      }
    }catch(error){
      console.log(error)
      //mostrar un cartel al usuario
    }
  }


  const leerCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();

    let _categoria = (categoria === '')?(noticia.categoria):(categoria);
    console.log(tituloNoticiaRef.current);
    console.log(tituloNoticiaRef.current.value);

    if(campoRequerido(tituloNoticiaRef.current.value) && 
    (descripcionNoticiaRef.current.value)&& 
    (cuerpoNoticiaRef.current.value) && 
    campoRequerido(_categoria)){
   setError(false);
   try {
     const noticiaModificada={
       tituloNoticia: tituloNoticiaRef.current.value,
       descripcionNoticia: descripcionNoticiaRef.current.value,
       cuerpoNoticia: cuerpoNoticiaRef.current.value,
       categoria: _categoria
     };

    const respuesta =await fetch(`${URL}/${noticia._id}`,{
method: "PUT",
headers:{"content-Type":"application/json"},
body:JSON.stringify(noticiaModificada)
    });
    console.log(respuesta);
    if(respuesta.status === 200){
      Swal.fire(
        'Noticia Editada',
        'La noticia fue Modificada correctamente',
        'success'
      )
      props.consultarAPI();
      props.history.push('/lista');
    }

   } catch (error) {
     console.log(error)
     
   }
       }else{
setError(true);
  }
};

  return (
    <Container>
      <Form className="my-5"onSubmit={handleSubmit} >
        <h1 className="my-4 fuentetitulos text-dark text-center">Editar Noticia</h1>
        <Form.Group>
          <Form.Label>Titulo de la noticia</Form.Label>
          <Form.Control
            className="my-3"
            type="text"
            placeholder="Titulo noticia"
            defaultValue={noticia.tituloNoticia}
            ref={tituloNoticiaRef}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            className="my-3"
            type="text"
            placeholder="Descripcion"
            defaultValue={noticia.descripcionNoticia}
            ref={descripcionNoticiaRef}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            className="my-3"
            type="text"
            placeholder="Cuerpo Noticia"
            defaultValue={noticia.cuerpoNoticia}
            ref={cuerpoNoticiaRef}
          ></Form.Control>
        </Form.Group>
        <h3 className="text-center mt-4">Categoria</h3>
        <div className="text-center my-4">
          <Form.Check
            inline
            type="radio"
            label="Deportes"
            name="categoria"
            value="deportes"
            onChange={leerCategoria}
            defaultChecked={noticia.categoria && noticia.categoria ==='deportes'}
          ></Form.Check>
          <Form.Check
            inline
            type="radio"
            label="Politica"
            name="categoria"
            value="politica"
            onChange={leerCategoria}
            defaultChecked={noticia.categoria && noticia.categoria ==='politica'}
          ></Form.Check>
          <Form.Check
            inline
            type="radio"
            label="Economia"
            name="categoria"
            value="economia"
            onChange={leerCategoria}
            defaultChecked={noticia.categoria && noticia.categoria ==='economia'}
          ></Form.Check>
          <Form.Check
            inline
            type="radio"
            label="Culturales"
            name="categoria"
            value="culturales"
            onChange={leerCategoria}
            defaultChecked={noticia.categoria && noticia.categoria ==='culturales'}
          ></Form.Check>
          <Form.Check
            inline
            type="radio"
            label="Sociales"
            name="categoria"
            value="sociales"
            onChange={leerCategoria}
            defaultChecked={noticia.categoria && noticia.categoria ==='sociales'}
          ></Form.Check>
          <Form.Check
            inline
            type="radio"
            label="Policiales"
            name="categoria"
            value="policiales"
            onChange={leerCategoria}
            defaultChecked={noticia.categoria && noticia.categoria ==='policiales'}
          ></Form.Check>
          <Form.Check
            inline
            type="radio"
            label="Cientifica"
            name="categoria"
            value="cientifica"
            onChange={leerCategoria}
            defaultChecked={noticia.categoria && noticia.categoria ==='cientifica'}
          ></Form.Check>
        </div>
        <Button variant="primary" type="submit">
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

export default withRouter(EditarNoticia);
