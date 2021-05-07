import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

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
    </>
  );
}
