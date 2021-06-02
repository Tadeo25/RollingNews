import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { faFacebook, faInstagram, faAppStoreIos } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
    return (
        <div className='footer text-light py-3 text-center'>
            <Container >
                <Row>
                    <Col >
                        <h3 className="mb-4 mt-2">Encontranos en:</h3>
                        <div className="App" style={{ fontSize: "5em" }}>
                            <a href="http://facebook.com/ " className="text-light mr-2 ">
                                <FontAwesomeIcon icon={faFacebook} /></a> {" "}
                            <a href="http://instagram.com/ " className="text-light mr-2 "> <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </Col>
                    <Col >
                        <h3 className="mb-4 mt-2">Unite: </h3>
                        <div className="App" style={{ fontSize: "5em" }}>
                            <a href="https://www.apple.com/shop" className="text-light mr-2"> <FontAwesomeIcon icon={faAppStoreIos} /> </a>
                        </div>
                    </Col>


                </Row>
                <p className="lead text-center mt-3">&copy; Copyright 2021 RollingNews. Todos los derechos reservados.</p>

            </Container>
        </div>
    );
};

export default Footer;