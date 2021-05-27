import React from "react";
import Card from "react-bootstrap/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

export default function SeccionNoticias() {
  return (
    <>
      <div className="container d-flex justify-content-around">
        <div className="d-flex flex-column">
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
        </div>
        <div className="d-flex flex-column">
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
        </div>
      </div>
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