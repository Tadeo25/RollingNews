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
  const URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const res = await fetch(URL);
    const resultado = await res.json();
    console.log(res);
    console.log(resultado[28]);
    setNoticia0(resultado[28]);
    setNoticia1(resultado[29]);
    setNoticia2(resultado[30]);
    setNoticia3(resultado[31]);
  };

  return (
    <>
      <div className="container d-flex justify-content-around">
        <div className="d-flex flex-column">
          <Card style={{ width: "18rem" }} className="m-3">
            <Card.Img variant="top" src={noticia0.imagen} />
            <Card.Body>
              <Card.Title>{noticia0.tituloNoticia}</Card.Title>
              <Card.Text>{noticia0.descripcionNoticia}</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="m-3">
            <Card.Img variant="top" src={noticia1.imagen} />
            <Card.Body>
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
          <Card style={{ width: "18rem" }} className="m-3">
            <Card.Img variant="top" src={noticia2.imagen} />
            <Card.Body>
              <Card.Title>{noticia2.tituloNoticia}</Card.Title>
              <Card.Text>{noticia2.descripcionNoticia}</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="m-3">
            <Card.Img variant="top" src={noticia3.imagen} />
            <Card.Body>
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
            <Card style={{ width: "18rem" }} className="m-3">
              <Card.Img
                variant="top"
                src="https://productoraudiovisualbarcelona.com/wp-content/uploads/2018/02/fotografia-eventos-exposiciones-785x510.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "18rem" }} className="m-3">
              <Card.Img
                variant="top"
                src="https://productoraudiovisualbarcelona.com/wp-content/uploads/2018/02/fotografia-eventos-exposiciones-785x510.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "18rem" }} className="m-3">
              <Card.Img
                variant="top"
                src="https://productoraudiovisualbarcelona.com/wp-content/uploads/2018/02/fotografia-eventos-exposiciones-785x510.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "18rem" }} className="m-3">
              <Card.Img
                variant="top"
                src="https://productoraudiovisualbarcelona.com/wp-content/uploads/2018/02/fotografia-eventos-exposiciones-785x510.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "18rem" }} className="m-3">
              <Card.Img
                variant="top"
                src="https://productoraudiovisualbarcelona.com/wp-content/uploads/2018/02/fotografia-eventos-exposiciones-785x510.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "18rem" }} className="m-3">
              <Card.Img
                variant="top"
                src="https://productoraudiovisualbarcelona.com/wp-content/uploads/2018/02/fotografia-eventos-exposiciones-785x510.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </>
  );
}
