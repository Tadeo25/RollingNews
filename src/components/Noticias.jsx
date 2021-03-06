import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Noticias(props) {
  const eliminarNoticia = (codigo) => {
    Swal.fire({
      title: "¿Esta seguro de eliminar el producto?",
      text: "No puedes recuperar un producto que fue eliminado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log(codigo);
        //Agregrar solicitud deleted
        try {
          const URL = process.env.REACT_APP_API_URL + "/noticias/" + codigo;
          const response = await fetch(URL, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });

          console.log(response);
          if (response.status === 200) {
            Swal.fire(
              "Producto eliminado",
              "El producto seleccionado fue correctamente eliminado",
              "success"
            );
            props.consultarAPI();
          }
        } catch (error) {
          console.log(error);
          Swal.fire("Ocurrio un error", "Intentenlo nuevamente", "warning");
        }
      }
    });
  };
  return (
    <>
      <ListGroup.Item className="d-flex justify-content-between">
        <p className="d-flex flex-column">
        <b>{props.objectNoticia.tituloNoticia}</b>
          <b className="span-style">{props.objectNoticia.categoria}</b>
        </p>
        <div>
          <Link
            className="btn btn-outline-warning mr-3"
            to={`/editarnoticia/${props.objectNoticia._id}`}
          >
            <FontAwesomeIcon icon={faEdit} />
          </Link>

          <Button
            variant="outline-danger"
            onClick={() => eliminarNoticia(props.objectNoticia._id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </div>
      </ListGroup.Item>
    </>
  );
}
