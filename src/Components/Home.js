import { React, useState } from "react";
import "../App.css";
import { Button, Card, CardGroup } from "react-bootstrap";
import { ContactMe } from "./ContactMe";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBed, faBathtub, faSquare } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


library.add(faBed, faBathtub, faSquare);



export default function Home(props) {

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);




  const propsCards = props.properties
    .filter((property) => property.rating === 5)
    .map((property) => {
      return (
        <div key={property.id} className="card">
          <img src="/heroImg2.jpg" className="card-img" alt="home banner" />
          <div className="card-text">
            <h4>{property.title}</h4>
            <p> {property.address}</p>
            <p className="card-price">${property.price}</p>
            <p>{property.description}</p>
            <p className="card-icons">
              {property.bedroom} Beds
              <span>
                <FontAwesomeIcon icon="bed" />
              </span>
              <span className="card-icons-line"></span>
              {property.bathroom} Baths
              <span>
                <FontAwesomeIcon icon="bathtub" />
              </span>
              <span className="card-icons-line"></span>
              {property.sqrft} Sqrft
              <span>
                <FontAwesomeIcon icon="square" />
              </span>
            </p>
          </div>
          <div className="hover-text">Click for more details</div>
        </div>
      );
    });

  const testimonials = props.testimonies.map((testimony) => {
    return (
      <div key={testimony.id}>
        <img src="/agent-clipart.png" />
        <div className="myCarousel">
          <h3>{testimony.name}</h3>
          <h4>...</h4>
          <p>{testimony.quote}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="home">
      <header className="hero-image">
        <div className="hero-text">
          <h1>Let’s find you the perfect home.</h1>
          <br />
          <Button href="/contact" variant="outline-danger" size="lg"><b>Find Now </b></Button>

        </div>

        <CardGroup style={{ alignItems: "end", height: "45%", maxWidth: "50%", position: "relative", left: "25%", top: "55%" }} >

          <Card style={{ borderRadius: "30px", marginRight: "1%", alignItems: "center", textAlign: "center", position: "relative" }} bg="light" >
            <Card.Img variant="top" src="buy_img.png" style={{ maxWidth: "100px" }} />
            <Card.Body className="bg-light">
              <Card.Title className="fs-2  mb-3 mt-3">Help me <b style={{ color: "red" }}>buy</b> my home</Card.Title>
              <Button className="mt-3" onClick={handleShow} variant="primary" size="lg"><b>Buy Home</b></Button>
            </Card.Body>
          </Card>
          <Card style={{ borderRadius: "30px", marginLeft: "1%", alignItems: "center", textAlign: "center", position: "relative" }} bg="light" >
            <Card.Img variant="top" src="buy_img.png" style={{ maxWidth: "100px" }} />
            <Card.Body className="bg-light">
              <Card.Title className="fs-2  mb-3 mt-3">Help me <b style={{ color: "red" }}>sell</b> my home</Card.Title>
              <Button className="mt-3" onClick={handleShow} variant="primary" size="lg"><b>Buy Home</b></Button>
            </Card.Body>
          </Card>

        </CardGroup>

        <ContactMe show={show} handleClose={handleClose} handleShow={handleShow} /> : ""

      </header>
      <h1 className="home-title">Top Properties</h1>
      <div className="top-props">{propsCards}</div>
      <section className="testimonials">
        <h1 className="testimonials-title">Testimonials</h1>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={4100}
        >
          {testimonials}
        </Carousel>
      </section>
    </div >
  );
}
