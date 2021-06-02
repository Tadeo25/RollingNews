import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import destacado1 from "./img/vacunas_principal.jpg";
import destacado2 from "./img/estacionDeServicio_principal.jpg";
import banner1 from "./img/coronavirus.jpg";
import banner2 from "./img/coronavirus2.gif";
import banner3 from "./img/coronavirus3.gif";
import espectaculoscine from "./img/espectaculos_cine.jpg";
import espectaculostv from "./img/espectaculos_tv.jpg";
import espectaculosmusica from "./img/espectaculos_musica.jpg";
import espectaculosteatro from "./img/espectaculos_teatro.jpg";
import publicidad1 from "./img/publicidad1.gif";
import publicidad2 from "./img/publicidad2.gif";
import "../App.css";
import { useState, useEffect } from "react";

const Inicio = () => {
  //Noticias principales
  const [noticia0, setNoticia0] = useState({});
  const [noticia1, setNoticia1] = useState({});
  const [noticia2, setNoticia2] = useState({});
  const [noticia3, setNoticia3] = useState({});
  //Noticias de deportes
  const [noticia4, setNoticia4] = useState({});
  const [noticia5, setNoticia5] = useState({});
  //Noticias de tecnología
  const [noticia6, setNoticia6] = useState({});
  const [noticia7, setNoticia7] = useState({});
  const [noticia8, setNoticia8] = useState({});
  //Noticias de Espectaculos
  const [noticia9, setNoticia9] = useState({});
  const [noticia10, setNoticia10] = useState({});
  const [noticia11, setNoticia11] = useState({});
  const [noticia12, setNoticia12] = useState({});
  const URL = process.env.REACT_APP_API_URL+'/noticias';
  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const res = await fetch(URL);
    const resultado = await res.json();
    console.log(res);
    console.log(resultado[0]);
    setNoticia0(resultado[0]);
    setNoticia1(resultado[24]);
    setNoticia2(resultado[11]);
    setNoticia3(resultado[19]);
    setNoticia4(resultado[14]);
    setNoticia5(resultado[13]);
    setNoticia6(resultado[8]);
    setNoticia7(resultado[9]);
    setNoticia8(resultado[10]);
    setNoticia9(resultado[4]);
    setNoticia10(resultado[5]);
    setNoticia11(resultado[6]);
    setNoticia12(resultado[7]);
  };
  return (
    <section className="fondo">
      <Container>
        <Row>
          <Col xs={12} md={1}></Col>
          <Col xs={12} md={11}>
            <img
              className="tex-center my-3 d-none d-lg-block"
              src={publicidad1}
              alt="gif publicidad google"
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={1}></Col>
          <Col xs={12} md={7}>
            <Card.Img
              className="rounded mt-3"
              src={noticia0.imagen}
              alt="Imagen noticia principal"
            />

            <Card.Body className="shadow bgcard colortext rounded border">
              <Card.Title className="font-weight-bold fuentetitulos">
                <h4>{noticia0.tituloNoticia}</h4>{" "}
              </Card.Title>
            </Card.Body>
          </Col>
          <Col xs={12} md={4}>
            <img
              className="text-center d-block mx-auto d-none d-md-block w-75 my-3"
              src={publicidad2}
              alt="gif publicidad leer libros"
            />
          </Col>

          <Col xs={12} md={4}>
            <Card.Img
              className="rounded border-bottom mt-4"
              src={noticia1.imagen}
              alt="imagen sección principal noticia 2"
            />

            <Card.Body className="shadow bgcard colortext rounded border">
              <Card.Text>
                {noticia1.tituloNoticia}
              </Card.Text>
            </Card.Body>
          </Col>

          <Col xs={12} md={4}>
            <Card.Img
              className="rounded border-bottom mt-4"
              src={noticia2.imagen}
              alt="imagen sección principal noticia 3"
            />

            <Card.Body className="shadow bgcard colortext rounded border">
              <Card.Text>
                {noticia2.tituloNoticia}
              </Card.Text>
            </Card.Body>
          </Col>

          <Col xs={12} md={4}>
            <Card.Img
              className="rounded border-bottom mt-4"
              src={noticia3.imagen}
              alt="imagen sección principal noticia 4"
            />
            <Card.Body className="shadow bgcard colortext rounded border">
              <Card.Text>
                {noticia3.tituloNoticia}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <hr></hr>
        <h1 className="fuentetitulos bgtitulos">Deportes</h1>
        <hr></hr>
        <Row>
          <Col xs={12} md={6}>
            <Row className="no-gutters">
              <Col md={6} lg={6}>
                <Card.Img variant="top" src={noticia4.imagen} />
              </Col>
              <Col>
                <Card.Body className="bgcard">
                  <Card.Title>{noticia4.tituloNoticia}</Card.Title>
                </Card.Body>
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={6}>
            <Row className="no-gutters">
              <Col md={6} lg={6}>
                <Card.Img variant="top" src={noticia5.imagen} />
              </Col>
              <Col>
                <Card.Body className="bgcard">
                  <Card.Title>{noticia5.tituloNoticia}</Card.Title>
                </Card.Body>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="my-3">
          <Col xs={12} md={4}>
            <img className="w-100" src={banner1} alt="banner 1 coronavirus" />
          </Col>
          <Col xs={12} md={4}>
            <img className="w-100" src={banner2} alt="banner 2 coronavirus" />
          </Col>
          <Col xs={12} md={4}>
            <img className="w-100" src={banner3} alt="banner 3 coronavirus" />
          </Col>
        </Row>
        <hr></hr>
        <h1 className="fuentetitulos bgtitulos">Tecnología</h1>
        <hr></hr>
        <Row>
          <Col xs={12} md={7}>
            <Card.Img
              className="rounded"
              src={noticia6.imagen}
              alt="Imagen principal sección tecnología"
            />

            <Card.Body className="shadow bgcard rounded border">
              <Card.Text>
                {noticia6.tituloNoticia}
              </Card.Text>
            </Card.Body>
          </Col>
          <Col xs={12} md={5}>
            <Row>
              <Col xs={12} md={10} lg={8}>
                <Card.Img
                  className="rounded altura"
                  src={noticia7.imagen}
                  alt="Imagen 2 sección tecnología"
                />

                <Card.Body className="shadow bgcard rounded border">
                  <Card.Text>
                    {noticia7.tituloNoticia}
                  </Card.Text>
                </Card.Body>
              </Col>
              <Col xs={12} md={2} lg={4}></Col>
              <Col xs={12} md={10} lg={8} className="my-2">
                <Card.Img
                  className="rounded altura"
                  src={noticia8.imagen}
                  alt="Imagen 3 sección tecnología"
                />

                <Card.Body className="shadow bgcard rounded border">
                  <Card.Text>
                    {noticia8.tituloNoticia}
                  </Card.Text>
                </Card.Body>
              </Col>
              <Col xs={12} md={2} lg={4}></Col>
            </Row>
          </Col>
        </Row>
        <hr></hr>
        <h1 className="fuentetitulos bgtitulos">Espectaculos</h1>
        <hr></hr>
        <Row>
          <Col xs={12} md={6}>
            <Card className="bg-dark text-white">
              <Card.Img src={noticia12.imagen} alt="imagen sección cine" className="imgcardsEspectaculo" />
              <Card.ImgOverlay>
                <Card.Title className="fuentetitulos textocards">
                  {noticia12.tituloNoticia}
                </Card.Title>
              </Card.ImgOverlay>
            </Card>

            <Card className="bg-dark text-white my-3">
              <Card.Img src={noticia10.imagen} alt="imagen sección teatro" className="imgcardsEspectaculo"/>
              <Card.ImgOverlay>
                <Card.Title className="fuentetitulos textocards">
                  {noticia10.tituloNoticia}
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="bg-dark text-white">
              <Card.Img src={noticia9.imagen} alt="imagen sección música" className="imgcardsEspectaculo"/>
              <Card.ImgOverlay>
                <Card.Title className="fuentetitulos textocards">
                  {noticia9.tituloNoticia}
                </Card.Title>
              </Card.ImgOverlay>
            </Card>

            <Card className="bg-dark text-white my-3">
              <Card.Img src={noticia11.imagen} alt="imagen sección tv" className="imgcardsEspectaculo"/>
              <Card.ImgOverlay>
                <Card.Title className="fuentetitulos textocards">{noticia11.tituloNoticia}</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
