import React from "react";
import Card from "react-bootstrap/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import publicidad2 from "../img/publicidad3.gif";
import { useState, useEffect } from "react";

export default function SeccionNoticias() {
  const [noticia0, setNoticia0] = useState({});
  const [noticia1, setNoticia1] = useState({});
  const [noticia2, setNoticia2] = useState({});
  const [noticia3, setNoticia3] = useState({});
  const [noticia4, setNoticia4] = useState({});
  const [noticia5, setNoticia5] = useState({});
  const [noticia6, setNoticia6] = useState({});
  const [noticia7, setNoticia7] = useState({});
  const URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const res = await fetch(URL);
    const resultado = await res.json();
    console.log(res);
    console.log(resultado[24]);
    setNoticia0(resultado[24]);
    setNoticia1(resultado[25]);
    setNoticia2(resultado[26]);
    setNoticia3(resultado[27]);
    setNoticia4(resultado[52]);
    setNoticia5(resultado[53]);
    setNoticia6(resultado[54]);
    setNoticia7(resultado[55]);
  };

  return (
    <>
      <div className="container d-flex justify-content-around">
        <div className="d-flex flex-column">
          <Card style={{ width: "18rem" }} className="m-3 stylecards">
            <Card.Img variant="top" src={noticia0.imagen} className="rounded border-bottom imgcards" />
            <Card.Body className="shadow bgcard colortext">
              <Card.Title>{noticia0.tituloNoticia}</Card.Title>
              <Card.Text>{noticia0.descripcionNoticia}</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="m-3 stylecards">
            <Card.Img variant="top" src={noticia1.imagen} className="rounded border-bottom imgcards" />
            <Card.Body className="shadow bgcard colortext">
              <Card.Title>{noticia1.tituloNoticia}</Card.Title>
              <Card.Text>{noticia1.descripcionNoticia}</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <img
          className="tex-center my-3 d-none d-lg-block w-25"
          src={publicidad2}
          alt="gif publicidad google"
        />

        <div className="d-flex flex-column">
          <Card style={{ width: "18rem" }} className="m-3 stylecards">
            <Card.Img variant="top" src={noticia2.imagen} className="rounded border-bottom imgcards"/>
            <Card.Body className="shadow bgcard colortext">
              <Card.Title>{noticia2.tituloNoticia}</Card.Title>
              <Card.Text>{noticia2.descripcionNoticia}</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="m-3 stylecards">
            <Card.Img variant="top" src={noticia3.imagen} className="rounded border-bottom imgcards"/>
            <Card.Body className="shadow bgcard colortext">
              <Card.Title>{noticia3.tituloNoticia}</Card.Title>
              <Card.Text>{noticia3.descripcionNoticia}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Swiper */}

      <div>
        <h1 className="ml-5">Ultimas noticias</h1>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="p-5 m-5 bg-warning"
        >
          <SwiperSlide>
            <Card style={{ width: "18rem" }} className="m-3 styleswipper">
              <Card.Img
                variant="top"
                src={noticia4.imagen}
              />
              <Card.Body>
                <Card.Title>{noticia4.tituloNoticia}</Card.Title>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "18rem" }} className="m-3 styleswipper">
              <Card.Img
                variant="top"
                src={noticia5.imagen}
              />
              <Card.Body>
                <Card.Title>{noticia5.tituloNoticia}</Card.Title>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "18rem" }} className="m-3 styleswipper">
              <Card.Img
                variant="top"
                src={noticia6.imagen}
              />
              <Card.Body>
                <Card.Title>{noticia6.tituloNoticia}</Card.Title>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "18rem" }} className="m-3 styleswipper">
              <Card.Img
                variant="top"
                src={noticia7.imagen}
              />
              <Card.Body>
                <Card.Title>{noticia7.tituloNoticia}</Card.Title>
              </Card.Body>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
