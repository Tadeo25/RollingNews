import React, { Fragment } from "react";
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

const Inicio = () => {
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
              src={destacado2}
              alt="Imagen noticia principal"
            />

            <Card.Body className="shadow bgcard colortext rounded border">
              <Card.Title className="font-weight-bold fuentetitulos">
                <h4>Titulo Noticia 1</h4>{" "}
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
              src={destacado1}
              alt="imagen sección principal noticia 2"
            />

            <Card.Body className="shadow bgcard colortext rounded border">
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Col>

          <Col xs={12} md={4}>
            <Card.Img
              className="rounded border-bottom mt-4"
              src={destacado1}
              alt="imagen sección principal noticia 3"
            />

            <Card.Body className="shadow bgcard colortext rounded border">
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Col>

          <Col xs={12} md={4}>
            <Card.Img
              className="rounded border-bottom mt-4"
              src={destacado1}
              alt="imagen sección principal noticia 4"
            />

            <Card.Body className="shadow bgcard colortext rounded border">
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
                <Card.Img variant="top" src={destacado2} />
              </Col>
              <Col>
                <Card.Body className="bgcard">
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={6}>
            <Row className="no-gutters">
              <Col md={6} lg={6}>
                <Card.Img variant="top" src={destacado2} />
              </Col>
              <Col>
                <Card.Body className="bgcard">
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
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
              src={destacado2}
              alt="Imagen principal sección tecnología"
            />

            <Card.Body className="shadow bgcard rounded border">
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Col>
          <Col xs={12} md={5}>
            <Row>
              <Col xs={12} md={10} lg={8}>
                <Card.Img
                  className="rounded altura"
                  src={destacado2}
                  alt="Imagen 2 sección tecnología"
                />

                <Card.Body className="shadow bgcard rounded border">
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Col>
              <Col xs={12} md={2} lg={4}></Col>
              <Col xs={12} md={10} lg={8} className="my-2">
                <Card.Img
                  className="rounded altura"
                  src={destacado2}
                  alt="Imagen 3 sección tecnología"
                />

                <Card.Body className="shadow bgcard rounded border">
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
              <Card.Img src={espectaculoscine} alt="imagen sección cine" />
              <Card.ImgOverlay>
                <Card.Title className="fuentetitulos textocards">
                  CINE
                </Card.Title>
              </Card.ImgOverlay>
            </Card>

            <Card className="bg-dark text-white my-3">
              <Card.Img src={espectaculosteatro} alt="imagen sección teatro" />
              <Card.ImgOverlay>
                <Card.Title className="fuentetitulos textocards">
                  TEATRO
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="bg-dark text-white">
              <Card.Img src={espectaculosmusica} alt="imagen sección música" />
              <Card.ImgOverlay>
                <Card.Title className="fuentetitulos textocards">
                  MUSICA
                </Card.Title>
              </Card.ImgOverlay>
            </Card>

            <Card className="bg-dark text-white my-3">
              <Card.Img src={espectaculostv} alt="imagen sección tv" />
              <Card.ImgOverlay>
                <Card.Title className="fuentetitulos textocards">TV</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
